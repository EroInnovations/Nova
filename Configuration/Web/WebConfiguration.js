import { ROUTER } from "../../Library/Router/Router.js";
import { NOVASTART } from "../../Model/Start.js";

const WEBCONFIGURATION=()=>{

    if (localStorage.getItem("Status") === 'Website' ) {

        ROUTER();

        NOVASTART();

        return;
        
    };

};
export{WEBCONFIGURATION};