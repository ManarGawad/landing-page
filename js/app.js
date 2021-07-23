/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections_list = document.querySelectorAll("section");
const nav_list = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// build the nav
buildNavigationMenu = () => {
    nav_list.innerHTML = "";
    sections_list.forEach((section) => {
        nav_list.innerHTML += `<a data-target="${section.id}" class="menu__link nav-item">${section.id}</a>`
    });
}

buildNavigationMenu();

// Add functionality to distinguish the section in view
createObserver = (section) => {
    let observer;

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(section);
}

handleIntersect = (entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('your-active-class', entry.isIntersecting)
    });
}

sections_list.forEach(createObserver);

// Add the functionality to scroll to sections
const navLinks = nav_list.querySelectorAll("a");
scrollToSection = () => {
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            let href = "#" + link.getAttribute('data-target');
            window.scroll({
                behavior: "smooth",
                left: 0,
                top: document.querySelector(href).offsetTop
            });
        });
    });
}

scrollToSection();
