import { COMMUNITYRISELOGO } from "../../Library/Assets/Icons/Logos/CommunityRise/CommunityRise.js";
import { IMAGE } from "../../Library/Components/Image/Image.js";
import { TEXT } from "../../Library/Components/Text/Text.js";
import { APPMODE } from "../../Library/Functions/AppMode/AppMode.js"
import { CLEAR } from "../../Library/Functions/Clear/Clear.js";
import { ROUTE } from "../../Library/Functions/Route/Route.js";
import { NAVTEMPLATE } from "../../Library/Templates/Components/NavTemplate/NavTemplate.js";

const TEXTCOLOR='#333333';

export const ANDROIDCOMMUNITYRISE=()=>{

    APPMODE('#cdcdcd');

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    CLEAR('');

    IMAGE('',COMMUNITYRISELOGO,'','','',()=>{

    });

    NAVTEMPLATE('','transparent','99%','50px','auto 0.5%',(ELEMENT)=>{

        TEXT(ELEMENT,'h3','About Us',TEXTCOLOR,'20px','',()=>{

            ROUTE(' ',ABOUTUSPAGE,'HOMEPAGE');

        });

        TEXT(ELEMENT,'h3','Contact Us',TEXTCOLOR,'20px','',()=>{

            ROUTE(' ',CONTACTUSPAGE,'HOMEPAGE');

        });

        TEXT(ELEMENT,'h3','Donate',TEXTCOLOR,'20px','',()=>{

            ROUTE(' ',DONATEPAGE,'HOMEPAGE');

        });

    });
    
};

const ABOUTUSPAGE=()=>{

    CLEAR('');

};

const DONATEPAGE=()=>{

    CLEAR('');

};

const CONTACTUSPAGE=()=>{

    CLEAR('');

};