import { APPMODE } from "../../Library/Functions/AppMode/AppMode.js";
import { VISITOR } from "../../Library/Functions/Visitor/Visitor.js";
import { DOWNLOADSAVEINDEX } from "../../Library/Templates/Functions/DownloadSaveIndex/DownloadSaveIndex.js";
import { ANDROIDCOMMUNITYRISE } from "./Android/Android.js";

const CONNECTIONLINK='https://docs.google.com/spreadsheets/d/15BPlgHpUmm65nUNSLRwlRzaWv1hPenriWVvL5MDcmiw/edit?gid=0#gid=0';

const COMMUNITYRISE=()=>{

    APPMODE('purple');

    VISITOR('https://docs.google.com/spreadsheets/d/15BPlgHpUmm65nUNSLRwlRzaWv1hPenriWVvL5MDcmiw/edit?usp=sharing','Visitors');

    if (localStorage.getItem('OperatingSystem') === 'Android' ) {

        ANDROIDCOMMUNITYRISE();
        
    } else {
        
        ANDROIDCOMMUNITYRISE();

    }

    DOWNLOADSAVEINDEX(CONNECTIONLINK,'News','News',()=>{

        COMMUNITYRISE();

    });
    
};

export{COMMUNITYRISE};
