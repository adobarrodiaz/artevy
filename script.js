const byId = (id) => document.getElementById(id);

const menuButton = byId("menuButton");
const siteNav = byId("siteNav");
const siteHeader = document.querySelector(".site-header");
const scrollProgress = byId("scrollProgress");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Booking link oficial de Artevy.
const KOALENDAR_BASE = "https://koalendar.com/e/reunirse-con-artevy";
const WHATSAPP_PHONE = "34656303038";

const serviceGrid = byId("serviceGrid");
const cutGrid = byId("cutGrid");
const cutFilters = byId("cutFilters");

const stylistSelect = byId("stylistSelect");
const serviceSelect = byId("serviceSelect");
const customerName = byId("customerName");
const koalendarLink = byId("koalendarLink");
const koalendarFrame = byId("koalendarFrame");
const whatsappBooking = byId("whatsappBooking");
const bookingSummary = byId("bookingSummary");
const stylistButtons = Array.from(document.querySelectorAll(".select-stylist"));

const reviewCards = Array.from(document.querySelectorAll(".review-card"));
const reviewDots = Array.from(document.querySelectorAll(".review-dot"));
const reviewShell = document.querySelector(".reviews-shell");

const revealItems = Array.from(document.querySelectorAll(".reveal"));
const magneticItems = Array.from(document.querySelectorAll("[data-magnetic]"));

const serviceCatalog = [
  {
    id: "s1",
    name: "Corte Signature + Brushing",
    description: "Diseno personalizado segun visagismo para un acabado elegante y facil de peinar.",
    price: "Desde 49 EUR",
    duration: "60",
    image: "assets/hair-cut-female.jpg",
    imageAlt: "Servicio de corte femenino en salon"
  },
  {
    id: "s2",
    name: "Coloracion premium",
    description: "Balayage, raiz o bano de color con brillo uniforme y tono afinado.",
    price: "Desde 79 EUR",
    duration: "120",
    image: "assets/hair-color-foil.jpg",
    imageAlt: "Servicio de coloracion profesional"
  },
  {
    id: "s3",
    name: "Botox capilar",
    description: "Reconstruccion profunda para controlar frizz, recuperar fibra y potenciar luminosidad.",
    price: "Desde 69 EUR",
    duration: "75",
    image: "assets/premium-face-1.jpg",
    imageAlt: "Detalle de tratamiento premium"
  },
  {
    id: "s4",
    name: "Extensiones naturales",
    description: "Integracion de largo y volumen con fusion natural y acabado invisible.",
    price: "Desde 130 EUR",
    duration: "150",
    image: "assets/premium-face-2.jpg",
    imageAlt: "Servicio avanzado de embellecimiento"
  },
  {
    id: "s5",
    name: "Protesis capilares",
    description: "Soluciones personalizadas a medida con diagnostico profesional.",
    price: "Consulta personalizada",
    duration: "90",
    image: "assets/premium-face-3.jpg",
    imageAlt: "Aplicacion profesional con tecnica precisa"
  },
  {
    id: "s6",
    name: "Ritual de reparacion",
    description: "Plan de nutricion y reparacion segun el estado real del cabello.",
    price: "Desde 45 EUR",
    duration: "50",
    image: "assets/premium-tools.jpg",
    imageAlt: "Herramientas y productos premium del salon"
  }
];

const cutCatalog = [
  {
    id: "c1",
    title: "Italian Bob Premium",
    category: "corto",
    note: "Corte corto pulido con nuca limpia y frontal con peso.",
    image: "assets/hair-cut-female.jpg",
    imageAlt: "Ejemplo visual de bob italiano"
  },
  {
    id: "c2",
    title: "French Bob Texturizado",
    category: "corto",
    note: "Movimiento suave, flequillo natural y acabado muy moderno.",
    image: "assets/hair-color-foil.jpg",
    imageAlt: "Ejemplo visual de french bob"
  },
  {
    id: "c3",
    title: "Lob Elegante",
    category: "medio",
    note: "Melena media estilizada con puntas limpias y volumen controlado.",
    image: "assets/premium-face-1.jpg",
    imageAlt: "Ejemplo visual de long bob"
  },
  {
    id: "c4",
    title: "Butterfly Layers",
    category: "largo",
    note: "Capas largas para abrir el rostro y crear dinamismo premium.",
    image: "assets/premium-face-2.jpg",
    imageAlt: "Ejemplo visual de corte en capas largas"
  },
  {
    id: "c5",
    title: "Blunt Cut Glass",
    category: "medio",
    note: "Linea recta de precision para efecto espejo y densidad visual.",
    image: "assets/premium-face-3.jpg",
    imageAlt: "Ejemplo visual de blunt cut"
  },
  {
    id: "c6",
    title: "Contour Color Cut",
    category: "color",
    note: "Corte y color combinados para iluminar facciones.",
    image: "assets/premium-tools.jpg",
    imageAlt: "Ejemplo visual de corte con color contour"
  },
  {
    id: "c7",
    title: "Soft Shag Femenino",
    category: "medio",
    note: "Desenfadado y elegante con mucho movimiento natural.",
    image: "assets/hair-cut-female.jpg",
    imageAlt: "Ejemplo visual de soft shag"
  },
  {
    id: "c8",
    title: "Golden Balayage Layers",
    category: "color",
    note: "Capas largas con degradado dorado para efecto luminoso.",
    image: "assets/hair-color-foil.jpg",
    imageAlt: "Ejemplo visual de balayage en capas"
  }
];

const bookingState = {
  stylist: "Clara Artevy",
  specialty: "Colorimetria premium",
  service: "Corte Signature + Brushing",
  duration: "60",
  price: "Desde 49 EUR",
  customerName: ""
};

const sanitizeName = (value) => value.replace(/\s+/g, " ").trim();

const renderServiceCards = () => {
  if (!serviceGrid) return;

  serviceGrid.innerHTML = serviceCatalog
    .map(
      (service, index) => `
        <article class="service-card reveal" style="animation-delay:${index * 60}ms">
          <figure class="service-media">
            <img src="${service.image}" alt="${service.imageAlt}" loading="lazy" />
          </figure>
          <h3>${service.name}</h3>
          <p>${service.description}</p>
          <div class="service-meta">
            <span class="service-time">${service.duration} min</span>
            <span class="service-price">${service.price}</span>
          </div>
        </article>
      `
    )
    .join("");
};

const renderServiceSelect = () => {
  if (!serviceSelect) return;

  serviceSelect.innerHTML = serviceCatalog
    .map(
      (service, index) => `
        <option
          value="${service.name}"
          data-duration="${service.duration}"
          data-price="${service.price}"
          ${index === 0 ? "selected" : ""}
        >
          ${service.name} - ${service.duration} min - ${service.price}
        </option>
      `
    )
    .join("");
};

const renderCutCards = (filter) => {
  if (!cutGrid) return;

  const currentFilter = filter || "all";
  const visibleCuts =
    currentFilter === "all" ? cutCatalog : cutCatalog.filter((item) => item.category === currentFilter);

  cutGrid.innerHTML = visibleCuts
    .map(
      (cut, index) => `
        <article class="cut-card reveal" style="animation-delay:${index * 56}ms">
          <figure class="cut-media">
            <img src="${cut.image}" alt="${cut.imageAlt}" loading="lazy" />
          </figure>
          <h3>${cut.title}</h3>
          <p class="cut-note">${cut.note}</p>
          <div class="cut-meta">
            <span class="cut-tag">${cut.category}</span>
            <span class="cut-tag">plantilla editable</span>
          </div>
        </article>
      `
    )
    .join("");

  if (!reducedMotion) {
    activateRevealObserver(cutGrid.querySelectorAll(".reveal"));
  }
};

const setMenuState = (open) => {
  if (!menuButton || !siteNav) return;
  menuButton.setAttribute("aria-expanded", String(open));
  siteNav.classList.toggle("open", open);
  document.body.style.overflow = open ? "hidden" : "";
};

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });
}

const updateScrollProgress = () => {
  if (!scrollProgress) return;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  scrollProgress.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
};

window.addEventListener(
  "scroll",
  () => {
    if (siteHeader) {
      siteHeader.classList.toggle("scrolled", window.scrollY > 16);
    }
    updateScrollProgress();
  },
  { passive: true }
);

window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

const setupLenisScroll = () => {
  if (reducedMotion || typeof window.Lenis !== "function") return;

  const lenis = new window.Lenis({
    duration: 1.05,
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.12,
    normalizeWheel: true
  });

  const raf = (time) => {
    lenis.raf(time);
    window.requestAnimationFrame(raf);
  };

  window.requestAnimationFrame(raf);
  window.addEventListener(
    "beforeunload",
    () => {
      lenis.destroy();
    },
    { once: true }
  );
};

const setupGsapAtmosphere = () => {
  if (reducedMotion || typeof window.gsap !== "object") return;

  const gsap = window.gsap;

  if (window.ScrollTrigger && typeof gsap.registerPlugin === "function") {
    gsap.registerPlugin(window.ScrollTrigger);
  }

  gsap.from(".hero-copy > *", {
    y: 16,
    opacity: 0,
    duration: 0.62,
    stagger: 0.08,
    ease: "power2.out",
    clearProps: "transform,opacity"
  });

  if (!window.ScrollTrigger || typeof gsap.utils?.toArray !== "function") return;

  gsap.utils.toArray(".section-title, .section-kicker").forEach((element) => {
    gsap.from(element, {
      y: 18,
      opacity: 0,
      duration: 0.58,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 86%",
        once: true
      },
      clearProps: "transform,opacity"
    });
  });
};

let revealObserver;
const activateRevealObserver = (elements) => {
  if (reducedMotion) {
    Array.from(elements).forEach((item) => item.classList.add("in"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.14 }
    );
  }

  Array.from(elements).forEach((item, index) => {
    item.style.transitionDelay = `${(index % 8) * 68}ms`;
    revealObserver.observe(item);
  });
};

activateRevealObserver(revealItems);

const activateShine = () => {
  Array.from(document.querySelectorAll("[data-shine]"))
    .filter((node) => !node.dataset.shineInit)
    .forEach((item) => {
      item.dataset.shineInit = "true";

      item.addEventListener("pointermove", (event) => {
        const rect = item.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        item.style.setProperty("--mx", `${x}%`);
        item.style.setProperty("--my", `${y}%`);
      });

      item.addEventListener("pointerleave", () => {
        item.style.removeProperty("--mx");
        item.style.removeProperty("--my");
      });
    });
};

activateShine();

if (!reducedMotion && magneticItems.length) {
  magneticItems.forEach((item) => {
    item.addEventListener("pointermove", (event) => {
      const rect = item.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      item.style.transform = `translate(${(x * 8).toFixed(2)}px, ${(y * 6).toFixed(2)}px)`;
    });

    item.addEventListener("pointerleave", () => {
      item.style.transform = "";
    });
  });
}

const setFilterState = (targetFilter) => {
  if (!cutFilters) return;
  Array.from(cutFilters.querySelectorAll(".cut-filter")).forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === targetFilter);
  });
};

if (cutFilters) {
  cutFilters.addEventListener("click", (event) => {
    const button = event.target.closest(".cut-filter");
    if (!button) return;
    const filter = button.dataset.filter || "all";
    setFilterState(filter);
    renderCutCards(filter);
  });
}

const getServiceMeta = () => {
  if (!serviceSelect) {
    return {
      service: bookingState.service,
      duration: bookingState.duration,
      price: bookingState.price
    };
  }

  const selectedOption = serviceSelect.options[serviceSelect.selectedIndex];
  return {
    service: selectedOption.value,
    duration: selectedOption.dataset.duration || "60",
    price: selectedOption.dataset.price || ""
  };
};

const getStylistMeta = () => {
  if (!stylistSelect) {
    return {
      stylist: bookingState.stylist,
      specialty: bookingState.specialty
    };
  }

  const selectedOption = stylistSelect.options[stylistSelect.selectedIndex];
  return {
    stylist: selectedOption.value,
    specialty: selectedOption.dataset.specialty || "Estilista"
  };
};

const buildKoalendarUrl = () => KOALENDAR_BASE;

const buildWhatsAppUrl = () => {
  const message = [
    "Hola Artevy Estilistas, quiero reservar una cita.",
    `Estilista: ${bookingState.stylist} (${bookingState.specialty})`,
    `Servicio: ${bookingState.service}`,
    `Duracion aproximada: ${bookingState.duration} min`,
    `Precio orientativo: ${bookingState.price}`,
    bookingState.customerName ? `Nombre: ${bookingState.customerName}` : "",
    "He abierto la reserva desde la web."
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

const updateStylistCards = () => {
  stylistButtons.forEach((button) => {
    const card = button.closest(".stylist-card");
    const isSelected = button.dataset.stylist === bookingState.stylist;

    button.classList.toggle("btn-primary", isSelected);
    button.classList.toggle("btn-ghost", !isSelected);

    if (card) {
      card.classList.toggle("is-selected", isSelected);
    }
  });
};

const updateBookingSummary = () => {
  if (!bookingSummary) return;
  const namePart = bookingState.customerName ? `Cliente: ${bookingState.customerName}. ` : "";
  bookingSummary.textContent = `${namePart}Estilista: ${bookingState.stylist} (${bookingState.specialty}). Servicio: ${bookingState.service}. Duracion: ${bookingState.duration} min. Precio orientativo: ${bookingState.price}.`;
};

const syncBooking = () => {
  const serviceMeta = getServiceMeta();
  const stylistMeta = getStylistMeta();

  bookingState.service = serviceMeta.service;
  bookingState.duration = serviceMeta.duration;
  bookingState.price = serviceMeta.price;
  bookingState.stylist = stylistMeta.stylist;
  bookingState.specialty = stylistMeta.specialty;
  bookingState.customerName = customerName ? sanitizeName(customerName.value) : "";

  const koalendarUrl = buildKoalendarUrl();

  if (koalendarLink) {
    koalendarLink.href = koalendarUrl;
  }

  if (koalendarFrame && koalendarFrame.src !== koalendarUrl) {
    koalendarFrame.src = koalendarUrl;
  }

  if (whatsappBooking) {
    whatsappBooking.href = buildWhatsAppUrl();
  }

  updateStylistCards();
  updateBookingSummary();
};

if (stylistButtons.length) {
  stylistButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!stylistSelect) return;

      const stylist = button.dataset.stylist || "";
      const specialty = button.dataset.specialty || "";
      stylistSelect.value = stylist;

      const option = Array.from(stylistSelect.options).find((item) => item.value === stylist);
      if (option && specialty) {
        option.dataset.specialty = specialty;
      }

      syncBooking();
    });
  });
}

if (serviceSelect) {
  serviceSelect.addEventListener("change", syncBooking);
}

if (stylistSelect) {
  stylistSelect.addEventListener("change", syncBooking);
}

if (customerName) {
  let inputTimer;
  customerName.addEventListener("input", () => {
    window.clearTimeout(inputTimer);
    inputTimer = window.setTimeout(syncBooking, 220);
  });
}

let reviewIndex = 0;
let reviewTimerId = null;

const showReview = (index) => {
  reviewCards.forEach((card, cardIndex) => {
    card.classList.toggle("is-active", cardIndex === index);
  });
  reviewDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === index);
  });
};

const goToReview = (index) => {
  if (!reviewCards.length) return;
  reviewIndex = (index + reviewCards.length) % reviewCards.length;
  showReview(reviewIndex);
};

const stopReviewAutoplay = () => {
  if (!reviewTimerId) return;
  window.clearInterval(reviewTimerId);
  reviewTimerId = null;
};

const startReviewAutoplay = () => {
  if (reducedMotion || reviewCards.length <= 1) return;
  stopReviewAutoplay();
  reviewTimerId = window.setInterval(() => {
    goToReview(reviewIndex + 1);
  }, 5300);
};

if (reviewCards.length) {
  showReview(reviewIndex);
}

if (reviewDots.length) {
  reviewDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const targetIndex = Number.parseInt(dot.dataset.reviewIndex || "0", 10);
      goToReview(targetIndex);
      startReviewAutoplay();
    });
  });
}

if (reviewShell) {
  reviewShell.addEventListener("mouseenter", stopReviewAutoplay);
  reviewShell.addEventListener("mouseleave", startReviewAutoplay);
  reviewShell.addEventListener("focusin", stopReviewAutoplay);
  reviewShell.addEventListener("focusout", () => {
    if (!reviewShell.contains(document.activeElement)) {
      startReviewAutoplay();
    }
  });
}

const bootstrap = () => {
  setupLenisScroll();
  setupGsapAtmosphere();

  renderServiceCards();
  renderServiceSelect();
  renderCutCards("all");
  setFilterState("all");

  const newRevealItems = Array.from(document.querySelectorAll(".reveal"));
  activateRevealObserver(newRevealItems);

  syncBooking();
  startReviewAutoplay();
};

bootstrap();