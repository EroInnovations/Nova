import { EROINNOVATIONSLOGOONE } from "../../../Library/Assets/CompanyImages/EroInnovations/LogoOne.js";
import { QELMODENORMAL } from "../../../Library/Assets/Icons/SpecialColors/Qel/ModeColor.js";
import { DOWNLOADICON } from "../../../Library/Assets/Icons/WhiteIcons/DownloadIcon/DownloadIcon.js";
import { CENTERTEXT } from "../../../Library/Components/CenterText/CenterText.js";
import { FOOTER } from "../../../Library/Components/Footer/Footer.js";
import { IMAGE } from "../../../Library/Components/Image/Image.js";
import { IMAGEBUTTON } from "../../../Library/Components/ImageButton/ImageButton.js";
import { INLINEVIEW } from "../../../Library/Components/InlineView/InlineView.js";
import { LEFTTEXT } from "../../../Library/Components/LeftText/LeftText.js";
import { TEXT } from "../../../Library/Components/Text/Text.js";
import { VIEW } from "../../../Library/Components/View/Views.js";
import { BREAK } from "../../../Library/Functions/Break/Break.js";
import { CLEAR } from "../../../Library/Functions/Clear/Clear.js";
import { CLICK } from "../../../Library/Functions/Click/Click.js";
import { ROUTE } from "../../../Library/Functions/Route/Route.js";
import { WEBSITE } from "../../../Library/Functions/WebSite/WebSite.js";
import { NAVTEMPLATE } from "../../../Library/Templates/Components/NavTemplate/NavTemplate.js";

export const ANDROIDMAINSITE=()=>{

    CLEAR('');

    IMAGE('',EROINNOVATIONSLOGOONE,'','','',()=>{

    });

    NAVTEMPLATE('','transparent','98%','50px','1%',(ELEMENT)=>{

        TEXT(ELEMENT,'h3','Developers','','','',()=>{

            ROUTE(' ',DEVELOPERSPAGE,'HOMEPAGE');

        });

        TEXT(ELEMENT,'h3','About Us','','','',()=>{

            ROUTE(' ',ABOUTUSPAGE,'HOMEPAGE');

        });

        TEXT(ELEMENT,'h3','Contact Us','','','',()=>{

            ROUTE(' ',CONTACTUSPAGE,'HOMEPAGE');

        });

    });

    VIEW('','transparent','98%','300px','1%',(ELEMENT)=>{

        const Message='We are Cloud Native Company Based In Mbale City and We venture in Mobile App Development,Website Development,Desktop Software Development,and System Development.'

        LEFTTEXT(ELEMENT,'',Message,'','','1%','',()=>{

        });

        BREAK(ELEMENT);

        const Messager='We Use Latest Cutting Edge Inhouse Technology that is powering our Mobile Apps,Desktop Softwares,Websites and Systems to Millions on a Daily ,Maintained by the best Experienced Developers in the Company Who know what to do.';

        LEFTTEXT(ELEMENT,'',Messager,'','','1%','',()=>{

        });

    });

    
    CENTERTEXT('','h1','Our Products','','25px','2%',()=>{

    });

    INLINEVIEW('',' transparent','98%','200px','','1%',(ELEMENT)=>{

        INLINEVIEW(ELEMENT,'transparent','150px','190px','','auto 1%',(ELEMENTS)=>{

            IMAGE(ELEMENTS,QELMODENORMAL,'100%','100%','',()=>{

            });

            FOOTER(ELEMENTS,'#000000','','50px',(ELEMENTES)=>{

                TEXT(ELEMENTES,'','Qel','white','20px','',()=>{

                });

            });

        });

        INLINEVIEW(ELEMENT,'transparent','150px','190px','','auto 1%',(ELEMENTS)=>{

            IMAGE(ELEMENTS,QELMODENORMAL,'100%','100%','',()=>{

            });

            FOOTER(ELEMENTS,'#000000','','50px',(ELEMENTES)=>{

                TEXT(ELEMENTES,'','Elite Store','white','20px','',()=>{

                });

            });

        });

        
        INLINEVIEW(ELEMENT,'transparent','150px','190px','','auto 1%',(ELEMENTS)=>{

            IMAGE(ELEMENTS,QELMODENORMAL,'100%','100%','',()=>{

            });

            FOOTER(ELEMENTS,'#000000','','50px',(ELEMENTES)=>{

                TEXT(ELEMENTES,'','Elite','white','20px','',()=>{

                });

            });

        });

        
        INLINEVIEW(ELEMENT,'transparent','150px','190px','','auto 1%',(ELEMENTS)=>{

            IMAGE(ELEMENTS,QELMODENORMAL,'100%','100%','',()=>{

            });

            FOOTER(ELEMENTS,'#000000','','50px',(ELEMENTES)=>{

                TEXT(ELEMENTES,'','Elite Pay','white','20px','',()=>{

                });

            });

        });
    
    });

    CENTERTEXT('','h1','Our Parthners','','25px','2%',()=>{

    });

    INLINEVIEW('',' transparent','98%','200px','','1%',(ELEMENT)=>{

        INLINEVIEW(ELEMENT,'transparent','150px','190px','','auto 1%',(ELEMENTS)=>{

            IMAGE(ELEMENTS,QELMODENORMAL,'100%','100%','',()=>{

            });

            FOOTER(ELEMENTS,'#000000','','50px',(ELEMENTES)=>{

                TEXT(ELEMENTES,'','Qel Medistore','white','20px','',()=>{

                });

            });

            CLICK(ELEMENTS,()=>{

                WEBSITE('https://qelmedistore.site');

            });

        });

        INLINEVIEW(ELEMENT,'transparent','150px','190px','','auto 1%',(ELEMENTS)=>{

            IMAGE(ELEMENTS,COMMUNITYRISELOGO,'100%','100%','',()=>{

            });

            FOOTER(ELEMENTS,'#000000','','50px',(ELEMENTES)=>{

                TEXT(ELEMENTES,'','Community Rise Ventures','white','20px','',()=>{

                });

            });

            CLICK(ELEMENTS,()=>{

                WEBSITE('https://communityriseventures.org');

            });

        });
    

    });

    CENTERTEXT('','h1','Company Updates','','25px','2%',()=>{

    });

    LEFTTEXT('','','Download Our App to Keep Update with the latest News from Elite Robust Ontology','','','1%','',()=>{

    });

    BREAK('');

    IMAGEBUTTON('','forestgreen','Download','',DOWNLOADICON,'50px','1%',()=>{

    });

    BREAK('');BREAK('');

};