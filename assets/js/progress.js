/* -------------------------------- */
/* Track Reading Progress on Scroll */
/* -------------------------------- */

const siteMain = document.querySelector("#site-main"),
    readingProgress = document.querySelector("#reading-progress");

const getHeights = () => {
    let coords = siteMain.getBoundingClientRect();
    let mainHeight = coords.height;
    let windowHeight = window.innerHeight;
    let height = mainHeight - windowHeight;

    return { coords, height };
};

const showReadingProgress = () => {
    let { coords, height } = getHeights();
    let progressPercentage = 0;

    if (coords.top < 0) {
        progressPercentage = (Math.abs(coords.top) / height) * 100;
    }

    readingProgress.setAttribute("value", progressPercentage);
};

document.addEventListener(
    "scroll",
    debounce(() => {
        checkScroll();
        if (
            readingProgress &&
            (localStorage.getItem("animations") === "on" ||
                localStorage.getItem("animations") === null)
        ) {
            showReadingProgress();
        }
    })
);
