import { ICONTEXT } from "../../../../Library/Components/IconText/IconText.js";
import { CLICK } from "../../../../Library/Functions/Click/Click.js";
import { SECTIONROUTER } from "../Functions/Routing/SectionRoute.js";

export const HOMEFOOTER=(ELEMENT)=>{

    ICONTEXT(ELEMENT,WHITEGRIDICON,'transparent','#ffffff','70px','40px','20px','20px','Sections','',(ELEMENT)=>{

        CLICK(ELEMENT,()=>{

            SECTIONROUTER();

        });

    });

    ICONTEXT(ELEMENT,WHITESAVEDICON,'transparent','#ffffff','40px','40px','20px','20px','Saved','',()=>{

    });

    ICONTEXT(ELEMENT,WHITESHOPPINGCART,'transparent','#ffffff','40px','40px','20px','20px','Shop','',()=>{

    });

    ICONTEXT(ELEMENT,WHITESETTINGSICON,'transparent','#ffffff','40px','40px','20px','20px','Settings','',()=>{

    });

};