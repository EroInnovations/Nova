import { CONFIGURATION } from "../Configuration/Configuration.js";
import { COMMUNITYLOADER2 } from "../Design/CommunityRiseLoader/Loader2.js";
import { DEVELOPMENTLOADER2 } from "../Design/DevelopmentLoader/DeveloperLoader2.js";
import { QELMEDISTORELOADER2 } from "../Design/QelMedistoreLoaders/DeveloperLoader2.js";
const ENVIRONMENT=()=>{

    if (!localStorage.getItem('Updates')) {

        const body=document.querySelector(".body");

        if (localStorage.getItem('Environment') === 'Development') {

            DEVELOPMENTLOADER2(body);
            
        }else{

            LOADERS(body);

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

        setTimeout(() => {

            CONFIGURATION();
            
        }, 2000);

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

const LOADERS=(body)=>{

    if (localStorage.getItem('NAME') === 'd8c2c6df-f989-44b3-9c81-d95c31892e28' ) {

        COMMUNITYLOADER2(body);

        return;
        
    } 

    if(localStorage.getItem('NAME') === '17ea81ea-b4fa-4b7a-8f3e-10ef438b880f'){
    
        QELMEDISTORELOADER2(body);
    
        return
    }

    CONFIGURATION();

};

export{ENVIRONMENT};