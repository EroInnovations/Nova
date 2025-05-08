import { LEFTTEXTBACKHEADERBODY } from "../../../Library/Templates/Components/LeftTextBackHeaderBody/LeftTextBackHeaderBody.js";
import { ROUTE } from "../../../Library/Functions/Route/Route.js";
import { CENTERTEXT } from "../../../Library/Components/CenterText/CenterText.js";
import { LEFTTEXT } from "../../../Library/Components/LeftText/LeftText.js";
import { BREAK } from "../../../Library/Functions/Break/Break.js";
import { RIGHTTEXT } from "../../../Library/Components/RightText/RightText.js";
import { NAVTEMPLATE } from "../../../Library/Templates/Components/NavTemplate/NavTemplate.js";
const TEXTCOLOR='#ffffff';
export const DONATEPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Donate',TEXTCOLOR,()=>{

    },(ELEMENT)=>{

        const Message='All Donations or FundRaising that are for Community Rise Ventures are recieved on the Company Account ,Help the Needy Via This Account Details Below. Your Help is Gratefully Appreciated.';

        CENTERTEXT(ELEMENT,'h1','Donations and FundRaising',TEXTCOLOR,'25px','5% auto',()=>{

        });

        LEFTTEXT(ELEMENT,'p',Message,TEXTCOLOR,'20px','1%','',()=>{

        });

        BREAK(ELEMENT);

        CENTERTEXT(ELEMENT,'h2','DETAILS DETAILS',TEXTCOLOR,'20px','',()=>{

        });

        NAVTEMPLATE(ELEMENT,'transparent','95%','50px','',(ELEMENTS)=>{

            
            LEFTTEXT(ELEMENTS,'p','Account Number',TEXTCOLOR,'20px','1%','',()=>{

            });

            RIGHTTEXT(ELEMENTS,'p','60080462400','orange','20px','1%','',()=>{

            });

        });

        NAVTEMPLATE(ELEMENT,'transparent','95%','50px','',(ELEMENTS)=>{

            
            LEFTTEXT(ELEMENTS,'p','Bank Name',TEXTCOLOR,'20px','1%','',()=>{

            });

            RIGHTTEXT(ELEMENTS,'p','Absa Bank.','orange','20px','1%','',()=>{

            });

        });


    });

};
