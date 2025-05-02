import { EROINNOVATIONSLOGOONE } from "../../Library/Assets/CompanyImages/EroInnovations/LogoOne.js";
import { QELMODENORMAL } from "../../Library/Assets/Icons/SpecialColors/Qel/ModeColor.js";
import { DOWNLOADICON } from "../../Library/Assets/Icons/WhiteIcons/DownloadIcon/DownloadIcon.js";
import { GMAILICON } from "../../Library/Assets/Icons/WhiteIcons/GmailIcon/GmailIcon.js";
import { INSTAGRAMICON } from "../../Library/Assets/Icons/WhiteIcons/InstagramIcon/InstagramIcon.js";
import { WHATSAPPICON } from "../../Library/Assets/Icons/WhiteIcons/WhatsAppIcon/WhatsAppIcon.js";
import { BUTTON } from "../../Library/Components/Button/Button.js";
import { CENTERTEXT } from "../../Library/Components/CenterText/CenterText.js";
import { FOOTER } from "../../Library/Components/Footer/Footer.js";
import { IMAGE } from "../../Library/Components/Image/Image.js";
import { IMAGEBUTTON } from "../../Library/Components/ImageButton/ImageButton.js";
import { INLINEVIEW } from "../../Library/Components/InlineView/InlineView.js";
import { LEFTTEXT } from "../../Library/Components/LeftText/LeftText.js";
import { ROUNDINPUT } from "../../Library/Components/RoundInput/RoundInput.js";
import { TEXT } from "../../Library/Components/Text/Text.js";
import { TEXTAREA } from "../../Library/Components/TextArea/TextArea.js";
import { VIEW } from "../../Library/Components/View/Views.js";
import { BACKPAGE } from "../../Library/Functions/BackPage/BackPage.js";
import { BREAK } from "../../Library/Functions/Break/Break.js";
import { CLEAR } from "../../Library/Functions/Clear/Clear.js";
import { HIDER } from "../../Library/Functions/Hider/Hider.js";
import { ROUTE } from "../../Library/Functions/Route/Route.js";
import { SITECLOSE } from "../../Library/Functions/SiteClose/SiteClose.js";
import { NAVTEMPLATE } from "../../Library/Templates/Components/NavTemplate/NavTemplate.js";

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

        });

        INLINEVIEW(ELEMENT,'transparent','150px','190px','','auto 1%',(ELEMENTS)=>{

            IMAGE(ELEMENTS,QELMODENORMAL,'100%','100%','',()=>{

            });

            FOOTER(ELEMENTS,'#000000','','50px',(ELEMENTES)=>{

                TEXT(ELEMENTES,'','Community Rise Ventures','white','20px','',()=>{

                });

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

    HIDER(3000,()=>{

        SITECLOSE();

    });

};

const DEVELOPERSPAGE=()=>{

    CLEAR('');

    IMAGE('',EROINNOVATIONSLOGOONE,'','','',()=>{

    });

    NAVTEMPLATE('','transparent','98%','50px','1%',(ELEMENT)=>{

        TEXT(ELEMENT,'h3','Home','','','',()=>{

            ROUTE('',ANDROIDMAINSITE,'ANDROIDMAINSITE');

        });

        TEXT(ELEMENT,'h3','Elite Pay','','','',()=>{

        });

        TEXT(ELEMENT,'h3','Nova','','','',()=>{

        });

    });

};

const ABOUTUSPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    CLEAR('');

    IMAGE('',EROINNOVATIONSLOGOONE,'','','',()=>{

    });

    NAVTEMPLATE('','transparent','98%','50px','1%',(ELEMENT)=>{

        TEXT(ELEMENT,'h3','Home','','','',()=>{

            ROUTE('',ANDROIDMAINSITE,'ANDROIDMAINSITE');

        });

        TEXT(ELEMENT,'h3','Pricing','','','',()=>{

            ROUTE(' ',PRICINGPAGE,'ABOUTUSPAGE');

        });

        TEXT(ELEMENT,'h3','Metrics','','','',()=>{

            ROUTE(' ',METRICSPAGE,'ABOUTUSPAGE');

        });

    });

    VIEW('',' ','98%','auto','',(ELEMENT)=>{

        const Message='Elite Robust Ontology is a Cloud Native Based Company That is located in Mbale City,In Uganda.';

        LEFTTEXT(ELEMENT,'',Message,'','','1%','',()=>{

        });

        BREAK(ELEMENT);

        const Message1='It was Founded By Erou Andrew Richard and It Ventures in Mobile App Development,Desktop Software,Website Development and System Development,Elite Robust Ontology Is Fully Registered Company In Uganda and Adheres to the Rules Governing it.';

        LEFTTEXT(ELEMENT,'',Message1,'','','1%','',()=>{

        });

        BREAK(ELEMENT);

        const Message2='We have experiencied Developers who can build your Dream Today,all you have to is to imagine and come with your idea and our expertise will make your idea a reality and leave you to inspire others,We set the Pase for others to Follow.';

        LEFTTEXT(ELEMENT,'',Message2,'','','1%','',()=>{

        });

        
        BREAK(ELEMENT);

        const Message3='In Uganda ,We are the Best in Cloud Native Development for all your ICT Problems and We Solve your Problem Beyond your expectations.';

        LEFTTEXT(ELEMENT,'',Message3,'','','1%','',()=>{

        });

        BREAK(ELEMENT);

        const Message4='Elite Robust Ontology is the First Company in Uganda to Build a Cloud Native Frame Work named Nova that builds not only Cross Platform Solutions but It Also Powers those Platforms and its actively Maintained by our team of Engineers and Ready to make the world a better place with our Cloud Native Solutions that are Breaking Records in the tech World.';

        LEFTTEXT(ELEMENT,'',Message4,'','','1%','',()=>{

        });


    });

    CENTERTEXT('','h1','Market Share','','25px','2%',()=>{

    });

    LEFTTEXT('','','Elite Robust Ontology is Valued at a Market Share of $4,100.6 per 26th April,2025.This figure has Either Increased or Decreased Since its Based on Monthly Report not Daily.','','','1%','',()=>{

    });

    BREAK('');

};

const CONTACTUSPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    CLEAR('');

    IMAGE('',EROINNOVATIONSLOGOONE,'','','',()=>{

    });

    NAVTEMPLATE('','transparent','98%','50px','1%',(ELEMENT)=>{

        TEXT(ELEMENT,'h3','Home','','','',()=>{

            ROUTE('',ANDROIDMAINSITE,'ANDROIDMAINSITE');

        });

        TEXT(ELEMENT,'h3','Social Media','','','',()=>{

            ROUTE(' ',SOCIALMEDIAPAGE,'HOMEPAGE');

        });

    });

    CENTERTEXT('','','Direct Contact','','20px','',()=>{

    });

    ROUNDINPUT('','','#cdcdcd','transparent','Your Subject','2%',()=>{

    });

    ROUNDINPUT('','','#cdcdcd','transparent','Your Names','2%',()=>{

    });

    ROUNDINPUT('','','#cdcdcd','transparent','Your Email','2%',()=>{

    });

    TEXTAREA('','','95%','200px','Your Message','2%',()=>{

    });
    
    BUTTON('','95%','50px','forestgreen','','Send','2%',()=>{

    });

    BREAK('');
};

const PRICINGPAGE=()=>{

    CLEAR('');

    IMAGE('',EROINNOVATIONSLOGOONE,'','','',()=>{

    });

    NAVTEMPLATE('','transparent','98%','50px','1%',(ELEMENT)=>{

        TEXT(ELEMENT,'h3','Home','','','',()=>{

            ROUTE('',ABOUTUSPAGE,'ABOUTUSPAGE');

        });

        TEXT(ELEMENT,'h3','Order Now','blue','','',()=>{

        });

    });

    CENTERTEXT('','h1','Mobile Apps','','25px','2%',()=>{

    });

    VIEW('',' ','98%','auto','',(ELEMENT)=>{

        const Message='Mobile Apps are Developed  In Two Caterogies ,Android Apps and Ios Apps and have Different Pricing Basing on the type of Mobile App Being Built.';

        LEFTTEXT(ELEMENT,'',Message,'','','1%','',()=>{

        });

        NAVTEMPLATE(ELEMENT,'transparent','98%','50px','1%',(ELEMENT)=>{

            TEXT(ELEMENT,'h3','Platform','forestgreen','','',()=>{
    
                
            });
    
            TEXT(ELEMENT,'h3','Android','orange','','',()=>{
    
            });

                
            TEXT(ELEMENT,'h3','Ios','teal','','',()=>{
    
            });
    
        });

        NAVTEMPLATE(ELEMENT,'transparent','98%','50px','1%',(ELEMENT)=>{

            TEXT(ELEMENT,'h3','E-commerce','','','',()=>{
    
                
            });
    
            TEXT(ELEMENT,'h3','$1,000','','','',()=>{
    
            });

                
            TEXT(ELEMENT,'h3','$1,200','','','',()=>{
    
            });
    
        });

        NAVTEMPLATE(ELEMENT,'transparent','98%','50px','1%',(ELEMENT)=>{

            TEXT(ELEMENT,'h3','Social Media ','','','',()=>{
    
                
            });
    
            TEXT(ELEMENT,'h3','$10,000','','','',()=>{
    
            });

                
            TEXT(ELEMENT,'h3','$10,000','','','',()=>{
    
            });
    
        });

        NAVTEMPLATE(ELEMENT,'transparent','98%','50px','1%',(ELEMENT)=>{

            TEXT(ELEMENT,'h3','Chat Apps ','','','',()=>{
    
                
            });
    
            TEXT(ELEMENT,'h3','$30,000','','','',()=>{
    
            });

                
            TEXT(ELEMENT,'h3','$35,000','','','',()=>{
    
            });
    
        });

        NAVTEMPLATE(ELEMENT,'transparent','98%','50px','1%',(ELEMENT)=>{

            TEXT(ELEMENT,'h3','Media Players ','','','',()=>{
    
                
            });
    
            TEXT(ELEMENT,'h3','$500','','','',()=>{
    
            });

                
            TEXT(ELEMENT,'h3','$800','','','',()=>{
    
            });
    
        });

        NAVTEMPLATE(ELEMENT,'transparent','98%','50px','1%',(ELEMENT)=>{

            TEXT(ELEMENT,'h3','AI Apps ','','','',()=>{
    
                
            });
    
            TEXT(ELEMENT,'h3','$50,000','','','',()=>{
    
            });

                
            TEXT(ELEMENT,'h3','$50,000','','','',()=>{
    
            });
    
        });
        
    });

    CENTERTEXT('','h1','WebSites','','25px','2%',()=>{

    });

    VIEW('',' ','98%','auto','',(ELEMENT)=>{

        const Message='We Develop and Host Your Website and Depending on the Website Type Price Varies,You Get Admin Panel to Your Site and Statistics is Provided for a Customer to Findout How There Website is Handling Traffic.';

        LEFTTEXT(ELEMENT,'',Message,'','','1%','',()=>{

        });

        NAVTEMPLATE(ELEMENT,'transparent','98%','50px','1%',(ELEMENT)=>{

            TEXT(ELEMENT,'h3','Platform','forestgreen','','',()=>{
    
                
            });
    
            TEXT(ELEMENT,'h3','Price','orange','','',()=>{
    
            });

        });

        NAVTEMPLATE(ELEMENT,'transparent','98%','50px','1%',(ELEMENT)=>{

            TEXT(ELEMENT,'h3','E-commerce','','','',()=>{
    
                
            });
    
            TEXT(ELEMENT,'h3','$1,000','','','',()=>{
    
            });
    
        });

        NAVTEMPLATE(ELEMENT,'transparent','98%','50px','1%',(ELEMENT)=>{

            TEXT(ELEMENT,'h3','Social Media ','','','',()=>{
    
                
            });
    
            TEXT(ELEMENT,'h3','$10,000','','','',()=>{
    
            });
    
        });

        NAVTEMPLATE(ELEMENT,'transparent','98%','50px','1%',(ELEMENT)=>{

            TEXT(ELEMENT,'h3','Chat Site ','','','',()=>{
    
                
            });
    
            TEXT(ELEMENT,'h3','$30,000','','','',()=>{
    
            });
    
        });

        NAVTEMPLATE(ELEMENT,'transparent','98%','50px','1%',(ELEMENT)=>{

            TEXT(ELEMENT,'h3','Media Players ','','','',()=>{
    
                
            });
    
            TEXT(ELEMENT,'h3','$500','','','',()=>{
    
            });

    
        });

        NAVTEMPLATE(ELEMENT,'transparent','98%','50px','1%',(ELEMENT)=>{

            TEXT(ELEMENT,'h3','AI Site ','','','',()=>{
    
                
            });
    
            TEXT(ELEMENT,'h3','$50,000','','','',()=>{
    
            });

        });

        NAVTEMPLATE(ELEMENT,'transparent','98%','50px','1%',(ELEMENT)=>{

            TEXT(ELEMENT,'h3','Profile Site','','','',()=>{
    
                
            });
    
            TEXT(ELEMENT,'h3','$100','','','',()=>{
    
            });

        });
        
    });

};

const METRICSPAGE=()=>{

    CLEAR('');

    IMAGE('',EROINNOVATIONSLOGOONE,'','','',()=>{

    });

    NAVTEMPLATE('','transparent','98%','50px','1%',(ELEMENT)=>{

        TEXT(ELEMENT,'h3','Home','','','',()=>{

            ROUTE('',ABOUTUSPAGE,'ABOUTUSPAGE');

        });

        TEXT(ELEMENT,'h3','Download Data','blue','','',()=>{

        });

    });

    CENTERTEXT('','h1','Site Performance','','25px','2%',()=>{

    });

    VIEW('',' ','98%','auto','',(ELEMENT)=>{

        const Message='The Following Content Your About to See is the Real Time Information of People Visiting this Site Device Based But the Information For Orders and Stake Holders is Private but Available to Share Holders not Even Our Employees have Access to it and its Represented as Weekly Data.';

        LEFTTEXT(ELEMENT,'',Message,'','','1%','',()=>{

        });

        NAVTEMPLATE(ELEMENT,'transparent','98%','50px','1%',(ELEMENT)=>{

            TEXT(ELEMENT,'h3','Desktop','forestgreen','','',()=>{
    
                
            });
    
            TEXT(ELEMENT,'h3','Android','orange','','',()=>{
    
            });

                
            TEXT(ELEMENT,'h3','Ios','teal','','',()=>{
    
            });
    
        });

        NAVTEMPLATE(ELEMENT,'transparent','98%','50px','1%',(ELEMENT)=>{

            TEXT(ELEMENT,'h3','50','','','',()=>{
    
                
            });
    
            TEXT(ELEMENT,'h3','11,000','','','',()=>{
    
            });

                
            TEXT(ELEMENT,'h3','1','','','',()=>{
    
            });
    
        });

        BREAK(ELEMENT);
        
    });

};

const SOCIALMEDIAPAGE=()=>{

    CLEAR('');

    IMAGE('',EROINNOVATIONSLOGOONE,'','','',()=>{

    });

    NAVTEMPLATE('','transparent','98%','50px','1%',(ELEMENT)=>{

        TEXT(ELEMENT,'h3','Home','','','',()=>{

            ROUTE('',CONTACTUSPAGE,'CONTACTUSPAGE');

        });

        TEXT(ELEMENT,'h3','Download App','blue','','',()=>{

        });

    });

    CENTERTEXT('','h1','Company Reach Out','','25px','2%',()=>{

    });

    CENTERTEXT('','h1','For More Information','','18px','2%',()=>{

    });

    IMAGEBUTTON('','forestgreen','Instagram','',INSTAGRAMICON,'50px','1%',()=>{

    });

    IMAGEBUTTON('','forestgreen','Signal','',WHATSAPPICON,'50px','1%',()=>{

    });

    IMAGEBUTTON('','forestgreen','Gmail','',GMAILICON,'50px','1%',()=>{

    });

};