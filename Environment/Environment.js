import { CONFIGURATION } from "../Configuration/Configuration.js";
import { NOVA } from "../Model/Model.js";

const ENVIRONMENT=()=>{

    if (localStorage.getItem('Environment') === 'Development' ) {

        CONFIGURATION();
        
        NOVA();

        return;
        
    };

    if (localStorage.getItem('Environment') === 'Mobile' ) {

        CONFIGURATION();

        NOVA();

        return;
        
    };

    if (localStorage.getItem('Environment') === 'Web' ) {

        CONFIGURATION();

        NOVA();

        return;
        
    };

    if (localStorage.getItem('Environment') === 'Desktop' ) {

        CONFIGURATION();

        NOVA();

        return;
        
    };

};
export{ENVIRONMENT};