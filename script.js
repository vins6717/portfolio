const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(link => {
    link.addEventListener('scroll', () => {
        link.parentNode.classList.toggle('active')
    })
})