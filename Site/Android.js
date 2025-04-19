import { EROINNOVATIONSLOGOONE } from "../Library/Assets/CompanyImages/EroInnovations/LogoOne.js";
import { CENTERTEXT } from "../Library/Components/CenterText/CenterText.js";
import { IMAGE } from "../Library/Components/Image/Image.js";
import { LEFTTEXT } from "../Library/Components/LeftText/LeftText.js"
import { LEFTVIEW } from "../Library/Components/LeftView/LeftView.js";
import { RIGHTTEXT } from "../Library/Components/RightText/RightText.js";
import { RIGHTVIEW } from "../Library/Components/RightView/RightView.js";
import { TEXT } from "../Library/Components/Text/Text.js";
import { VIEW } from "../Library/Components/View/Views.js";
import { STYLED } from "../Library/Functions/Style/Style.js";
import { HOMEHEADERTEMPLATE } from "../Library/Templates/Components/HomeHeaderTemplate/HomeHeaderTemplate.js"
import { NAVTEMPLATE } from "../Library/Templates/Components/NavTemplate/NavTemplate.js";

const ANDROIDSITE=()=>{

    HOMEHEADERTEMPLATE('',' ',' ',(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'h3','Elite Robust Ontology','','18px','1%','',()=>{

        });

        RIGHTTEXT(ELEMENT,'h3','Download App','','18px','0.5rem','',()=>{

        });

    },(ELEMENTS)=>{

        CENTERTEXT(ELEMENTS,'h1','About Us','','23px','2%',()=>{

        });

        NAVTEMPLATE(ELEMENTS,' ','98%','200px','1%',(ELS)=>{

            STYLED(ELS,'border-radius','5px');

            LEFTVIEW(ELS,'forestgreen','50%','100%','',(COMMENT)=>{

                const Messag=`Located At the Heart of Mbale City ,Elite Robust Ontology is a Software Company that has specialized in the Following Sectors in Information and Technology.`;
    
                LEFTTEXT(COMMENT,'',Messag,'','18px','3%','5% auto',()=>{
    
                });
    
            });

            RIGHTVIEW(ELS,' ','50%','100%','',(COMMENT)=>{

                IMAGE(COMMENT,EROINNOVATIONSLOGOONE,'100%','100%','0',()=>{

                });
    
            });

        })

        NAVTEMPLATE(ELEMENTS,' ','90%','50px','',(ELEMES)=>{

            LEFTTEXT(ELEMES,'h1','Order Now','orange','22px','10%','5% auto',()=>{

            });
        
            RIGHTTEXT(ELEMES,'h1','Contact Us','brown','22px','10%','5% auto',()=>{

            });

        });

    });
    
};

export{ANDROIDSITE}