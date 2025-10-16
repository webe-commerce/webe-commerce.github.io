# 🚀 Quick Start Guide - เริ่มต้นใช้งานด่วน

## ✨ สิ่งที่เพิ่มเข้ามาใหม่

เราได้เพิ่มฟีเจอร์สำหรับ Affiliate Marketing จาก Shopee, Lazada และ TikTok Shop แล้ว!

### 🎯 ฟีเจอร์ใหม่

1. **✅ ระบบกรองตามแพลตฟอร์ม** - กรองสินค้าตาม Shopee, Lazada, TikTok
2. **✅ Platform Badges** - ป้ายแสดงแพลตฟอร์มบนการ์ดสินค้า
3. **✅ สินค้า 20 รายการตัวอย่าง** - แบ่งตามแพลตฟอร์มต่างๆ
4. **✅ ปุ่มซื้อแยกตามแพลตฟอร์ม** - ระบุชัดเจนว่าซื้อที่ไหน
5. **✅ Affiliate Disclosure** - แสดงข้อความเปิดเผยที่ footer

---

## 📝 วิธีการเพิ่มสินค้าของคุณ (ง่ายมาก!)

### ขั้นตอนที่ 1: เปิดไฟล์ `script.js`

ค้นหาบรรทัดที่มี `const productsData = [`

### ขั้นตอนที่ 2: เพิ่มสินค้าของคุณ

คัดลอกโค้ดนี้และแก้ไข:

```javascript
{
    id: 21,                          // เปลี่ยนเป็นเลขถัดไป (ห้ามซ้ำ!)
    title: "ชื่อสินค้าของคุณ",
    description: "รายละเอียดสินค้า",
    price: "฿999",
    category: "electronics",         // เลือกจาก: electronics, fashion, home, beauty, sports, books
    image: "URL_รูปภาพ",
    rating: 4.5,                     // คะแนน 0-5
    reviews: 100,                    // จำนวนรีวิว
    badge: "ขายดี",                  // "ขายดี" หรือ "แนะนำ" หรือ ""
    platform: "shopee",              // เลือกจาก: shopee, lazada, tiktok
    affiliateLink: "ใส่ลิงก์ของคุณที่นี่"
},
```

### ขั้นตอนที่ 3: วางโค้ดใน array

วางโค้ดข้างบนในส่วน `productsData` ก่อนวงเล็บปีกกาปิด `];`

---

## 🔗 วิธีการได้ Affiliate Link

### Shopee
1. ไปที่ [https://affiliate.shopee.co.th](https://affiliate.shopee.co.th)
2. สมัครสมาชิก
3. เลือกสินค้า → Generate Link
4. Copy link (รูปแบบ: `https://shope.ee/xxxxx`)

### Lazada
1. ไปที่ [https://affiliate.lazada.co.th](https://affiliate.lazada.co.th)
2. สมัครสมาชิก
3. ใส่ URL สินค้า → Convert Link
4. Copy affiliate link

### TikTok Shop
1. เปิดแอป TikTok
2. ไป Creator Tools → TikTok Shop → Affiliate
3. เลือกสินค้า → Copy Link
4. Link จะเป็น affiliate link อัตโนมัติ

---

## 🎨 ตัวอย่างสินค้าครบชุด

### Shopee Product

```javascript
{
    id: 21,
    title: "หูฟัง AirPods Pro Gen 2",
    description: "หูฟังไร้สาย เสียงดี ตัดเสียงรบกวน กันน้ำ IPX4",
    price: "฿8,990",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 523,
    badge: "ขายดี",
    platform: "shopee",
    affiliateLink: "https://shope.ee/YOUR_LINK_HERE"
}
```

### Lazada Product

```javascript
{
    id: 22,
    title: "หุ่นยนต์ดูดฝุ่น Xiaomi",
    description: "ดูดและถูพื้นอัตโนมัติ แรงดูด 4000Pa แมปบ้านอัจฉริยะ",
    price: "฿8,990",
    category: "home",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 342,
    badge: "แนะนำ",
    platform: "lazada",
    affiliateLink: "https://www.lazada.co.th/YOUR_LINK_HERE"
}
```

### TikTok Shop Product

```javascript
{
    id: 23,
    title: "ลิปทิ้นท์ 3CE",
    description: "ลิปทิ้นท์เกาหลี สีสวย ติดทนนาน ไม่แห้งปาก",
    price: "฿299",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=500&fit=crop",
    rating: 4.9,
    reviews: 1523,
    badge: "ขายดี",
    platform: "tiktok",
    affiliateLink: "https://www.tiktok.com/@shop/YOUR_LINK_HERE"
}
```

---

## 📁 ไฟล์ที่เกี่ยวข้อง

| ไฟล์ | หน้าที่ | ต้องแก้ไขหรือไม่ |
|------|---------|-----------------|
| `script.js` | เพิ่มข้อมูลสินค้า | ✅ **ใช่** - เพิ่มสินค้าที่นี่ |
| `index.html` | โครงสร้างเว็บ | ❌ ไม่ต้อง (เว้นแต่จะแก้ไขหน้าเว็บ) |
| `styles.css` | สไตล์และสี | ❌ ไม่ต้อง (เว้นแต่จะเปลี่ยนสี) |
| `AFFILIATE_GUIDE.md` | คู่มือฉบับเต็ม | 📖 อ่านเพิ่มเติม |
| `SETUP.md` | คู่มือติดตั้งและ Deploy | 📖 วิธี Deploy |

---

## 🎨 การปรับแต่ง

### เปลี่ยนสีของเว็บ

แก้ไขใน `styles.css` (บรรทัด 8-17):

```css
:root {
    --primary-color: #6366f1;      /* สีหลัก - เปลี่ยนได้ */
    --primary-dark: #4f46e5;       /* สีหลักเข้ม */
    --secondary-color: #ec4899;    /* สีรอง */
}
```

### เปลี่ยนชื่อเว็บ

แก้ไขใน `index.html` (บรรทัด 8, 18-20):

```html
<title>ชื่อเว็บของคุณ</title>

<!-- และ -->

<a href="#" class="logo">
    <i class="fas fa-shopping-bag"></i>
    <span>ชื่อเว็บของคุณ</span>
</a>
```

---

## 🚀 Deploy เว็บไซต์

### ขั้นตอนย่อ

1. **Push ไปยัง GitHub**
   ```bash
   git add .
   git commit -m "Add affiliate products"
   git push origin main
   ```

2. **เปิดใช้ GitHub Pages**
   - Settings → Pages
   - Source: Branch `main`
   - Save

3. **รอ 2-5 นาที**
   - เว็บจะพร้อมใช้งาน!

อ่านเพิ่มเติม: [SETUP.md](SETUP.md)

---

## 📊 ติดตาม Performance

### Dashboard ของแต่ละแพลตฟอร์ม

1. **Shopee Affiliate Dashboard**
   - ดู clicks, conversions, commission
   - Export รายงาน

2. **Lazada Affiliate Portal**
   - ติดตาม performance real-time
   - ดูสินค้าขายดี

3. **TikTok Shop Creator Center**
   - ดูยอดขายและค่าคอม
   - วิเคราะห์ performance

---

## ⚡ เคล็ดลับเพิ่มยอดขาย

### 1. เลือกสินค้าที่ดี
- ✅ มีรีวิวเยอะและดี
- ✅ ราคาไม่แพงเกินไป
- ✅ กำลังเป็นที่นิยม

### 2. เขียนรายละเอียดดีๆ
- ✅ ชัดเจน กระชับ น่าสนใจ
- ✅ บอกจุดเด่นของสินค้า
- ✅ ซื่อสัตย์ไม่โฆษณาเกินจริง

### 3. แชร์ให้เยอะ
- 📱 Facebook, Instagram, Line
- 🎬 TikTok, YouTube (ทำรีวิว)
- 💬 กลุ่ม Communities

### 4. อัพเดทสม่ำเสมอ
- เพิ่มสินค้าใหม่ทุกสัปดาห์
- อัพเดทราคาให้ตรง
- เอาสินค้าหมดออก

---

## ❓ คำถามที่พบบ่อย (FAQ)

### Q: ต้องเสียเงินในการสมัคร Affiliate ไหม?
**A:** ไม่ต้องเสียเงิน! ทุกแพลตฟอร์มฟรี 100%

### Q: จะได้เงินเมื่อไหร่?
**A:** แต่ละแพลตฟอร์มจ่ายต่างกัน:
- Shopee: จ่ายทุกเดือน
- Lazada: จ่ายทุกเดือน (ต้องถึง minimum payout)
- TikTok: จ่ายทุกเดือน

### Q: ต้องมี Followers เยอะไหม?
**A:** ไม่จำเป็น! แต่มี followers จะช่วยให้ขายดีขึ้น

### Q: ใช้รูปจาก platform ได้เลยไหม?
**A:** ควรขออนุญาตก่อน หรือใช้รูปจาก Official Store

### Q: ทำผิดกฎจะโดนแบนไหม?
**A:** ได้ ถ้าใช้วิธีไม่ถูกต้อง เช่น click fraud, โฆษณาเท็จ

---

## 📞 ต้องการความช่วยเหลือ?

### 📖 เอกสารเพิ่มเติม
- [AFFILIATE_GUIDE.md](AFFILIATE_GUIDE.md) - คู่มือฉบับเต็ม
- [SETUP.md](SETUP.md) - วิธีติดตั้งและ Deploy

### 💬 ติดต่อ
- Email: contact@webecommerce.com
- เปิด Issue บน GitHub

---

## ✅ Checklist ก่อน Deploy

- [ ] เพิ่มสินค้าอย่างน้อย 10 รายการ
- [ ] แทนที่ affiliate links ด้วยลิงก์จริง
- [ ] เช็คว่ารูปภาพแสดงผลถูกต้อง
- [ ] เปลี่ยนชื่อเว็บและข้อมูลติดต่อ
- [ ] ทดสอบคลิกลิงก์ดูว่าทำงานไหม
- [ ] เปิดเผยข้อมูล affiliate ที่ footer แล้ว
- [ ] Deploy ไปยัง GitHub Pages
- [ ] เช็คว่าเว็บแสดงผลถูกต้องบนมือถือ

---

**🎉 พร้อมแล้ว! เริ่มทำ Affiliate Marketing กันเลย! 💰**

Good luck! 🚀

