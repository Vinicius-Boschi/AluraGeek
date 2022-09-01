let navbar = document.querySelector('.header')

window.addEventListener('scroll', function() {
    const scollHeight = window.pageYOffset
    const navbarHeight = navbar.getBoundingClientRect().height

    if (scollHeight > navbarHeight) {
        navbar.classList.add('header-fixed')
    } else {
        navbar.classList.remove('header-fixed')
    }
})