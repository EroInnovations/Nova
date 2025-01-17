import { ROUTER } from "../../Library/Router/Router.js";

const MOBILECONFIGURATION=()=>{

    if (localStorage.getItem("Status") === 'Android' ) {

        ROUTER();

        return;
        
    };

    if (localStorage.getItem("Status") === 'Ios' ) {

        ROUTER();

        return;
        
    };
    
};
export{MOBILECONFIGURATION};