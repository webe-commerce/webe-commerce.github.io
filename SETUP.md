# 🚀 คู่มือการติดตั้งและ Deploy เว็บไซต์ Affiliate บน GitHub Pages

## ขั้นตอนที่ 1: เตรียม GitHub Account

1. สมัคร GitHub account ที่ [github.com](https://github.com) (ถ้ายังไม่มี)
2. Verify email address ของคุณ

## ขั้นตอนที่ 2: สร้าง Repository

### วิธีที่ 1: สร้าง Repository ใหม่

1. คลิก "New repository" ใน GitHub
2. ตั้งชื่อ repository:
   - **แบบที่ 1**: `[username].github.io` (URL จะเป็น `https://[username].github.io`)
   - **แบบที่ 2**: ชื่ออะไรก็ได้ เช่น `affiliate-website` (URL จะเป็น `https://[username].github.io/affiliate-website`)
3. เลือก "Public"
4. ไม่ต้องเลือก "Add README" (เราสร้างเองแล้ว)
5. คลิก "Create repository"

### วิธีที่ 2: ใช้ Repository นี้

1. คลิก "Use this template" หรือ "Fork"
2. ตั้งชื่อ repository ตามต้องการ
3. คลิก "Create repository"

## ขั้นตอนที่ 3: Upload ไฟล์

### วิธีที่ 1: Upload ผ่าน GitHub Web Interface

1. ไปที่ repository ของคุณ
2. คลิก "Add file" → "Upload files"
3. ลาก-วางไฟล์ทั้งหมด:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `.gitignore`
   - `LICENSE`
   - `robots.txt`
   - `sitemap.xml`
   - `manifest.json`
4. เขียน commit message เช่น "Initial commit"
5. คลิก "Commit changes"

### วิธีที่ 2: ใช้ Git Command Line

```bash
# 1. Clone repository
git clone https://github.com/[username]/[repository-name].git
cd [repository-name]

# 2. คัดลอกไฟล์ทั้งหมดเข้า folder

# 3. Add files
git add .

# 4. Commit
git commit -m "Initial commit: Add affiliate website"

# 5. Push
git push origin main
```

## ขั้นตอนที่ 4: เปิดใช้งาน GitHub Pages

1. ไปที่ repository settings
2. เลื่อนไปที่เมนู "Pages" (ด้านซ้าย)
3. ในส่วน "Source":
   - Branch: เลือก `main`
   - Folder: เลือก `/ (root)`
4. คลิก "Save"
5. รอสักครู่ (1-5 นาที)
6. เว็บจะพร้อมใช้งานที่ URL ที่แสดง

## ขั้นตอนที่ 5: ปรับแต่งเว็บไซต์

### เปลี่ยนข้อมูลเว็บไซต์

แก้ไขไฟล์ `index.html`:

```html
<!-- เปลี่ยน title -->
<title>ชื่อเว็บของคุณ</title>

<!-- เปลี่ยน logo และชื่อ -->
<a href="#" class="logo">
    <i class="fas fa-shopping-bag"></i>
    <span>ชื่อเว็บของคุณ</span>
</a>

<!-- เปลี่ยนข้อความ Hero -->
<h1 class="hero-title">ข้อความที่คุณต้องการ</h1>
```

### เพิ่มสินค้า

แก้ไขไฟล์ `script.js`:

```javascript
const productsData = [
    {
        id: 1,
        title: "ชื่อสินค้า",
        description: "รายละเอียด",
        price: "฿999",
        category: "electronics", // เลือกจาก: electronics, fashion, home, beauty, sports, books
        image: "https://images.unsplash.com/...", // URL รูปภาพ
        rating: 4.5,
        reviews: 100,
        badge: "ขายดี", // หรือ "แนะนำ" หรือ ""
        affiliateLink: "https://your-affiliate-link.com" // ⭐ สำคัญ: ใส่ลิงก์ affiliate ของคุณ
    },
    // เพิ่มสินค้าต่อไป...
];
```

### หา Affiliate Links

1. **Lazada Affiliate**:
   - สมัครที่ [Lazada Affiliate](https://affiliate.lazada.co.th)
   - Copy product link และแปลงเป็น affiliate link

2. **Shopee Affiliate**:
   - สมัครที่ [Shopee Affiliate](https://affiliate.shopee.co.th)
   - เลือกสินค้าและ generate link

3. **Amazon Associates**:
   - สมัครที่ [Amazon Associates](https://affiliate-program.amazon.com)

4. **อื่นๆ**:
   - JD Central
   - Pomelo
   - Makro

### เปลี่ยนสีธีม

แก้ไขไฟล์ `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* สีหลัก */
    --primary-dark: #4f46e5;       /* สีหลักเข้ม */
    --secondary-color: #ec4899;    /* สีรอง */
}
```

## ขั้นตอนที่ 6: Update เว็บไซต์

เมื่อแก้ไขไฟล์แล้ว:

### ผ่าน GitHub Web
1. ไปที่ไฟล์ที่ต้องการแก้
2. คลิกไอคอน pencil (✏️)
3. แก้ไข
4. คลิก "Commit changes"
5. รอ 1-2 นาที เว็บจะอัพเดทอัตโนมัติ

### ผ่าน Git Command Line
```bash
git add .
git commit -m "Update products"
git push origin main
```

## ขั้นตอนที่ 7: เพิ่ม Custom Domain (Optional)

### ถ้าคุณมี Domain Name เป็นของตัวเอง:

1. **สร้างไฟล์ CNAME**:
   - สร้างไฟล์ชื่อ `CNAME` (ไม่มี extension)
   - เขียนชื่อ domain ของคุณ เช่น: `www.yourdomain.com`

2. **ตั้งค่า DNS**:
   - ไปที่ DNS provider ของคุณ
   - เพิ่ม CNAME record:
     ```
     Type: CNAME
     Name: www (or @)
     Value: [username].github.io
     ```
   - หรือเพิ่ม A records:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **ตั้งค่าใน GitHub**:
   - ไปที่ Settings → Pages
   - ใส่ custom domain
   - เลือก "Enforce HTTPS"

## ขั้นตอนที่ 8: เพิ่ม Google Analytics (Optional)

1. สร้าง Google Analytics account
2. สร้าง property และรับ Measurement ID
3. เพิ่ม code นี้ใน `index.html` ก่อน `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); <!-- เปลี่ยนเป็น ID ของคุณ -->
</script>
```

## ขั้นตอนที่ 9: SEO Optimization

### Update Meta Tags

แก้ไขในส่วน `<head>` ของ `index.html`:

```html
<meta name="description" content="คำอธิบายเว็บของคุณ (150-160 ตัวอักษร)">
<meta name="keywords" content="คีย์เวิร์ด, ที่เกี่ยวข้อง, กับเว็บคุณ">

<!-- Open Graph สำหรับ Facebook -->
<meta property="og:title" content="ชื่อเว็บของคุณ">
<meta property="og:description" content="คำอธิบายเว็บ">
<meta property="og:image" content="URL รูปภาพ">
<meta property="og:url" content="URL เว็บของคุณ">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="ชื่อเว็บของคุณ">
<meta name="twitter:description" content="คำอธิบายเว็บ">
<meta name="twitter:image" content="URL รูปภาพ">
```

### Update Sitemap

แก้ไขไฟล์ `sitemap.xml` เปลี่ยน URL เป็นของคุณ

### Submit to Search Engines

1. **Google Search Console**:
   - ไปที่ [Google Search Console](https://search.google.com/search-console)
   - เพิ่มเว็บไซต์ของคุณ
   - Submit sitemap

2. **Bing Webmaster Tools**:
   - ไปที่ [Bing Webmaster](https://www.bing.com/webmasters)
   - เพิ่มเว็บไซต์

## Tips สำหรับความสำเร็จ

### 1. Content Strategy
- เพิ่มสินค้าใหม่อย่างสม่ำเสมอ
- เขียนรีวิวที่มีประโยชน์และซื่อสัตย์
- ใช้รูปภาพคุณภาพดี
- อัพเดทราคาให้ตรงกับปัจจุบัน

### 2. Traffic Generation
- แชร์บน Social Media (Facebook, Instagram, Line)
- ทำ SEO ให้ดี (keywords, meta tags)
- สร้าง content marketing (บทความ, วิดีโอ)
- ใช้ Facebook Ads หรือ Google Ads

### 3. Conversion Optimization
- ใช้ call-to-action ที่ชัดเจน
- แสดงราคาและโปรโมชั่นที่น่าสนใจ
- เพิ่มรีวิวและ testimonials
- ทำให้ง่ายต่อการคลิกไปยังสินค้า

### 4. Legal & Ethics
- เปิดเผยว่าเป็น affiliate links
- ทำตาม terms & conditions ของ affiliate programs
- ไม่โฆษณาเกินจริง
- เคารพ copyright ของรูปภาพ

## Troubleshooting

### เว็บไม่แสดง
- รอ 5-10 นาที หลัง deploy
- ตรวจสอบว่าเปิด GitHub Pages แล้ว
- ตรวจสอบว่า branch ที่เลือกถูกต้อง
- ลองเปิด Incognito mode

### รูปภาพไม่โหลด
- ตรวจสอบ URL รูปภาพ
- ใช้ HTTPS URLs เท่านั้น
- ตรวจสอบว่ารูปเปิดให้ access ได้

### Affiliate Links ไม่ทำงาน
- ตรวจสอบ link ว่าถูกต้อง
- ตรวจสอบว่าเข้า affiliate program แล้ว
- ทดสอบ link ใน Incognito mode

### เว็บช้า
- ใช้รูปภาพขนาดเล็กลง (optimize)
- ใช้ lazy loading
- ลด JavaScript ที่ไม่จำเป็น

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [W3Schools](https://www.w3schools.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [Google Analytics](https://analytics.google.com)
- [Font Awesome Icons](https://fontawesome.com)

## Support

หากมีปัญหาหรือคำถาม:
- เปิด Issue บน GitHub
- ติดต่อ: contact@webecommerce.com

---

**สำเร็จแล้ว!** 🎉 ตอนนี้คุณมีเว็บ Affiliate ของตัวเองแล้ว!

อย่าลืม:
1. ✅ เพิ่มสินค้าที่น่าสนใจ
2. ✅ แชร์เว็บของคุณ
3. ✅ ติดตาม analytics
4. ✅ ปรับปรุงเว็บอย่างสม่ำเสมอ

**Good luck!** 💰


