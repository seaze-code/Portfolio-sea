const projects = [
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
