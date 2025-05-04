import { LEFTIMAGE } from "../../../../Library/Components/LeftImage/LeftImage.js";
import { LEFTTEXT } from "../../../../Library/Components/LeftText/LeftText.js";
import { RIGHTIMAGE } from "../../../../Library/Components/RightImage/RightImage.js";
import { CLICK } from "../../../../Library/Functions/Click/Click.js";
import { NAVTEMPLATE } from "../../../../Library/Templates/Components/NavTemplate/NavTemplate.js";
import { LOCATIONROUTER } from "../Functions/Routing/LocationRouter.js";

export const HOMENAV=(ELEMENT)=>{

    NAVTEMPLATE(ELEMENT,'transparent','95%','50px','1% auto',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITELOCATIONICON,'25px','25px','0','',(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                LOCATIONROUTER();

            })

        });

        LEFTTEXT(ELEMENT,'','Kamapla','#FFFFFF','20px','-27%','',(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                LOCATIONROUTER();

            })

        });

        RIGHTIMAGE(ELEMENT,WHITEUSERPROFILEICON,'25px','25px','1%','',()=>{

        });

    });

};