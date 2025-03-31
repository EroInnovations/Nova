import { CONFIGURATION } from "../Configuration/Configuration.js";
import { COMMUNITYLOADER2 } from "../Design/CommunityRiseLoader/Loader2.js";
const ENVIRONMENT=()=>{

    if (!localStorage.getItem('Updates')) {

        const body=document.querySelector(".body");
    
        if (localStorage.getItem('NAME') === 'd8c2c6df-f989-44b3-9c81-d95c31892e28' ) {
                 
            COMMUNITYLOADER2(body);
      
            CONFIGURATION();
      
            return
                  
        };
        
    };

    if (localStorage.getItem('Environment') === 'Development' ) {

        localStorage.setItem('BuildNumber','0101');

        localStorage.setItem('Status','Development');

        CONFIGURATION();
        
        return;
        
    };

    if (localStorage.getItem('Environment') === 'Production' ) {

        localStorage.setItem('BuildNumber','1010');
        
        localStorage.setItem('Status','Android');

        CONFIGURATION();

        return;
        
    };

    if (localStorage.getItem('Environment') === 'Web' ) {

        localStorage.setItem('BuildNumber','8080');
        
        localStorage.setItem('Status','Website');

        CONFIGURATION();

        return;
        
    };

    if (localStorage.getItem('Environment') === 'Desktop' ) {

        localStorage.setItem('BuildNumber','6060');
        
        localStorage.setItem('Status','Desktop');

        CONFIGURATION();

        return;
        
    };

};
export{ENVIRONMENT};