const screens = [
  {
    title: "Panel principal",
    description:
      "Una vista general de las principales áreas de tu negocio.",
    image: "assets/screenshots/dashboard.png",
    alt: "Panel principal de Drito",
  },
  {
    title: "Ventas",
    description:
      "Seguimiento de ventas, pagos, estados y saldos pendientes.",
    image: "assets/screenshots/ventas.png",
    alt: "Gestión de ventas en Drito",
  },
  {
    title: "Caja",
    description:
      "Ingresos, egresos, medios de pago y saldo financiero.",
    image: "assets/screenshots/caja.png",
    alt: "Gestión de caja en Drito",
  },
  {
    title: "Productos y servicios",
    description:
      "Precios, costos, categorías y existencias centralizados.",
    image: "assets/screenshots/productos.png",
    alt: "Productos y servicios en Drito",
  },
  {
    title: "Clientes",
    description:
      "Datos, contacto, condición fiscal y seguimiento comercial.",
    image: "assets/screenshots/clientes.png",
    alt: "Gestión de clientes en Drito",
  },
  {
    title: "Compras",
    description:
      "Comprobantes, pagos pendientes y operaciones con proveedores.",
    image: "assets/screenshots/compras.png",
    alt: "Gestión de compras en Drito",
  },
  {
    title: "Stock",
    description:
      "Existencias, movimientos y alertas para mantener el control.",
    image: "assets/screenshots/stock.png",
    alt: "Control de stock en Drito",
  },
];

const openButton = document.getElementById("openDritoGallery");
const gallery = document.getElementById("dritoGallery");
const closeButton = document.getElementById("closeDritoGallery");

const previousButton = document.getElementById("galleryPrevious");
const nextButton = document.getElementById("galleryNext");

const galleryImage = document.getElementById("galleryImage");
const galleryTitle = document.getElementById("galleryTitle");
const galleryDescription = document.getElementById("galleryDescription");
const galleryCounter = document.getElementById("galleryCounter");

const galleryTabs = document.querySelectorAll(
  ".drito-gallery-tabs button"
);

let currentScreen = 0;

function renderScreen() {
  const screen = screens[currentScreen];

  galleryImage.src = screen.image;
  galleryImage.alt = screen.alt;

  galleryTitle.textContent = screen.title;
  galleryDescription.textContent = screen.description;

  galleryCounter.textContent =
    `${currentScreen + 1} / ${screens.length}`;

  galleryTabs.forEach((tab, index) => {
    tab.classList.toggle(
      "active",
      index === currentScreen
    );
  });
}

function openGallery() {
  gallery.hidden = false;
  document.body.classList.add("gallery-open");

  currentScreen = 0;
  renderScreen();
}

function closeGallery() {
  gallery.hidden = true;
  document.body.classList.remove("gallery-open");
}

function showNext() {
  currentScreen =
    (currentScreen + 1) % screens.length;

  renderScreen();
}

function showPrevious() {
  currentScreen =
    (currentScreen - 1 + screens.length) %
    screens.length;

  renderScreen();
}

openButton.addEventListener("click", openGallery);
closeButton.addEventListener("click", closeGallery);

nextButton.addEventListener("click", showNext);
previousButton.addEventListener("click", showPrevious);

galleryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    currentScreen = Number(tab.dataset.screen);
    renderScreen();
  });
});

gallery
  .querySelector(".drito-gallery-overlay")
  .addEventListener("click", closeGallery);

document.addEventListener("keydown", (event) => {
  if (gallery.hidden) return;

  if (event.key === "Escape") {
    closeGallery();
  }

  if (event.key === "ArrowRight") {
    showNext();
  }

  if (event.key === "ArrowLeft") {
    showPrevious();
  }
});

const openDritoPreview =
  document.getElementById("openDritoGalleryPreview");

if (openDritoPreview) {
  openDritoPreview.addEventListener("click", openGallery);
}