// identify the toggle switch HTML element
const navSwitch = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#site-nav .menu");

// function that opens menu
function openNav(e) {
  if (e.target.checked) {
    navMenu.classList.add("active");
  } else {
    navMenu.classList.remove("active");
  }
}

// listener for toggle switch
navSwitch.addEventListener("change", openNav, false);
