// identify the current asides
const aside = document.querySelectorAll(".aside-fade_authors");

// identify the header class list
const headerClasses = document.getElementById("site-header").classList;

var lastScrollTop = 0;
var downScroll = false;
var homePage = true;
var compact = false;
var timeout = null;

// Checks if on home page
if (headerClasses.contains("l-compact")) {
  homePage = false;
}

// function to add fade class to header and wait until animation finished to remove
function fadeInOut (classList) {
  classList.add("fade");
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  timeout = setTimeout(function () {
    classList.remove("fade");
  }, 500);
}

// function for changes based on scroll
function scrollShow() {
  let st = window.pageYOffset || document.documentElement.scrollTop;

  // check for downward scroll
  if (st > lastScrollTop && !downScroll ) {
    if (lastScrollTop >= 125) {
      downScroll = true;

      // changes to comapct header
      if (homePage && !compact) {
        headerClasses.add("l-compact");
        fadeInOut(headerClasses);
        compact = true;
      }

      // activates asides
      if (aside) {
        for (let i = 0; i < aside.length; i++) {
          aside[i].classList.add("active");
        }
      }

    }
  }

  // check for upward scroll
  else if (st < lastScrollTop && downScroll ) {
    if (lastScrollTop < 125) {
      downScroll = false;

      // changes to full header
      if (homePage) {
        headerClasses.remove("l-compact");
        fadeInOut(headerClasses);
        compact = false;
      }

      // deactivates asides
      if (aside) {
        for (let i=0; i<aside.length; i++) {
          aside[i].classList.remove("active");
        }
      }

    }
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}

document.addEventListener("scroll", scrollShow, false);

const main = document.getElementById("site-main");
const progress = document.getElementById("reading-progress");

// Get the percentage scrolled of an element. It returns zero if its not in view.
function getScrollProgress(el) {
  let coords = el.getBoundingClientRect();
  let mainHeight = coords.height;
  let windowHeight = window.innerHeight;
  let height = mainHeight - windowHeight;
  let progressPercentage = 0;

  if (coords.top < 0) {
    progressPercentage = (Math.abs(coords.top) / height) * 100;
  }

  return progressPercentage;
}

function showReadingProgress() {
    progress.setAttribute("value", getScrollProgress(main));
}

if (progress) {
  document.addEventListener("scroll", showReadingProgress, false);
}
