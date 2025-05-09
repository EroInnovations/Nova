import { COMMUNITYRISELOGO } from "../../../Library/Assets/Icons/Logos/CommunityRise/CommunityRise.js";
import { FACEBOOKICON } from "../../../Library/Assets/Icons/WhiteIcons/FaceBookIcon/FaceBookIcon.js";
import { INSTAGRAMICON } from "../../../Library/Assets/Icons/WhiteIcons/InstagramIcon/InstagramIcon.js";
import { WHATSAPPICON } from "../../../Library/Assets/Icons/WhiteIcons/WhatsAppIcon/WhatsAppIcon.js";
import { CENTERTEXT } from "../../../Library/Components/CenterText/CenterText.js";
import { FOOTER } from "../../../Library/Components/Footer/Footer.js";
import { ICONTEXT } from "../../../Library/Components/IconText/IconText.js";
import { IMAGE } from "../../../Library/Components/Image/Image.js";
import { INLINEVIEW } from "../../../Library/Components/InlineView/InlineView.js";
import { LEFTTEXT } from "../../../Library/Components/LeftText/LeftText.js";
import { RIGHTTEXT } from "../../../Library/Components/RightText/RightText.js";
import { TEXT } from "../../../Library/Components/Text/Text.js";
import { VIEW } from "../../../Library/Components/View/Views.js";
import { BREAK } from "../../../Library/Functions/Break/Break.js";
import { CLEAR } from "../../../Library/Functions/Clear/Clear.js";
import { CLICK } from "../../../Library/Functions/Click/Click.js";
import { GETINDEXEDDATA } from "../../../Library/Functions/GetIndexedData/GetIndexedData.js";
import { INSTAGRAM } from "../../../Library/Functions/Instagram/Instagram.js";
import { JSONIFICATION } from "../../../Library/Functions/Jsonification/Jsonification.js";
import { ROUTE } from "../../../Library/Functions/Route/Route.js";
import { STOREDATA } from "../../../Library/Functions/StoreData/StoreData.js";
import { STYLED } from "../../../Library/Functions/Style/Style.js";
import { WEBSITE } from "../../../Library/Functions/WebSite/WebSite.js";
import { WHATSAPP } from "../../../Library/Functions/WhatsApp/WhatsApp.js";
import { NAVTEMPLATE } from "../../../Library/Templates/Components/NavTemplate/NavTemplate.js";
import { ABOUTUSPAGE } from "./AboutUsPage.js";
import { DONATEPAGE } from "./DonatePage.js";
import { NEWSPAGE } from "./NewsPage.js";
import { PROJECTPAGE } from "./ProjectPage.js";
import { SERVICESPAGE } from "./ServicePage.js";

const TEXTCOLOR='#ffffff';

export const ANDROIDCOMMUNITYRISE=()=>{

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

    VIEW('','transparent','98%','150px','1% auto',(ELEMENT)=>{

        STYLED(ELEMENT,'overflow','hidden');

        const Message='Community Rise Ventures is a Non Government Founded Organisation that has taken steps to try and solve the community problems ,Our Vision is to create a stable and sustainable Community for enhanced Development';

        LEFTTEXT(ELEMENT,'p',Message,'#fff','20px','1%','2%',()=>{

        });
        
    });

    NAVTEMPLATE('','','95%','50px','',(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'','Our Projects',TEXTCOLOR,'25px','1%','',()=>{
    
        });
    
        RIGHTTEXT(ELEMENT,'','See All','orange','20px','1%','',()=>{

            ROUTE(' ',PROJECTPAGE,'HOMEPAGE');
    
        });

    });

    LEFTTEXT('','','Lets Keep You Updated About Community Rise Ventures Projects and how we are changing society from your donations.Click on the stories below or click on All to see our projects.',TEXTCOLOR,'20px','2%','2% auto',()=>{
    
    });

    INLINEVIEW('','','98%','300px','','1%',(ELEMENT)=>{
        
        GETINDEXEDDATA('News','News',(data)=>{

            INLINEVIEW(ELEMENT,'transparent','200px','285px','','auto 2%',(ELEMENTS)=>{
        
                IMAGE(ELEMENTS,data.ImageOne||COMMUNITYRISELOGO,'100%','100%','',()=>{
            
                });

                FOOTER(ELEMENTS,'#000000','','50px',(ELEMENTES)=>{
            
                    TEXT(ELEMENTES,'',data.Name||'Community Rise Ventures','white','20px','',()=>{
            
                    });
            
                });

                CLICK(ELEMENTS,()=>{

                    JSONIFICATION(data,(MyData)=>{

                        STOREDATA('','CurrentStory',MyData);

                        ROUTE(' ',NEWSPAGE,'HOMEPAGE');

                    });

                });
        
            }); 

        })

    });

    VIEW('','','98%','300px','1% auto',()=>{

    });

    NAVTEMPLATE('','transparent','98%','70px','auto 1%',(ELEMENT)=>{

        ICONTEXT(ELEMENT,WHATSAPPICON,' ','98px','70px','45px','25px','25px','WhatsApp','',()=>{

            WHATSAPP('0779332496');

        });

        ICONTEXT(ELEMENT,INSTAGRAMICON,' ','98px','70px','45px','25px','25px','Instagram','',()=>{

            INSTAGRAM('community_rise_ventures');

        });

        ICONTEXT(ELEMENT,FACEBOOKICON,' ','98px','70px','45px','25px','25px','Facebook','',()=>{

            WEBSITE('https://www.facebook.com/share/gGoc7h3UY95qyPvU/?mibextid=wwXIfr')

        });

    }); 

    BREAK('');

    CENTERTEXT('','','Powered by <br>Elite Robust Ontology','orange','20px','',(ELEMENT)=>{

        WEBSITE('https://eroinnovations.site');

    });

    BREAK('');

};
