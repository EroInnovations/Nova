import { LEFTTEXT } from "../Library/Components/LeftText/LeftText.js"
import { RIGHTTEXT } from "../Library/Components/RightText/RightText.js";
import { HOMEHEADERTEMPLATE } from "../Library/Templates/Components/HomeHeaderTemplate/HomeHeaderTemplate.js"

const ANDROIDSITE=()=>{

    HOMEHEADERTEMPLATE('',' ',' ',(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'h3','Elite Robust Ontology','','18px','',()=>{

        });

        RIGHTTEXT(ELEMENT,'h3','Download App','','18px','0.5rem','',()=>{

        });

    },(ELEMENTS)=>{

    });
    
};

export{ANDROIDSITE}