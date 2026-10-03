const products = [
  // Rose Mala
  {
    id: 1,
    name: 'Classic Red Rose Mala',
    price: 'Rs 5,500',
    category: 'Rose Mala',
    image: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80',
    description: 'Beautiful traditional red rose mala with premium quality roses.',
    rating: 4.9,
    reviews: 245,
    details: 'Hand-strung with 50+ fresh red roses. Perfect for weddings and religious ceremonies.'
  },
  {
    id: 2,
    name: 'Pink Rose Mala',
    price: 'Rs 5,200',
    category: 'Rose Mala',
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80',
    description: 'Elegant pink rose mala for delicate celebrations.',
    rating: 4.8,
    reviews: 187,
    details: 'Freshly arranged with soft pink roses. Great for ladies and gentle occasions.'
  },
  {
    id: 3,
    name: 'White Rose Mala',
    price: 'Rs 5,300',
    category: 'Rose Mala',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80',
    description: 'Pure white rose mala for purity and elegance.',
    rating: 4.7,
    reviews: 156,
    details: 'Premium white roses hand-strung for spiritual and ceremonial purposes.'
  },
  {
    id: 4,
    name: 'Deep Crimson Rose Mala',
    price: 'Rs 6,200',
    category: 'Rose Mala',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=900&q=80',
    description: 'Rich deep crimson roses for special occasions.',
    rating: 4.9,
    reviews: 203,
    details: 'Luxurious crimson roses, perfectly suited for grand celebrations.'
  },
  
  // Tube Rose Mala
  {
    id: 5,
    name: 'Classic Tube Rose Mala',
    price: 'Rs 4,800',
    category: 'Tube Rose Mala',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    description: 'Fragrant tube rose mala with sweet aromatic flowers.',
    rating: 4.8,
    reviews: 198,
    details: 'Hand-strung with premium tube roses. Known for its beautiful fragrance.'
  },
  {
    id: 6,
    name: 'Premium Tube Rose Mala',
    price: 'Rs 5,500',
    category: 'Tube Rose Mala',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    description: 'Premium quality tube rose mala with extra full blooms.',
    rating: 4.9,
    reviews: 165,
    details: 'Made with the choicest tube roses for maximum fragrance and beauty.'
  },
  {
    id: 7,
    name: 'Delicate Tube Rose Mala',
    price: 'Rs 4,500',
    category: 'Tube Rose Mala',
    image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=900&q=80',
    description: 'Delicate and graceful tube rose mala.',
    rating: 4.7,
    reviews: 134,
    details: 'Shorter length mala, perfect for head and deity adorning.'
  },
  {
    id: 8,
    name: 'Fragrant Tube Rose Mala Long',
    price: 'Rs 6,000',
    category: 'Tube Rose Mala',
    image: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80',
    description: 'Extra long tube rose mala for multiple adorning uses.',
    rating: 4.8,
    reviews: 172,
    details: 'Extra length for versatile use in prayers and celebrations.'
  },
  
  // Mix Mala
  {
    id: 9,
    name: 'Rose & Jasmine Mix Mala',
    price: 'Rs 5,800',
    category: 'Mix Mala',
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80',
    description: 'Beautiful blend of roses and jasmine for a fragrant mix.',
    rating: 4.9,
    reviews: 211,
    details: 'Combines the elegance of roses with the sweet fragrance of jasmine.'
  },
  {
    id: 10,
    name: 'Rose & Tube Rose Mix Mala',
    price: 'Rs 6,500',
    category: 'Mix Mala',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80',
    description: 'Premium mix of roses and tube roses for ultimate elegance.',
    rating: 4.9,
    reviews: 189,
    details: 'The perfect combination of two premium flowers for special ceremonies.'
  },
  {
    id: 11,
    name: 'Rainbow Mix Mala',
    price: 'Rs 6,200',
    category: 'Mix Mala',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    description: 'Colorful mix of various flowers in one beautiful mala.',
    rating: 4.7,
    reviews: 145,
    details: 'Multi-colored arrangement with roses, jasmine, and tube roses.'
  },
  {
    id: 12,
    name: 'Deluxe Festival Mix Mala',
    price: 'Rs 7,500',
    category: 'Mix Mala',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=900&q=80',
    description: 'Premium deluxe mix mala for major festivals and celebrations.',
    rating: 4.8,
    reviews: 167,
    details: 'Luxurious blend of premium roses, tube roses, and specialty flowers.'
  },

  // Flower Bouquets
  {
    id: 13,
    name: 'Bunny Bouquet',
    price: 'Rs 10,800',
    category: 'Flower Bouquets',
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80',
    description: 'A charming bouquet with soft pink and white flowers arranged beautifully.',
    rating: 4.8,
    reviews: 124,
    details: 'Includes fresh roses, carnations, and baby\'s breath. Perfect for birthdays.'
  },
  {
    id: 14,
    name: 'Letter Rose Bouquet',
    price: 'Rs 21,000',
    category: 'Flower Bouquets',
    image: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80',
    description: 'Elegant arrangement of red roses forming a beautiful letter pattern.',
    rating: 4.9,
    reviews: 156,
    details: 'Premium quality red roses artfully arranged. Ideal for romantic occasions.'
  },
  {
    id: 15,
    name: 'Tropical Paradise',
    price: 'Rs 12,900',
    category: 'Flower Bouquets',
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80',
    description: 'Exotic tropical flowers in a vibrant arrangement.',
    rating: 4.7,
    reviews: 94,
    details: 'Featuring exotic flowers like birds of paradise and orchids.'
  },
  {
    id: 16,
    name: 'Premium Mixed Rose & White Lily Bouquet',
    price: 'Rs 8,300',
    category: 'Flower Bouquets',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80',
    description: 'A stunning mix of white lilies and colorful roses in an elegant arrangement.',
    rating: 4.7,
    reviews: 98,
    details: 'Fresh lilies and premium roses combined for a sophisticated look.'
  },

  // Lily Arrangements
  {
    id: 17,
    name: 'White Lily Dream',
    price: 'Rs 9,500',
    category: 'Lily Arrangements',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80',
    description: 'Pure white lilies arranged in an elegant composition.',
    rating: 4.8,
    reviews: 108,
    details: 'Hand-arranged white lilies for serene and graceful occasions.'
  },
  {
    id: 18,
    name: 'Orange Lily Elegance',
    price: 'Rs 11,200',
    category: 'Lily Arrangements',
    image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=900&q=80',
    description: 'Vibrant orange lilies creating a warm and welcoming arrangement.',
    rating: 4.7,
    reviews: 85,
    details: 'Perfect for celebrations and joyful occasions.'
  },
  {
    id: 19,
    name: 'Pink Lily Bliss',
    price: 'Rs 10,500',
    category: 'Lily Arrangements',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    description: 'Soft pink lilies arranged for delicate beauty.',
    rating: 4.6,
    reviews: 76,
    details: 'Ideal for romantic occasions and celebrations.'
  },
  {
    id: 20,
    name: 'Exotic Lily Mix',
    price: 'Rs 13,800',
    category: 'Lily Arrangements',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    description: 'Mix of exotic lily varieties in one stunning arrangement.',
    rating: 4.8,
    reviews: 119,
    details: 'A combination of different lily colors for maximum visual impact.'
  },

  // Mixed Flower Bouquets
  {
    id: 21,
    name: 'Garden Dream',
    price: 'Rs 11,500',
    category: 'Mixed Flower Bouquets',
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80',
    description: 'A beautiful mix of garden flowers in soft pastels.',
    rating: 4.7,
    reviews: 102,
    details: 'Includes roses, carnations, and daisies in a lovely arrangement.'
  },
  {
    id: 22,
    name: 'Vibrant Celebration',
    price: 'Rs 14,200',
    category: 'Mixed Flower Bouquets',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=900&q=80',
    description: 'Colorful mix of bright flowers for celebrations.',
    rating: 4.8,
    reviews: 145,
    details: 'A vibrant arrangement perfect for any festive occasion.'
  },
  {
    id: 23,
    name: 'Sunset Harmony',
    price: 'Rs 12,800',
    category: 'Mixed Flower Bouquets',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    description: 'Warm sunset tones with mixed flowers.',
    rating: 4.6,
    reviews: 87,
    details: 'Orange, yellow, and red flowers creating a warm ambiance.'
  },
  {
    id: 24,
    name: 'Rainbow Splendor',
    price: 'Rs 15,500',
    category: 'Mixed Flower Bouquets',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80',
    description: 'Multi-colored flowers in a stunning rainbow arrangement.',
    rating: 4.9,
    reviews: 178,
    details: 'A spectacular mix of flowers in every color of the rainbow.'
  },

  // Bestseller
  {
    id: 25,
    name: 'Blossom Romance',
    price: 'Rs 12,500',
    category: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    description: 'Our most popular bouquet with romantic pink and red tones.',
    rating: 4.9,
    reviews: 287,
    details: 'Best seller! A perfect blend of romance and elegance.'
  },
  {
    id: 26,
    name: 'Velvet Celebration',
    price: 'Rs 18,600',
    category: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=900&q=80',
    description: 'Deep red velvet roses in a luxurious arrangement.',
    rating: 4.8,
    reviews: 201,
    details: 'Premium velvet roses hand-arranged for maximum impact.'
  },
  {
    id: 27,
    name: 'Birthday Sunshine',
    price: 'Rs 11,200',
    category: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    description: 'Bright and cheerful birthday arrangement with sunny colors.',
    rating: 4.6,
    reviews: 165,
    details: 'Vibrant flowers that will brighten up any birthday celebration.'
  },
  {
    id: 28,
    name: 'Wedding Dreams',
    price: 'Rs 24,500',
    category: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80',
    description: 'Luxurious bridal bouquet for the perfect day.',
    rating: 4.9,
    reviews: 198,
    details: 'Premium arrangement perfect for weddings and engagements.'
  },

  // Special Gifts
  {
    id: 29,
    name: 'Golden Meadow',
    price: 'Rs 15,200',
    category: 'Special Gifts',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    description: 'Warm golden and yellow flowers creating a cheerful arrangement.',
    rating: 4.6,
    reviews: 87,
    details: 'Perfect for spreading joy and happiness on special occasions.'
  },
  {
    id: 30,
    name: 'Fairy Bloom Box',
    price: 'Rs 13,800',
    category: 'Special Gifts',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80',
    description: 'Magical arrangement in a luxury gift box.',
    rating: 4.8,
    reviews: 143,
    details: 'Beautifully packaged in a luxury box perfect for special gifts.'
  },
  {
    id: 31,
    name: 'Petal Glow Basket',
    price: 'Rs 9,400',
    category: 'Special Gifts',
    image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=900&q=80',
    description: 'Beautiful flower arrangement in an elegant gift basket.',
    rating: 4.7,
    reviews: 112,
    details: 'Beautifully arranged in a premium woven basket, ready to gift.'
  },
  {
    id: 32,
    name: 'Sympathy Grace',
    price: 'Rs 16,800',
    category: 'Special Gifts',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=900&q=80',
    description: 'Elegant and respectful arrangement for tender moments.',
    rating: 4.9,
    reviews: 203,
    details: 'Tastefully arranged with white and soft-colored flowers.'
  },

  // Birthday Bouquets
  {
    id: 33,
    name: 'Colorful Birthday Bash',
    price: 'Rs 10,500',
    category: 'Birthday Bouquets',
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80',
    description: 'Bright and fun bouquet perfect for birthday celebrations.',
    rating: 4.7,
    reviews: 95,
    details: 'Multi-colored flowers with balloons and ribbons.'
  },
  {
    id: 34,
    name: 'Sweet Sixteen Special',
    price: 'Rs 9,900',
    category: 'Birthday Bouquets',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    description: 'Special arrangement for sweet sixteen celebrations.',
    rating: 4.6,
    reviews: 72,
    details: 'Pink and white flowers arranged beautifully with ribbons.'
  },
  {
    id: 35,
    name: 'Golden Birthday',
    price: 'Rs 13,200',
    category: 'Birthday Bouquets',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=900&q=80',
    description: 'Luxurious gold-themed birthday bouquet.',
    rating: 4.8,
    reviews: 118,
    details: 'Golden and cream flowers for a premium birthday gift.'
  },
  {
    id: 36,
    name: 'Fun Party Bloom',
    price: 'Rs 11,600',
    category: 'Birthday Bouquets',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80',
    description: 'Cheerful and playful arrangement for birthday parties.',
    rating: 4.7,
    reviews: 89,
    details: 'Vibrant colors with special birthday embellishments.'
  },

  // Anniversary Bouquets
  {
    id: 37,
    name: 'Anniversary Bliss',
    price: 'Rs 14,500',
    category: 'Anniversary Bouquets',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    description: 'Perfect for celebrating years of love and companionship.',
    rating: 4.7,
    reviews: 89,
    details: 'Traditionally beautiful arrangement ideal for anniversaries.'
  },
  {
    id: 38,
    name: 'Golden Years Romance',
    price: 'Rs 16,200',
    category: 'Anniversary Bouquets',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=900&q=80',
    description: 'Elegant arrangement celebrating decades of togetherness.',
    rating: 4.8,
    reviews: 134,
    details: 'Gold and cream roses for celebrating golden anniversaries.'
  },
  {
    id: 39,
    name: 'Love\'s Forever Bloom',
    price: 'Rs 13,900',
    category: 'Anniversary Bouquets',
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80',
    description: 'Beautiful arrangement symbolizing eternal love.',
    rating: 4.9,
    reviews: 156,
    details: 'Red and pink roses arranged to symbolize lasting love.'
  },
  {
    id: 40,
    name: 'Silver Celebration',
    price: 'Rs 15,800',
    category: 'Anniversary Bouquets',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    description: 'Sophisticated arrangement for silver anniversaries.',
    rating: 4.8,
    reviews: 112,
    details: 'Silver and white flowers with premium arrangement.'
  }
];

const sidebarCategories = [
  { name: 'All Products', icon: '🌸' },
  { name: 'Rose Mala', icon: '🌹' },
  { name: 'Tube Rose Mala', icon: '🌼' },
  { name: 'Mix Mala', icon: '🌺' },
  { name: 'Flower Bouquets', icon: '🌷' },
  { name: 'Lily Arrangements', icon: '💐' },
  { name: 'Mixed Flower Bouquets', icon: '🌻' },
  { name: 'Bestseller', icon: '⭐' },
  { name: 'Special Gifts', icon: '🎁' },
  { name: 'Birthday Bouquets', icon: '🎉' },
  { name: 'Anniversary Bouquets', icon: '💍' }
];

// State management
let currentPage = 'catalog';
let selectedCategory = 'All Products';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentProductDetail = null;

// Initialize page
function init() {
  renderHeader();
  renderCatalogPage();
}

function renderHeader() {
  const existingHeader = document.querySelector('header');
  if (existingHeader) return;

  const header = document.createElement('header');
  header.className = 'site-header container';
  header.innerHTML = `
    <div class="brand-wrap">
      <a href="index.html" style="text-decoration: none; display: flex; align-items: center; gap: 16px;">
        <div class="logo-mark" aria-label="Fresh Flower Shop logo">
          <div class="logo-circle"></div>
          <div class="smile"></div>
          <div class="leaf leaf-one"></div>
          <div class="leaf leaf-two"></div>
        </div>
        <div class="brand-text">
          <h1>The Fresh Flower Shop</h1>
          <p>Bringing Happiness</p>
        </div>
      </a>
    </div>

    <div class="header-utility">
      <div class="search-box">
        <input id="searchInput" type="text" placeholder="Search for products" />
        <button class="search-btn" aria-label="Search">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 2a8 8 0 105.17 13.67l4.45 4.46 1.41-1.41-4.46-4.45A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" /></svg>
        </button>
      </div>

      <div class="account-tools">
        <a href="about.html" class="nav-link-btn">About</a>
        <a href="customer-center.html" class="nav-link-btn">Support</a>
        <button class="login-btn">Login/Register</button>
        <button class="cart-btn" id="cartBtn" aria-label="Cart">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18a2 2 0 110 4 2 2 0 010-4zm10 0a2 2 0 110 4 2 2 0 010-4zM6.2 6h14.01l-1.55 7.49a2 2 0 01-1.98 1.61H9.16a2 2 0 01-1.98-1.61L5.01 3H2V1h4.05l.55 2.5H20a1 1 0 01.98 1.14L19.24 11H7.38L7 12.06l.04.01 1.12 1.05h9.38v2H8.5a2 2 0 01-1.97-1.58L6.2 6z"/></svg>
          <span class="cart-count">${cart.length}</span>
        </button>
      </div>
    </div>
  `;
  document.body.insertBefore(header, document.body.firstChild);

  // Add event listeners
  document.getElementById('cartBtn').addEventListener('click', () => {
    window.location.href = 'cart.html';
  });

  document.getElementById('searchInput').addEventListener('input', handleSearch);
}

function renderCatalogPage() {
  const main = document.querySelector('main') || createMainElement();
  main.innerHTML = `
    <div class="catalog container">
      <aside class="sidebar" aria-label="Product categories">
        <ul class="sidebar-list" id="sidebarList"></ul>
      </aside>

      <section class="product-panel">
        <div class="toolbar">
          <button type="button" data-menu-toggle aria-label="Open category menu" aria-expanded="false">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" /></svg>
          </button>
          <div class=\"breadcrumbs\">Home / <span id=\"currentCat\">All Products</span></div>

          <div class="toolbar-right">
            <div class="page-indicator">Show: <strong id="showCount">12</strong> / <strong>${products.length}</strong></div>
            <div class="view-toggle" aria-label="View options">
              <button class="view-btn active" data-view="grid" type="button" aria-label="Grid view">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h7v7H4zm9 0h7v7h-7zm-9 9h7v7H4zm9 0h7v7h-7z"/></svg>
              </button>
              <button class="view-btn" data-view="list" type="button" aria-label="List view">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
              </button>
            </div>
          </div>
        </div>

        <div class="product-grid" id="productGrid"></div>
      </section>
    </div>
  `;

  renderSidebar();
  renderProducts();
  setupSidebarMenu();

  // Add event listeners
  document.querySelectorAll('.view-btn').forEach((btn) => {
    btn.addEventListener('click', () => toggleView(btn));
  });
}

function setupSidebarMenu() {
  const catalog = document.querySelector('.catalog');
  const sidebar = catalog?.querySelector('.sidebar');
  const menuToggle = catalog?.querySelector('[data-menu-toggle]');
  if (!catalog || !sidebar || !menuToggle) return;

  const mobileBreakpoint = window.matchMedia('(max-width: 750px)');
  let previousBodyOverflow = '';

  function updateDesktopState() {
    const expanded = catalog.dataset.sidebarCollapsed !== 'true';
    sidebar.setAttribute('aria-hidden', String(!expanded));
    menuToggle.setAttribute('aria-expanded', String(expanded));
    menuToggle.setAttribute('aria-label', `${expanded ? 'Collapse' : 'Expand'} category menu`);
  }

  function closeMobileMenu(restoreFocus = false) {
    if (catalog.dataset.mobileMenuOpen !== 'true') return;
    delete catalog.dataset.mobileMenuOpen;
    delete document.body.dataset.mobileMenuOpen;
    document.body.style.overflow = previousBodyOverflow;
    sidebar.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open category menu');
    if (restoreFocus) menuToggle.focus();
  }

  function openMobileMenu() {
    previousBodyOverflow = document.body.style.overflow;
    catalog.dataset.mobileMenuOpen = 'true';
    document.body.dataset.mobileMenuOpen = 'true';
    document.body.style.overflow = 'hidden';
    sidebar.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close category menu');
    sidebar.querySelector('.sidebar-item, a')?.focus();
  }

  function syncBreakpoint() {
    if (mobileBreakpoint.matches) {
      closeMobileMenu();
      delete catalog.dataset.sidebarCollapsed;
      sidebar.setAttribute('aria-hidden', 'true');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open category menu');
    } else {
      closeMobileMenu();
      updateDesktopState();
    }
  }

  menuToggle.addEventListener('click', () => {
    if (mobileBreakpoint.matches) {
      if (catalog.dataset.mobileMenuOpen === 'true') closeMobileMenu();
      else openMobileMenu();
      return;
    }

    catalog.dataset.sidebarCollapsed = String(catalog.dataset.sidebarCollapsed !== 'true');
    updateDesktopState();
  });

  sidebar.addEventListener('click', (event) => {
    if (event.target.closest('.sidebar-item, a')) closeMobileMenu(true);
  });

  document.addEventListener('click', (event) => {
    if (
      catalog.dataset.mobileMenuOpen === 'true' &&
      !sidebar.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMobileMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (catalog.dataset.mobileMenuOpen === 'true') closeMobileMenu(true);
    else if (!mobileBreakpoint.matches && catalog.dataset.sidebarCollapsed === 'true') {
      delete catalog.dataset.sidebarCollapsed;
      updateDesktopState();
      menuToggle.focus();
    }
  });

  mobileBreakpoint.addEventListener('change', syncBreakpoint);
  window.addEventListener('resize', syncBreakpoint);
  syncBreakpoint();
}

function createMainElement() {
  const main = document.createElement('main');
  main.className = 'main-content';
  document.body.appendChild(main);
  return main;
}

function renderSidebar() {
  const sidebarList = document.getElementById('sidebarList');
  if (!sidebarList) return;

  sidebarList.innerHTML = sidebarCategories
    .map(
      (cat) => `
        <li>
          <button
            class="sidebar-item ${cat.name === selectedCategory ? 'active' : ''}"
            type="button"
            data-category="${cat.name}"
          >
            <span class="cat-icon">${cat.icon}</span>
            ${cat.name}
          </button>
        </li>
      `
    )
    .join('');

  sidebarList.addEventListener('click', (e) => {
    const btn = e.target.closest('.sidebar-item');
    if (btn) {
      selectedCategory = btn.dataset.category;
      document.querySelectorAll('.sidebar-item').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('currentCat').textContent = selectedCategory;
      renderProducts();
    }
  });
}

function renderProducts() {
  const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return;

  let filtered = products.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All Products' ||
      p.category === selectedCategory ||
      p.name.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = p.name.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  document.getElementById('showCount').textContent = filtered.length;

  productGrid.innerHTML = filtered
    .map(
      (product) => `
        <article class="product-card" data-product-id="${product.id}">
          <img src="${product.image}" alt="${product.name}" />
          <div class="info">
            <div class="rating">
              <span class="stars">★★★★★</span>
              <span class="review-count">(${product.reviews})</span>
            </div>
            <h3>${product.name}</h3>
            <div class="price">${product.price}</div>
            <button class="view-details-btn" data-id="${product.id}">View Details</button>
          </div>
        </article>
      `
    )
    .join('');

  // Add click handlers for product cards
  document.querySelectorAll('.view-details-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id);
      const product = products.find((p) => p.id === productId);
      showProductDetail(product);
    });
  });

  document.querySelectorAll('.product-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.view-details-btn')) {
        const productId = parseInt(card.dataset.productId);
        const product = products.find((p) => p.id === productId);
        showProductDetail(product);
      }
    });
  });
}

function showProductDetail(product) {
  currentProductDetail = product;
  const main = document.querySelector('main');
  main.innerHTML = `
    <div class="container product-detail-page">
      <button class="back-btn" onclick="renderCatalogPage()">← Back to Catalog</button>
      
      <div class="product-detail">
        <div class="product-image-section">
          <img src="${product.image}" alt="${product.name}" class="product-image" />
        </div>
        
        <div class="product-info-section">
          <h1>${product.name}</h1>
          
          <div class="rating-section">
            <div class="stars-display">★★★★★</div>
            <span class="rating-value">${product.rating}</span>
            <span class="review-count">${product.reviews} reviews</span>
          </div>
          
          <div class="price-section">
            <div class="price-large">${product.price}</div>
            <p class="description">${product.description}</p>
          </div>
          
          <div class="details-section">
            <h3>Product Details</h3>
            <p>${product.details}</p>
          </div>
          
          <div class="quantity-section">
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" min="1" value="1" />
          </div>
          
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

function handleSearch(e) {
  const searchTerm = e.target.value;
  renderProducts();
}

function toggleView(btn) {
  document.querySelectorAll('.view-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  // Could add different view styles here in CSS
}

function addToCart(productId) {
  const quantity = parseInt(document.getElementById('quantity').value) || 1;
  const product = products.find((p) => p.id === productId);

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${product.name} added to cart!`);
  renderCatalogPage();
}

function updateCartCount() {
  const cartBtn = document.getElementById('cartBtn');
  if (cartBtn) {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBtn.querySelector('.cart-count').textContent = count;
  }
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
