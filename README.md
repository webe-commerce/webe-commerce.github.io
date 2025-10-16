# WeBeCommerce - เว็บไซต์ Affiliate

เว็บไซต์แนะนำสินค้าและบริการคุณภาพ สร้างด้วย HTML, CSS และ JavaScript บน GitHub Pages

## 🌟 Features

- **หน้าแรกสวยงาม** - Hero section พร้อม call-to-action ที่ชัดเจน
- **หมวดหมู่สินค้า** - จัดหมวดหมู่สินค้าอย่างเป็นระบบ
- **ระบบกรองสินค้า** - กรองสินค้าตามหมวดหมู่ได้ง่าย
- **การ์ดสินค้า** - แสดงรายละเอียดสินค้าพร้อมราคาและรีวิว
- **Responsive Design** - ใช้งานได้ทุกอุปกรณ์ (Desktop, Tablet, Mobile)
- **Smooth Animations** - Animation และ transition ที่ลื่นไหล
- **SEO Friendly** - เพิ่ม meta tags สำหรับ SEO

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


