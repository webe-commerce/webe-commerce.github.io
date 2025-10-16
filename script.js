// ===== Sample Products Data =====
const productsData = [
    {
        id: 1,
        title: "สมาร์ทโฟนรุ่นใหม่ล่าสุด",
        description: "สมาร์ทโฟนสเปคแรง กล้องคมชัด แบตอึด",
        price: "฿15,990",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
        rating: 4.8,
        reviews: 156,
        badge: "ขายดี",
        affiliateLink: "#"
    },
    {
        id: 2,
        title: "แล็ปท็อปสำหรับทำงาน",
        description: "ประสิทธิภาพสูง เหมาะกับการทำงาน",
        price: "฿32,990",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
        rating: 4.9,
        reviews: 203,
        badge: "แนะนำ",
        affiliateLink: "#"
    },
    {
        id: 3,
        title: "เสื้อยืดแฟชั่น",
        description: "เสื้อยืดคุณภาพดี ใส่สบาย",
        price: "฿399",
        category: "fashion",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
        rating: 4.5,
        reviews: 89,
        badge: "",
        affiliateLink: "#"
    },
    {
        id: 4,
        title: "รองเท้าผ้าใบสไตล์สปอร์ต",
        description: "รองเท้าสปอร์ตน้ำหนักเบา สวมใส่สบาย",
        price: "฿1,990",
        category: "fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
        rating: 4.7,
        reviews: 234,
        badge: "ขายดี",
        affiliateLink: "#"
    },
    {
        id: 5,
        title: "โซฟาสำหรับห้องนั่งเล่น",
        description: "โซฟาสไตล์โมเดิร์น นั่งสบาย",
        price: "฿12,990",
        category: "home",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop",
        rating: 4.6,
        reviews: 67,
        badge: "",
        affiliateLink: "#"
    },
    {
        id: 6,
        title: "โคมไฟตกแต่ง",
        description: "โคมไฟสวยงาม เพิ่มบรรยากาศในบ้าน",
        price: "฿890",
        category: "home",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
        rating: 4.4,
        reviews: 45,
        badge: "",
        affiliateLink: "#"
    },
    {
        id: 7,
        title: "เซรั่มบำรุงผิวหน้า",
        description: "เซรั่มบำรุงผิว ให้ผิวเนียนนุ่ม",
        price: "฿1,290",
        category: "beauty",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop",
        rating: 4.8,
        reviews: 312,
        badge: "แนะนำ",
        affiliateLink: "#"
    },
    {
        id: 8,
        title: "ลิปสติกสีสวย",
        description: "ลิปสติกเนื้อแมท ติดทนนาน",
        price: "฿390",
        category: "beauty",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=500&fit=crop",
        rating: 4.6,
        reviews: 178,
        badge: "ขายดี",
        affiliateLink: "#"
    },
    {
        id: 9,
        title: "ดัมเบลสำหรับออกกำลังกาย",
        description: "ดัมเบลปรับน้ำหนักได้ ใช้งานง่าย",
        price: "฿2,490",
        category: "sports",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=500&fit=crop",
        rating: 4.5,
        reviews: 92,
        badge: "",
        affiliateLink: "#"
    },
    {
        id: 10,
        title: "เสื่อโยคะ",
        description: "เสื่อโยคะกันลื่น หนานุ่ม",
        price: "฿590",
        category: "sports",
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
        rating: 4.7,
        reviews: 145,
        badge: "",
        affiliateLink: "#"
    },
    {
        id: 11,
        title: "หนังสือพัฒนาตนเอง",
        description: "หนังสือเสริมแรงบันดาลใจ",
        price: "฿299",
        category: "books",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop",
        rating: 4.9,
        reviews: 267,
        badge: "แนะนำ",
        affiliateLink: "#"
    },
    {
        id: 12,
        title: "คอร์สออนไลน์ Digital Marketing",
        description: "คอร์สเรียนออนไลน์ เนื้อหาครบถ้วน",
        price: "฿1,990",
        category: "books",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=500&fit=crop",
        rating: 4.8,
        reviews: 189,
        badge: "ขายดี",
        affiliateLink: "#"
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
let currentFilter = 'all';

function createProductCard(product) {
    return `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
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
                        ดูสินค้า <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
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

function displayProducts(filter = 'all') {
    const filteredProducts = filter === 'all' 
        ? productsData 
        : productsData.filter(product => product.category === filter);
    
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

// ===== Filter Functionality =====
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value and display products
        const filter = button.getAttribute('data-filter');
        currentFilter = filter;
        displayProducts(filter);
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
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-filter') === category) {
                    btn.classList.add('active');
                }
            });
            displayProducts(category);
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


