// identify the toggle switch HTML element
const themeSwitch = document.querySelector("#theme-toggle");

// function that changes the theme and then stores preferce into a LocalStorage variable
function switchTheme(e) {
  if (e.target.checked) {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    themeSwitch.checked = true;
  } else {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    themeSwitch.checked = false;
  }
}

// listener for toggle switch
themeSwitch.addEventListener("change", switchTheme, false);

if (document.documentElement.getAttribute("data-theme") == "dark"){
  themeSwitch.checked = true;
}
