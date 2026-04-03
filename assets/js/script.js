
// EMBER PARTICLES
const embers = document.getElementById('embers');
const colors = ['#c9a84c', '#d45c1a', '#ff7a2f', '#f0c060'];
for (let i = 0; i < 30; i++) {
    const e = document.createElement('div');
    e.className = 'ember';
    const size = Math.random() * 3 + 1;
    const dur = Math.random() * 12 + 8;
    const delay = Math.random() * 15;
    const drift = (Math.random() - 0.5) * 120;
    const color = colors[Math.floor(Math.random() * colors.length)];
    e.style.cssText = `left:${Math.random() * 100}%;width:${size}px;height:${size}px;background:${color};box-shadow:0 0 ${size * 3}px ${color};animation-duration:${dur}s;animation-delay:-${delay}s;--drift:${drift}px`;
    embers.appendChild(e);
}

// SCROLL EFFECTS
const bar = document.getElementById('progress-bar');
const backTop = document.getElementById('back-top');
window.addEventListener('scroll', () => {
    const st = window.scrollY;
    const dh = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (st / dh * 100) + '%';
    backTop.classList.toggle('visible', st > 400);
});

// REVEAL
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const t = document.querySelector(a.getAttribute('href'));
        if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// FORM
function handleFormSubmit() {
    const msg = document.getElementById('form-msg');
    msg.style.display = 'block';
    setTimeout(() => msg.style.display = 'none', 4000);
}
