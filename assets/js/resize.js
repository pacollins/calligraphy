/* ----------------------------------- */
/* Prevent Animations on Screen Resize */
/* ----------------------------------- */

window.addEventListener(
    "resize",
    debounce(() => {
        document.documentElement.setAttribute("data-animations", "off");
        setTimeout(() => {
            document.documentElement.setAttribute(
                "data-animations",
                localStorage.getItem("animations")
            );
        }, 750);
    })
);
