import { COMMUNITYLOADER1 } from "../Design/CommunityRiseLoader/Loader1.js";
import { DEVELOPMENTLOADER1 } from "../Design/DevelopmentLoader/DevelopmentLoader.js";
import { QELMEDISTORELOADER1 } from "../Design/QelMedistoreLoaders/DevelopmentLoader.js";
import { ENVIRONMENT } from "../Environment/Environment.js";
const START=()=>{

    if (!localStorage.getItem('Updates')) {

        const body=document.querySelector(".body");

        if (localStorage.getItem('Environment') === 'Development') {
           
            DEVELOPMENTLOADER1(body);
            
        }else{

            LOADERS(body);

        };

    };

    setTimeout(() => {

        ENVIRONMENT();
        
    }, 1000);

};

const LOADERS=(body)=>{

    if(localStorage.getItem('NAME') === '17ea81ea-b4fa-4b7a-8f3e-10ef438b880f'){

        QELMEDISTORELOADER1(body);

        return
    }
    
    if (localStorage.getItem('NAME') === 'd8c2c6df-f989-44b3-9c81-d95c31892e28') {
   
        COMMUNITYLOADER1(body);

        return;

    };

};

export{START};