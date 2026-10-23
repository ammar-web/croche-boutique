/**
 * THE CROCHET BOUTIQUE (@croche_boutiq)
 * Modern Glassmorphism Web Application
 * Modular JavaScript Application Logic
 */

// ============================================================================
// 1. DEFAULT CATALOG - 100% AUTHENTIC @croche_boutiq INSTAGRAM POSTS
// ============================================================================
const DEFAULT_INSTA_PRODUCTS = [
  {
    id: 1,
    title: "Signature Bohemian Crochet Tote Bag",
    category: "bags",
    price: 1499,
    image: "assets/images/croche_01.jpg",
    fallbackImage: "images/croche_01.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Handcrafted with premium milk cotton yarn. Features intricate textured stitches, sturdy reinforced double handles, and spacious interior for your everyday essentials.",
    material: "100% Milk Cotton Yarn",
    care: "Hand wash gently with mild detergent. Dry flat in shade.",
    dimensions: "34cm x 30cm x 8cm",
    stock: "In Stock (Handmade to Order)",
    featured: true,
    isInstaOriginal: true
  },
  {
    id: 2,
    title: "Cozy Winter Woolen Infinity Scarf & Muffler",
    category: "scarves",
    price: 899,
    image: "assets/images/croche_02.jpg",
    fallbackImage: "images/croche_02.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Plush, cloud-soft woolen infinity scarf to keep you warm throughout the chilly winter season. Luxurious drape and hypoallergenic soft-touch texture.",
    material: "Ultra-Soft Acrylic Wool Blend",
    care: "Spot clean or hand wash cold. Do not wring.",
    dimensions: "160cm length x 22cm width",
    stock: "In Stock",
    featured: true,
    isInstaOriginal: true
  },
  {
    id: 3,
    title: "Pastel Petal Baby Romper & Bonnet Set",
    category: "rompers",
    price: 1299,
    image: "assets/images/croche_03.jpg",
    fallbackImage: "images/croche_03.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Delicate and breathable newborn baby romper with matching bonnet. Tailored with feather-soft baby yarn that is completely gentle on sensitive baby skin.",
    material: "100% Organic Bamboo/Cotton Baby Yarn",
    care: "Gentle baby wash cycle or hand wash. Lay flat.",
    dimensions: "Available in 0-3M, 3-6M, 6-12M sizes",
    stock: "Custom Sized to Order",
    featured: true,
    isInstaOriginal: true
  },
  {
    id: 4,
    title: "Boho Crochet Summer Beach Halter Top",
    category: "beachwear",
    price: 1199,
    image: "assets/images/croche_04.jpg",
    fallbackImage: "images/croche_04.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Sun-kissed bohemian halter crop top perfect for beach days, summer getaways, and music festivals. Features adjustable criss-cross lace-up back ties.",
    material: "Pure Mercerized Breathable Cotton",
    care: "Hand wash cold, reshape, lay flat to dry.",
    dimensions: "Custom bust sizing: XS, S, M, L",
    stock: "In Stock",
    featured: true,
    isInstaOriginal: true
  },
  {
    id: 5,
    title: "Artisanal Daisy Flower Keychain & Bag Charm",
    category: "accessories",
    price: 349,
    image: "assets/images/croche_05.jpg",
    fallbackImage: "images/croche_05.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Charming handcrafted crochet floral keychain with gold lobster clasp. The sweetest accessory to elevate your keys, backpack, or boutique handbag.",
    material: "Cotton Yarn with Antique Gold Clasp",
    care: "Spot clean with damp cloth.",
    dimensions: "12cm total length",
    stock: "In Stock",
    featured: false,
    isInstaOriginal: true
  },
  {
    id: 6,
    title: "French Market Mesh Net Shoulder Bag",
    category: "bags",
    price: 1399,
    image: "assets/images/croche_06.jpg",
    fallbackImage: "images/croche_06.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Eco-friendly, lightweight yet incredibly sturdy open-mesh crochet market bag. Expands comfortably to carry groceries, books, or beach towels.",
    material: "100% Recycled Cotton Cord",
    care: "Machine washable in laundry mesh bag.",
    dimensions: "38cm x 36cm (stretchable)",
    stock: "In Stock",
    featured: true,
    isInstaOriginal: true
  },
  {
    id: 7,
    title: "Cable-Knit Woolen Beanie & Ear Warmer Set",
    category: "scarves",
    price: 999,
    image: "assets/images/croche_07.jpg",
    fallbackImage: "images/croche_07.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Hand-knit chunky ribbed beanie topped with cozy ribbed brim. Provides exceptional warmth without itchiness.",
    material: "Super-Soft Acrylic Wool",
    care: "Hand wash cold, dry flat.",
    dimensions: "One size fits all (stretchable)",
    stock: "In Stock",
    featured: false,
    isInstaOriginal: true
  },
  {
    id: 8,
    title: "Honeycomb Textured Baby Summer Romper",
    category: "rompers",
    price: 1349,
    image: "assets/images/croche_08.jpg",
    fallbackImage: "images/croche_08.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Adorned with wooden buttons and intricate textured stitches. Breathable and comfortable for baby milestones and family photoshoots.",
    material: "100% Combed Cotton Baby Thread",
    care: "Hand wash cold. Iron on low if needed.",
    dimensions: "Sizes: 3M, 6M, 12M",
    stock: "In Stock",
    featured: true,
    isInstaOriginal: true
  },
  {
    id: 9,
    title: "Artisanal Granny Square Crossbody Bag",
    category: "bags",
    price: 1599,
    image: "assets/images/croche_09.jpg",
    fallbackImage: "images/croche_09.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Vibrant retro granny squares woven together by hand. Features a lined fabric inner and magnetic snap closure.",
    material: "Multi-Color Mercerized Cotton",
    care: "Spot clean only.",
    dimensions: "24cm x 20cm x 6cm",
    stock: "Limited Edition Handcraft",
    featured: true,
    isInstaOriginal: true
  },
  {
    id: 10,
    title: "Seaside Crochet Bikini Cover-Up Shrug",
    category: "beachwear",
    price: 1449,
    image: "assets/images/croche_10.jpg",
    fallbackImage: "images/croche_10.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Lightweight, airy bell-sleeve crochet shrug designed to slip gracefully over swimwear or summer slip dresses.",
    material: "Featherweight Cotton Lace Yarn",
    care: "Hand wash cold and dry in shade.",
    dimensions: "Free size (Oversized comfortable fit)",
    stock: "In Stock",
    featured: false,
    isInstaOriginal: true
  },
  {
    id: 11,
    title: "Chunky Ribbed Neck Warmer & Cowl",
    category: "scarves",
    price: 799,
    image: "assets/images/croche_11.jpg",
    fallbackImage: "images/croche_11.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Snug and modern cowl scarf that slips comfortably around the neck without loose dangling ends.",
    material: "Chunky Acrylic Wool",
    care: "Hand wash gently.",
    dimensions: "50cm circumference x 25cm height",
    stock: "In Stock",
    featured: false,
    isInstaOriginal: true
  },
  {
    id: 12,
    title: "Baby Bear Ears Hand-Knitted Bonnet & Booties",
    category: "rompers",
    price: 899,
    image: "assets/images/croche_12.jpg",
    fallbackImage: "images/croche_12.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Irresistibly cute teddy bear ear bonnet with matching soft-soled crochet booties for newborn keepsakes.",
    material: "Hypoallergenic Organic Cotton",
    care: "Hand wash cold.",
    dimensions: "0-6 Months",
    stock: "In Stock",
    featured: true,
    isInstaOriginal: true
  },
  {
    id: 13,
    title: "Pastel Velvet Touch Hair Scrunchie Duo",
    category: "accessories",
    price: 299,
    image: "assets/images/croche_13.jpg",
    fallbackImage: "images/croche_13.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Gentle on your hair with zero snagging or creasing. Hand-crocheted around premium elastic bands.",
    material: "Chenille Velvet Yarn",
    care: "Hand wash gently in lukewarm water.",
    dimensions: "10cm diameter",
    stock: "In Stock",
    featured: false,
    isInstaOriginal: true
  },
  {
    id: 14,
    title: "Miniature Crochet Coin Purse & Pouch",
    category: "accessories",
    price: 499,
    image: "assets/images/croche_14.jpg",
    fallbackImage: "images/croche_14.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Cute vintage kiss-lock coin purse with textured popcorn stitches. Fits coins, lip gloss, and AirPods.",
    material: "Cotton Thread with Metal Frame",
    care: "Wipe with soft damp cloth.",
    dimensions: "10cm x 8cm",
    stock: "In Stock",
    featured: false,
    isInstaOriginal: true
  },
  {
    id: 15,
    title: "Vintage Rosette Crochet Headband & Ear Warmer",
    category: "accessories",
    price: 450,
    image: "assets/images/croche_15.jpg",
    fallbackImage: "images/croche_15.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Romantic crochet headband with a delicate rosette flower accent. Keeps hair neat and ears cozy.",
    material: "Soft Wool Blend",
    care: "Hand wash cold.",
    dimensions: "Elastic stretch fit",
    stock: "In Stock",
    featured: false,
    isInstaOriginal: true
  },
  {
    id: 16,
    title: "Cozy Alpaca-Soft Winter Fringe Muffler",
    category: "scarves",
    price: 1099,
    image: "assets/images/croche_16.jpg",
    fallbackImage: "images/croche_16.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Long woolen muffler finished with lavish handmade fringe tassels. Perfect companion for cold morning strolls.",
    material: "Premium Brushed Acrylic Yarn",
    care: "Dry flat, comb fringes gently.",
    dimensions: "180cm x 24cm + tassels",
    stock: "In Stock",
    featured: false,
    isInstaOriginal: true
  },
  {
    id: 17,
    title: "Pastel Blossom Table Coasters (Set of 4)",
    category: "accessories",
    price: 599,
    image: "assets/images/croche_17.jpg",
    fallbackImage: "images/croche_17.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Bring handmade charm to your coffee table. Absorbent, heat-resistant floral crochet coasters.",
    material: "100% Thick Cotton Cord",
    care: "Hand or gentle machine wash.",
    dimensions: "12cm diameter each",
    stock: "In Stock",
    featured: false,
    isInstaOriginal: true
  },
  {
    id: 18,
    title: "Summer Breeze Crochet Crop Halter",
    category: "beachwear",
    price: 1250,
    image: "assets/images/croche_18.jpg",
    fallbackImage: "images/croche_18.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Flattering scallop-edged crochet halter with intricate diamond filigree. Fully customizable in your favorite colors.",
    material: "100% Breathable Cotton",
    care: "Hand wash cold.",
    dimensions: "Custom sizing on request",
    stock: "In Stock",
    featured: false,
    isInstaOriginal: true
  },
  {
    id: 19,
    title: "Sunflower Handcrafted Pocket Pouch",
    category: "accessories",
    price: 549,
    image: "assets/images/croche_19.jpg",
    fallbackImage: "images/croche_19.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Bright and cheerful sunflower motif pouch with drawstring closure. Ideal for jewelry, cosmetics, or earphones.",
    material: "Mercerized Cotton Thread",
    care: "Hand wash gently.",
    dimensions: "14cm x 12cm",
    stock: "In Stock",
    featured: false,
    isInstaOriginal: true
  },
  {
    id: 20,
    title: "Lilac Dreams Woolen Triangle Shawl",
    category: "scarves",
    price: 1399,
    image: "assets/images/croche_20.jpg",
    fallbackImage: "images/croche_20.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Graceful triangle wrap shawl with open lace stitches and fringed edges. Drapes elegantly over evening wear.",
    material: "Soft Mohair/Acrylic Blend",
    care: "Hand wash cold, dry flat.",
    dimensions: "150cm wingspan x 75cm depth",
    stock: "In Stock",
    featured: false,
    isInstaOriginal: true
  },
  {
    id: 21,
    title: "Coastal Shell-Stitch Shoulder Tote",
    category: "bags",
    price: 1699,
    image: "assets/images/croche_21.jpg",
    fallbackImage: "images/croche_21.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Signature textured shell stitches giving structural body and elegance. Lined with organic cotton fabric.",
    material: "Premium Braided Cotton Cord",
    care: "Spot clean or gentle hand wash.",
    dimensions: "36cm x 32cm x 10cm",
    stock: "In Stock",
    featured: true,
    isInstaOriginal: true
  },
  {
    id: 22,
    title: "Newborn Milestone Crochet Dungaree Set",
    category: "rompers",
    price: 1499,
    image: "assets/images/croche_22.jpg",
    fallbackImage: "images/croche_22.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Heritage dungaree style romper with adjustable straps and soft booties. A keepsake baby shower present.",
    material: "100% Anti-Pilling Baby Yarn",
    care: "Gentle baby wash.",
    dimensions: "0-3 Months & 3-6 Months",
    stock: "In Stock",
    featured: false,
    isInstaOriginal: true
  },
  {
    id: 23,
    title: "Festival Fringe Boho Mini Sling Bag",
    category: "bags",
    price: 1199,
    image: "assets/images/croche_23.jpg",
    fallbackImage: "images/croche_23.jpg",
    instaPost: "@croche_boutiq original post",
    desc: "Compact sling bag with cascading boho fringes and braided strap. Perfect for hands-free outings.",
    material: "Natural Cotton Cord",
    care: "Spot clean with mild damp cloth.",
    dimensions: "18cm x 16cm with 110cm strap",
    stock: "In Stock",
    featured: false,
    isInstaOriginal: true
  }
];

// ============================================================================
// 2. APPLICATION STATE & STORAGE ENGINE
// ============================================================================
class CrochetBoutiqueApp {
  constructor() {
    this.CURRENCY_RATES = {
      INR: { symbol: "₹", rate: 1.0 },
      USD: { symbol: "$", rate: 0.012 },
      EUR: { symbol: "€", rate: 0.011 },
      GBP: { symbol: "£", rate: 0.0095 }
    };

    // Staged batch upload array for Owner / Manager (Limit: 50)
    this.stagedUploads = [];
    this.MAX_UPLOAD_LIMIT = 50;

    // Load or initialize state
    this.loadCatalog();
    this.loadUser();
    this.loadCart();
    this.loadWishlist();

    this.currentCurrency = localStorage.getItem("croche_currency") || "INR";
    this.currentCategory = "all";
    this.currentSort = "featured";
    this.searchQuery = "";
    this.appliedCoupon = null;

    // Initialize UI and Event Listeners
    this.initDOM();
    this.render();
  }

  // ---------- Storage Loaders ----------
  loadCatalog() {
    try {
      const stored = localStorage.getItem("croche_boutique_catalog_v2");
      if (stored) {
        this.catalog = JSON.parse(stored);
      } else {
        this.catalog = [...DEFAULT_INSTA_PRODUCTS];
        this.saveCatalog();
      }
    } catch (e) {
      console.warn("Error reading catalog storage:", e);
      this.catalog = [...DEFAULT_INSTA_PRODUCTS];
    }
  }

  saveCatalog() {
    try {
      localStorage.setItem("croche_boutique_catalog_v2", JSON.stringify(this.catalog));
    } catch (e) {
      console.error("Storage save failed (storage may be full):", e);
      this.showToast("Local storage quota limit reached. Consider removing some uploaded photos.", "warning");
    }
  }

  loadUser() {
    const stored = localStorage.getItem("croche_current_user");
    if (stored) {
      try {
        this.currentUser = JSON.parse(stored);
      } catch {
        this.currentUser = { role: "guest", name: "Guest", email: "" };
      }
    } else {
      this.currentUser = { role: "guest", name: "Guest", email: "" };
    }
  }

  saveUser() {
    localStorage.setItem("croche_current_user", JSON.stringify(this.currentUser));
  }

  loadCart() {
    try {
      const stored = localStorage.getItem("croche_cart");
      this.cart = stored ? JSON.parse(stored) : [];
    } catch {
      this.cart = [];
    }
  }

  saveCart() {
    localStorage.setItem("croche_cart", JSON.stringify(this.cart));
  }

  loadWishlist() {
    try {
      const stored = localStorage.getItem("croche_wishlist");
      this.wishlist = stored ? JSON.parse(stored) : [];
    } catch {
      this.wishlist = [];
    }
  }

  saveWishlist() {
    localStorage.setItem("croche_wishlist", JSON.stringify(this.wishlist));
  }

  // ============================================================================
  // 3. DOM ELEMENT REFERENCES & EVENT BINDINGS
  // ============================================================================
  initDOM() {
    // Navigation & Sidebar
    this.sidebar = document.getElementById("appSidebar");
    this.sidebarOverlay = document.getElementById("sidebarOverlay");
    this.sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
    this.closeSidebarBtn = document.getElementById("closeSidebarBtn");
    
    // Auth & Roles
    this.userAuthBtn = document.getElementById("userAuthBtn");
    this.userAuthLabel = document.getElementById("userAuthLabel");
    this.authModal = document.getElementById("authModal");
    this.studioQuickBtn = document.getElementById("studioQuickBtn");
    this.sidebarOwnerSection = document.getElementById("sidebarOwnerSection");
    this.openUploadModalBtn = document.getElementById("openUploadModalBtn");
    this.studioPortalSection = document.getElementById("studioPortalSection");
    this.closeStudioBtn = document.getElementById("closeStudioBtn");
    this.sidebarRoleBadge = document.getElementById("sidebarRoleBadge");
    this.sidebarRoleDesc = document.getElementById("sidebarRoleDesc");
    this.sidebarLoginBtn = document.getElementById("sidebarLoginBtn");
    this.footerRoleStatus = document.getElementById("footerRoleStatus");

    // Currency & Theme
    this.currencySelector = document.getElementById("currencySelector");
    this.themeToggleBtn = document.getElementById("themeToggleBtn");

    // Cart & Wishlist
    this.cartBtn = document.getElementById("cartBtn");
    this.cartDrawer = document.getElementById("cartDrawer");
    this.cartDrawerOverlay = document.getElementById("cartDrawerOverlay");
    this.closeCartBtn = document.getElementById("closeCartBtn");
    this.cartCount = document.getElementById("cartCount");
    this.cartItemsBadge = document.getElementById("cartItemsBadge");
    this.cartItemsList = document.getElementById("cartItemsList");
    this.emptyCartView = document.getElementById("emptyCartView");
    this.cartFooter = document.getElementById("cartFooter");
    this.cartSubtotal = document.getElementById("cartSubtotal");
    this.cartDiscount = document.getElementById("cartDiscount");
    this.discountRow = document.getElementById("discountRow");
    this.cartTotal = document.getElementById("cartTotal");
    this.couponCodeInput = document.getElementById("couponCodeInput");
    this.shippingProgressBar = document.getElementById("shippingProgressBar");
    this.shippingProgressLabel = document.getElementById("shippingProgressLabel");

    this.wishlistBtn = document.getElementById("wishlistBtn");
    this.wishlistModal = document.getElementById("wishlistModal");
    this.wishlistCount = document.getElementById("wishlistCount");
    this.wishlistGrid = document.getElementById("wishlistGrid");
    this.emptyWishlist = document.getElementById("emptyWishlist");

    // Catalog & Filter
    this.productGrid = document.getElementById("productGrid");
    this.emptyState = document.getElementById("emptyState");
    this.searchInput = document.getElementById("searchInput");
    this.clearSearchBtn = document.getElementById("clearSearchBtn");
    this.sortSelector = document.getElementById("sortSelector");
    this.countAll = document.getElementById("countAll");

    // Studio & 50-Image Upload
    this.multiImageInput = document.getElementById("multiImageInput");
    this.dropZone = document.getElementById("dropZone");
    this.stagedContainer = document.getElementById("stagedContainer");
    this.stagedGrid = document.getElementById("stagedGrid");
    this.stagedCountBadge = document.getElementById("stagedCountBadge");
    this.uploadAlert = document.getElementById("uploadAlert");
    this.uploadAlertText = document.getElementById("uploadAlertText");
    this.clearStagedBtn = document.getElementById("clearStagedBtn");
    this.publishBatchBtn = document.getElementById("publishBatchBtn");
    this.publishCountText = document.getElementById("publishCountText");
    this.inventoryTableBody = document.getElementById("inventoryTableBody");
    this.statTotalCatalog = document.getElementById("statTotalCatalog");
    this.statTotalUploads = document.getElementById("statTotalUploads");
    this.exportCatalogBtn = document.getElementById("exportCatalogBtn");
    this.resetCatalogBtn = document.getElementById("resetCatalogBtn");

    // Forms
    this.loginForm = document.getElementById("loginForm");
    this.signupForm = document.getElementById("signupForm");
    this.customOrderForm = document.getElementById("customOrderForm");

    // Quick View
    this.quickViewModal = document.getElementById("quickViewModal");
    this.quickViewContent = document.getElementById("quickViewContent");

    this.bindEvents();
  }

  bindEvents() {
    // Sidebar
    this.sidebarToggleBtn?.addEventListener("click", () => this.toggleSidebar(true));
    this.closeSidebarBtn?.addEventListener("click", () => this.toggleSidebar(false));
    this.sidebarOverlay?.addEventListener("click", () => this.toggleSidebar(false));

    // Studio links in sidebar
    document.getElementById("sidebarOpenStudioBtn")?.addEventListener("click", () => {
      this.toggleSidebar(false);
      this.openStudioPortal();
    });
    document.getElementById("sidebarManageCatalogBtn")?.addEventListener("click", () => {
      this.toggleSidebar(false);
      this.openStudioPortal();
      document.querySelector(".manage-inventory-wrapper")?.scrollIntoView({ behavior: "smooth" });
    });

    // Theme toggle
    this.themeToggleBtn?.addEventListener("click", () => this.toggleTheme());

    // Currency Switcher
    if (this.currencySelector) {
      this.currencySelector.value = this.currentCurrency;
      this.currencySelector.addEventListener("change", (e) => {
        this.setCurrency(e.target.value);
      });
    }

    // Auth
    this.userAuthBtn?.addEventListener("click", () => this.openAuthModal());
    this.sidebarLoginBtn?.addEventListener("click", () => {
      this.toggleSidebar(false);
      this.openAuthModal();
    });

    this.loginForm?.addEventListener("submit", (e) => this.handleLogin(e));
    this.signupForm?.addEventListener("submit", (e) => this.handleSignup(e));

    // Studio Open / Close
    this.studioQuickBtn?.addEventListener("click", () => this.openStudioPortal());
    this.openUploadModalBtn?.addEventListener("click", () => this.openStudioPortal());
    this.closeStudioBtn?.addEventListener("click", () => this.closeStudioPortal());

    // Cart
    this.cartBtn?.addEventListener("click", () => this.toggleCart(true));
    this.closeCartBtn?.addEventListener("click", () => this.toggleCart(false));
    this.cartDrawerOverlay?.addEventListener("click", () => this.toggleCart(false));

    // Wishlist
    this.wishlistBtn?.addEventListener("click", () => this.openWishlistModal());

    // Search & Filter
    this.searchInput?.addEventListener("input", (e) => {
      this.searchQuery = e.target.value.toLowerCase().trim();
      this.clearSearchBtn?.classList.toggle("hidden", this.searchQuery === "");
      this.renderProducts();
    });

    this.clearSearchBtn?.addEventListener("click", () => {
      if (this.searchInput) this.searchInput.value = "";
      this.searchQuery = "";
      this.clearSearchBtn.classList.add("hidden");
      this.renderProducts();
    });

    this.sortSelector?.addEventListener("change", (e) => {
      this.currentSort = e.target.value;
      this.renderProducts();
    });

    // Filter pills
    document.querySelectorAll(".filter-pill").forEach(pill => {
      pill.addEventListener("click", (e) => {
        document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.currentCategory = pill.dataset.filter;
        this.renderProducts();
      });
    });

    // Story bar filters
    document.querySelectorAll(".story-item[data-category]").forEach(story => {
      story.addEventListener("click", () => {
        const cat = story.dataset.category;
        document.querySelectorAll(".story-item").forEach(s => s.classList.remove("active"));
        story.classList.add("active");
        this.filterByCategory(cat);
      });
    });

    // Sidebar Category buttons
    document.querySelectorAll(".sidebar-category-tags button").forEach(btn => {
      btn.addEventListener("click", () => {
        this.toggleSidebar(false);
        this.filterByCategory(btn.dataset.category);
      });
    });

    // 50-Image Upload Handlers
    this.initUploadHandlers();

    // Custom Order Form
    this.customOrderForm?.addEventListener("submit", (e) => this.handleCustomOrder(e));

    // Export & Reset
    this.exportCatalogBtn?.addEventListener("click", () => this.exportCatalogJSON());
    this.resetCatalogBtn?.addEventListener("click", () => this.resetCatalogToDefault());
  }

  // ============================================================================
  // 4. IMAGE UPLOAD SYSTEM - WITH STRICT LIMIT OF 50 PICS PER BATCH
  // ============================================================================
  initUploadHandlers() {
    if (!this.multiImageInput || !this.dropZone) return;

    // File input change
    this.multiImageInput.addEventListener("change", (e) => {
      this.handleSelectedFiles(Array.from(e.target.files));
      this.multiImageInput.value = ""; // reset so same files can be re-selected if needed
    });

    // Drag and Drop
    ["dragenter", "dragover"].forEach(eventName => {
      this.dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.dropZone.classList.add("dragover");
      });
    });

    ["dragleave", "drop"].forEach(eventName => {
      this.dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.dropZone.classList.remove("dragover");
      });
    });

    this.dropZone.addEventListener("drop", (e) => {
      const dt = e.dataTransfer;
      if (dt && dt.files && dt.files.length > 0) {
        this.handleSelectedFiles(Array.from(dt.files));
      }
    });

    // Clear staged files
    this.clearStagedBtn?.addEventListener("click", () => {
      this.stagedUploads = [];
      this.renderStagedPreviews();
      this.hideUploadAlert();
      this.showToast("Cleared staged upload photos.", "info");
    });

    // Publish Batch Button
    this.publishBatchBtn?.addEventListener("click", () => this.publishStagedBatch());
  }

  handleSelectedFiles(newFiles) {
    const validImageFiles = newFiles.filter(file => file.type.startsWith("image/"));
    
    if (validImageFiles.length === 0) {
      this.showUploadAlert("Please select valid image files (.jpg, .jpeg, .png, .webp).");
      return;
    }

    const availableSlots = this.MAX_UPLOAD_LIMIT - this.stagedUploads.length;

    // STRICT CHECK FOR 50 PICTURES LIMIT
    if (this.stagedUploads.length + validImageFiles.length > this.MAX_UPLOAD_LIMIT) {
      this.showUploadAlert(
        `Upload limit enforced: You selected ${validImageFiles.length} photos, but you can only stage up to ${this.MAX_UPLOAD_LIMIT} pictures at a time. (Available slots remaining: ${availableSlots}). Adding the first ${availableSlots} photos.`
      );
      this.showToast(`Batch limit reached: Maximum ${this.MAX_UPLOAD_LIMIT} pictures allowed per batch!`, "warning");
    } else {
      this.hideUploadAlert();
    }

    const filesToProcess = validImageFiles.slice(0, availableSlots);

    // Read and compress each image for local persistence
    let processedCount = 0;
    filesToProcess.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.compressImage(e.target.result, 1000, 1000, 0.85, (compressedDataUrl) => {
          this.stagedUploads.push({
            id: Date.now() + Math.random().toString(36).substring(2, 9),
            name: file.name,
            sizeKb: Math.round(file.size / 1024),
            dataUrl: compressedDataUrl
          });

          processedCount++;
          if (processedCount === filesToProcess.length) {
            this.renderStagedPreviews();
            this.showToast(`Added ${filesToProcess.length} photos to staging (Total: ${this.stagedUploads.length}/50).`, "success");
          }
        });
      };
      reader.readAsDataURL(file);
    });
  }

  // Canvas-based image compressor to ensure efficient localStorage storage
  compressImage(src, maxWidth, maxHeight, quality, callback) {
    const img = new Image();
    img.onload = () => {
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      callback(canvas.toDataURL("image/jpeg", quality));
    };
    img.src = src;
  }

  showUploadAlert(message) {
    if (this.uploadAlert && this.uploadAlertText) {
      this.uploadAlertText.textContent = message;
      this.uploadAlert.classList.remove("hidden");
    }
  }

  hideUploadAlert() {
    if (this.uploadAlert) {
      this.uploadAlert.classList.add("hidden");
    }
  }

  renderStagedPreviews() {
    if (!this.stagedContainer || !this.stagedGrid) return;

    const count = this.stagedUploads.length;
    this.stagedCountBadge.textContent = `${count} / ${this.MAX_UPLOAD_LIMIT}`;
    this.publishCountText.textContent = count;

    if (count === 0) {
      this.stagedContainer.classList.add("hidden");
      this.stagedGrid.innerHTML = "";
      return;
    }

    this.stagedContainer.classList.remove("hidden");
    this.stagedGrid.innerHTML = this.stagedUploads.map((item, idx) => `
      <div class="staged-thumb-card">
        <img src="${item.dataUrl}" alt="Staged photo ${idx + 1}">
        <span class="staged-thumb-index">#${idx + 1}</span>
        <button type="button" class="btn-remove-staged" title="Remove photo" onclick="app.removeStagedItem('${item.id}')">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `).join("");
  }

  removeStagedItem(id) {
    this.stagedUploads = this.stagedUploads.filter(item => item.id !== id);
    this.renderStagedPreviews();
    if (this.stagedUploads.length < this.MAX_UPLOAD_LIMIT) {
      this.hideUploadAlert();
    }
  }

  publishStagedBatch() {
    if (this.stagedUploads.length === 0) {
      this.showToast("Please stage at least one picture first.", "warning");
      return;
    }

    if (this.stagedUploads.length > this.MAX_UPLOAD_LIMIT) {
      this.showToast(`Cannot upload more than ${this.MAX_UPLOAD_LIMIT} pictures at once!`, "error");
      return;
    }

    // Collect batch metadata
    const titlePrefix = document.getElementById("batchTitle")?.value.trim() || "Handmade Boutique Creation";
    const category = document.getElementById("batchCategory")?.value || "bags";
    const priceVal = parseFloat(document.getElementById("batchPrice")?.value) || 1299;
    const desc = document.getElementById("batchDesc")?.value.trim() || 
      "Authentic handcrafted creation made with soft, high-grade yarn. Custom handmade by store owner.";

    // Convert each staged item into a catalog product
    const newProducts = this.stagedUploads.map((item, idx) => {
      const itemTitle = this.stagedUploads.length === 1 
        ? titlePrefix 
        : `${titlePrefix} (Piece #${idx + 1})`;

      return {
        id: Date.now() + idx,
        title: itemTitle,
        category: category,
        price: priceVal,
        image: item.dataUrl,
        fallbackImage: item.dataUrl,
        instaPost: "Owner Uploaded Creation",
        desc: desc,
        material: "Handcrafted Premium Yarn",
        care: "Hand wash gently with mild detergent. Dry flat.",
        dimensions: "Custom Handmade Sizing",
        stock: "In Stock (Owner Listed)",
        featured: false,
        isUploaded: true
      };
    });

    // Prepend new products to catalog so they appear first!
    this.catalog = [...newProducts, ...this.catalog];
    this.saveCatalog();

    const uploadedCount = this.stagedUploads.length;
    this.stagedUploads = [];
    this.renderStagedPreviews();

    // Reset input fields
    if (document.getElementById("batchTitle")) document.getElementById("batchTitle").value = "";
    if (document.getElementById("batchPrice")) document.getElementById("batchPrice").value = "";
    if (document.getElementById("batchDesc")) document.getElementById("batchDesc").value = "";

    // Update catalog view and notify
    this.render();
    this.showToast(`🎉 Successfully published ${uploadedCount} new photos directly to your boutique catalog!`, "success");

    // Close studio and scroll smoothly to shop
    setTimeout(() => {
      this.closeStudioPortal();
      location.href = "#shop";
    }, 600);
  }

  // ============================================================================
  // 5. INVENTORY & CATALOG MANAGEMENT (FOR OWNER / MANAGER)
  // ============================================================================
  renderInventoryTable() {
    if (!this.inventoryTableBody) return;

    const total = this.catalog.length;
    const uploads = this.catalog.filter(p => p.isUploaded).length;

    if (this.statTotalCatalog) this.statTotalCatalog.textContent = total;
    if (this.statTotalUploads) this.statTotalUploads.textContent = uploads;

    this.inventoryTableBody.innerHTML = this.catalog.map(prod => `
      <tr>
        <td>
          <img src="${prod.image}" alt="${prod.title}" class="inv-img-thumb" onerror="this.src='${prod.fallbackImage || 'assets/images/croche_01.jpg'}'">
        </td>
        <td>
          <strong>${prod.title}</strong>
        </td>
        <td>
          <span class="cat-count">${prod.category}</span>
        </td>
        <td>
          <strong>${this.formatCurrency(prod.price)}</strong>
        </td>
        <td>
          <span class="inv-source-tag ${prod.isUploaded ? 'source-upload' : 'source-insta'}">
            ${prod.isUploaded ? 'Owner Upload' : '@croche_boutiq'}
          </span>
        </td>
        <td>
          <button class="glass-btn-sm" onclick="app.editProductPrice(${prod.id})" title="Edit Price">
            <i class="fa-solid fa-pen"></i> Edit
          </button>
          <button class="glass-btn-sm text-danger" onclick="app.deleteProduct(${prod.id})" title="Delete Product">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    `).join("");
  }

  editProductPrice(id) {
    const prod = this.catalog.find(p => p.id === id);
    if (!prod) return;

    const newPriceStr = prompt(`Enter new base price (in ₹ INR) for "${prod.title}":`, prod.price);
    if (newPriceStr !== null) {
      const newPrice = parseFloat(newPriceStr);
      if (!isNaN(newPrice) && newPrice > 0) {
        prod.price = newPrice;
        this.saveCatalog();
        this.render();
        this.showToast(`Updated price for "${prod.title}" to ${this.formatCurrency(newPrice)}.`, "success");
      } else {
        this.showToast("Please enter a valid price amount.", "warning");
      }
    }
  }

  deleteProduct(id) {
    const prod = this.catalog.find(p => p.id === id);
    if (!prod) return;

    if (confirm(`Are you sure you want to delete "${prod.title}" from the boutique?`)) {
      this.catalog = this.catalog.filter(p => p.id !== id);
      this.saveCatalog();
      this.render();
      this.showToast(`Removed "${prod.title}" from catalog.`, "info");
    }
  }

  exportCatalogJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.catalog, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `croche_boutique_catalog_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    this.showToast("Catalog backup downloaded as JSON.", "success");
  }

  resetCatalogToDefault() {
    if (confirm("Reset catalog back to the original 23 Instagram photos? Any uploaded images will be removed.")) {
      this.catalog = [...DEFAULT_INSTA_PRODUCTS];
      this.saveCatalog();
      this.render();
      this.showToast("Catalog reset to original 23 @croche_boutiq Instagram photos.", "info");
    }
  }

  // ============================================================================
  // 6. AUTHENTICATION & ROLE-BASED ACCESS
  // ============================================================================
  openAuthModal() {
    this.authModal?.classList.remove("hidden");
  }

  closeAuthModal() {
    this.authModal?.classList.add("hidden");
  }

  switchAuthTab(tabName) {
    document.querySelectorAll(".auth-tab").forEach(tab => {
      tab.classList.toggle("active", tab.dataset.tab === tabName);
    });

    if (this.loginForm) this.loginForm.classList.toggle("hidden", tabName !== "login");
    if (this.signupForm) this.signupForm.classList.toggle("hidden", tabName !== "signup");
    const demoBox = document.getElementById("demoAuthContent");
    if (demoBox) demoBox.classList.toggle("hidden", tabName !== "demo");
  }

  handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const role = document.getElementById("loginRoleSelect").value;
    
    let name = "Boutique Member";
    if (role === "owner") name = "Store Owner (@croche_boutiq)";
    else if (role === "manager") name = "Boutique Manager";
    else name = email.split("@")[0] || "Shopper";

    this.setCurrentUser({ role, name, email });
    this.closeAuthModal();
    this.showToast(`Logged in successfully as ${name} (${role.toUpperCase()})!`, "success");
  }

  handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim().toLowerCase();

    this.setCurrentUser({ role: "customer", name, email });
    this.closeAuthModal();
    this.showToast(`Welcome to The Crochet Boutique, ${name}!`, "success");
  }

  loginAsDemo(role) {
    const personas = {
      owner: { role: "owner", name: "Store Owner", email: "owner@crocheboutique.com" },
      manager: { role: "manager", name: "Store Manager", email: "manager@crocheboutique.com" },
      customer: { role: "customer", name: "Priya Sharma", email: "customer@example.com" }
    };

    const user = personas[role] || personas.customer;
    this.setCurrentUser(user);
    this.closeAuthModal();
    this.showToast(`Switched account to demo persona: ${user.name} (${role.toUpperCase()})!`, "success");
  }

  setCurrentUser(user) {
    this.currentUser = user;
    this.saveUser();
    this.updateUserUI();
  }

  logout() {
    this.currentUser = { role: "guest", name: "Guest", email: "" };
    this.saveUser();
    this.updateUserUI();
    this.closeStudioPortal();
    this.showToast("Logged out of account. Browsing as Guest.", "info");
  }

  updateUserUI() {
    const isOwner = this.currentUser.role === "owner";
    const isManager = this.currentUser.role === "manager";
    const hasAdminAccess = isOwner || isManager;

    // Update Navbar buttons
    if (this.userAuthLabel) {
      if (this.currentUser.role === "guest") {
        this.userAuthLabel.textContent = "Login";
      } else {
        this.userAuthLabel.textContent = this.currentUser.name.split(" ")[0];
      }
    }

    // Toggle Studio Shortcut buttons
    this.studioQuickBtn?.classList.toggle("hidden", !hasAdminAccess);
    this.sidebarOwnerSection?.classList.toggle("hidden", !hasAdminAccess);
    this.openUploadModalBtn?.classList.toggle("hidden", !hasAdminAccess);

    // Update Sidebar Role Badge
    if (this.sidebarRoleBadge) {
      let icon = "fa-user";
      let title = "Browsing as Guest";
      if (isOwner) { icon = "fa-crown"; title = "👑 Store Owner"; }
      else if (isManager) { icon = "fa-user-gear"; title = "⚙️ Store Manager"; }
      else if (this.currentUser.role === "customer") { icon = "fa-heart"; title = `🛍️ ${this.currentUser.name}`; }

      this.sidebarRoleBadge.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${title}</span>`;
    }

    if (this.sidebarRoleDesc) {
      if (hasAdminAccess) {
        this.sidebarRoleDesc.textContent = "Access granted: Upload up to 50 photos, edit prices & manage catalog.";
      } else {
        this.sidebarRoleDesc.textContent = "Enjoy shopping hand-knitted creations with custom order options.";
      }
    }

    if (this.footerRoleStatus) {
      this.footerRoleStatus.innerHTML = `<span>Role: ${this.currentUser.role.toUpperCase()} (${this.currentUser.name})</span>`;
    }

    // Update user auth button click behavior
    if (this.currentUser.role !== "guest") {
      this.userAuthBtn.onclick = () => {
        if (confirm(`Logged in as ${this.currentUser.name} (${this.currentUser.role}). Do you want to log out or switch account?`)) {
          this.logout();
        }
      };
    } else {
      this.userAuthBtn.onclick = () => this.openAuthModal();
    }
  }

  openStudioPortal() {
    if (this.currentUser.role !== "owner" && this.currentUser.role !== "manager") {
      this.showToast("Please log in as Store Owner or Manager to access the Studio.", "warning");
      this.openAuthModal();
      this.switchAuthTab("demo");
      return;
    }
    this.studioPortalSection?.classList.remove("hidden");
    this.studioPortalSection?.scrollIntoView({ behavior: "smooth" });
    this.renderInventoryTable();
  }

  closeStudioPortal() {
    this.studioPortalSection?.classList.add("hidden");
  }

  // ============================================================================
  // 7. CATALOG RENDERING, FILTERING & CURRENCY
  // ============================================================================
  setCurrency(currencyCode) {
    if (this.CURRENCY_RATES[currencyCode]) {
      this.currentCurrency = currencyCode;
      localStorage.setItem("croche_currency", currencyCode);
      this.render();
      this.showToast(`Currency changed to ${currencyCode}`, "info");
    }
  }

  formatCurrency(basePriceINR) {
    const info = this.CURRENCY_RATES[this.currentCurrency] || this.CURRENCY_RATES.INR;
    const converted = Math.round(basePriceINR * info.rate);
    return `${info.symbol}${converted.toLocaleString()}`;
  }

  filterByCategory(category) {
    this.currentCategory = category;
    document.querySelectorAll(".filter-pill").forEach(pill => {
      pill.classList.toggle("active", pill.dataset.filter === category);
    });
    this.renderProducts();
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  }

  resetFilters() {
    this.currentCategory = "all";
    this.searchQuery = "";
    if (this.searchInput) this.searchInput.value = "";
    this.clearSearchBtn?.classList.add("hidden");
    document.querySelectorAll(".filter-pill").forEach(p => p.classList.toggle("active", p.dataset.filter === "all"));
    this.renderProducts();
  }

  renderProducts() {
    if (!this.productGrid) return;

    let filtered = [...this.catalog];

    // Filter by category
    if (this.currentCategory === "uploaded") {
      filtered = filtered.filter(p => p.isUploaded);
    } else if (this.currentCategory !== "all") {
      filtered = filtered.filter(p => p.category === this.currentCategory);
    }

    // Filter by search query
    if (this.searchQuery) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(this.searchQuery) ||
        p.category.toLowerCase().includes(this.searchQuery) ||
        p.desc.toLowerCase().includes(this.searchQuery)
      );
    }

    // Sort
    if (this.currentSort === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.currentSort === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (this.currentSort === "name") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // featured
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    // Update counts
    if (this.countAll) this.countAll.textContent = this.catalog.length;

    if (filtered.length === 0) {
      this.productGrid.innerHTML = "";
      this.emptyState?.classList.remove("hidden");
      return;
    }

    this.emptyState?.classList.add("hidden");

    this.productGrid.innerHTML = filtered.map(prod => {
      const isWishlisted = this.wishlist.some(id => id === prod.id);
      const isUploaded = prod.isUploaded;

      return `
        <article class="product-card" data-id="${prod.id}">
          <div class="prod-img-container">
            <img 
              src="${prod.image}" 
              alt="${prod.title}" 
              class="prod-img" 
              loading="lazy" 
              onerror="this.src='${prod.fallbackImage || 'assets/images/croche_01.jpg'}'"
            >
            
            ${isUploaded 
              ? `<span class="prod-badge-uploaded"><i class="fa-solid fa-cloud"></i> Owner Upload</span>`
              : `<span class="prod-badge-insta"><i class="fa-brands fa-instagram"></i> @croche_boutiq</span>`
            }

            <button 
              class="prod-wishlist-btn ${isWishlisted ? 'active' : ''}" 
              title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
              onclick="app.toggleWishlist(${prod.id})"
            >
              <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
            </button>

            <div class="prod-quick-view-overlay">
              <button class="btn-quick-view" onclick="app.openQuickView(${prod.id})">
                <i class="fa-regular fa-eye"></i> Quick View
              </button>
            </div>
          </div>

          <div class="prod-details">
            <div class="prod-meta">
              <span class="prod-cat">${prod.category}</span>
              <span class="prod-stock-tag"><i class="fa-solid fa-check"></i> ${prod.stock}</span>
            </div>

            <h3 class="prod-title">${prod.title}</h3>
            <p class="prod-desc-snippet">${prod.desc}</p>

            <div class="prod-bottom-row">
              <span class="prod-price">${this.formatCurrency(prod.price)}</span>
              <button class="btn-add-bag" onclick="app.addToCart(${prod.id})">
                <i class="fa-solid fa-cart-plus"></i> Add
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  // ============================================================================
  // 8. INSTAGRAM FEED GALLERY (100% AUTHENTIC POSTS)
  // ============================================================================
  renderInstaFeed() {
    const grid = document.getElementById("instaGalleryGrid");
    if (!grid) return;

    // Use authentic photos from original Instagram posts
    const instaPhotos = [
      { img: "assets/images/croche_01.jpg", likes: "128", comments: "19" },
      { img: "assets/images/croche_02.jpg", likes: "142", comments: "24" },
      { img: "assets/images/croche_03.jpg", likes: "215", comments: "38" },
      { img: "assets/images/croche_04.jpg", likes: "189", comments: "31" },
      { img: "assets/images/croche_05.jpg", likes: "97", comments: "14" },
      { img: "assets/images/croche_06.jpg", likes: "164", comments: "22" },
      { img: "assets/images/croche_07.jpg", likes: "112", comments: "16" },
      { img: "assets/images/croche_08.jpg", likes: "178", comments: "27" },
      { img: "assets/images/croche_09.jpg", likes: "203", comments: "35" },
      { img: "assets/images/croche_10.jpg", likes: "146", comments: "18" },
      { img: "assets/images/croche_11.jpg", likes: "135", comments: "21" },
      { img: "assets/images/croche_12.jpg", likes: "192", comments: "33" }
    ];

    grid.innerHTML = instaPhotos.map((item, idx) => `
      <div class="insta-feed-item" onclick="window.open('https://www.instagram.com/croche_boutiq/', '_blank')">
        <img src="${item.img}" alt="Instagram post ${idx + 1}" loading="lazy" onerror="this.src='images/croche_01.jpg'">
        <div class="insta-feed-overlay">
          <span class="insta-stat"><i class="fa-solid fa-heart"></i> ${item.likes}</span>
          <span class="insta-stat"><i class="fa-solid fa-comment"></i> ${item.comments}</span>
        </div>
      </div>
    `).join("");
  }

  // ============================================================================
  // 9. SHOPPING BAG & WISHLIST ENGINE
  // ============================================================================
  toggleCart(open) {
    if (this.cartDrawer) this.cartDrawer.classList.toggle("active", open);
    if (this.cartDrawerOverlay) this.cartDrawerOverlay.classList.toggle("hidden", !open);
  }

  closeCart() {
    this.toggleCart(false);
  }

  addToCart(productId, qty = 1) {
    const prod = this.catalog.find(p => p.id === productId);
    if (!prod) return;

    const existing = this.cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += qty;
    } else {
      this.cart.push({
        id: prod.id,
        title: prod.title,
        price: prod.price,
        image: prod.image,
        quantity: qty
      });
    }

    this.saveCart();
    this.renderCart();
    this.showToast(`Added "${prod.title}" to your Shopping Bag!`, "success");
    this.toggleCart(true);
  }

  quickAddFromHero(productId) {
    this.addToCart(productId, 1);
  }

  updateCartQty(productId, delta) {
    const item = this.cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.cart = this.cart.filter(i => i.id !== productId);
    }

    this.saveCart();
    this.renderCart();
  }

  removeCartItem(productId) {
    this.cart = this.cart.filter(i => i.id !== productId);
    this.saveCart();
    this.renderCart();
    this.showToast("Item removed from bag.", "info");
  }

  applyCoupon() {
    const code = this.couponCodeInput?.value.trim().toUpperCase();
    if (!code) return;

    if (code === "CROCHE10") {
      this.appliedCoupon = { code: "CROCHE10", discountPercent: 10 };
      this.showToast("Coupon CROCHE10 applied! 10% discount added.", "success");
    } else if (code === "FIRSTORDER" || code === "BOUTIQUE20") {
      this.appliedCoupon = { code: code, discountPercent: 20 };
      this.showToast(`Coupon ${code} applied! 20% boutique discount added.`, "success");
    } else {
      this.showToast("Invalid promo code. Try 'CROCHE10'", "warning");
    }

    this.renderCart();
  }

  renderCart() {
    const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (this.cartCount) this.cartCount.textContent = totalItems;
    if (this.cartItemsBadge) this.cartItemsBadge.textContent = `${totalItems} items`;

    if (!this.cartItemsList || !this.emptyCartView || !this.cartFooter) return;

    if (this.cart.length === 0) {
      this.cartItemsList.innerHTML = "";
      this.emptyCartView.classList.remove("hidden");
      this.cartFooter.classList.add("hidden");
      if (this.shippingProgressBar) this.shippingProgressBar.style.width = "0%";
      return;
    }

    this.emptyCartView.classList.add("hidden");
    this.cartFooter.classList.remove("hidden");

    let subtotalINR = 0;
    this.cartItemsList.innerHTML = this.cart.map(item => {
      const lineTotal = item.price * item.quantity;
      subtotalINR += lineTotal;

      return `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.title}" class="cart-item-thumb" onerror="this.src='assets/images/croche_01.jpg'">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.title}</h4>
            <div class="cart-item-price">${this.formatCurrency(item.price)}</div>
            <div class="cart-item-controls">
              <button class="qty-btn" onclick="app.updateCartQty(${item.id}, -1)">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="app.updateCartQty(${item.id}, 1)">+</button>
              <button class="btn-remove-cart" title="Remove item" onclick="app.removeCartItem(${item.id})">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    // Calculate Discounts & Totals
    let discountINR = 0;
    if (this.appliedCoupon) {
      discountINR = (subtotalINR * this.appliedCoupon.discountPercent) / 100;
      this.discountRow?.classList.remove("hidden");
      if (this.cartDiscount) this.cartDiscount.textContent = `-${this.formatCurrency(discountINR)}`;
    } else {
      this.discountRow?.classList.add("hidden");
    }

    const finalTotalINR = Math.max(0, subtotalINR - discountINR);

    if (this.cartSubtotal) this.cartSubtotal.textContent = this.formatCurrency(subtotalINR);
    if (this.cartTotal) this.cartTotal.textContent = this.formatCurrency(finalTotalINR);

    // Free Shipping threshold (₹2000 INR)
    const threshold = 2000;
    const progressPercent = Math.min(100, Math.round((finalTotalINR / threshold) * 100));
    if (this.shippingProgressBar) this.shippingProgressBar.style.width = `${progressPercent}%`;

    if (this.shippingProgressLabel) {
      if (finalTotalINR >= threshold) {
        this.shippingProgressLabel.innerHTML = `<i class="fa-solid fa-circle-check text-success"></i> Congratulations! You've unlocked FREE Shipping!`;
      } else {
        const remaining = threshold - finalTotalINR;
        this.shippingProgressLabel.innerHTML = `<i class="fa-solid fa-truck-fast"></i> Add ${this.formatCurrency(remaining)} more for Free Shipping!`;
      }
    }
  }

  // Wishlist Functions
  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    const prod = this.catalog.find(p => p.id === productId);

    if (idx > -1) {
      this.wishlist.splice(idx, 1);
      this.showToast(`Removed from wishlist.`, "info");
    } else {
      this.wishlist.push(productId);
      this.showToast(`Saved "${prod?.title || 'Item'}" to your Wishlist!`, "success");
    }

    this.saveWishlist();
    this.renderWishlistCount();
    this.renderProducts();
  }

  renderWishlistCount() {
    if (this.wishlistCount) {
      this.wishlistCount.textContent = this.wishlist.length;
    }
  }

  openWishlistModal() {
    this.renderWishlistModal();
    this.wishlistModal?.classList.remove("hidden");
  }

  closeWishlistModal() {
    this.wishlistModal?.classList.add("hidden");
  }

  renderWishlistModal() {
    if (!this.wishlistGrid || !this.emptyWishlist) return;

    const wishItems = this.catalog.filter(p => this.wishlist.includes(p.id));

    if (wishItems.length === 0) {
      this.wishlistGrid.innerHTML = "";
      this.emptyWishlist.classList.remove("hidden");
      return;
    }

    this.emptyWishlist.classList.add("hidden");
    this.wishlistGrid.innerHTML = wishItems.map(item => `
      <div class="wish-card">
        <img src="${item.image}" alt="${item.title}" onerror="this.src='assets/images/croche_01.jpg'">
        <h5>${item.title}</h5>
        <div class="wish-card-bottom">
          <strong>${this.formatCurrency(item.price)}</strong>
          <div>
            <button class="glass-btn-sm" onclick="app.addToCart(${item.id})">
              <i class="fa-solid fa-cart-plus"></i> Move to Bag
            </button>
            <button class="btn-remove-cart" onclick="app.toggleWishlist(${item.id})">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    `).join("");
  }

  // ============================================================================
  // 10. QUICK VIEW & DETAILS MODAL
  // ============================================================================
  openQuickView(productId) {
    const prod = this.catalog.find(p => p.id === productId);
    if (!prod || !this.quickViewContent) return;

    this.quickViewContent.innerHTML = `
      <div class="qv-img-wrap">
        <img src="${prod.image}" alt="${prod.title}" onerror="this.src='${prod.fallbackImage || 'assets/images/croche_01.jpg'}'">
      </div>
      <div class="qv-info">
        <div class="qv-meta">
          <span class="cat-count">${prod.category}</span>
          <span class="badge-mini"><i class="fa-brands fa-instagram"></i> ${prod.instaPost}</span>
        </div>
        <h2>${prod.title}</h2>
        <div class="qv-price">${this.formatCurrency(prod.price)}</div>
        <p class="qv-desc">${prod.desc}</p>
        
        <div class="qv-specs-grid">
          <div class="qv-spec-item">
            <strong>Yarn & Material</strong>
            <span>${prod.material}</span>
          </div>
          <div class="qv-spec-item">
            <strong>Care Guide</strong>
            <span>${prod.care}</span>
          </div>
          <div class="qv-spec-item">
            <strong>Dimensions / Fit</strong>
            <span>${prod.dimensions}</span>
          </div>
          <div class="qv-spec-item">
            <strong>Availability</strong>
            <span>${prod.stock}</span>
          </div>
        </div>

        <div class="qv-actions">
          <button class="btn-primary glass-btn-primary full-width" onclick="app.addToCart(${prod.id}); app.closeQuickView();">
            <i class="fa-solid fa-cart-plus"></i> Add to Shopping Bag
          </button>
          <a href="https://ig.me/m/croche_boutiq" target="_blank" rel="noopener" class="glass-btn" title="DM on Instagram">
            <i class="fa-brands fa-instagram"></i> DM @croche_boutiq
          </a>
        </div>
      </div>
    `;

    this.quickViewModal?.classList.remove("hidden");
  }

  closeQuickView() {
    this.quickViewModal?.classList.add("hidden");
  }

  // ============================================================================
  // 11. CHECKOUT & INSTAGRAM DIRECT INTEGRATION
  // ============================================================================
  proceedCheckout() {
    if (this.cart.length === 0) return;

    let summary = `Hello @croche_boutiq! I would like to order the following handcrafted items from your website:\n\n`;
    let subtotal = 0;
    this.cart.forEach((item, idx) => {
      summary += `${idx + 1}. ${item.title} (Qty: ${item.quantity}) - ${this.formatCurrency(item.price * item.quantity)}\n`;
      subtotal += item.price * item.quantity;
    });

    summary += `\nSubtotal: ${this.formatCurrency(subtotal)}`;
    if (this.appliedCoupon) {
      summary += `\nPromo Code Applied: ${this.appliedCoupon.code} (${this.appliedCoupon.discountPercent}% off)`;
    }
    summary += `\nCustomer Name: ${this.currentUser.name}`;

    // Prompt user to select WhatsApp or Instagram DM
    const encoded = encodeURIComponent(summary);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encoded}`;
    
    window.open(whatsappUrl, "_blank");
    this.showToast("Order summary created! Redirecting to WhatsApp / DM...", "success");
  }

  orderViaInstagramDM() {
    window.open("https://ig.me/m/croche_boutiq", "_blank");
  }

  handleCustomOrder(e) {
    e.preventDefault();
    const name = document.getElementById("custName")?.value.trim();
    const contact = document.getElementById("custEmail")?.value.trim();
    const type = document.getElementById("custType")?.value;
    const color = document.getElementById("custColor")?.value.trim() || "Artisan Choice";
    const details = document.getElementById("custDetails")?.value.trim();

    const msg = `Custom Crochet Inquiry for @croche_boutiq:\nName: ${name}\nContact: ${contact}\nItem Type: ${type}\nColor Palette: ${color}\nNotes: ${details}`;
    
    // Open Instagram DM directly with the prepped message
    navigator.clipboard?.writeText(msg).then(() => {
      this.showToast("Your custom request was copied to clipboard! Opening Instagram DM...", "success");
    }).catch(() => {});

    setTimeout(() => {
      window.open("https://ig.me/m/croche_boutiq", "_blank");
    }, 800);

    e.target.reset();
  }

  openCustomOrderModal() {
    document.getElementById("custom-order")?.scrollIntoView({ behavior: "smooth" });
  }

  openCareGuideModal() {
    alert("Yarn Care Guide:\n1. Always hand wash in cold or lukewarm water.\n2. Use mild, wool-safe liquid detergent.\n3. Do not wring or twist. Press gently between dry towels.\n4. Dry flat away from direct harsh sunlight to retain shape.");
  }

  openShippingModal() {
    alert("Shipping & Delivery:\n• Domestic orders shipped via Express Courier (3-5 business days).\n• Custom made-to-order pieces take 5-7 days crafting time.\n• Worldwide shipping available for all boutique items!");
  }

  // ============================================================================
  // 12. UTILITY & TOAST SYSTEM
  // ============================================================================
  toggleSidebar(open) {
    this.sidebar?.classList.toggle("active", open);
    this.sidebarOverlay?.classList.toggle("active", open);
  }

  toggleTheme() {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("croche_theme", isDark ? "dark" : "light");
    if (this.themeToggleBtn) {
      this.themeToggleBtn.innerHTML = isDark 
        ? `<i class="fa-solid fa-sun"></i>` 
        : `<i class="fa-solid fa-moon"></i>`;
    }
  }

  showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    let icon = "fa-circle-info";
    if (type === "success") icon = "fa-circle-check";
    else if (type === "warning") icon = "fa-triangle-exclamation";
    else if (type === "error") icon = "fa-circle-xmark";

    toast.innerHTML = `
      <i class="fa-solid ${icon}"></i>
      <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(50px)";
      setTimeout(() => toast.remove(), 350);
    }, 4000);
  }

  // Global render
  render() {
    this.updateUserUI();
    this.renderProducts();
    this.renderCart();
    this.renderWishlistCount();
    this.renderInstaFeed();
    this.renderInventoryTable();

    // Check saved theme
    if (localStorage.getItem("croche_theme") === "dark") {
      document.body.classList.add("dark-theme");
      if (this.themeToggleBtn) this.themeToggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    }
  }
}

// Instantiate App globally
let app;
document.addEventListener("DOMContentLoaded", () => {
  app = new CrochetBoutiqueApp();
  window.app = app;
});
