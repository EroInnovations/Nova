import { LEFTTEXT } from "../Library/Components/LeftText/LeftText.js"
import { LEFTVIEW } from "../Library/Components/LeftView/LeftView.js";
import { RIGHTTEXT } from "../Library/Components/RightText/RightText.js";
import { TEXT } from "../Library/Components/Text/Text.js";
import { VIEW } from "../Library/Components/View/Views.js";
import { HOMEHEADERTEMPLATE } from "../Library/Templates/Components/HomeHeaderTemplate/HomeHeaderTemplate.js"

const ANDROIDSITE=()=>{

    HOMEHEADERTEMPLATE('',' ',' ',(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'h3','Elite Robust Ontology','','18px','1%','',()=>{

        });

        RIGHTTEXT(ELEMENT,'h3','Download App','','18px','0.5rem','',()=>{

        });

    },(ELEMENTS)=>{

        LEFTTEXT(ELEMENTS,'h1','Ventures','','20px','10%','5% auto',()=>{

        });

        LEFTVIEW(ELEMENTS,' ','50%','50%','1% 2%',(COMMENT)=>{

            const Messag=`Located At the Heart of Mbale City ,Elite Robust Ontology is a Software Company that has specialized in the Following Sectors in Information and Technology.`;

            LEFTTEXT(COMMENT,'',Messag,'','18px','2%','5% auto',()=>{

            });

        })

    });
    
};

export{ANDROIDSITE}