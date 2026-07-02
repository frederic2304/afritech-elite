// 1. Lien actif automatique (remplace ce que faisait le fetch)
document.querySelectorAll('nav a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

// 2. Texte du bouton thème au chargement
const btn = document.getElementById('themeToggle');
if (btn && localStorage.getItem('theme') === 'dark') {
    btn.innerHTML = '<img src="/afritech-elite/accueil/icons/mode-jour.png" alt="" aria-hidden="true" width="30" height="30">';
}

// 3. Toggle thème
function toggleTheme() {
    const html = document.documentElement;
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        btn.innerHTML = '<img src="/afritech-elite/accueil/icons/nouvelle-lune.png" alt="" aria-hidden="true" width="30" height="30">';
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        btn.innerHTML = '<img src="/afritech-elite/accueil/icons/mode-jour.png" alt="" aria-hidden="true" width="30" height="30">';
    }
}

const backToTop = document.getElementById("backToTop");

// Afficher le bouton après 300px de défilement
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// Retour en haut avec animation
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// 4. Menu mobile
const menuToggle = document.getElementById('menuToggle');
const siteNavigation = document.getElementById('siteNavigation');
const pageHeader = document.querySelector('header');

function closeMobileMenu() {
    if (pageHeader) {
        pageHeader.classList.remove('menu-open');
    }
    document.body.classList.remove('menu-open-body');
    if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
    }
}

function openMobileMenu() {
    if (pageHeader) {
        pageHeader.classList.add('menu-open');
    }
    document.body.classList.add('menu-open-body');
    if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'true');
    }
}

function toggleMobileMenu() {
    const isExpanded = menuToggle?.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
}

siteNavigation?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
            closeMobileMenu();
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        closeMobileMenu();
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeMobileMenu();
    }
});