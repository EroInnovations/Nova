import { ANDROIDCOMMUNITYRISE } from "./Android.js";

const COMMUNITYRISE=()=>{

    if (localStorage.getItem('OperatingSystem') === 'Android' ) {

        ANDROIDCOMMUNITYRISE();
        
    } else {
        
    }
    
};

export{COMMUNITYRISE};
