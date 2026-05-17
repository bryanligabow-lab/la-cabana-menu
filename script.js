// ==========================================================
// La Cabaña — Interactividad
// ==========================================================
(() => {
  // ---------- Preloader ----------
  document.body.classList.add("is-loading");
  const preloader = document.getElementById("preloader");
  const hidePreloader = () => {
    if (!preloader) return;
    // Minimum show time so the animation feels intentional
    const minDelay = 1700;
    const start = window.__loadStart || performance.now();
    const elapsed = performance.now() - start;
    const wait = Math.max(0, minDelay - elapsed);
    setTimeout(() => {
      preloader.classList.add("is-done");
      document.body.classList.remove("is-loading");
      setTimeout(() => preloader.remove(), 800);
    }, wait);
  };
  window.__loadStart = performance.now();
  window.addEventListener("load", hidePreloader);
  // Fallback in case load never fires
  setTimeout(hidePreloader, 5000);

  const WHATSAPP = "593959516383";
  const tabsEl = document.getElementById("tabs");
  const chipsEl = document.getElementById("chips");
  const gridEl = document.getElementById("grid");
  const emptyEl = document.getElementById("empty");

  let currentSection = "grill";
  let currentCategory = "all";

  // ---------- Render Helpers ----------
  const fmt = (n) => `$${n.toFixed(2)}`;

  const badgeMap = {
    hot: { label: "Top", class: "badge--hot" },
    star: { label: "Recomendado", class: "badge--star" },
    group: { label: "Grupal", class: "badge--group" }
  };

  function renderChips() {
    const sec = window.MENU[currentSection];
    const cats = sec.categories;
    chipsEl.innerHTML = "";

    if (cats.length <= 1) { chipsEl.style.display = "none"; return; }
    chipsEl.style.display = "flex";

    const all = document.createElement("button");
    all.className = "chip" + (currentCategory === "all" ? " active" : "");
    all.textContent = "Todos";
    all.onclick = () => { currentCategory = "all"; renderChips(); renderGrid(); };
    chipsEl.appendChild(all);

    cats.forEach(cat => {
      const b = document.createElement("button");
      b.className = "chip" + (currentCategory === cat.id ? " active" : "");
      b.textContent = cat.name;
      b.onclick = () => { currentCategory = cat.id; renderChips(); renderGrid(); };
      chipsEl.appendChild(b);
    });
  }

  function renderGrid() {
    const sec = window.MENU[currentSection];
    let items = [];

    sec.categories.forEach(cat => {
      if (currentCategory === "all" || currentCategory === cat.id) {
        cat.items.forEach(item => items.push({ ...item, _catName: cat.name, _catNote: cat.note }));
      }
    });

    gridEl.innerHTML = "";
    if (!items.length) {
      emptyEl.hidden = false;
      return;
    }
    emptyEl.hidden = true;

    items.forEach((item, i) => {
      const card = document.createElement("article");
      card.className = "card";
      card.style.animationDelay = `${i * 40}ms`;

      const badge = item.badge ? badgeMap[item.badge] : null;

      card.innerHTML = `
        <div class="card__head">
          <h3 class="card__name">${item.name}</h3>
          <span class="card__price">${fmt(item.price)}</span>
        </div>
        ${item.desc || item._catNote ? `<p class="card__desc">${item.desc || item._catNote}</p>` : ""}
        <div class="card__foot">
          <div class="card__badges">
            ${badge ? `<span class="badge ${badge.class}">${badge.label}</span>` : ""}
            <span class="badge" style="background:rgba(255,255,255,.04);color:var(--muted);border:1px solid var(--border-soft)">${item._catName}</span>
          </div>
          <a class="order-btn" href="${orderLink(item)}" target="_blank" rel="noopener">Pedir →</a>
        </div>
      `;
      gridEl.appendChild(card);
    });
  }

  function orderLink(item) {
    const msg = encodeURIComponent(
      `Hola La Cabaña 🔥 quisiera pedir:\n• ${item.name} — ${fmt(item.price)}\n\n¿Está disponible?`
    );
    return `https://wa.me/${WHATSAPP}?text=${msg}`;
  }

  // ---------- Tabs ----------
  tabsEl.addEventListener("click", (e) => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    tabsEl.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentSection = tab.dataset.section;
    currentCategory = "all";
    renderChips();
    renderGrid();
  });

  // ---------- Search ----------
  const overlay = document.getElementById("searchOverlay");
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");
  const toggle = document.getElementById("searchToggle");
  const closeBtn = document.getElementById("searchClose");

  function openSearch() {
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    setTimeout(() => input.focus(), 50);
  }
  function closeSearch() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    input.value = "";
    results.innerHTML = `<p class="search-hint">Empieza a escribir para buscar en todo el menú.</p>`;
  }

  toggle.addEventListener("click", openSearch);
  closeBtn.addEventListener("click", closeSearch);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeSearch(); });

  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      overlay.classList.contains("open") ? closeSearch() : openSearch();
    }
    if (e.key === "Escape" && overlay.classList.contains("open")) closeSearch();
  });

  // Flatten menu for search
  const allItems = [];
  Object.entries(window.MENU).forEach(([secKey, sec]) => {
    sec.categories.forEach(cat => {
      cat.items.forEach(it => {
        allItems.push({
          ...it,
          section: secKey,
          sectionLabel: sec.label,
          catName: cat.name
        });
      });
    });
  });

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      results.innerHTML = `<p class="search-hint">Empieza a escribir para buscar en todo el menú.</p>`;
      return;
    }
    const matched = allItems.filter(it => {
      return (
        it.name.toLowerCase().includes(q) ||
        (it.desc && it.desc.toLowerCase().includes(q)) ||
        it.catName.toLowerCase().includes(q) ||
        String(it.price).includes(q)
      );
    }).slice(0, 20);

    if (!matched.length) {
      results.innerHTML = `<p class="search-hint">Sin resultados para "${q}" 🥺</p>`;
      return;
    }
    results.innerHTML = matched.map(it => `
      <a class="search-result" href="${orderLink(it)}" target="_blank" rel="noopener">
        <div class="search-result__info">
          <span class="search-result__cat">${it.sectionLabel} · ${it.catName}</span>
          <span class="search-result__name">${it.name}</span>
          ${it.desc ? `<span class="search-result__desc">${it.desc}</span>` : ""}
        </div>
        <span class="search-result__price">${fmt(it.price)}</span>
      </a>
    `).join("");
  });

  // ---------- Year ----------
  document.getElementById("year").textContent = new Date().getFullYear();

  // ---------- Init ----------
  renderChips();
  renderGrid();
})();
