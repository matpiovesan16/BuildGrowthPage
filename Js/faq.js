const toggles = document.querySelectorAll('.faq');

console.log(toggles);

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active')
    })
})