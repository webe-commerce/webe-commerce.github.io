// ===== Products Data with Affiliate Links =====
// 🔥 วิธีการใช้งาน:
// 1. แก้ไขไฟล์ products.json เพื่ือเพิ่ม/แก้ไข/ลบสินค้า
// 2. แทนที่ affiliateLink ด้วยลิงก์ affiliate จริงของคุณจาก Shopee, Lazada, หรือ TikTok
// 3. platform: "shopee" | "lazada" | "tiktok" - ระบุแพลตฟอร์มที่สินค้ามาจาก
// 4. อัพเดท image, price, rating, reviews ให้ตรงกับสินค้าจริง

let productsData = [];

// Load products from JSON file
async function loadProducts() {
    try {
        const response = await fetch('products.json');
        if (!response.ok) {
            throw new Error('Failed to load products');
        }
        const data = await response.json();
        productsData = data.products;
        
        // Initialize displays after products are loaded
        displayProducts();
        displayBestSellers();
        generateProductStructuredData();
        
        console.log('✅ Products loaded successfully:', productsData.length, 'items');
    } catch (error) {
        console.error('❌ Error loading products:', error);
        // Fallback: Display error message
        productsGrid.innerHTML = '<div style="text-align: center; padding: 2rem; color: red;">ไม่สามารถโหลดข้อมูลสินค้าได้</div>';
        bestSellersGrid.innerHTML = '<div style="text-align: center; padding: 2rem; color: red;">ไม่สามารถโหลดข้อมูลสินค้าได้</div>';
    }
}

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
                <span class="platform-badge ${product.platform}" title="${platformInfo.name}">
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
                        <i class="fas fa-shopping-cart"></i> ซื้อเลย
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
        'books': 'อาหารและเครื่องดื่ม'
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

// ===== Best Sellers Display =====
const bestSellersGrid = document.getElementById('bestSellersGrid');
const totalProductCountEl = document.getElementById('totalProductCount');

function displayBestSellers() {
    // Get best selling products (based on badge "ขายดี", rating, and reviews)
    const bestSellers = productsData
        .filter(product => product.badge === 'ขายดี' || product.rating >= 4.7)
        .sort((a, b) => {
            // Sort by: 1) badge "ขายดี", 2) rating, 3) reviews
            if (a.badge === 'ขายดี' && b.badge !== 'ขายดี') return -1;
            if (a.badge !== 'ขายดี' && b.badge === 'ขายดี') return 1;
            if (b.rating !== a.rating) return b.rating - a.rating;
            return b.reviews - a.reviews;
        })
        .slice(0, 6); // Show top 6 products
    
    bestSellersGrid.innerHTML = bestSellers.map(product => createProductCard(product)).join('');
    
    // Update total product count
    if (totalProductCountEl) {
        totalProductCountEl.textContent = `(${productsData.length} รายการ)`;
    }
    
    // Add special animation to best sellers
    const cards = bestSellersGrid.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100 + 200);
    });
}

// Initialize products: Load from JSON file
loadProducts();

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
                    "name": "WeBeCommerce"
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
                        "name": "WeBeCommerce"
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

// ===== Platform Filter Functionality (Removed - Now category only) =====
// Platform filters removed for cleaner e-commerce experience
// Platform badges remain visible on product images only

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
        displayProducts(currentCategoryFilter, 'all'); // Always show all platforms
        
        // Update SEO meta tags
        updateSEOMetaTags(currentCategoryFilter, 'all');
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
const inquiryTypeEl = document.getElementById('inquiryType');
const ctaListProduct = document.getElementById('ctaListProduct');
const ctaPartner = document.getElementById('ctaPartner');
const ctaAdvertise = document.getElementById('ctaAdvertise');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inquiryType = (inquiryTypeEl && inquiryTypeEl.value) ? inquiryTypeEl.value : 'general';
    try {
        gtag('event', 'contact_submit', {
            'event_category': 'Engagement',
            'event_label': 'contact_form',
            'inquiry_type': inquiryType
        });
    } catch (err) {
        // no-op
    }
    
    // Show success message (you can customize this)
    alert('ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับโดยเร็วที่สุด');
    
    // Reset form
    contactForm.reset();
});

// Partner/Vendor CTA tracking
if (ctaListProduct) {
    ctaListProduct.addEventListener('click', () => {
        try {
            gtag('event', 'partner_interest', {
                'event_category': 'Engagement',
                'event_label': 'list_product'
            });
        } catch (err) {}
    });
}

if (ctaPartner) {
    ctaPartner.addEventListener('click', () => {
        try {
            gtag('event', 'partner_interest', {
                'event_category': 'Engagement',
                'event_label': 'partner_signup'
            });
        } catch (err) {}
    });
}

if (ctaAdvertise) {
    ctaAdvertise.addEventListener('click', () => {
        try {
            gtag('event', 'partner_interest', {
                'event_category': 'Engagement',
                'event_label': 'advertising'
            });
        } catch (err) {}
    });
}

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

// ===== Platform-specific navigation removed =====
// Website now focuses on general e-commerce experience
// Platform badges remain visible on product images for transparency

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


