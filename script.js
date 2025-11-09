const quotes = [
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Programs must be written for people to read.", author: "Harold Abelson" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
];

function setRandomQuote(){
  const q = quotes[Math.floor(Math.random()*quotes.length)];
  const quoteBlock = document.querySelector('.dev-quote blockquote');
  if(quoteBlock) quoteBlock.innerHTML = `"${q.text}"<br><span>— ${q.author}</span>`;
}

function setupReveal(){
  const els = document.querySelectorAll('.section, .card, .stats-img, .media-grid img');
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('reveal','in'); io.unobserve(e.target); }
      else e.target.classList.add('reveal');
    });
  }, { threshold: .14 });
  els.forEach(el=>io.observe(el));
}

function applyStoredTheme(){
  if(localStorage.getItem('theme')==='light'){ document.body.classList.add('light-theme'); }
}
function toggleTheme(){
  document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}
function initThemeToggle(){
  const btn = document.getElementById('theme-toggle');
  if(btn) btn.addEventListener('click', toggleTheme);
}

function updateVisitorCount(){
  let count = parseInt(localStorage.getItem('visitCount') || '0', 10) + 1;
  localStorage.setItem('visitCount', String(count));
  const el = document.getElementById('visitor-count');
  if(el) el.textContent = count.toLocaleString('fr-FR');
}

function typeWriterEffect(){
  const el = document.querySelector('.accroche');
  if(!el) return;
  const text = el.textContent.trim();
  el.textContent = '';
  let i = 0;
  (function type(){
    if(i < text.length){
      el.textContent += text.charAt(i++);
      setTimeout(type, 22);
    }
  })();
}

function animateParticles(){
  const canvas = document.getElementById('bg-particles');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const particles = [];
  const NUM = Math.floor((w*h)/5000);
  for(let i=0;i<NUM;i++){
    particles.push({
      x: Math.random()*w,
      y: Math.random()*h,
      r: 1 + Math.random()*2,
      dx: (Math.random()-.5)*.6,
      dy: (Math.random()-.5)*.6
    });
  }
  function draw(){
    ctx.clearRect(0,0,w,h);
    for(const p of particles){
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = '#8B1A1A66';
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if(p.x<0||p.x>w) p.dx*=-1;
      if(p.y<0||p.y>h) p.dy*=-1;
    }
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', ()=>{
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });
}

function setupFAQ(){
  document.querySelectorAll('.faq-item').forEach(item=>{
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', ()=>{
      item.classList.toggle('active');
      document.querySelectorAll('.faq-item').forEach(o=>{ if(o!==item) o.classList.remove('active'); });
    });
  });
}

// Données des certificats
const certificationsData = [
  'certif1.jpg', 'certif2.jpg', 'certif3.jpg',
  'certif4.jpg', 'certif5.jpg'
];

// Fonction pour charger les certificats avec meilleure gestion d'erreurs
// Fonction améliorée avec vérification des fichiers
async function loadCertifications() {
  const grid = document.getElementById('certifications-grid');
  if (!grid) return;

  grid.innerHTML = '<p class="muted">Chargement des certificats...</p>';
  
  const existingCertifs = await checkExistingCertifs();
  
  if (existingCertifs.length === 0) {
    grid.innerHTML = `
      <div class="no-certifications" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
        <p class="muted">Aucun certificat trouvé.</p>
        <p class="muted">Assurez-vous que les fichiers sont bien dans le dépôt GitHub.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = '';
  existingCertifs.forEach((imgSrc, index) => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = `Certification ${index + 1}`;
    img.loading = 'lazy';
    img.className = 'certification-img reveal';
    
    grid.appendChild(img);

    // Observer pour l'animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(img);
  });
}

// Vérifier quels fichiers existent vraiment
async function checkExistingCertifs() {
  const existing = [];
  
  for (const certif of certificationsData) {
    try {
      const response = await fetch(certif, { method: 'HEAD' });
      if (response.ok) {
        existing.push(certif);
      }
    } catch (error) {
      console.warn(`Fichier non trouvé: ${certif}`);
    }
  }
  
  return existing;
}

// Fonction pour mettre à jour la grille des certificats
function updateCertificationsGrid(grid, foundImages) {
  grid.innerHTML = '';
  
  if (foundImages.length === 0) {
    grid.innerHTML = `
      <div class="no-certifications" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
        <p class="muted">Aucun certificat trouvé.</p>
        <p class="muted" style="font-size: 0.9rem; margin-top: 10px;">
          Fichiers recherchés: ${certificationsData.join(', ')}
        </p>
      </div>
    `;
    return;
  }

  foundImages.forEach((img, index) => {
    grid.appendChild(img);
    
    // Observer pour l'animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(img);
  });
}

// CORRECTION : Fonction pour charger la galerie
function loadGallery() {
  const container = document.getElementById('gallery-container');
  if (!container) return;
  
  container.innerHTML = '';
  let loaded = 0;
  let total = 0;
  let found = false;
  
  for (let i = 1; i <= 20; i++) {
    const imgPath = `photo${i}.jpg`;
    const img = new Image();
    img.src = imgPath;
    img.alt = `Galerie ${i}`;
    img.className = 'gallery-img';
    
    img.onerror = function() {
      loaded++;
      if (loaded === total && !found) {
        setTimeout(() => {
          if (!found) container.innerHTML = '<p>Aucune image trouvée.</p>';
        }, 500);
      }
    };
    
    img.onload = function() {
      found = true;
      container.appendChild(img);
    };
    total++;
  }
}

function setupLightbox(){
  const overlay = document.getElementById('lightbox');
  if(!overlay) return;
  const img = overlay.querySelector('.lightbox-img');
  const prevBtn = overlay.querySelector('.prev');
  const nextBtn = overlay.querySelector('.next');
  const closeBtn = overlay.querySelector('.lightbox-close');

  let currentList = [];
  let currentIndex = 0;

  function open(src, list, index){
    img.src = src;
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden','false');
    currentList = list;
    currentIndex = index;
  }
  function close(){
    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden','true');
    img.src = '';
  }
  function showAt(i){
    if(!currentList.length) return;
    currentIndex = (i+currentList.length) % currentList.length;
    img.src = currentList[currentIndex].src;
  }

  // Modification ici pour inclure les certificats
  document.addEventListener('click',(e)=>{
    const target = e.target;
    // Vérifie si on clique sur une image de certificat OU de media-grid
    if(target.tagName==='IMG' && (target.closest('.certifications-grid') || target.closest('.media-grid'))){
      const grid = target.closest('.certifications-grid') || target.closest('.media-grid');
      const imgs = Array.from(grid.querySelectorAll('img'));
      const index = imgs.indexOf(target);
      open(target.src, imgs, index);
    }
    if(e.target===overlay) close();
  });

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', ()=> showAt(currentIndex-1));
  nextBtn.addEventListener('click', ()=> showAt(currentIndex+1));
  window.addEventListener('keydown', (e)=>{
    if(!overlay.classList.contains('show')) return;
    if(e.key==='Escape') close();
    if(e.key==='ArrowLeft') showAt(currentIndex-1);
    if(e.key==='ArrowRight') showAt(currentIndex+1);
  });
}

function setYear(){ const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear(); }

function setRandomQuoteOnLoad(){ setRandomQuote(); }

function setupSmoothScroll(){
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el){
        e.preventDefault();
        window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
      }
    });
  });
}

// Init
window.addEventListener('DOMContentLoaded', ()=>{
  applyStoredTheme();
  initThemeToggle();
  setYear();
  updateVisitorCount();
  typeWriterEffect();
  animateParticles();
  setupFAQ();
  setupLightbox();
  setupReveal();
  setRandomQuoteOnLoad();
  setupSmoothScroll();

  loadCertifications();

  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('cv-link').href = 'https://my.webcv.app/view/2502cf47-aea4-47a6-b9f2-914d171c6f0d';
  
  // Galerie modal
  const openBtn = document.getElementById('open-gallery');
  const modal = document.getElementById('gallery-modal');
  const closeBtn = document.getElementById('close-gallery');
  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener('click', () => {
      modal.style.display = 'block';
      loadGallery(); // Charger les images de la galerie
    });
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }
});