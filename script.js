// ===== Products Data with Affiliate Links =====
// 🔥 วิธีการใช้งาน:
// 1. แทนที่ affiliateLink ด้วยลิงก์ affiliate จริงของคุณจาก Shopee, Lazada, หรือ TikTok
// 2. platform: "shopee" | "lazada" | "tiktok" - ระบุแพลตฟอร์มที่สินค้ามาจาก
// 3. อัพเดท image, price, rating, reviews ให้ตรงกับสินค้าจริง

const productsData = [
    // ===== SHOPEE PRODUCTS =====
    {
        id: 1,
        title: "iPhone 15 Pro Max 256GB",
        description: "ไอโฟนรุ่นล่าสุด กล้อง 48MP ชิป A17 Pro จอ 6.7 นิ้ว",
        price: "฿44,900",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1695048064536-1c1cfe9eb443?w=500&h=500&fit=crop",
        rating: 4.9,
        reviews: 1250,
        badge: "ขายดี",
        platform: "shopee",
        affiliateLink: "https://shope.ee/YOUR_AFFILIATE_LINK_HERE_1"
    },
    {
        id: 2,
        title: "AirPods Pro (2nd generation)",
        description: "หูฟังไร้สาย Active Noise Cancellation คุณภาพเสียงระดับพรีเมียม",
        price: "฿8,990",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&h=500&fit=crop",
        rating: 4.8,
        reviews: 856,
        badge: "แนะนำ",
        platform: "shopee",
        affiliateLink: "https://shope.ee/YOUR_AFFILIATE_LINK_HERE_2"
    },
    {
        id: 3,
        title: "เสื้อโปโลผู้ชาย UNIQLO",
        description: "เสื้อโปโลคุณภาพดี ผ้า Dry-EX ระบายอากาศดี",
        price: "฿590",
        category: "fashion",
        image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500&h=500&fit=crop",
        rating: 4.6,
        reviews: 423,
        badge: "",
        platform: "shopee",
        affiliateLink: "https://shope.ee/YOUR_AFFILIATE_LINK_HERE_3"
    },
    {
        id: 4,
        title: "รองเท้าผ้าใบ Nike Air Max",
        description: "รองเท้ากีฬา น้ำหนักเบา ใส่สบาย เหมาะกับการวิ่งและออกกำลังกาย",
        price: "฿3,890",
        category: "fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
        rating: 4.7,
        reviews: 678,
        badge: "ขายดี",
        platform: "shopee",
        affiliateLink: "https://shope.ee/YOUR_AFFILIATE_LINK_HERE_4"
    },

    // ===== LAZADA PRODUCTS =====
    {
        id: 5,
        title: "Samsung Galaxy S24 Ultra",
        description: "สมาร์ทโฟนจอใหญ่ 6.8 นิ้ว กล้อง 200MP S Pen ในตัว",
        price: "฿42,990",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=500&fit=crop",
        rating: 4.8,
        reviews: 923,
        badge: "แนะนำ",
        platform: "lazada",
        affiliateLink: "https://www.lazada.co.th/YOUR_AFFILIATE_LINK_HERE_5"
    },
    {
        id: 6,
        title: "iPad Air M2 Chip 128GB",
        description: "แท็บเล็ต Apple M2 จอ Liquid Retina 10.9 นิ้ว",
        price: "฿24,900",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
        rating: 4.9,
        reviews: 567,
        badge: "แนะนำ",
        platform: "lazada",
        affiliateLink: "https://www.lazada.co.th/YOUR_AFFILIATE_LINK_HERE_6"
    },
    {
        id: 7,
        title: "เครื่องกรองอากาศ Xiaomi",
        description: "กรองอากาศ PM2.5 ครอบคลุม 48 ตร.ม. เงียบ ประหยัดไฟ",
        price: "฿3,490",
        category: "home",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop",
        rating: 4.5,
        reviews: 789,
        badge: "ขายดี",
        platform: "lazada",
        affiliateLink: "https://www.lazada.co.th/YOUR_AFFILIATE_LINK_HERE_7"
    },
    {
        id: 8,
        title: "หม้อทอดไร้น้ำมัน Air Fryer",
        description: "ทอดอาหารไร้น้ำมัน ความจุ 5 ลิตร ปรับอุณหภูมิได้",
        price: "฿2,290",
        category: "home",
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&h=500&fit=crop",
        rating: 4.6,
        reviews: 1034,
        badge: "",
        platform: "lazada",
        affiliateLink: "https://www.lazada.co.th/YOUR_AFFILIATE_LINK_HERE_8"
    },

    // ===== TIKTOK SHOP PRODUCTS =====
    {
        id: 9,
        title: "เซรั่มวิตามินซี Melano CC",
        description: "เซรั่มลดจุดด่างดำ ผิวกระจ่างใส ขนาด 20ml",
        price: "฿450",
        category: "beauty",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop",
        rating: 4.8,
        reviews: 2341,
        badge: "ขายดี",
        platform: "tiktok",
        affiliateLink: "https://www.tiktok.com/@shop/YOUR_AFFILIATE_LINK_HERE_9"
    },
    {
        id: 10,
        title: "คุชชั่น Merrezca สูตรกันน้ำ",
        description: "คุชชั่นเนื้อแมท ปกปิดดี กันน้ำ กันเหงื่อ SPF50+ PA+++",
        price: "฿259",
        category: "beauty",
        image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=500&h=500&fit=crop",
        rating: 4.7,
        reviews: 1876,
        badge: "แนะนำ",
        platform: "tiktok",
        affiliateLink: "https://www.tiktok.com/@shop/YOUR_AFFILIATE_LINK_HERE_10"
    },
    {
        id: 11,
        title: "ลิปทิ้นท์ Rom&nd Juicy",
        description: "ลิปทิ้นท์เกาหลี สีสวย ติดทน ไม่แห้งปาก",
        price: "฿199",
        category: "beauty",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=500&fit=crop",
        rating: 4.9,
        reviews: 3254,
        badge: "ขายดี",
        platform: "tiktok",
        affiliateLink: "https://www.tiktok.com/@shop/YOUR_AFFILIATE_LINK_HERE_11"
    },
    {
        id: 12,
        title: "ชุดออกกำลังกาย 3 ชิ้น",
        description: "ชุดโยคะ ผ้ายืดหยุ่น ระบายอากาศดี เซ็ต Sports Bra + เลกกิ้ง + แจ็คเก็ต",
        price: "฿890",
        category: "sports",
        image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=500&h=500&fit=crop",
        rating: 4.6,
        reviews: 567,
        badge: "",
        platform: "tiktok",
        affiliateLink: "https://www.tiktok.com/@shop/YOUR_AFFILIATE_LINK_HERE_12"
    },

    // ===== MORE SHOPEE PRODUCTS =====
    {
        id: 13,
        title: "Laptop ASUS TUF Gaming",
        description: "Ryzen 7 6800H, RTX 3060, RAM 16GB, SSD 512GB, จอ 144Hz",
        price: "฿32,990",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop",
        rating: 4.7,
        reviews: 445,
        badge: "แนะนำ",
        platform: "shopee",
        affiliateLink: "https://shope.ee/YOUR_AFFILIATE_LINK_HERE_13"
    },
    {
        id: 14,
        title: "กระเป๋าเป้ Bobby Anti-Theft",
        description: "กระเป๋ากันขโมย USB Charging Port กันน้ำ",
        price: "฿990",
        category: "fashion",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
        rating: 4.5,
        reviews: 892,
        badge: "",
        platform: "shopee",
        affiliateLink: "https://shope.ee/YOUR_AFFILIATE_LINK_HERE_14"
    },

    // ===== MORE LAZADA PRODUCTS =====
    {
        id: 15,
        title: "ผ้าม่าน Blackout กันแสง 100%",
        description: "ผ้าม่านกันแสง กันUV ติดตั้งง่าย หลายสี หลายขนาด",
        price: "฿599",
        category: "home",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&h=500&fit=crop",
        rating: 4.4,
        reviews: 678,
        badge: "",
        platform: "lazada",
        affiliateLink: "https://www.lazada.co.th/YOUR_AFFILIATE_LINK_HERE_15"
    },
    {
        id: 16,
        title: "โคมไฟอัจฉริยะ Philips Hue",
        description: "หลอดไฟ Smart LED ปรับสีได้ 16 ล้านสี ควบคุมผ่านแอป",
        price: "฿1,790",
        category: "home",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500&fit=crop",
        rating: 4.7,
        reviews: 234,
        badge: "แนะนำ",
        platform: "lazada",
        affiliateLink: "https://www.lazada.co.th/YOUR_AFFILIATE_LINK_HERE_16"
    },

    // ===== MORE TIKTOK SHOP PRODUCTS =====
    {
        id: 17,
        title: "ดัมเบลปรับน้ำหนักได้ 2-20kg",
        description: "ดัมเบลปรับระดับ 10 ขั้น ประหยัดพื้นที่ เหมาะกับบ้าน",
        price: "฿1,890",
        category: "sports",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=500&fit=crop",
        rating: 4.6,
        reviews: 456,
        badge: "",
        platform: "tiktok",
        affiliateLink: "https://www.tiktok.com/@shop/YOUR_AFFILIATE_LINK_HERE_17"
    },
    {
        id: 18,
        title: "เสื่อโยคะ TPE พร้อมสาย",
        description: "เสื่อโยคะหนา 6mm กันลื่น กันกระแทก มีสายสะพาย",
        price: "฿390",
        category: "sports",
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
        rating: 4.5,
        reviews: 789,
        badge: "ขายดี",
        platform: "tiktok",
        affiliateLink: "https://www.tiktok.com/@shop/YOUR_AFFILIATE_LINK_HERE_18"
    },
    {
        id: 19,
        title: "หนังสือ Atomic Habits",
        description: "นิสัยเล็กๆ ที่เปลี่ยนชีวิต ฉบับภาษาไทย",
        price: "฿350",
        category: "books",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop",
        rating: 4.9,
        reviews: 1234,
        badge: "แนะนำ",
        platform: "tiktok",
        affiliateLink: "https://www.tiktok.com/@shop/YOUR_AFFILIATE_LINK_HERE_19"
    },
    {
        id: 20,
        title: "คอร์สออนไลน์ Python Programming",
        description: "เรียนเขียนโปรแกรม Python เบื้องต้น-ขั้นสูง 50+ ชั่วโมง",
        price: "฿1,990",
        category: "books",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=500&fit=crop",
        rating: 4.8,
        reviews: 567,
        badge: "แนะนำ",
        platform: "shopee",
        affiliateLink: "https://shope.ee/YOUR_AFFILIATE_LINK_HERE_20"
    }
];

// ===== Navbar Functionality =====
const navbar = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Products Display =====
const productsGrid = document.getElementById('productsGrid');
let currentCategoryFilter = 'all';
let currentPlatformFilter = 'all';

function createProductCard(product) {
    const platformInfo = getPlatformInfo(product.platform);
    return `
        <div class="product-card" data-category="${product.category}" data-platform="${product.platform}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <span class="platform-badge ${product.platform}" title="ซื้อที่ ${platformInfo.name}">
                    ${platformInfo.icon}
                </span>
            </div>
            <div class="product-content">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-text">${product.rating} (${product.reviews} รีวิว)</span>
                </div>
                <div class="product-footer">
                    <div class="product-price">${product.price}</div>
                    <a href="${product.affiliateLink}" target="_blank" rel="noopener noreferrer" class="product-btn">
                        ซื้อที่ ${platformInfo.name} <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
}

function getPlatformInfo(platform) {
    const platforms = {
        'shopee': {
            name: 'Shopee',
            icon: '<i class="fab fa-shopify"></i>',
            color: '#EE4D2D'
        },
        'lazada': {
            name: 'Lazada',
            icon: '<i class="fas fa-shopping-cart"></i>',
            color: '#0F156D'
        },
        'tiktok': {
            name: 'TikTok Shop',
            icon: '<i class="fab fa-tiktok"></i>',
            color: '#000000'
        }
    };
    return platforms[platform] || { name: 'Shop', icon: '<i class="fas fa-store"></i>', color: '#6366f1' };
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

function getCategoryName(category) {
    const categoryNames = {
        'electronics': 'อิเล็กทรอนิกส์',
        'fashion': 'แฟชั่น',
        'home': 'บ้านและสวน',
        'beauty': 'ความงาม',
        'sports': 'กีฬา',
        'books': 'หนังสือและสื่อ'
    };
    return categoryNames[category] || category;
}

function displayProducts(categoryFilter = 'all', platformFilter = 'all') {
    let filteredProducts = productsData;
    
    // Filter by category
    if (categoryFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
    }
    
    // Filter by platform
    if (platformFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.platform === platformFilter);
    }
    
    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    
    // Add animation to cards
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        }, index * 50);
    });
}

// Initialize products display
displayProducts();

// ===== Generate Structured Data (JSON-LD) for SEO =====
function generateProductStructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": productsData.map((product, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Product",
                "name": product.title,
                "description": product.description,
                "image": product.image,
                "brand": {
                    "@type": "Brand",
                    "name": product.platform === 'shopee' ? 'Shopee' : 
                           product.platform === 'lazada' ? 'Lazada' : 'TikTok Shop'
                },
                "offers": {
                    "@type": "Offer",
                    "url": product.affiliateLink,
                    "priceCurrency": "THB",
                    "price": product.price.replace('฿', '').replace(',', ''),
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0],
                    "seller": {
                        "@type": "Organization",
                        "name": product.platform === 'shopee' ? 'Shopee Thailand' : 
                               product.platform === 'lazada' ? 'Lazada Thailand' : 'TikTok Shop Thailand'
                    }
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": product.rating,
                    "reviewCount": product.reviews,
                    "bestRating": "5",
                    "worstRating": "1"
                },
                "category": getCategoryName(product.category)
            }
        }))
    };
    
    // Add or update structured data script
    let structuredDataScript = document.getElementById('product-structured-data');
    if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.id = 'product-structured-data';
        structuredDataScript.type = 'application/ld+json';
        document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);
}

// Generate structured data on page load
generateProductStructuredData();

// ===== SEO: Update Page Title and Meta Description Based on Filters =====
function updateSEOMetaTags(categoryFilter, platformFilter) {
    const baseTitle = "WeBeCommerce - แนะนำสินค้าคุณภาพ";
    const baseDesc = "แนะนำสินค้าคุณภาพ รีวิวจริง";
    
    let title = baseTitle;
    let description = baseDesc;
    
    // Update based on platform
    if (platformFilter !== 'all') {
        const platformName = platformFilter === 'shopee' ? 'Shopee' : 
                            platformFilter === 'lazada' ? 'Lazada' : 'TikTok Shop';
        title = `สินค้าจาก ${platformName} - ${baseTitle}`;
        description = `${baseDesc} จาก ${platformName}`;
    }
    
    // Update based on category
    if (categoryFilter !== 'all') {
        const categoryName = getCategoryName(categoryFilter);
        title = `${categoryName} - ${title}`;
        description = `${description} หมวดหมู่${categoryName}`;
    }
    
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', description);
    }
}

// ===== Platform Filter Functionality =====
const platformFilterButtons = document.querySelectorAll('.platform-filter-btn');

platformFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all platform buttons
        platformFilterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get platform filter value and display products
        currentPlatformFilter = button.getAttribute('data-platform');
        displayProducts(currentCategoryFilter, currentPlatformFilter);
        
        // Update SEO meta tags
        updateSEOMetaTags(currentCategoryFilter, currentPlatformFilter);
    });
});

// ===== Category Filter Functionality =====
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all category buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get category filter value and display products
        currentCategoryFilter = button.getAttribute('data-filter');
        displayProducts(currentCategoryFilter, currentPlatformFilter);
        
        // Update SEO meta tags
        updateSEOMetaTags(currentCategoryFilter, currentPlatformFilter);
    });
});

// ===== Category Cards Click =====
const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        
        // Scroll to products section
        const productsSection = document.getElementById('products');
        const offsetTop = productsSection.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        // Filter products after scroll
        setTimeout(() => {
            // Reset platform filter
            platformFilterButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-platform') === 'all') {
                    btn.classList.add('active');
                }
            });
            currentPlatformFilter = 'all';
            
            // Set category filter
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-filter') === category) {
                    btn.classList.add('active');
                }
            });
            currentCategoryFilter = category;
            displayProducts(category, 'all');
        }, 500);
    });
});

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show success message (you can customize this)
    alert('ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับโดยเร็วที่สุด');
    
    // Reset form
    contactForm.reset();
});

// ===== Scroll to Top Button =====
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.category-card, .feature-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// ===== Active Nav Link on Scroll =====
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== Performance Optimization =====
// Lazy loading images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Console message
console.log('%c🎉 Welcome to WeBeCommerce! 🎉', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cเว็บไซต์แนะนำสินค้าและบริการคุณภาพ', 'color: #ec4899; font-size: 14px;');


