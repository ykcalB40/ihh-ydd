const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));

const mobileToggle = $('#mobileToggle');
const mainNav = $('#main-nav');
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        mobileToggle.setAttribute('aria-expanded', String(!expanded));
        if (mainNav.style.display === 'flex' || mainNav.style.display === 'block') {
            mainNav.style.display = '';
        } else {
            mainNav.style.display = 'block';
        }
    })
}

const slidesEl = $('#slides');
const slides = $$('.slide', slidesEl);
const dotsEl = $('#dots');
let active = 0;
function buildDots() {
    slides.forEach((s, i) => {
        const btn = document.createElement('button');
        btn.setAttribute('aria-label', 'Slide ' + (i + 1));
        btn.addEventListener('click', () => goTo(i));
        if (i === 0) btn.classList.add('active');
        dotsEl.appendChild(btn);
    })
}
function goTo(i) {
    active = (i + slides.length) % slides.length;
    slidesEl.style.transform = `translateX(-${active * 100}%)`;
    $$('.carousel-dots button').forEach((b, idx) => b.classList.toggle('active', idx === active));
}
buildDots();
let carouselTimer = setInterval(() => goTo(active + 1), 6000);
slidesEl.addEventListener('mouseenter', () => clearInterval(carouselTimer));
slidesEl.addEventListener('mouseleave', () => carouselTimer = setInterval(() => goTo(active + 1), 6000));

const modal = $('#donateModal');
const donateBtns = $$('[data-modal]');
const donateClose = $('#donateClose');
donateBtns.forEach(b => b.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(() => $('#amount').focus(), 200);
}));
donateClose && donateClose.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
});
modal.addEventListener('click', (e) => { if (e.target === modal) { modal.style.display = 'none'; modal.setAttribute('aria-hidden', 'true'); } });

$('#donationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = Number($('#amount').value);
    if (isNaN(amount) || amount < 1) { alert('Lütfen geçerli bir miktar girin.'); return }
    alert('Demo: ' + amount + '₺ bağış talebi alındı. (Ödeme entegrasyonu yok)');
    modal.style.display = 'none';
});

function animateCounters() {
    $$('.num').forEach(el => {
        const target = Number(el.dataset.target || 0);
        let current = 0;
        const step = Math.max(1, Math.round(target / 200));
        const iv = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(iv) }
            el.textContent = current.toLocaleString('tr-TR');
        }, 10);
    });
}

let countersAnimated = false;
const observer = new IntersectionObserver((entries) => {
    entries.forEach(en => {
        if (en.isIntersecting && !countersAnimated) { animateCounters(); countersAnimated = true; }
    })
}, { threshold: 0.3 });
observer.observe($('#statsTitle'));

const newsData = [
    { title: 'Suriye için Acil Gıda Dağıtımı', date: '21.07.2025', img: 'https://placehold.co/800x600/png' },
    { title: 'Londra Konferansında Temsil Edildik', date: '17.07.2025', img: 'https://placehold.co/800x600/png' },
    { title: 'Sudan’da Sağlık Kampanyası', date: '10.07.2025', img: 'https://placehold.co/800x600/png' },
];
const newsGrid = $('#newsGrid');
newsData.forEach(n => {
    const node = document.createElement('article');
    node.className = 'news card';
    node.innerHTML = `\n        <img loading=\"lazy\" src=\"${n.img}\" alt=\"${n.title}\">\n        <div>\n          <div class=\"small muted\">${n.date}</div>\n          <h3 style=\"margin:6px 0 8px\">${n.title}</h3>\n          <p class=\"small muted\">Kısa özet metin — daha fazla bilgi için tıklayın.</p>\n        </div>\n      `;
    newsGrid.appendChild(node);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none'; modal.setAttribute('aria-hidden', 'true');
    }
});

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(en => {
        if (en.isIntersecting) {
            const bar = en.target.querySelector('b');
            const targetW = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => bar.style.width = targetW, 80);
            progressObserver.unobserve(en.target);
        }
    })
}, { threshold: 0.2 });
$$('.card').forEach(c => progressObserver.observe(c));

document.body.addEventListener('keyup', (e) => { if (e.key === 'Tab') document.body.classList.add('user-tabbed'); });