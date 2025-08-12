window.$ = (s, root = document) => root.querySelector(s);
window.$$ = (s, root = document) => Array.from(root.querySelectorAll(s));
window.randomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min) + min);

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




