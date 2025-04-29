import { EROINNOVATIONSLOGOONE } from "../../Library/Assets/CompanyImages/EroInnovations/LogoOne.js";
import { GMAILICON } from "../../Library/Assets/Icons/WhiteIcons/GmailIcon/GmailIcon.js";
import { INSTAGRAMICON } from "../../Library/Assets/Icons/WhiteIcons/InstagramIcon/InstagramIcon.js";
import { WHATSAPPICON } from "../../Library/Assets/Icons/WhiteIcons/WhatsAppIcon/WhatsAppIcon.js";
import { CENTERTEXT } from "../../Library/Components/CenterText/CenterText.js";
import { ICON } from "../../Library/Components/Icon/Icon.js";
import { IMAGE } from "../../Library/Components/Image/Image.js";
import { TEXT } from "../../Library/Components/Text/Text.js";
import { VIEW } from "../../Library/Components/View/Views.js";
import { BREAK } from "../../Library/Functions/Break/Break.js";
import { CLEAR } from "../../Library/Functions/Clear/Clear.js"
import { NAVTEMPLATE } from "../../Library/Templates/Components/NavTemplate/NavTemplate.js";

export const WINDOWSMAINSITE=()=>{

    CLEAR('');

    IMAGE('',EROINNOVATIONSLOGOONE,'40%','40%','auto 30%',()=>{

    });

    NAVTEMPLATE('','transparent','80%','50px','auto 10%',(ELEMENT)=>{

        TEXT(ELEMENT,'h3','Developers','','','',()=>{

        });

        TEXT(ELEMENT,'h3','Our Products','','','',()=>{

        });
        
        TEXT(ELEMENT,'h3','About Us','','','',()=>{

        });

    });

    VIEW('',' ','95%','500px','2%',()=>{

    });

    VIEW('',' ','95%','300px','2%',()=>{

    });

    VIEW('',' ','95%','500px','2%',()=>{

    });

    NAVTEMPLATE('',' transparent','70%','50px','2% 15%',(ELEMENT)=>{

        ICON(ELEMENT,WHATSAPPICON,'20px','20px','',()=>{

        });

        ICON(ELEMENT,INSTAGRAMICON,'20px','20px','',()=>{

        });

        ICON(ELEMENT,GMAILICON,'20px','20px','',()=>{

        });

    });

    BREAK('');

};
