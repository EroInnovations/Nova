let previousPageFunction = null;

const ROUTE = (NEWPAGE, FUNCTION, FUNCTIONBACK) => {
    
    previousPageFunction = FUNCTIONBACK;

    // Push or replace history state
    const stateData = { data: FUNCTION() };
    if (NEWPAGE) {
        history.pushState(stateData, "", "");
    } else {
        history.replaceState(stateData, "", "");
    }
};

// Ensure the popstate listener is added only once
if (!window._popStateListenerAttached) {
    window.addEventListener("popstate", function (event) {
        if (typeof previousPageFunction === "function") {
            previousPageFunction();
        }
    });
    window._popStateListenerAttached = true;
}

export { ROUTE };
