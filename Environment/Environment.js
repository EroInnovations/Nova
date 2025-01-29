import { CONFIGURATION } from "../Configuration/Configuration.js";

const ENVIRONMENT=()=>{

    if (localStorage.getItem('Environment') === 'Development' ) {

        CONFIGURATION();
        
        return;
        
    };

    if (localStorage.getItem('Environment') === 'Production' ) {

        CONFIGURATION();

        return;
        
    };

    if (localStorage.getItem('Environment') === 'Web' ) {

        CONFIGURATION();

        return;
        
    };

    if (localStorage.getItem('Environment') === 'Desktop' ) {

        CONFIGURATION();

        return;
        
    };

};
export{ENVIRONMENT};