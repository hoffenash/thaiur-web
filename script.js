const sampleImage = "assets/clinic.jpg";

const features = [
  {
    icon: "heart-pulse",
    title: "ทีมผู้เชี่ยวชาญ",
    text: "บุคลากรพร้อมดูแลและให้คำแนะนำอย่างใกล้ชิด"
  },
  {
    icon: "shield-check",
    title: "มาตรฐานความปลอดภัย",
    text: "ทุกขั้นตอนออกแบบเพื่อความมั่นใจและสบายใจ"
  },
  {
    icon: "stethoscope",
    title: "เทคโนโลยีที่เหมาะสม",
    text: "สนับสนุนการดูแลที่แม่นยำและต่อเนื่อง"
  },
  {
    icon: "users-round",
    title: "ดูแลอย่างเข้าใจ",
    text: "รับฟังความต้องการของผู้รับบริการและครอบครัว"
  }
];

const services = [
  {
    icon: "activity",
    title: "ฟอกเลือดด้วยเครื่องไตเทียม",
    text: "ดูแลอย่างเป็นระบบโดยทีมบุคลากรที่ผ่านการฝึกอบรมและใส่ใจในรายละเอียด"
  },
  {
    icon: "message-circle-heart",
    title: "บริการตรวจและดูแลสุขภาพ",
    text: "ข้อมูลเบื้องต้นและการประสานงานเพื่อการดูแลที่เหมาะสม"
  },
  {
    icon: "clipboard-check",
    title: "สิทธิการรักษาที่ครอบคลุม",
    text: "เชื่อมโยงข้อมูลและการดูแลเพื่อลดความกังวลในทุกขั้นตอน"
  },
  {
    icon: "badge-check",
    title: "ติดตามคุณภาพบริการ",
    text: "รับฟังข้อเสนอแนะและพัฒนาบริการอย่างสม่ำเสมอ"
  }
];

const centers = [
  {
    province: "นครพนม",
    district: "อำเภอธาตุพนม",
    name: "ศูนย์ไตเทียม มรุกขะ",
    address: "191 หมู่ที่ 3 ตำบลธาตุพนม อำเภอธาตุพนม จังหวัดนครพนม 48110",
    image: "assets/nakorn_1.jpg",
    mapQuery: "ศูนย์ไตเทียมมรุกขะ WMJX+5VR ตำบล ธาตุพนม อำเภอ ธาตุพนม นครพนม 48110"
  },
  {
    province: "นครพนม",
    district: "อำเภอเมืองนครพนม",
    name: "คลินิกหมอจุฬารัตน์",
    address: "40, 42, 44, 46, 48 ถนนสมุทรบริหาร ตำบลในเมือง อำเภอเมืองนครพนม จังหวัดนครพนม",
    image: "assets/nakorn_2.jpg",
    mapQuery: "คลินิกหมอจุฬารัตน์ 5 ซอย สมุทรบรรหาร ในเมือง อำเภอเมืองนครพนม นครพนม 48000"
  },
  {
    province: "แพร่",
    district: "อำเภอเมืองแพร่",
    name: "คลินิกแพทย์วุฒิกร",
    address: "144/17-18 หมู่ที่ 7 ตำบลป่าแมต อำเภอเมืองแพร่ จังหวัดแพร่",
    image: "assets/phare_1.jpg",
    mapQuery: "คลินิกแพทย์วุฒิกร 17-18, 144 ถนน ยันตรกิจโกศล ตำบล ป่าแมต อำเภอเมืองแพร่ แพร่ 54000"
  },
  {
    province: "แพร่",
    district: "อำเภอสูงเม่น",
    name: "ศูนย์ไตเทียม แพร่ วีอาร์ สูงเม่น",
    address: "85/4 หมู่ที่ 9 ตำบลเวียงทอง อำเภอสูงเม่น จังหวัดแพร่",
    image: "assets/phare_2.jpg",
    mapQuery: "ศูนย์ไตเทียม แพร่ วีอาร์ 34GC+R5F ตำบล พระหลวง อำเภอสูงเม่น แพร่ 54130"
  },
  {
    province: "เชียงใหม่",
    district: "อำเภอเมือง",
    name: "คลินิกเวชกรรม ทีอาร์ดี ",
    address: "154 หมู่ที่ 4 ตำบลหนองป่าครั่ง อำเภอเมือง จังหวัดเชียงใหม่",
    image: "assets/chiangMai_1.jpg",
    mapQuery: "TRD Hemodialysis Center (คลินิกเวชกรรม ทีอาร์ดี) หมู่ ที่ 4 ตำบลหนองป่าครั่ง อำเภอเมืองเชียงใหม่ เชียงใหม่ 50000"
  },
  {
    province: "เชียงใหม่",
    district: "อำเภอฝาง",
    name: "ศูนย์ไตเทียม เคทีอาร์ดี",
    address: "501 หมู่ที่ 16 ตำบลสันทราย อำเภอฝาง จังหวัดเชียงใหม่",
    image: "assets/chiangMai_2.jpg",
    mapQuery: "คลินิกเวชกรรม เคทีอาร์ดี 501 ตำบล สันทราย อำเภอ ฝาง เชียงใหม่ 50110"
  },
  {
    province: "หลวงพระบาง (ลาว)",
    district: "อำเภอเมืองหลวงพระบาง",
    name: "คลินิกเวชกรรม ลาว ยูอาร์ หลวงพระบาง ประเทศลาว",
    address: "11 หน่วย 1 หมู่บ้านสังสะโลก อำเภอหลวงพระบาง จังหวัดหลวงพระบาง",
    image: "assets/Lao_1.jpg",
    mapQuery: "คลินิกเวชกรรม ลาว ยูอาร์ 11 หน่วย 1 หมู่บ้านสังสะโลก อำเภอหลวงพระบาง จังหวัดหลวงพระบาง"
  }
];

const rights = [
  {
    icon: "briefcase-medical",
    title: "สิทธิประกันสังคม",
    text: "รองรับการฟอกไตสำหรับผู้ใช้สิทธิประกันสังคม โดยทีมงานพร้อมให้ข้อมูลและประสานการดูแล",
    button: "ดูข้อมูลในระบบ"
  },
  {
    icon: "landmark",
    title: "สิทธิหลักประกันสุขภาพแห่งชาติ (บัตรทอง)",
    text: "รองรับการฟอกไตสำหรับผู้ใช้สิทธิหลักประกันสุขภาพแห่งชาติ (บัตรทอง) ตามแนวทางการให้บริการ",
    button: "ดูข้อมูลในระบบ"
  },
  {
    icon: "wallet-cards",
    title: "ผู้รับบริการที่ชำระค่าใช้จ่ายด้วยตนเอง",
    text: "สำหรับผู้รับบริการที่ชำระค่าใช้จ่ายด้วยตนเอง สามารถสอบถามรายละเอียดและแนวทางการดูแลได้",
    button: "สอบถามข้อมูล"
  }
];

/* ------------------------------
   Element References
-------------------------------- */

const featureGrid = document.getElementById("featureGrid");
const servicesGrid = document.getElementById("servicesGrid");
const centersGrid = document.getElementById("centersGrid");
const provinceFilter = document.getElementById("provinceFilter");
const centerSearch = document.getElementById("centerSearch");
const emptyState = document.getElementById("emptyState");
const rightsGrid = document.getElementById("rightsGrid");

/* ------------------------------
   Feature Section
-------------------------------- */

featureGrid.innerHTML = features.map(item => `
  <div class="feature-item">
    <div class="feature-icon">
      <i data-lucide="${item.icon}" aria-hidden="true"></i>
    </div>

    <div>
      <strong>${item.title}</strong>
      <p>${item.text}</p>
    </div>
  </div>
`).join("");

/* ------------------------------
   Services Section
   ใช้ Lucide Icon
-------------------------------- */

servicesGrid.innerHTML = services.map(item => `
  <article class="service-card">

    <div class="service-icon">
      <i data-lucide="${item.icon}" aria-hidden="true"></i>
    </div>

    <h3>${item.title}</h3>

    <p>${item.text}</p>

  </article>
`).join("");

/* ------------------------------
   Rights Section
-------------------------------- */

rightsGrid.innerHTML = rights.map(item => `
  <article class="right-card">
    <div class="right-icon">
      <i data-lucide="${item.icon}" aria-hidden="true"></i>
    </div>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
    <a href="#contact">${item.button}</a>
  </article>
`).join("");

if (window.lucide) {
  lucide.createIcons();
}

/* ------------------------------
   Province Filter
-------------------------------- */

const provinces = [...new Set(centers.map(c => c.province))];

provinces.forEach(province => {
  const opt = document.createElement("option");

  opt.value = province;
  opt.textContent = province;

  provinceFilter.appendChild(opt);
});

/* ------------------------------
   Render Centers
-------------------------------- */

function renderCenters() {
  const query = centerSearch.value.trim().toLowerCase();
  const province = provinceFilter.value;

  const filtered = centers.filter(center => {

    const matchesProvince =
      province === "all" ||
      center.province === province;

    const haystack =
      `${center.name} ${center.province} ${center.district} ${center.address}`
      .toLowerCase();

    return matchesProvince && haystack.includes(query);
  });

  centersGrid.innerHTML = filtered.map(center => `
    <article class="center-card">

      <div class="center-image">

        <img
          src="${center.image}" 
          alt="${center.name}" 
          loading="lazy"
        />

        <div class="location-badge">
          <span>จังหวัด</span>
          <strong>${center.province}</strong>
        </div>

      </div>

      <div class="center-body">

        <div class="center-title">

          <div>
            <h3>${center.name}</h3>

            <div class="center-sub">
              ${center.district}
              <span>•</span>
              ${center.province}
            </div>
          </div>

        </div>

        <div class="address">

          <div class="address-icon">⌖</div>

          <div>
            ${center.address}
          </div>

        </div>

        <div class="cert">
          <span>✓</span>
          ได้รับการรับรองมาตรฐานจาก ศรต.
        </div>

        <div class="card-actions">

          <a
            href="#contact"
            class="card-btn primary"
          >
            ดูรายละเอียดศูนย์ →
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.mapQuery)}"
            class="card-btn secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            ดูแผนที่
          </a>

        </div>

      </div>

    </article>
  `).join("");

  emptyState.hidden = filtered.length !== 0;

  /*
    สำคัญ:
    หลังจาก render HTML ใหม่แล้ว
    ต้องเรียก Lucide อีกครั้ง
  */
  refreshLucide();
}

/* ------------------------------
   Lucide Icon Refresh
-------------------------------- */

function refreshLucide() {

  if (
    window.lucide &&
    typeof lucide.createIcons === "function"
  ) {
    lucide.createIcons();
  }

}

/* ------------------------------
   Search / Filter
-------------------------------- */

centerSearch.addEventListener(
  "input",
  renderCenters
);

provinceFilter.addEventListener(
  "change",
  renderCenters
);

renderCenters();

/* ------------------------------
   Mobile Menu
-------------------------------- */

const toggle =
  document.querySelector(".menu-toggle");

const nav =
  document.querySelector(".main-nav");

if (toggle && nav) {

  toggle.addEventListener("click", () => {

    const open =
      nav.classList.toggle("open");

    toggle.setAttribute(
      "aria-expanded",
      String(open)
    );

  });

  document.querySelectorAll(".main-nav a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}

/* ------------------------------
   Initial Lucide Render
-------------------------------- */

refreshLucide();