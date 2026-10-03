const products = [
  {
    name: 'Bunny bouquet',
    price: 'Rs 10,800',
    category: 'Flower Bouquets',
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Letter Rose Bouquet',
    price: 'Rs 21,000',
    category: 'Flower Bouquets',
    image: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Premium Mixed Rose & White Lily Bouquet',
    price: 'Rs 8,300',
    category: 'Flower Bouquets',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Blossom Romance',
    price: 'Rs 12,500',
    category: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Golden Meadow',
    price: 'Rs 15,200',
    category: 'Special Gifts',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Petal Glow Basket',
    price: 'Rs 9,400',
    category: 'Gift Bundles',
    image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Velvet Celebration',
    price: 'Rs 18,600',
    category: 'Flower Bouquets',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Sunrise Ribbon',
    price: 'Rs 7,900',
    category: 'Gift Bundles',
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Fairy Bloom Box',
    price: 'Rs 13,800',
    category: 'Special Gifts',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80'
  }
];

const sidebarCategories = [
  'All Bouquets',
  'Flower Bouquets',
  'Rose Bouquets',
  'Lily Arrangements',
  'Mixed Flower Bouquets',
  'Seasonal Bouquets',
  'Romantic Collections',
  'Premium Arrangements',
  'Birthday Bouquets',
  'Anniversary Bouquets',
  'Sympathy Flowers'
];

const productGrid = document.getElementById('productGrid');
const sidebarList = document.getElementById('sidebarList');
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const showCount = document.getElementById('showCount');

let selectedSidebar = 'All Bouquets';
let currentView = 'grid';

function renderSidebar() {
  sidebarList.innerHTML = sidebarCategories
    .map(
      (item) => `
        <li>
          <button
            class="sidebar-item ${item === selectedSidebar ? 'active' : ''}"
            type="button"
            data-category="${item}"
          >
            ${item}
          </button>
        </li>
      `
    )
    .join('');
}

function renderProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCategory = categorySelect.value;

  const filteredProducts = products.filter((product) => {
    const matchesSidebar = selectedSidebar === 'Alluring Gifts' || product.category === selectedSidebar || product.category === 'Flower Bouquets';
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);
    const matchesSelect = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSidebar && matchesSearch && matchesSelect;
  });

  showCount.textContent = filteredProducts.length;

  productGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card ${currentView === 'list' ? 'list-view' : ''}">
          <img src="${product.image}" alt="${product.name}" />
          <div class="info">
            <h3>${product.name}</h3>
            <div class="price">${product.price}</div>
          </div>
        </article>
      `
    )
    .join('');

  if (!filteredProducts.length) {
    productGrid.innerHTML = '<div class="empty-state">No products match your search.</div>';
  }
}

sidebarList.addEventListener('click', (e) => {
  const button = e.target.closest('.sidebar-item');
  if (!button) return;

  selectedSidebar = button.dataset.category;
  renderSidebar();
  renderProducts();
});

searchInput.addEventListener('input', renderProducts);

categorySelect.addEventListener('change', renderProducts);

document.querySelectorAll('.view-btn').forEach((button) => {
  button.addEventListener('click', () => {
    currentView = button.dataset.view;
    document.querySelectorAll('.view-btn').forEach((btn) => btn.classList.toggle('active', btn === button));
    renderProducts();
  });
});

document.querySelector('.login-btn').addEventListener('click', () => {
  alert('Login/Register is ready for integration.');
});

document.querySelector('.filter-btn').addEventListener('click', () => {
  alert('Filters panel can be added here.');
});

renderSidebar();
renderProducts();
