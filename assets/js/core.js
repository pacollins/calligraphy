/* ---------------- */
/* Debounce Changes */
/* ---------------- */

const debounce = (func, wait = 10) => {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
};
