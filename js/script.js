window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('#mainNav');
    const navbarToggler = document.querySelector('#navbarToggler');
    const navbarMenu = document.querySelector('#navbarResponsive');
    const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');
    const sections = document.querySelectorAll('section[id]');

    
    // Navbar shrink on scroll
    function navbarShrink() {
        if (window.scrollY === 0) {
            navbar.classList.remove('navbar-shrink');
        } else {
            navbar.classList.add('navbar-shrink');
        }
    }
    navbarShrink();
    window.addEventListener('scroll', navbarShrink);
    
    // Toggle menu (mobile)
    navbarToggler.addEventListener('click', () => {
        navbarMenu.classList.toggle('open');
    });
    
    // Close menu on link click (mobile only)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarMenu.classList.contains('open')) {
                navbarMenu.classList.remove('open');
            }
        });
    });
    
    navbarToggler.addEventListener('click', () => {
        navbarToggler.classList.toggle('hide');
    });

    document.addEventListener('click', e => {
        if(!navbarMenu.contains(e.target) && e.target !== navbarToggler){
            navbarMenu.classList.remove('open');
        }
    })

    // Scrollspy (highlight active link)
    function activateScrollSpy() {
        let scrollPos = window.scrollY + 120;
        sections.forEach(section => {
            if (scrollPos >= section.offsetTop &&
                scrollPos < section.offsetTop + section.offsetHeight) {
                let id = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    window.addEventListener('scroll', activateScrollSpy);
    activateScrollSpy();
});
