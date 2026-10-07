const sampleImage = "assets/clinic.jpg";

const centers = [
  {
    province: { th: "นครพนม", en: "Nakhon Phanom" },
    district: { th: "อำเภอธาตุพนม", en: "That Phanom District" },
    name: { th: "ศูนย์ไตเทียม มรุกขะ", en: "Marukha Hemodialysis Center" },
    address: { th: "191 หมู่ที่ 3 ตำบลธาตุพนม อำเภอธาตุพนม จังหวัดนครพนม 48110", en: "191 Moo 3, That Phanom Subdistrict, That Phanom District, Nakhon Phanom 48110, Thailand" },
    image: "assets/nakorn_1.jpg",
    mapQuery: "ศูนย์ไตเทียมมรุกขะ WMJX+5VR ตำบล ธาตุพนม อำเภอ ธาตุพนม นครพนม 48110",
    facebook: "https://www.facebook.com/p/%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B9%84%E0%B8%95%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B8%A2%E0%B8%A1%E0%B8%A1%E0%B8%A3%E0%B8%B8%E0%B8%81%E0%B8%82%E0%B8%B0-61559857574482/"
  },
  {
    province: { th: "นครพนม", en: "Nakhon Phanom" },
    district: { th: "อำเภอเมืองนครพนม", en: "Mueang Nakhon Phanom District" },
    name: { th: "คลินิกหมอจุฬารัตน์", en: "Dr. Chularat Clinic" },
    address: { th: "40, 42, 44, 46, 48 ถนนสมุทรบริหาร ตำบลในเมือง อำเภอเมืองนครพนม จังหวัดนครพนม", en: "40, 42, 44, 46, 48 Samut Bori Han Road, Nai Mueang Subdistrict, Mueang Nakhon Phanom District, Nakhon Phanom, Thailand" },
    image: "assets/nakorn_2.jpg",
    mapQuery: "คลินิกหมอจุฬารัตน์ 5 ซอย สมุทรบรรหาร ในเมือง อำเภอเมืองนครพนม นครพนม 48000",
    facebook: ""
  },
  {
    province: { th: "แพร่", en: "Phrae" },
    district: { th: "อำเภอเมืองแพร่", en: "Mueang Phrae District" },
    name: { th: "คลินิกแพทย์วุฒิกร", en: "Dr. Wuttikorn Clinic" },
    address: { th: "144/17-18 หมู่ที่ 7 ตำบลป่าแมต อำเภอเมืองแพร่ จังหวัดแพร่", en: "144/17-18 Moo 7, Pa Maet Subdistrict, Mueang Phrae District, Phrae, Thailand" },
    image: "assets/phare_1.jpg",
    mapQuery: "คลินิกแพทย์วุฒิกร 17-18, 144 ถนน ยันตรกิจโกศล ตำบล ป่าแมต อำเภอเมืองแพร่ แพร่ 54000",
    facebook: "https://www.facebook.com/Wuttikornclinic?locale=th_TH"
  },
  {
    province: { th: "แพร่", en: "Phrae" },
    district: { th: "อำเภอสูงเม่น", en: "Sung Men District" },
    name: { th: "ศูนย์ไตเทียม แพร่ วีอาร์ สูงเม่น", en: "Phrae VR Hemodialysis Center, Sung Men" },
    address: { th: "85/4 หมู่ที่ 9 ตำบลเวียงทอง อำเภอสูงเม่น จังหวัดแพร่", en: "85/4 Moo 9, Wiang Thong Subdistrict, Sung Men District, Phrae, Thailand" },
    image: "assets/phare_2.jpg",
    mapQuery: "ศูนย์ไตเทียม แพร่ วีอาร์ 34GC+R5F ตำบล พระหลวง อำเภอสูงเม่น แพร่ 54130",
    facebook: "https://www.facebook.com/p/%E0%B8%84%E0%B8%A5%E0%B8%B4%E0%B8%99%E0%B8%B4%E0%B8%81%E0%B9%80%E0%B8%A7%E0%B8%8A%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1-%E0%B9%81%E0%B8%9E%E0%B8%A3%E0%B9%88-%E0%B8%A7%E0%B8%B5-%E0%B8%AD%E0%B8%B2%E0%B8%A3%E0%B9%8C-61582229617573/"
  },
  {
    province: { th: "เชียงใหม่", en: "Chiang Mai" },
    district: { th: "อำเภอเมือง", en: "Mueang District" },
    name: { th: "คลินิกเวชกรรม ทีอาร์ดี", en: "TRD Medical Clinic" },
    address: { th: "154 หมู่ที่ 4 ตำบลหนองป่าครั่ง อำเภอเมือง จังหวัดเชียงใหม่", en: "154 Moo 4, Nong Pa Khrang Subdistrict, Mueang District, Chiang Mai, Thailand" },
    image: "assets/chiangMai_1.jpg",
    mapQuery: "TRD Hemodialysis Center (คลินิกเวชกรรม ทีอาร์ดี) หมู่ ที่ 4 ตำบลหนองป่าครั่ง อำเภอเมืองเชียงใหม่ เชียงใหม่ 50000",
    facebook: "https://www.facebook.com/TRDHemodialysiscenter/?locale=th_TH"
  },
  {
    province: { th: "เชียงใหม่", en: "Chiang Mai" },
    district: { th: "อำเภอฝาง", en: "Fang District" },
    name: { th: "ศูนย์ไตเทียม เคทีอาร์ดี", en: "KTRD Hemodialysis Center" },
    address: { th: "501 หมู่ที่ 16 ตำบลสันทราย อำเภอฝาง จังหวัดเชียงใหม่", en: "501 Moo 16, San Sai Subdistrict, Fang District, Chiang Mai, Thailand" },
    image: "assets/chiangMai_2.jpg",
    mapQuery: "คลินิกเวชกรรม เคทีอาร์ดี 501 ตำบล สันทราย อำเภอ ฝาง เชียงใหม่ 50110",
    facebook: "https://www.facebook.com/p/%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B9%84%E0%B8%95%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B8%A2%E0%B8%A1-%E0%B9%80%E0%B8%84%E0%B8%97%E0%B8%B5%E0%B8%AD%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%94%E0%B8%B5-KTRD-Hemodialysis-Center-61590389668261/"
  },
  {
    province: { th: "หลวงพระบาง (ลาว)", en: "Luang Prabang (Laos)" },
    district: { th: "อำเภอเมืองหลวงพระบาง", en: "Luang Prabang District" },
    name: { th: "คลินิกเวชกรรม ลาว ยูอาร์ หลวงพระบาง ประเทศลาว", en: "Lao UR Medical Clinic, Luang Prabang, Laos" },
    address: { th: "11 หน่วย 1 หมู่บ้านสังสะโลก อำเภอหลวงพระบาง จังหวัดหลวงพระบาง", en: "Unit 1, Ban Sangsaloak, Luang Prabang District, Luang Prabang, Laos" },
    image: "assets/Lao_1.jpg",
    mapQuery: "คลินิกเวชกรรม ลาว ยูอาร์ 11 หน่วย 1 หมู่บ้านสังสะโลก อำเภอหลวงพระบาง จังหวัดหลวงพระบาง",
    facebook: ""
  }
];

const featureGrid = document.getElementById("featureGrid");
const servicesGrid = document.getElementById("servicesGrid");
const centersGrid = document.getElementById("centersGrid");
const provinceFilter = document.getElementById("provinceFilter");
const centerSearch = document.getElementById("centerSearch");
const emptyState = document.getElementById("emptyState");
const rightsGrid = document.getElementById("rightsGrid");

let currentLang = localStorage.getItem("thaiurLang") || "th";

function getLangPack() {
  return currentLang === "en" ? window.THAIUR_EN : window.THAIUR_TH;
}

function getField(value) {
  if (value && typeof value === "object" && ("th" in value || "en" in value)) {
    return value[currentLang] || value.th || value.en || "";
  }
  return value ?? "";
}

function getByPath(source, path) {
  return path.split(".").reduce((value, key) => value?.[key], source);
}

function refreshLucide() {
  if (window.lucide && typeof lucide.createIcons === "function") {
    lucide.createIcons();
  }
}

function applyTranslations() {
  const pack = getLangPack();

  document.documentElement.lang = currentLang;
  document.title = pack.meta.title;
  document.querySelector('meta[name="description"]').setAttribute("content", pack.meta.description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getByPath(pack, element.dataset.i18n);
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = getByPath(pack, element.dataset.i18nHtml);
    if (value !== undefined) element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = getByPath(pack, element.dataset.i18nPlaceholder);
    if (value !== undefined) element.placeholder = value;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = getByPath(pack, element.dataset.i18nAlt);
    if (value !== undefined) element.alt = value;
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const active = button.dataset.lang === currentLang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderFeatures();
  renderServices();
  renderProvinceOptions();
  renderCenters();
  renderRights();
  refreshLucide();
}

function renderFeatures() {
  const pack = getLangPack();
  featureGrid.innerHTML = pack.features.map(item => `
    <div class="feature-item">
      <div class="feature-icon"><i data-lucide="${item.icon}" aria-hidden="true"></i></div>
      <div><strong>${item.title}</strong><p>${item.text}</p></div>
    </div>
  `).join("");
}

function renderServices() {
  const pack = getLangPack();
  servicesGrid.innerHTML = pack.services.items.map(item => `
    <article class="service-card">
      <div class="service-icon"><i data-lucide="${item.icon}" aria-hidden="true"></i></div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function renderRights() {
  const pack = getLangPack();
  rightsGrid.innerHTML = pack.rights.cards.map(item => `
    <article class="right-card">
      <div class="right-icon"><i data-lucide="${item.icon}" aria-hidden="true"></i></div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <a href="#contact">${item.button}</a>
    </article>
  `).join("");
}

function renderProvinceOptions() {
  const pack = getLangPack();
  const selected = provinceFilter.value || "all";
  const provinces = [...new Map(centers.map(center => [center.province.th, center.province])).values()];

  provinceFilter.innerHTML = `
    <option value="all">${pack.centers.allProvinces}</option>
    ${provinces.map(province => `<option value="${province.th}">${getField(province)}</option>`).join("")}
  `;

  if (["all", ...provinces.map(province => province.th)].includes(selected)) {
    provinceFilter.value = selected;
  }
}

function renderCenters() {
  const pack = getLangPack();
  const query = centerSearch.value.trim().toLowerCase();
  const province = provinceFilter.value;

  const filtered = centers.filter(center => {
    const matchesProvince = province === "all" || center.province.th === province;
    const searchable = [
      center.name.th, center.name.en,
      center.province.th, center.province.en,
      center.district.th, center.district.en,
      center.address.th, center.address.en
    ].join(" ").toLowerCase();

    return matchesProvince && searchable.includes(query);
  });

  centersGrid.innerHTML = filtered.map(center => `
    <article class="center-card">
      <div class="center-image">
        <img src="${center.image}" alt="${getField(center.name)}" loading="lazy" />
        <div class="location-badge">
          <span>${pack.centers.provinceLabel}</span>
          <strong>${getField(center.province)}</strong>
        </div>
      </div>

      <div class="center-body">
        <div class="center-title">
          <div>
            <h3>${getField(center.name)}</h3>
            <div class="center-sub">${getField(center.district)} <span>•</span> ${getField(center.province)}</div>
          </div>
        </div>

        <div class="address">
          <div class="address-icon">⌖</div>
          <div>${getField(center.address)}</div>
        </div>

        <div class="cert"><span>✓</span> ${pack.centers.certification}</div>

        <div class="card-actions">
          ${center.facebook ? `
          <a href="${center.facebook}" class="card-btn primary" target="_blank" rel="noopener noreferrer">${pack.centers.detail}</a> 
          ` : ` 
          <a href="#" class="card-btn primary" onclick="return false;" aria-disabled="true"> ${pack.centers.detail}</a>
          `}
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.mapQuery)}" class="card-btn secondary" target="_blank" rel="noopener noreferrer">${pack.centers.map}</a>
        </div>
      </div>
    </article>
  `).join("");

  emptyState.hidden = filtered.length !== 0;
  refreshLucide();
}

function setLanguage(lang) {
  if (!window.THAIUR_TH || !window.THAIUR_EN) return;
  currentLang = lang === "en" ? "en" : "th";
  localStorage.setItem("thaiurLang", currentLang);
  applyTranslations();
}

function setupLanguageSwitcher() {
  document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
}

function setupNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

centerSearch.addEventListener("input", renderCenters);
provinceFilter.addEventListener("change", renderCenters);

setupLanguageSwitcher();
setupNavigation();
applyTranslations();
