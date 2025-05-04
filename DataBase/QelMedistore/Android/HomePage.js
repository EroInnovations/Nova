import { ICONTEXT } from "../../../Library/Components/IconText/IconText.js";
import { LEFTIMAGE } from "../../../Library/Components/LeftImage/LeftImage.js";
import { LEFTTEXT } from "../../../Library/Components/LeftText/LeftText.js";
import { RIGHTIMAGE } from "../../../Library/Components/RightImage/RightImage.js";
import { HOMEFOOTERTEMPLATE } from "../../../Library/Templates/Components/HomeFooterTemplate/HomeFooterTemplate.js";
import { NAVTEMPLATE } from "../../../Library/Templates/Components/NavTemplate/NavTemplate.js";

export const QELANDROIDHOMEPAGE=()=>{

    HOMEFOOTERTEMPLATE('','transparent',(ELEMENT)=>{

        NAVTEMPLATE(ELEMENT,'transparent','95%','50px','',(ELEMENT)=>{

            LEFTIMAGE(ELEMENT,WHITELOCATIONICON,'25px','25px','0','',()=>{

            });

            LEFTTEXT(ELEMENT,'','Kamapla','#FFFFFF','20px','-30%','',()=>{

            })

            RIGHTIMAGE(ELEMENT,WHITEUSERPROFILEICON,'25px','25px','1%','',()=>{

            })

        });

    },(ELEMENT)=>{

        ICONTEXT(ELEMENT,WHITEGRIDICON,'transparent','#ffffff','70px','40px','20px','20px','Sections','',()=>{

        });

        ICONTEXT(ELEMENT,WHITESAVEDICON,'transparent','#ffffff','40px','40px','20px','20px','Saved','',()=>{

        });

        ICONTEXT(ELEMENT,WHITESHOPPINGCART,'transparent','#ffffff','40px','40px','20px','20px','Shop','',()=>{

        });

        ICONTEXT(ELEMENT,WHITESETTINGSICON,'transparent','#ffffff','40px','40px','20px','20px','Settings','',()=>{

        });

    });
    
};