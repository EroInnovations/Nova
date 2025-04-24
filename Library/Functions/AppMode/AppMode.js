const APPMODE = (COLOR) => {
    const body = document.querySelector("body");

    body.style.background = COLOR || '#cdcdcd';

    changeWebViewBackground(COLOR);
    
};

export { APPMODE };
