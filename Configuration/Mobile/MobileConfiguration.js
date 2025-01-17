import { ROUTER } from "../../Library/Router/Router.js";
import { NOVASTART } from "../../Model/Start.js";

const MOBILECONFIGURATION=()=>{

    if (localStorage.getItem("Status") === 'Android' ) {

        ROUTER();

        NOVASTART();

        return;
        
    };

    if (localStorage.getItem("Status") === 'Ios' ) {

        alert("Ios");

        NOVASTART();

        return;
        
    };
    
};
export{MOBILECONFIGURATION};