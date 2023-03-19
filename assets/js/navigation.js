/* --------------------------------- */
/* Open and Close Main Nav on Mobile */
/* --------------------------------- */

// identify the toggle switch HTML element
const navToggle = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#site-nav");

// close the nav menu
const closeNav = () => {
    navMenu.classList.remove("banner__nav--open");
    navToggle.innerHTML = "Menu";
    navToggle.title = "Open main site navigation";
};

// open the nav menu
const openNav = () => {
    navMenu.classList.add("banner__nav--open");
    navToggle.innerHTML = "X";
    navToggle.title = "Close main site navigation";
};

// listen for click on menu button to open/close nav
navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.contains("banner__nav--open") ? closeNav() : openNav();
});

// listen for click outside nav to close nav
document.addEventListener("click", (e) => {
    if (
        navMenu.classList.contains("banner__nav--open") &&
        !navMenu.contains(e.target)
    ) {
        closeNav();
    }
});

// listen for tab out of nav to close nav
document.addEventListener("keyup", (e) => {
    if (
        e.key === "Tab" &&
        navMenu.classList.contains("banner__nav--open") &&
        !navMenu.contains(document.activeElement)
    ) {
        closeNav();
    }
    if (navMenu.contains(document.activeElement)) {
        openNav();
    }
});

/* ---------------------------------------------------- */
/* Add or Remove Float Banner based on Scroll Detection */
/* ---------------------------------------------------- */

const siteBanner = document.querySelector("#site-banner");

let prevScroll = window.scrollY || document.documentElement.scrollTop;
let direction = 0;
let prevDirection = 0;

const checkScroll = () => {
    let curScroll = window.scrollY || document.documentElement.scrollTop;
    let bannerHeight = siteBanner.offsetHeight;

    // identify scroll direction
    direction = curScroll > prevScroll ? "down" : "up";

    if (
        window.scrollY > bannerHeight &&
        window.matchMedia("(min-width: 50rem)").matches
    ) {
        // use float banner on desktop when scrolled past banner
        siteBanner.classList.add("banner--float");
    } else if (window.scrollY < bannerHeight) {
        // remove float banner when original banner is visible
        siteBanner.classList.remove("banner--float");
    } else if (direction !== prevDirection) {
        // toggle float banner when scrolling up or down
        toggleBanner(direction, curScroll);
    }

    prevScroll = curScroll;
};

const toggleBanner = (direction, curScroll) => {
    if (direction === "down" && curScroll > 52) {
        // remove float banner when scrolling down
        closeNav();
        siteBanner.classList.remove("banner--float");
        prevDirection = direction;
    } else if (direction === "up") {
        // use float banner when scrolling up
        siteBanner.classList.add("banner--float");
        prevDirection = direction;
    }
};

/* --------------------- */
/* Scroll to Top of Site */
/* --------------------- */

const toTop = document.querySelector("#to-top-button");

toTop.addEventListener("click", (e) => {
    window.scrollTo(0, 0);
});
