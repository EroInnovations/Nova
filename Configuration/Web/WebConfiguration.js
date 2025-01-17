import { ROUTER } from "../../Library/Router/Router.js";
import { NOVA } from "../../Model/Model.js";
import { NOVASTART } from "../../Model/Start.js";

const WEBCONFIGURATION=()=>{

    if (localStorage.getItem("Status") === 'Website' ) {

        ROUTER();

        NOVASTART();

        NOVA();

        return;
        
    };

};
export{WEBCONFIGURATION};