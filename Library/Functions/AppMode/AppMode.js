const APPMODE = (COLOR) => {
    const body = document.querySelector("body");

    // Fallback color
    body.style.background = COLOR || '#cdcdcd';

    // If in production and AndroidColors interface is available
    if (localStorage.getItem('Enviroment') === 'Production') {
        changeWebViewBackground(COLOR)
    }
};

export { APPMODE };
