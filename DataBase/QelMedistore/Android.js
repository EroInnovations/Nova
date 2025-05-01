import { DOWNLOADICON } from "../../Library/Assets/Icons/WhiteIcons/DownloadIcon/DownloadIcon.js";
import { BUTTONIMAGE } from "../../Library/Components/ButtonImage/ButtonImage.js";
import { CENTERTEXT } from "../../Library/Components/CenterText/CenterText.js";
import { IMAGE } from "../../Library/Components/Image/Image.js";
import { LEFTTEXT } from "../../Library/Components/LeftText/LeftText.js";
import { LEFTVIEW } from "../../Library/Components/LeftView/LeftView.js";
import { RIGHTVIEW } from "../../Library/Components/RightView/RightView.js";
import { VIEW } from "../../Library/Components/View/Views.js";
import { CLEAR } from "../../Library/Functions/Clear/Clear.js";
import { DOWNLOADIMAGE } from "../../Library/Functions/DownloadFile/DownloadFile.js";
import { STYLED } from "../../Library/Functions/Style/Style.js";

export const QELANDROIDSEITE=()=>{

    CLEAR();

    CENTERTEXT('','h3','Qel Medistore','','30px','10% auto auto',()=>{
        
    })

    CENTERTEXT('','h3','Enhancing Logistics','','18px','1% auto',()=>{
        
    })

    CENTERTEXT('','h3','For Your Daily Medical and Laboratory Equipments','','15px','1% auto',()=>{
        
    });

    VIEW('','transparent','90%','340px','3%',(ELEMENT)=>{

        STYLED(ELEMENT,'border-radius','20px');
        STYLED(ELEMENT,'border','1px solid #000000');
        STYLED(ELEMENT,'overflow','hidden');

        const TEXTED='Qel Medsitaore is a Fully Registered and Approved Company In Uganda that Ventures in Selling of Medical and Laboratory Equipments ,Located In Kampala Uganda and has Branchies Around Uganda and Has Mobile App Where You Get Medical Supplies Today,<br><br> Qel Medistore Sells in Bulk For Large Business Owners and Also Those In Retail Not Forgetting Those Customers For are Purchasing For Personal Use,We got Your Covered.';

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

        const TEXTED='Download the Qel App and Start Showing Today For Your Business or Personal Usage Products';

        LEFTTEXT(ELEMENT,'',TEXTED,'','','2%','5%',()=>{

        });

    });

    BUTTONIMAGE('','forestgreen','Download App','',DOWNLOADICON,'50px','',()=>{
        
    });

    
 
};        