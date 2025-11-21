# 🚀 SHOPIFY DEPLOYMENT GUIDE

## Step-by-Step Instructions to Upload Your Theme

---

## OPTION 1: Deploy via Shopify Admin (Recommended)

### **Step 1: Prepare Theme Files**

1. Open PowerShell in Windows
2. Navigate to project directory:
   ```powershell
   cd "d:\projects\ishori\shopify"
   ```

3. Create ZIP file:
   ```powershell
   Compress-Archive -Path "Ishori\*" -DestinationPath "ishori-theme.zip" -Force
   ```

4. ZIP file created at: `d:\projects\ishori\shopify\ishori-theme.zip`

---

### **Step 2: Upload to Shopify**

1. **Login to Shopify Admin**
   - Go to: `https://your-store.myshopify.com/admin`

2. **Navigate to Themes**
   - Click: **Online Store** (left sidebar)
   - Click: **Themes**

3. **Upload Theme**
   - Scroll to "Theme library" section
   - Click: **Add theme** button
   - Click: **Upload zip file**
   - Select: `ishori-theme.zip`
   - Wait for upload (1-3 minutes)

4. **Theme Uploaded** ✅
   - You'll see "Ishori" in your theme library

---

### **Step 3: Preview & Test**

1. **Click "Customize"** on the Ishori theme
   
2. **Test All Features:**
   - ✅ Add/remove sections
   - ✅ Edit text content
   - ✅ Change colors
   - ✅ Upload images
   - ✅ Preview on mobile/tablet/desktop

3. **Test on Store:**
   - Click "Preview" button (eye icon)
   - Opens store in new tab
   - Test product pages
   - Test cart functionality
   - Test wishlist buttons
   - Test search

---

### **Step 4: Publish Theme**

1. **When Ready:**
   - Go back to Themes page
   - Find "Ishori" theme
   - Click "Actions" → "Publish"
   - Confirm publication

2. **Theme is LIVE** 🎉

---

## OPTION 2: Deploy via Shopify CLI (Advanced)

### **Prerequisites:**

1. Install Shopify CLI:
   ```powershell
   npm install -g @shopify/cli @shopify/theme
   ```

2. Login to Shopify:
   ```powershell
   shopify login --store your-store.myshopify.com
   ```

---

### **Deploy Commands:**

1. **Navigate to theme directory:**
   ```powershell
   cd "d:\projects\ishori\shopify\Ishori"
   ```

2. **Push theme to Shopify:**
   ```powershell
   shopify theme push
   ```

3. **Or create new development theme:**
   ```powershell
   shopify theme dev
   ```

---

## 🎨 THEME CUSTOMIZATION GUIDE (For Admin)

### **How to Edit Sections:**

1. **Add Section:**
   - In theme editor, click "Add section"
   - Choose from available sections
   - Section appears on page

2. **Remove Section:**
   - Hover over section
   - Click "..." (three dots)
   - Click "Remove section"

3. **Reorder Sections:**
   - Click and drag section handle (six dots icon)
   - Drop in desired position

4. **Configure Section:**
   - Click on section to see settings panel
   - Edit settings
   - Changes apply instantly

---

### **How to Edit Theme Settings:**

1. **Click "Theme settings"** (in sidebar)

2. **Available Settings:**
   - **Colors:** Change color schemes (5 schemes available)
   - **Typography:** Change fonts, sizes, scaling
   - **Layout:** Page width, spacing
   - **Product Cards:** Style, borders, shadows
   - **Cart:** Drawer/page/notification type
   - **Social Media:** Add social links
   - **Logo:** Upload logo & favicon
   - **Animations:** Enable/disable animations

3. **Save Changes:**
   - Click "Save" in top-right
   - Changes apply to live site

---

## ⚠️ IMPORTANT: Before Publishing

### **Pre-Launch Checklist:**

- [ ] Test on mobile devices
- [ ] Test on tablet devices
- [ ] Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test all product pages
- [ ] Test collection pages
- [ ] Test cart functionality
- [ ] Test checkout process
- [ ] Test search functionality
- [ ] Test navigation menus
- [ ] Test wishlist functionality
- [ ] Verify images load correctly
- [ ] Verify forms work (contact, newsletter)
- [ ] Check spelling/grammar
- [ ] Verify prices display correctly
- [ ] Test payment methods
- [ ] Check mobile menu
- [ ] Verify footer links
- [ ] Test filtering on collections
- [ ] Check product variants

---

## 🔧 TROUBLESHOOTING

### **Issue: Theme Upload Failed**

**Solution:**
1. Check ZIP file size (should be < 50MB)
2. Ensure ZIP contains theme files at root level
3. Verify no hidden .git folders in ZIP
4. Try uploading again

---

### **Issue: Sections Not Appearing**

**Solution:**
1. Go to theme editor
2. Click "Add section"
3. If sections missing, check section files exist
4. Verify section schema is valid JSON

---

### **Issue: Images Not Loading**

**Solution:**
1. Re-upload images in theme editor
2. Check image URLs in settings
3. Verify images are < 20MB
4. Use supported formats (JPG, PNG, WebP)

---

### **Issue: Wishlist Not Working**

**Solution:**
1. Check if `wishlist.js` is loaded
2. Open browser console (F12)
3. Look for JavaScript errors
4. Verify localStorage is enabled in browser
5. Test in incognito/private mode

---

### **Issue: Cart Not Updating**

**Solution:**
1. Check browser console for errors
2. Verify cart settings in theme settings
3. Test with different products
4. Clear browser cache

---

### **Issue: Theme Editor Slow**

**Solution:**
1. Close unused browser tabs
2. Clear browser cache
3. Use Chrome for best performance
4. Close other programs

---

## 📞 SUPPORT CONTACTS

### **Shopify Support:**
- Help Center: https://help.shopify.com
- 24/7 Support: Via Shopify Admin
- Community: https://community.shopify.com

### **Theme Issues:**
- Check: FINALIZATION_REPORT.md
- Check: Browser console for errors
- Test: In different browsers

---

## 🎓 ADMIN TRAINING RESOURCES

### **Shopify Academy (Free):**
- https://academy.shopify.com
- Courses on theme customization
- Store management tutorials

### **Theme Documentation:**
- Shopify Theme Docs: https://shopify.dev/docs/themes
- Liquid reference: https://shopify.dev/docs/api/liquid

---

## 📋 ONGOING MAINTENANCE

### **Monthly Tasks:**

- [ ] Update product images
- [ ] Check broken links
- [ ] Review analytics
- [ ] Test checkout process
- [ ] Update promotional banners
- [ ] Check mobile experience

### **Quarterly Tasks:**

- [ ] Review theme performance
- [ ] Update product descriptions
- [ ] Optimize images
- [ ] Review customer feedback
- [ ] Test on new devices/browsers

---

## 🚨 EMERGENCY ROLLBACK

### **If Something Goes Wrong:**

1. **Revert to Previous Theme:**
   - Go to: Online Store → Themes
   - Find previous theme (automatically backed up)
   - Click: Actions → Publish
   - Your old theme is restored immediately

2. **Shopify keeps backups automatically**
   - Last 20 theme versions stored
   - Can restore any previous version

---

## ✅ POST-DEPLOYMENT CHECKLIST

After publishing theme:

- [ ] Verify homepage loads correctly
- [ ] Test add to cart on 5 products
- [ ] Complete a test order
- [ ] Test mobile navigation
- [ ] Verify contact form works
- [ ] Check all menu links
- [ ] Test search functionality
- [ ] Verify footer displays correctly
- [ ] Check social media links
- [ ] Test newsletter signup
- [ ] Monitor for 24 hours for issues
- [ ] Ask team to test on their devices

---

**Deployment Date:** _________________

**Deployed By:** _________________

**Theme Version:** Ishori v1.0

**Status:** ⬜ Testing | ⬜ Published | ⬜ Live

---

*Keep this guide for future reference when making theme updates or troubleshooting issues.*
