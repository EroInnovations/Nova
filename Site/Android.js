import { BACKICON } from "../Library/Assets/Icons/WhiteIcons/BackIcon/BackIcon.js";
import { DOWNLOADICON } from "../Library/Assets/Icons/WhiteIcons/DownloadIcon/DownloadIcon.js";
import { FULLSCROLLVIEW } from "../Library/Components/FullScrollView/FullScrollView.js";
import { IMAGEBUTTON } from "../Library/Components/ImageButton/ImageButton.js";
import { LEFTIMAGE } from "../Library/Components/LeftImage/LeftImage.js";
import { RIGHTTEXT } from "../Library/Components/RightText/RightText.js";
import { TEXT } from "../Library/Components/Text/Text.js";
import { VIEW } from "../Library/Components/View/Views.js";
import { CLEAR } from "../Library/Functions/Clear/Clear.js";
import { ROUTE } from "../Library/Functions/Route/Route.js";
import { NAVTEMPLATE } from "../Library/Templates/Components/NavTemplate/NavTemplate.js";

const ANDROIDSITE=()=>{

    CLEAR('');

    FULLSCROLLVIEW('','transparemt',(ELEMENT)=>{

        VIEW(ELEMENT,'orange','98%','40%','1% auto',()=>{

        });

        NAVTEMPLATE(ELEMENT,'orange','98%','50px','',(ELEMENTS)=>{

            TEXT(ELEMENTS,'','Developer','','','',()=>{

                ROUTE(' ',ANDROIDDEVELOPERPAGE,'ANDROIDSITE');

            });

            TEXT(ELEMENTS,'','About Us','','','',()=>{

                ROUTE(' ',ANDROIDABOUTPAGE,'ANDROIDSITE');

            });

            TEXT(ELEMENTS,'','Contact Us','','','',()=>{

                ROUTE(' ',ANDROIDCONTACTUSPAGE,'ANDROIDSITE');

            });

        });

        VIEW(ELEMENT,'orange','98%','40%','1% auto',()=>{

        });

        VIEW(ELEMENT,'orange','98%','40%','1% auto',()=>{

        });

        IMAGEBUTTON(ELEMENT,'orange','','',DOWNLOADICON,'','',()=>{

        });

        NAVTEMPLATE(ELEMENT,'orange','98%','200px','',()=>{

        });

    });
        
};

const ANDROIDABOUTPAGE=()=>{

    CLEAR('');

    FULLSCROLLVIEW('','transparemt',(ELEMENT)=>{

        NAVTEMPLATE(ELEMENT,'orange','98%','50px','',(ELEMENTS)=>{

            LEFTIMAGE(ELEMENTS,BACKICON,'20px','20px','0.1rem','',()=>{

                ROUTE('',ANDROIDSITE,'ANDROIDSITE');

            });

            RIGHTTEXT(ELEMENTS,'','About Us','','','',()=>{

            });

        });

        VIEW(ELEMENT,'orange','98%','50%','1% auto',()=>{

        });

        VIEW(ELEMENT,'orange','98%','30%','5% auto',()=>{

        });

        NAVTEMPLATE(ELEMENT,'orange','98%','200px','',()=>{

        });

    });

};

const ANDROIDDEVELOPERPAGE=()=>{

    CLEAR('');

    FULLSCROLLVIEW('','transparemt',(ELEMENT)=>{

        NAVTEMPLATE(ELEMENT,'orange','98%','50px','',(ELEMENTS)=>{

            LEFTIMAGE(ELEMENTS,BACKICON,'20px','20px','0.1rem','',()=>{

                ROUTE('',ANDROIDSITE,'ANDROIDSITE');

            });

            RIGHTTEXT(ELEMENTS,'','Developers','','','',()=>{

            });

        });

        VIEW(ELEMENT,'orange','98%','50%','1% auto',()=>{

        });

        VIEW(ELEMENT,'orange','98%','30%','5% auto',()=>{

        });

        NAVTEMPLATE(ELEMENT,'orange','98%','200px','',()=>{

        });

    });

};

const ANDROIDCONTACTUSPAGE=()=>{

    CLEAR('');

    FULLSCROLLVIEW('','transparemt',(ELEMENT)=>{

        NAVTEMPLATE(ELEMENT,'orange','98%','50px','',(ELEMENTS)=>{

            LEFTIMAGE(ELEMENTS,BACKICON,'20px','20px','0.1rem','',()=>{

                ROUTE('',ANDROIDSITE,'ANDROIDSITE');

            });

            RIGHTTEXT(ELEMENTS,'','Contact Us','','','',()=>{

            });

        });

        VIEW(ELEMENT,'orange','98%','40%','1% auto',()=>{

        });

    });

};

export{ANDROIDSITE}