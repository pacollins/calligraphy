/* -------------------- */
/* Change Site Settings */
/* -------------------- */

// identify default site settings
const buttons = {
    "dark-mode": localStorage.getItem("dark-mode"),
    animations: localStorage.getItem("animations"),
};

// change setting and update button text and local storage
function changeButton(type, value, update) {
    // prevent animation flicker
    if (type === "dark-mode" && buttons.animations === "on") {
        document.documentElement.setAttribute("data-animations", "off");
        setTimeout(() => {
            document.documentElement.setAttribute("data-animations", "on");
        }, 300);
    }

    document.documentElement.setAttribute("data-" + type, value);
    document.querySelector("#" + type + "-button-value").innerHTML = value;

    // update local storage
    if (update) {
        localStorage.setItem(type, value);
    }
}

// listen for click on settings buttons
for (const [key, value] of Object.entries(buttons)) {
    changeButton(key, value, false);
    document
        .querySelector("#" + key + "-button")
        .addEventListener("click", (e) => {
            var value =
                document.documentElement.getAttribute("data-" + key) == "on"
                    ? "off"
                    : "on";
            changeButton(key, value, true);
        });
}
