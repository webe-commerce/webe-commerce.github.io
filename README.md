# WeBeCommerce - เว็บไซต์ Affiliate

เว็บไซต์แนะนำสินค้าและบริการคุณภาพ สร้างด้วย HTML, CSS และ JavaScript บน GitHub Pages

## 🌟 Features

### 🛍️ Affiliate Marketing Features
- **Multi-Platform Support** - รองรับ Shopee, Lazada และ TikTok Shop
- **Platform Badges** - แสดงป้ายแพลตฟอร์มบนการ์ดสินค้า
- **Platform Filters** - กรองสินค้าตามแพลตฟอร์ม (Shopee/Lazada/TikTok)
- **20 Sample Products** - สินค้าตัวอย่างพร้อมโครงสร้าง affiliate links
- **Affiliate Disclosure** - แสดงข้อความเปิดเผยตามมาตรฐาน

### 🎯 Easy Customer Access (NEW!)
- **Hero Platform Quick Access** - ปุ่มเข้าถึงแต่ละ platform ที่หน้าแรก
- **Sticky Vendor Buttons** - ปุ่มลอยด้านข้างสำหรับเข้าถึงแต่ละ vendor ได้ทุกที่
- **Products First** - สินค้าแสดงทันทีหลัง hero section (ไม่ต้องเลื่อน)
- **Prominent Buy Buttons** - ปุ่มซื้อใหญ่ ชัดเจน พร้อมชื่อ platform
- **One-Click Platform Access** - คลิกครั้งเดียวกรองสินค้าตาม vendor

### 🎨 Design & UX
- **หน้าแรกสวยงาม** - Hero section พร้อม call-to-action ที่ชัดเจน
- **หมวดหมู่สินค้า** - จัดหมวดหมู่สินค้า 6 หมวด
- **ระบบกรองแบบ Dual** - กรองทั้งตามหมวดหมู่และแพลตฟอร์ม
- **การ์ดสินค้า** - แสดงราคา, รีวิว, คะแนน และแพลตฟอร์ม
- **Responsive Design** - ใช้งานได้ทุกอุปกรณ์ (Desktop, Tablet, Mobile)
- **Smooth Animations** - Animation และ transition ที่ลื่นไหล
- **Breadcrumb Navigation** - เส้นทางนำทางที่ชัดเจน

### 🚀 SEO Optimization
- **Comprehensive Meta Tags** - Title, Description, Keywords
- **Open Graph Tags** - สำหรับ Facebook และ Social Media
- **Twitter Cards** - แสดงผล preview บน Twitter
- **Structured Data (Schema.org)** - Product, Organization, ItemList, Breadcrumb
- **Dynamic SEO** - อัพเดท meta tags อัตโนมัติตาม filters
- **Optimized Sitemap** - ครอบคลุมทุก category และ platform
- **Rich Snippets Ready** - แสดงดาว, ราคา, รีวิวใน Google

## 🚀 การติดตั้งและใช้งาน

### วิธีที่ 1: Deploy บน GitHub Pages

1. **Fork repository นี้** หรือ Clone ไปยัง GitHub account ของคุณ

2. **เปิดใช้งาน GitHub Pages**
   - ไปที่ Settings ของ repository
   - เลื่อนไปที่ส่วน "Pages"
   - ในส่วน "Source" เลือก `main` branch
   - คลิก "Save"

3. **เข้าถึงเว็บไซต์**
   - เว็บไซต์จะพร้อมใช้งานที่ `https://[username].github.io/[repository-name]`
   - หรือ `https://[username].github.io` ถ้า repository ชื่อ `[username].github.io`

### วิธีที่ 2: รันบน Local

1. **Clone repository**
   ```bash
   git clone https://github.com/[username]/[repository-name].git
   cd [repository-name]
   ```

2. **เปิดไฟล์ในเบราว์เซอร์**
   - เปิดไฟล์ `index.html` ด้วยเบราว์เซอร์
   - หรือใช้ live server extension ใน VS Code

3. **หรือใช้ Python HTTP Server**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   แล้วเปิดเบราว์เซอร์ไปที่ `http://localhost:8000`

## 📝 การแก้ไขและปรับแต่ง

### เพิ่มสินค้าใหม่

แก้ไขไฟล์ `script.js` ในส่วน `productsData`:

```javascript
const productsData = [
    {
        id: 1,
        title: "ชื่อสินค้า",
        description: "รายละเอียดสินค้า",
        price: "฿999",
        category: "electronics", // electronics, fashion, home, beauty, sports, books
        image: "url-รูปภาพ",
        rating: 4.5,
        reviews: 100,
        badge: "ขายดี", // หรือ "แนะนำ" หรือ "" (ถ้าไม่มี badge)
        affiliateLink: "https://your-affiliate-link.com"
    },
    // เพิ่มสินค้าต่อไปนี้...
];
```

### เปลี่ยนสีธีม

แก้ไขไฟล์ `styles.css` ในส่วน `:root`:

```css
:root {
    --primary-color: #6366f1;      /* สีหลัก */
    --primary-dark: #4f46e5;       /* สีหลักเข้ม */
    --secondary-color: #ec4899;    /* สีรอง */
    --text-dark: #1f2937;          /* สีข้อความเข้ม */
    --text-light: #6b7280;         /* สีข้อความอ่อน */
}
```

### เปลี่ยนข้อมูลเว็บไซต์

แก้ไขไฟล์ `index.html`:
- ชื่อเว็บไซต์ในแท็ก `<title>`
- เนื้อหาในแต่ละ section
- ข้อมูลติดต่อในส่วน Contact
- Social media links

### เพิ่ม Custom Domain

1. สร้างไฟล์ `CNAME` ใน root directory
2. ใส่ domain name ของคุณในไฟล์
   ```
   yourdomain.com
   ```
3. ตั้งค่า DNS records ที่ domain provider ของคุณ

## 🎨 โครงสร้างไฟล์

```
webe-commerce.github.io/
│
├── index.html          # หน้าเว็บหลัก
├── styles.css          # Stylesheet
├── script.js           # JavaScript สำหรับ interactivity
├── README.md           # คู่มือการใช้งาน
├── .gitignore         # ไฟล์ที่ไม่ต้อง track ด้วย Git
└── CNAME              # (Optional) สำหรับ custom domain
```

## 🔧 Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Interactivity
- **Font Awesome 6** - Icons
- **Google Fonts (Sarabun)** - Thai font
- **Unsplash** - Sample images

## 📱 Browser Support

เว็บไซต์รองรับเบราว์เซอร์ทันสมัย:
- Chrome (แนะนำ)
- Firefox
- Safari
- Edge
- Opera

## 💡 Tips สำหรับการใช้งาน Affiliate

1. **เลือกสินค้าที่เกี่ยวข้อง** - เลือกสินค้าที่ตรงกับกลุ่มเป้าหมายของคุณ
2. **เขียนรีวิวที่ซื่อสัตย์** - ให้ข้อมูลที่เป็นประโยชน์จริง
3. **อัพเดทสินค้าเป็นประจำ** - เพิ่มสินค้าใหม่ๆ อย่างสม่ำเสมอ
4. **เพิ่ม Analytics** - ใช้ Google Analytics ติดตามผู้เข้าชม
5. **SEO Optimization** - เพิ่ม keywords และ meta tags ที่เหมาะสม

## 📈 การเพิ่ม Google Analytics

เพิ่ม code นี้ก่อน `</head>` ในไฟล์ `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

แทน `GA_MEASUREMENT_ID` ด้วย ID จริงของคุณ

## 📚 Documentation

เรามีคู่มือครบชุดสำหรับการใช้งาน:

### 🚀 [QUICK_START.md](QUICK_START.md)
เริ่มต้นใช้งานด่วน สำหรับผู้ที่ต้องการเริ่มเพิ่มสินค้าทันที
- วิธีเพิ่มสินค้า 3 ขั้นตอน
- ตัวอย่างโค้ดสำเร็จรูป
- Checklist ก่อน Deploy

### 💰 [AFFILIATE_GUIDE.md](AFFILIATE_GUIDE.md)
คู่มือฉบับสมบูรณ์สำหรับการทำ Affiliate Marketing
- วิธีสมัคร Shopee, Lazada, TikTok Affiliate
- วิธีสร้าง Affiliate Links
- Tips และกลยุทธ์เพิ่มยอดขาย
- ข้อกฎหมายและจริยธรรม

### 🔧 [SETUP.md](SETUP.md)
คู่มือการติดตั้งและ Deploy เว็บไซต์
- ขั้นตอนการ Setup GitHub Pages
- การปรับแต่งเว็บไซต์
- การเพิ่ม Custom Domain
- การติดตั้ง Google Analytics

### 📈 [SEO_GUIDE.md](SEO_GUIDE.md)
คู่มือการทำ SEO ให้สินค้าติดหน้าแรก Google
- SEO Features ที่มีในเว็บ
- วิธีทำ On-Page SEO
- การ Submit ไปยัง Google/Bing
- Tips และ Best Practices
- การวัดผลด้วย Analytics

### 📊 [GOOGLE_ANALYTICS_SETUP.md](GOOGLE_ANALYTICS_SETUP.md)
คู่มือติดตั้งและใช้งาน Google Analytics
- Setup Google Analytics ใน 5 นาที
- การติดตาม Affiliate Clicks และ Filters
- รายงานที่สำคัญและการวิเคราะห์
- กลยุทธ์เพิ่มยอดขาย
- Dashboard และ Custom Reports

### 🎯 [CUSTOMER_EXPERIENCE_IMPROVEMENTS.md](CUSTOMER_EXPERIENCE_IMPROVEMENTS.md)
คู่มือฟีเจอร์ใหม่สำหรับลูกค้าเข้าถึงสินค้าง่ายขึ้น
- Hero Platform Quick Access Buttons
- Sticky Floating Vendor Buttons
- Products Section ย้ายขึ้นด้านบน
- ปุ่มซื้อขนาดใหญ่และชัดเจน
- Customer Journey Analysis

## 🤝 Contributing

หากต้องการปรับปรุงหรือเพิ่มฟีเจอร์:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ by WeBeCommerce Team

## 📞 Support

หากมีคำถามหรือต้องการความช่วยเหลือ:
- Email: contact@webecommerce.com
- Website: [webecommerce.github.io](https://webecommerce.github.io)

---

⭐ ถ้าโปรเจคนี้มีประโยชน์ อย่าลืม Star repository นี้!


