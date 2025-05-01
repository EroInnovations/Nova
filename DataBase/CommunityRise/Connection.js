import { APPMODE } from "../../Library/Functions/AppMode/AppMode.js";
import { VISITOR } from "../../Library/Functions/Visitor/Visitor.js";
import { ANDROIDCOMMUNITYRISE } from "./Android.js";

const COMMUNITYRISE=()=>{

    APPMODE('purple');

    VISITOR('https://docs.google.com/spreadsheets/d/15BPlgHpUmm65nUNSLRwlRzaWv1hPenriWVvL5MDcmiw/edit?usp=sharing','Visitors');

    if (localStorage.getItem('OperatingSystem') === 'Android' ) {

        ANDROIDCOMMUNITYRISE();
        
    } else {
        
    }
    
};

export{COMMUNITYRISE};
