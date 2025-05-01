import { COMMUNITYRISELOGO } from "../../Library/Assets/Icons/Logos/CommunityRise/CommunityRise.js";
import { FACEBOOKICON } from "../../Library/Assets/Icons/WhiteIcons/FaceBookIcon/FaceBookIcon.js";
import { INSTAGRAMICON } from "../../Library/Assets/Icons/WhiteIcons/InstagramIcon/InstagramIcon.js";
import { WHATSAPPICON } from "../../Library/Assets/Icons/WhiteIcons/WhatsAppIcon/WhatsAppIcon.js";
import { CENTERTEXT } from "../../Library/Components/CenterText/CenterText.js";
import { FOOTER } from "../../Library/Components/Footer/Footer.js";
import { ICONTEXT } from "../../Library/Components/IconText/IconText.js";
import { IMAGE } from "../../Library/Components/Image/Image.js";
import { INLINEVIEW } from "../../Library/Components/InlineView/InlineView.js";
import { TEXT } from "../../Library/Components/Text/Text.js";
import { VIEW } from "../../Library/Components/View/Views.js";
import { CLEAR } from "../../Library/Functions/Clear/Clear.js";
import { ROUTE } from "../../Library/Functions/Route/Route.js";
import { LEFTTEXTBACKHEADERBODY } from "../../Library/Templates/Components/LeftTextBackHeaderBody/LeftTextBackHeaderBody.js";
import { NAVTEMPLATE } from "../../Library/Templates/Components/NavTemplate/NavTemplate.js";

const TEXTCOLOR='#ffffff';
const CONNECTIONLINK='https://docs.google.com/spreadsheets/d/15BPlgHpUmm65nUNSLRwlRzaWv1hPenriWVvL5MDcmiw/edit?gid=0#gid=0';

export const ANDROIDCOMMUNITYRISE=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    CLEAR('');

    IMAGE('',COMMUNITYRISELOGO,'','','',()=>{

    });

    NAVTEMPLATE('','transparent','99%','50px','auto 0.5%',(ELEMENT)=>{

        TEXT(ELEMENT,'h3','About Us',TEXTCOLOR,'20px','',()=>{

            ROUTE(' ',ABOUTUSPAGE,'HOMEPAGE');

        });

        TEXT(ELEMENT,'h3','Our Services',TEXTCOLOR,'20px','',()=>{

            ROUTE(' ',SERVICESPAGE,'HOMEPAGE');

        });

        TEXT(ELEMENT,'h3','Donate',TEXTCOLOR,'20px','',()=>{

            ROUTE(' ',DONATEPAGE,'HOMEPAGE');

        });

    });

    CENTERTEXT('','p','Creating a Smile and making a difference!',TEXTCOLOR,'20px','2%',()=>{

    });

    VIEW('','','98%','300px','1% auto',()=>{

    });

    CENTERTEXT('','h2','Our Projects',TEXTCOLOR,'25px','',()=>{

    });

    INLINEVIEW('','','98%','300px','','1%',(ELEMENT)=>{

        INLINEVIEW(ELEMENT,'transparent','200px','285px','','auto 2%',(ELEMENTS)=>{
        
            IMAGE(ELEMENTS,QELMODENORMAL,'100%','100%','',()=>{
        
            });

            FOOTER(ELEMENTS,'#000000','','50px',(ELEMENTES)=>{
        
                TEXT(ELEMENTES,'','One Girl Pad','white','20px','',()=>{
        
                });
        
            });
        
        });

        INLINEVIEW(ELEMENT,'transparent','200px','285px','','auto 2%',(ELEMENTS)=>{
        
            IMAGE(ELEMENTS,QELMODENORMAL,'100%','100%','',()=>{
        
            });

            FOOTER(ELEMENTS,'#000000','','50px',(ELEMENTES)=>{
        
                TEXT(ELEMENTES,'','One Girl Pad','white','20px','',()=>{
        
                });
        
            });
        
        });

        INLINEVIEW(ELEMENT,'transparent','200px','285px','','auto 2%',(ELEMENTS)=>{
        
            IMAGE(ELEMENTS,QELMODENORMAL,'100%','100%','',()=>{
        
            });

            FOOTER(ELEMENTS,'#000000','','50px',(ELEMENTES)=>{
        
                TEXT(ELEMENTES,'','One Girl Pad','white','20px','',()=>{
        
                });
        
            });
        
        });

    });

    VIEW('','','98%','300px','1% auto',()=>{

    });

    NAVTEMPLATE('','transparent','98%','70px','auto 1%',(ELEMENT)=>{

        ICONTEXT(ELEMENT,WHATSAPPICON,' ','98px','70px','45px','25px','25px','WhatsApp','',()=>{

        });

        ICONTEXT(ELEMENT,INSTAGRAMICON,' ','98px','70px','45px','25px','25px','Instagram','',()=>{

        });

        ICONTEXT(ELEMENT,FACEBOOKICON,' ','98px','70px','45px','25px','25px','Facebook','',()=>{

        });

    });
  
};

const ABOUTUSPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'About Us',TEXTCOLOR,()=>{

    },()=>{

    });

};

const DONATEPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Donate',TEXTCOLOR,()=>{

    },()=>{

    });

};

const SERVICESPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Services',TEXTCOLOR,()=>{

    },()=>{

    });

};