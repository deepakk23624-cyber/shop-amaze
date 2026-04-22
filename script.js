// ============================================================
// AMAZE GARMENTS - script.js
// ============================================================

const WA_NUMBER = "919582243144";
const UPI_ID = "amazegarments@upi";

// ── Products Data ──────────────────────────────────────────
const products = [
  // Shirts
  { id: 1, cat: "shirt", name: "Classic Oxford Shirt", price: 1299, old: 1799, badge: "Best Seller", emoji: "👔", image: "shirt1.jpeg" },
  { id: 2, cat: "shirt", name: "Premium Linen Shirt", price: 1499, old: 1999, badge: "New", emoji: "🧥", image: "shirt2.jpeg" },
  { id: 3, cat: "shirt", name: "Slim Fit Formal Shirt", price: 1199, old: 1599, badge: null, emoji: "👔", image: "shirt3.jpeg" },
  { id: 4, cat: "shirt", name: "Casual Striped Shirt", price: 999, old: 1399, badge: "Sale", emoji: "🧥", image: "shirt4.jpeg" },

  // Jeans
  { id: 5, cat: "jeans", name: "Slim Fit Dark Jeans", price: 1699, old: 2299, badge: "Best Seller", emoji: "👖", image: "Component/jens1.jpeg" },
  { id: 6, cat: "jeans", name: "Straight Cut Denim", price: 1599, old: 2099, badge: "New", emoji: "👖", image: "Component/jeans2.jpeg" },
  { id: 7, cat: "jeans", name: "Tapered Slim Jeans", price: 1799, old: 2499, badge: null, emoji: "👖", image: "Component/jeans3.jpeg" },
  { id: 8, cat: "jeans", name: "Classic Indigo Denim", price: 1499, old: 1999, badge: "Sale", emoji: "👖", image: "Component/jeans4.jpeg" },

  // T-Shirts
  { id: 9, cat: "tshirt", name: "Premium Cotton Tee", price: 599, old: 899, badge: "Best Seller", emoji: "👕", image: "Component/tshirt11.jpeg" },
  { id: 10, cat: "tshirt", name: "Polo Collar T-Shirt", price: 799, old: 1099, badge: "New", emoji: "👕", image: "Component/tshirt22.jpeg" },
  { id: 11, cat: "tshirt", name: "Graphic Print Tee", price: 699, old: 999, badge: null, emoji: "👕", image: "Component/tshirt33.jpeg" },
  { id: 12, cat: "tshirt", name: "V-Neck Essential Tee", price: 549, old: 799, badge: "Sale", emoji: "👕", image: "Component/tshirt44.jpeg" },

  // Pants
  { id: 13, cat: "pants", name: "Slim Chino Trousers", price: 1399, old: 1899, badge: "Best Seller", emoji: "👕", image: "Component/pants1.jpeg" },
  { id: 14, cat: "pants", name: "Formal Dress Pants", price: 1599, old: 2199, badge: "New", emoji: "👔", image: "Component/pants2.jpeg" },
  { id: 15, cat: "pants", name: "Jogger Track Pants", price: 999, old: 1399, badge: null, emoji: "🩲", image: "Component/pants3.jpeg" },
  { id: 16, cat: "pants", name: "Wide Leg Trousers", price: 1299, old: 1799, badge: "Sale", emoji: "👕", image: "Component/pants4.jpeg" },
];

const catLabels = { shirt: "Shirts", jeans: "Jeans", tshirt: "T-Shirts", pants: "Pants" };

// ── Helpers ────────────────────────────────────────────────
function fmt(n) { return "₹" + n.toLocaleString("en-IN"); }
function stars() { return "★★★★★"; }

function buildWALink(p) {
  const msg = `Hello AMAZE GARMENTS! 👋\n\nI'd like to order:\n🛍️ *Product:* ${p.name}\n💰 *Price:* ${fmt(p.price)}\n\nPlease fill in my details:\n👤 *Name:*\n📏 *Size:* (S / M / L / XL / XXL)\n🔢 *Quantity:*\n🏠 *Address:*\n📍 *Pincode:*\n📞 *Phone:*\n\nUPI ID: ${UPI_ID}\nKindly share payment screenshot after payment.\n\nThank you! 🙏`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ── Render Products ────────────────────────────────────────
function renderProducts(filter = "all") {
  const grid = document.getElementById("products-grid");
  const filtered = filter === "all" ? products : products.filter(p => p.cat === filter);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card reveal" data-cat="${p.cat}">
      <div class="product-img">
        ${p.image ? `<img src="${p.image}" alt="${p.name}" class="product-img-src">` : `<div class="product-img-bg">${p.emoji}</div>`}
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
        <div class="product-actions">
          <button class="product-action-btn" title="Share" onclick="shareProduct(${p.id})">📤</button>
          <button class="product-action-btn" title="Wishlist" onclick="wishlist(this)">🤍</button>
        </div>
      </div>
      <div class="product-info">
        <p class="product-cat-label">${catLabels[p.cat]}</p>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-price-row">
          <div>
            <span class="product-price">${fmt(p.price)}</span>
            <span class="product-price-old">${fmt(p.old)}</span>
          </div>
          <div class="product-rating">${stars()}</div>
        </div>
        <a href="${buildWALink(p)}" target="_blank" rel="noopener" class="product-wa-btn">
          <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Order via WhatsApp
        </a>
      </div>
    </div>
  `).join("");

  // Trigger reveal after render
  requestAnimationFrame(() => {
    document.querySelectorAll("#products-grid .reveal").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), i * 60);
    });
  });
}

// ── Filter Tabs ────────────────────────────────────────────
function initFilters() {
  document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderProducts(tab.dataset.filter);
    });
  });
}

// ── Wishlist ───────────────────────────────────────────────
function wishlist(btn) {
  btn.textContent = btn.textContent === "🤍" ? "❤️" : "🤍";
  showNotification(btn.textContent === "❤️" ? "Added to wishlist!" : "Removed from wishlist");
}

// ── Share ──────────────────────────────────────────────────
function shareProduct(id) {
  const p = products.find(x => x.id === id);
  if (navigator.share) {
    navigator.share({ title: `${p.name} - AMAZE GARMENTS`, text: `Check out ${p.name} at ${fmt(p.price)}!`, url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => showNotification("Link copied!"));
  }
}

// ── Notifications ──────────────────────────────────────────
function showNotification(msg) {
  let el = document.querySelector(".notification");
  if (!el) {
    el = document.createElement("div");
    el.className = "notification";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove("show"), 3000);
}

// ── Copy UPI ───────────────────────────────────────────────
function copyUPI() {
  navigator.clipboard.writeText(UPI_ID).then(() => showNotification("UPI ID copied! ✅"));
}

// ── Search ─────────────────────────────────────────────────
function toggleSearch() {
  const bar = document.getElementById("search-bar");
  bar.classList.toggle("open");
  if (bar.classList.contains("open")) bar.querySelector("input").focus();
}

// ── Mobile Menu ────────────────────────────────────────────
function toggleMenu() {
  document.getElementById("mobile-menu").classList.toggle("open");
}

// ── Scroll Reveal ──────────────────────────────────────────
function initScrollReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll(".reveal:not(#products-grid .reveal)").forEach(el => io.observe(el));
}

// ── Sticky Navbar ──────────────────────────────────────────
function initNavbar() {
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });
}

// ── Category scroll ────────────────────────────────────────
function scrollToCategory(cat) {
  document.querySelector('[data-filter="' + cat + '"]').click();
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

// ── Intro Animation ────────────────────────────────────────
function runIntro() {
  const overlay = document.getElementById("intro-overlay");
  const navbar = document.getElementById("navbar");

  // Total animation: ~2.8s then fade out overlay and show navbar
  setTimeout(() => {
    overlay.style.transition = "opacity 0.8s ease";
    overlay.style.opacity = "0";
    navbar.classList.add("visible");

    setTimeout(() => overlay.classList.add("hidden"), 800);
  }, 2800);
}

// ── Cart (simple count) ────────────────────────────────────
let cartCount = 0;
function addToCart() {
  cartCount++;
  document.querySelector(".cart-count").textContent = cartCount;
  showNotification(`Cart updated (${cartCount} items)`);
}

// ── Init ───────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  runIntro();
  renderProducts();
  initFilters();
  initScrollReveal();
  initNavbar();

  // Search close on outside click
  document.addEventListener("click", e => {
    const bar = document.getElementById("search-bar");
    const btn = document.getElementById("search-btn");
    if (bar.classList.contains("open") && !bar.contains(e.target) && !btn.contains(e.target)) {
      bar.classList.remove("open");
    }
  });

  // Mobile menu close on link click
  document.querySelectorAll("#mobile-menu a").forEach(a =>
    a.addEventListener("click", () => document.getElementById("mobile-menu").classList.remove("open"))
  );
});
