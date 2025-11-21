/**
 * Wishlist Management System
 * Handles add/remove products from wishlist using localStorage
 * Compatible with Shopify theme editor
 */

(function() {
  'use strict';

  const WISHLIST_KEY = 'ishori_wishlist';

  /**
   * Get wishlist from localStorage
   * @returns {Array} Array of product IDs
   */
  function getWishlist() {
    try {
      return JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]');
    } catch (e) {
      console.error('Error reading wishlist:', e);
      return [];
    }
  }

  /**
   * Save wishlist to localStorage
   * @param {Array} wishlist - Array of product IDs
   */
  function saveWishlist(wishlist) {
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
      // Trigger custom event for other components
      window.dispatchEvent(new CustomEvent('wishlist:updated', { 
        detail: { wishlist } 
      }));
    } catch (e) {
      console.error('Error saving wishlist:', e);
    }
  }

  /**
   * Check if product is in wishlist
   * @param {string} productId - Product ID
   * @returns {boolean}
   */
  function isInWishlist(productId) {
    const wishlist = getWishlist();
    return wishlist.includes(String(productId));
  }

  /**
   * Toggle product in wishlist
   * @param {string} productId - Product ID
   * @param {string} productHandle - Product handle (optional)
   * @param {HTMLElement} button - Button element that was clicked
   */
  window.toggleWishlist = function(productId, productHandle, button) {
    if (!productId) {
      console.error('Product ID is required');
      return;
    }

    productId = String(productId);
    let wishlist = getWishlist();
    const isAdded = wishlist.includes(productId);

    if (isAdded) {
      // Remove from wishlist
      wishlist = wishlist.filter(id => id !== productId);
    } else {
      // Add to wishlist
      wishlist.push(productId);
    }

    saveWishlist(wishlist);

    // Update button UI if provided
    if (button) {
      updateButtonState(button, !isAdded);
    }

    // Update all buttons for this product
    updateAllProductButtons(productId);

    // Optional: Show notification
    showNotification(isAdded ? 'Removed from wishlist' : 'Added to wishlist');
  };

  /**
   * Update button state (icon visibility)
   * @param {HTMLElement} button - Button element
   * @param {boolean} isInWishlist - Whether product is in wishlist
   */
  function updateButtonState(button, isInWishlist) {
    const iconEmpty = button.querySelector('.icon-empty');
    const iconFilled = button.querySelector('.icon-filled');

    if (iconEmpty && iconFilled) {
      if (isInWishlist) {
        iconEmpty.classList.add('hidden');
        iconFilled.classList.remove('hidden');
      } else {
        iconEmpty.classList.remove('hidden');
        iconFilled.classList.add('hidden');
      }
    }

    // Update aria-label
    button.setAttribute('aria-label', 
      isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'
    );
  }

  /**
   * Update all wishlist buttons for a specific product
   * @param {string} productId - Product ID
   */
  function updateAllProductButtons(productId) {
    const buttons = document.querySelectorAll(`[data-product-id="${productId}"]`);
    const inWishlist = isInWishlist(productId);
    
    buttons.forEach(button => {
      updateButtonState(button, inWishlist);
    });
  }

  /**
   * Show notification (simple implementation)
   * @param {string} message - Message to show
   */
  function showNotification(message) {
    // You can enhance this with a toast notification system
    console.log(message);
    
    // Optional: Create a simple toast
    const toast = document.createElement('div');
    toast.className = 'wishlist-toast';
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #000;
      color: #fff;
      padding: 12px 20px;
      border-radius: 4px;
      z-index: 9999;
      animation: fadeInOut 3s ease;
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  /**
   * Initialize wishlist buttons on page load
   */
  function initializeWishlistButtons() {
    const buttons = document.querySelectorAll('[data-product-id]');
    
    buttons.forEach(button => {
      const productId = button.getAttribute('data-product-id');
      if (productId) {
        updateButtonState(button, isInWishlist(productId));
      }
    });
  }

  /**
   * Get wishlist count
   * @returns {number}
   */
  window.getWishlistCount = function() {
    return getWishlist().length;
  };

  /**
   * Clear entire wishlist
   */
  window.clearWishlist = function() {
    if (confirm('Are you sure you want to clear your wishlist?')) {
      saveWishlist([]);
      updateAllProductButtons();
    }
  };

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWishlistButtons);
  } else {
    initializeWishlistButtons();
  }

  // Re-initialize when Shopify section is reloaded (theme editor)
  document.addEventListener('shopify:section:load', initializeWishlistButtons);

})();

// Add CSS for toast animation
if (!document.getElementById('wishlist-toast-styles')) {
  const style = document.createElement('style');
  style.id = 'wishlist-toast-styles';
  style.textContent = `
    @keyframes fadeInOut {
      0% { opacity: 0; transform: translateY(20px); }
      10% { opacity: 1; transform: translateY(0); }
      90% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(-20px); }
    }
    .hidden {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
}
