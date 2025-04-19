const APPMODE = (COLOR) => {
    const body = document.querySelector("body");

    // Fallback color
    body.style.background = COLOR || '#cdcdcd';

    // If in production and AndroidColors interface is available
    if (localStorage.getItem('Enviroment') === 'Production' && typeof AndroidColors !== "undefined") {
        window.addEventListener("load", () => {
            try {
                const colorFromAndroid = AndroidColors.getColorHex(COLOR);
                if (colorFromAndroid) {
                    body.style.background = colorFromAndroid;
                }
            } catch (e) {
                console.log("Failed to get color from Android:", e);
            }
        });
    }
};

export { APPMODE };
