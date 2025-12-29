# Variant Box Selector – Shopify (Best-Selling Highlight)

A **modern variant selector UI** for Shopify product pages that displays variants as **clickable cards** instead of dropdowns.

Each variant card shows:

* Image
* Title
* Price
* Compare price & discount
* Sold-out state
  and automatically highlights a **Best Selling** variant.

Built with **clean separation of Liquid, CSS, and JavaScript** for production-ready themes.

---

## ✨ Features

* ✅ Works on **product pages**
* ✅ Replaces variant dropdown with **card-style selector**
* ✅ **Best Selling** ribbon

  * Uses variant metafield (`custom.best_selling = true`)
  * Deterministic fallback if metafield not set
* ✅ Safe image fallback (variant → product image)
* ✅ Displays price, compare price & discount
* ✅ Sold-out variant handling
* ✅ Updates variant **without breaking Add to Cart**
* ✅ Mobile horizontal scroll support
* ✅ No external libraries
* ✅ Shopify OS 2.0 compatible

---

## 📂 Files Included

```
sections/variant-box-selector.liquid
assets/variant-box-selector.css
assets/variant-box-selector.js
```

---

## 🚀 Installation Steps (Shopify)

Follow these steps carefully 👇

---

### **Step 1: Open Shopify Admin**

Go to
**Shopify Admin → Online Store → Themes**

---

### **Step 2: Edit Theme Code**

* Click the **three dots (⋮)** next to your active theme
* Select **Edit code**

---

### **Step 3: Create CSS File**

* Go to **Assets**
* Click **Add a new asset**
* Name the file:

```
variant-box-selector.css
```

* Paste the CSS code
* Click **Save**

---

### **Step 4: Create JavaScript File**

* Go to **Assets**
* Click **Add a new asset**
* Name the file:

```
variant-box-selector.js
```

* Paste the JavaScript code
* Click **Save**

---

### **Step 5: Create Section File**

* Go to **Sections**
* Click **Add a new section**
* Name the file:

```
variant-box-selector.liquid
```

* Paste the Liquid code
* Click **Save**

---

### **Step 6: Add Section to Product Page**

* Go to **Online Store → Customize**
* Open a **Product page**
* Click **Add section**
* Select **Variant Box Selector**
* Click **Save**

---

## ⚙️ How Best-Selling Variant Is Selected

Priority order:

1. Variant metafield

   ```
   custom.best_selling = true
   ```
2. If no metafield is found, a **deterministic fallback** is selected using product ID (never the first variant)

This ensures:

* One variant is always highlighted
* No randomness on page reload

---

## 🧩 How It Works

* Clicking a variant card:

  * Visually selects the card
  * Updates the hidden `input[name="id"]` inside product forms
* Native theme **Add to Cart buttons continue to work**
* No interference with theme styling or scripts

---

## 📱 Responsive Behavior

* **Desktop:** Grid layout
* **Mobile:** Horizontal scroll cards
* Touch-friendly & performance-optimized

---

## 🎨 Customization

You can easily customize:

* Card colors & borders
* Ribbon text
* Variant image size
* Mobile scroll behavior
* Discount display logic

All styles are located in:

```
assets/variant-box-selector.css
```

---

## 🛒 Best Use Cases

* Products with multiple variants
* Replacing default variant dropdowns
* Highlighting best-selling options
* CRO-focused product pages
* Premium UI/UX stores

---

## ⭐ Support

If this section helped you, consider **starring ⭐ the repository**.
Feel free to fork, reuse, and customize it for your Shopify projects.

---
