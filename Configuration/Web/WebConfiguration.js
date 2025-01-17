import { ROUTER } from "../../Library/Router/Router.js";

const WEBCONFIGURATION=()=>{

    if (localStorage.getItem("Status") === 'Website' ) {

        ROUTER();

        return;
        
    };

};
export{WEBCONFIGURATION};