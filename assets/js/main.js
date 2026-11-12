const projects = [
  {
    title: "Vineflower Decompiler CLI",
    version: "CLI / Tools",
    description: "Windows CLI wrapper และ Drag & Drop GUI สำหรับ Vineflower 1.12.0 แปลงไฟล์ .jar เป็น Java source code อ่านง่าย พร้อมจัดโครงสร้างโฟลเดอร์ให้อัตโนมัติ",
    tags: ["C#", ".NET", "Vineflower", "Java", "CLI"],
    github: "https://github.com/seaze-code/JarDecompiler",
    images: []
  },
  {
    title: "zAC Anticheat",
    version: "Minecraft",
    description: "ระบบ Anticheat ฝั่ง Server ดักจับ Packet Movement, Combat hacks และตรวจเช็ค Anomaly ของผู้เล่น",
    tags: ["Java", "Packets", "Protocol", "Anticheat"],
    images: []
  },
  {
    title: "Practice PvP",
    version: "1.21.11",
    description: "ระบบดวล 1v1, คิว Matchmaking, คำนวณแต้ม Elo, Custom Kit และรีเซ็ต Arena อัตโนมัติ",
    tags: ["Paper", "Java", "PvP Engine", "Elo"],
    images: []
  },
  {
    title: "BedWars",
    version: "1.21.11",
    description: "ระบบ BedWars เต็มรูปแบบ ร้านค้า Generator อัปเกรดทีม, Trap เตือนภัย และ Custom Shop",
    tags: ["Paper", "Minigame", "Teams", "Economy"],
    images: []
  },
  {
    title: "SkyWars",
    version: "1.21.11",
    description: "สุ่มของในกล่องตาม Tier, กรงสปาวน์ Cages, ระบบแต้ม Kill/Win และวงบีบ Sudden Death",
    tags: ["Paper", "Loot Tables", "Minigame"],
    images: []
  },
  {
    title: "OneBlock",
    version: "1.21.11",
    description: "ขุดบล็อกเดียวเลื่อน Phase ตาม Tier, ระบบเกาะส่วนตัว, เควสต์ และระบบตลาดผู้เล่น",
    tags: ["Paper", "Progression", "Islands"],
    images: []
  },
  {
    title: "Battle Royale",
    version: "1.21.11",
    description: "โดดร่มลงแมพ ฟาร์มกล่อง Loot สุ่มของ, ระบบ World Border ค่อยๆ บีบวง และแอร์ดรอปพิเศษ",
    tags: ["Paper", "World Border", "Custom Engine"],
    images: []
  }
];

/* RENDER PROJECTS */
const projectList = document.getElementById("projectList");

projects.forEach((p, i) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.onclick = () => openModal(i);

  const tagsHtml = p.tags.map(t => `<span class="project-tag">${t}</span>`).join("");

  card.innerHTML = `
    <div>
      <div class="project-card-header">
        <h3>${p.title}</h3>
        <span class="badge">${p.version}</span>
      </div>
      <p class="project-card-desc">${p.description}</p>
    </div>
    <div class="project-card-tags">
      ${tagsHtml}
    </div>
  `;

  projectList.appendChild(card);
});

/* MODAL */
function openModal(i){
  const p = projects[i];

  document.getElementById("modalTitle").innerText = p.title;
  document.getElementById("modalVersion").innerText = p.version;
  document.getElementById("modalDescription").innerText = p.description;

  const features = document.getElementById("modalFeatures");
  features.innerHTML = p.tags.map(t => `<span class="badge">${t}</span>`).join("");

  const linksContainer = document.getElementById("modalLinks");
  if(linksContainer) {
    if(p.github) {
      linksContainer.innerHTML = `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display:inline-flex; align-items:center; gap:8px; font-size:0.88rem; padding:10px 20px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        View on GitHub ↗
      </a>`;
      linksContainer.style.display = "block";
    } else {
      linksContainer.innerHTML = "";
      linksContainer.style.display = "none";
    }
  }

  const img = document.getElementById("modalImage");
  if(p.images && p.images.length){
    img.src = p.images[0];
    img.style.display = "block";
  }else{
    img.style.display = "none";
  }

  document.getElementById("projectModal").style.display = "flex";
}

function closeModal(){
  document.getElementById("projectModal").style.display = "none";
}

function onModalBackdrop(e){
  if(e.target.id === "projectModal"){
    closeModal();
  }
}

window.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    closeModal();
  }
});

/* THEME TOGGLE (LIGHT / DARK) */
const themeToggleBtn = document.getElementById("themeToggle");

const moonIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
const sunIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;

function updateThemeIcon(theme) {
  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = theme === "light" ? sunIcon : moonIcon;
  }
}

// Initialize theme icon on load
const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
updateThemeIcon(currentTheme);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const nextTheme = activeTheme === "light" ? "dark" : "light";
    
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    updateThemeIcon(nextTheme);
  });
}

/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId && targetId !== '#') {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        history.pushState(null, null, targetId);
      }
    }
  });
});

/* ACTIVE LINK ON SCROLL */
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute("id");
    const navLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
    if(navLink){
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        navLink.classList.add("active");
      }else{
        navLink.classList.remove("active");
      }
    }
  });
});
