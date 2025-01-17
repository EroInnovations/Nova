import { ROUTER } from "../../Library/Router/Router.js";
import { NOVA } from "../../Model/Model.js";
import { NOVASTART } from "../../Model/Start.js";

const MOBILECONFIGURATION=()=>{

    if (localStorage.getItem("Status") === 'Android' ) {

        ROUTER();

        NOVASTART();

        NOVA();

        return;
        
    };

    if (localStorage.getItem("Status") === 'Ios' ) {

        alert("Ios");

        NOVASTART();

        NOVA();

        return;
        
    };
    
};
export{MOBILECONFIGURATION};