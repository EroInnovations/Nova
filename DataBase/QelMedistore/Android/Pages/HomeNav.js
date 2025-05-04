import { LEFTIMAGE } from "../../../../Library/Components/LeftImage/LeftImage.js";
import { LEFTTEXT } from "../../../../Library/Components/LeftText/LeftText.js";
import { RIGHTIMAGE } from "../../../../Library/Components/RightImage/RightImage.js";
import { NAVTEMPLATE } from "../../../../Library/Templates/Components/NavTemplate/NavTemplate.js";

export const HOMENAV=(ELEMENT)=>{

    NAVTEMPLATE(ELEMENT,'transparent','95%','50px','',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITELOCATIONICON,'25px','25px','0','',()=>{

        });

        LEFTTEXT(ELEMENT,'','Kamapla','#FFFFFF','20px','-30%','',()=>{

        });

        RIGHTIMAGE(ELEMENT,WHITEUSERPROFILEICON,'25px','25px','1%','',()=>{

        });

    });

};