// 1. Citation de développeur aléatoire
const quotes = [
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" }
];
function setRandomQuote() {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteBlock = document.querySelector('.dev-quote blockquote');
  if (quoteBlock) quoteBlock.innerHTML = `“${q.text}”<br><span>- ${q.author}</span>`;
}

// 2. Apparition animée sur les sections au scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('main section');
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 80) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// 3. Thème clair/sombre
function toggleTheme() {
  document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}
function setThemeFromStorage() {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
  }
}

// 4. Compteur de visiteurs local
function updateVisitorCount() {
  let count = localStorage.getItem('visitCount');
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem('visitCount', count);
  const counter = document.getElementById('visitor-count');
  if (counter) counter.textContent = count;
}

// 5. Effet machine à écrire sur l’accroche
function typeWriterEffect() {
  const el = document.querySelector('.accroche');
  if (!el) return;
  const text = el.textContent;
  el.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 35);
    }
  }
  type();
}

// Galerie dynamique
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

// Compteur de jours jusqu'à fin août
function updateDaysUntilApp() {
  const now = new Date();
  let target = new Date(now.getFullYear(), 7, 31); // 31 août
  if (now > target) target = new Date(now.getFullYear() + 1, 7, 31);
  const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
  const el = document.getElementById('days-until-app');
  if (el) el.textContent = diff;
}

// Animation de fond (particules)
function animateParticles() {
  const canvas = document.getElementById('bg-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = window.innerWidth, h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
  const particles = [];
  const num = Math.floor((w * h) / 4000);
  for (let i = 0; i < num; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1.5 + Math.random() * 2.5,
      dx: (Math.random() - 0.5) * 0.7,
      dy: (Math.random() - 0.5) * 0.7
    });
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
      ctx.fillStyle = '#8B1A1A88';
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > w) p.dx *= -1;
      if (p.y < 0 || p.y > h) p.dy *= -1;
    }
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', () => {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  });
}

// FAQ interactive
function setupFAQ() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      item.classList.toggle('active');
      items.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });
    });
  });
}

// Initialisation au chargement
window.addEventListener('DOMContentLoaded', () => {
  setRandomQuote();
  setThemeFromStorage();
  updateVisitorCount();
  typeWriterEffect();
  updateDaysUntilApp();
  animateParticles();
  setupFAQ();
  // Ajout du bouton de thème
  if (!document.getElementById('theme-toggle')) {
    const btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.title = 'Changer de thème';
    btn.innerHTML = '<i class="fas fa-adjust"></i>';
    btn.className = 'theme-toggle-btn';
    document.body.appendChild(btn);
    btn.addEventListener('click', toggleTheme);
  }
  // Galerie modal
  const openBtn = document.getElementById('open-gallery');
  const modal = document.getElementById('gallery-modal');
  const closeBtn = document.getElementById('close-gallery');
  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener('click', () => {
      modal.style.display = 'block';
      // Charger les images à l'ouverture
      const container = document.getElementById('gallery-container');
      if (container) container.innerHTML = '';
      loadGallery();
    });
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }
}); 