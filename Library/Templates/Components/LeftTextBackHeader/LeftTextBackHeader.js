import { HEADER } from "../../../Components/Header/Header.js";
import { LEFTIMAGE } from "../../../Components/LeftImage/LeftImage.js";
import { RIGHTTEXT } from "../../../Components/RightText/RightText.js";

const LEFTTEXTBACKHEADER=(ELEMENT,Backcallback,WORD,COLOR,TextCallback)=>{

    HEADER(ELEMENT,' ',(ELEMENTS)=>{

        LEFTIMAGE(ELEMENTS,WHITELEFTBACKICON,'20px','20px','0.5rem','',(ELEMS)=>{

            Backcallback();

        });

        RIGHTTEXT(ELEMENTS,'p',WORD,COLOR,'20px','0.5rem','',(ELEMS)=>{

            TextCallback();

        });

    });

};

export{LEFTTEXTBACKHEADER};