import { DOWNLOADICON } from "../../Library/Assets/Icons/WhiteIcons/DownloadIcon/DownloadIcon.js";
import { FACEBOOKICON } from "../../Library/Assets/Icons/WhiteIcons/FaceBookIcon/FaceBookIcon.js";
import { GMAILICON } from "../../Library/Assets/Icons/WhiteIcons/GmailIcon/GmailIcon.js";
import { PHONEICON } from "../../Library/Assets/Icons/WhiteIcons/PhoneIcon/PhoneIcon.js";
import { WHATSAPPICON } from "../../Library/Assets/Icons/WhiteIcons/WhatsAppIcon/WhatsAppIcon.js";
import { BUTTON } from "../../Library/Components/Button/Button.js";
import { BUTTONIMAGE } from "../../Library/Components/ButtonImage/ButtonImage.js";
import { CENTERTEXT } from "../../Library/Components/CenterText/CenterText.js";
import { ICON } from "../../Library/Components/Icon/Icon.js";
import { IMAGE } from "../../Library/Components/Image/Image.js";
import { LEFTTEXT } from "../../Library/Components/LeftText/LeftText.js";
import { VIEW } from "../../Library/Components/View/Views.js";
import { BREAK } from "../../Library/Functions/Break/Break.js";
import { CALL } from "../../Library/Functions/Call/Call.js";
import { CLEAR } from "../../Library/Functions/Clear/Clear.js";
import { FACEBOOK } from "../../Library/Functions/FaceBook/FaceBook.js";
import { GMAIL } from "../../Library/Functions/Gmail/Gmail.js";
import { STYLED } from "../../Library/Functions/Style/Style.js";
import { WEBSITE } from "../../Library/Functions/WebSite/WebSite.js";
import { WHATSAPP } from "../../Library/Functions/WhatsApp/WhatsApp.js";
import { NAVTEMPLATE } from "../../Library/Templates/Components/NavTemplate/NavTemplate.js";

export const QELANDROIDSEITE=()=>{

    CLEAR();

    CENTERTEXT('','h3','Qel Medistore','','30px','10% auto auto',()=>{
        
    })

    CENTERTEXT('','h3','Enhancing Logistics','','18px','1% auto',()=>{
        
    })

    CENTERTEXT('','h3','For Your Daily Medical and Laboratory Equipments','','15px','1% auto',()=>{
        
    });

    VIEW('','transparent','90%','350px','3%',(ELEMENT)=>{

        STYLED(ELEMENT,'border-radius','20px');
        STYLED(ELEMENT,'border','1px solid #000000');
        STYLED(ELEMENT,'overflow','hidden');

        const TEXTED='Qel Medistore is a Fully Registered and Approved Company In Uganda that Ventures in Selling of Medical and Laboratory Equipments ,Located In Kampala Uganda and has Branchs Around Uganda and has a Mobile App Where You can get Medical Supplies Today,<br><br> Qel Medistore Sells in Bulk For Large Business Owners and Also Those In Retail Not Forgetting Those Customers For are Purchasing For Personal Use,We got Your Covered.';

        LEFTTEXT(ELEMENT,'',TEXTED,'','','2%','5%',()=>{

        });

    });

    VIEW('','transparent','50%','500px','10%',(ELEMENT)=>{

        STYLED(ELEMENT,'border-radius','20px');
        STYLED(ELEMENT,'border','10px solid #000000');
        STYLED(ELEMENT,'overflow','hidden');

        IMAGE(ELEMENT,'https://eroinnovations.site/Assets/Images/QelMedistore/Qel App.png','100%','100%','','',()=>{

        });

    });

    CENTERTEXT('','h1','Qel App','','25px','',()=>{

    });

    VIEW('','transparent','90%','100px','3%',(ELEMENT)=>{

        STYLED(ELEMENT,'border-radius','20px');
        STYLED(ELEMENT,'border','5px solid #000000');
        STYLED(ELEMENT,'overflow','hidden');

        const TEXTED='Download the Qel App and Start Shopping Today For Your Business or Personal Usage Products';

        LEFTTEXT(ELEMENT,'',TEXTED,'','','2%','5%',()=>{

        });

    });

    BUTTONIMAGE('','forestgreen','Download App','',DOWNLOADICON,'50px','auto 1%',()=>{

        WEBSITE('https://eroinnovations.site/Store/Qel.apk');
        
    });

    LEFTTEXT('','h1','Our Branchs','','20px','2%','2% auto',()=>{

    });

    NAVTEMPLATE('','','95%','50px','',(ELEMENT)=>{

        BUTTON(ELEMENT,'100px','50px','teal','','Kampala','',()=>{

        });

        BUTTON(ELEMENT,'100px','50px','teal','','Mbale','',()=>{

        });

        BUTTON(ELEMENT,'100px','50px','teal','','Soroti','',()=>{

        });

    });
    
    CENTERTEXT('','h1','Contact US','','25px','2% auto',()=>{

    });

    NAVTEMPLATE('','','95%','50px','',(ELEMENT)=>{

        ICON(ELEMENT,WHATSAPPICON,'25px','25px','',()=>{

            WHATSAPP('+256701500355');

        });

        ICON(ELEMENT,FACEBOOKICON,'25px','25px','',()=>{

            FACEBOOK('qelmedistore');

        });

        ICON(ELEMENT,GMAILICON,'25px','25px','',()=>{

            GMAIL('qelmedistore@gmail.com');

        });

        ICON(ELEMENT,PHONEICON,'25px','25px','',()=>{

            CALL('+256701500355');

        });

    });

    BREAK('');

    CENTERTEXT('','h1','Powered by <br>Elite Robust Ontology','forestgreen','18px','2% auto auto',()=>{

        WEBSITE('https://eroinnovations.site');

    });

    BREAK(''); BREAK('');
    
};        