import { LEFTTEXTBACKHEADERBODY } from "../../../Library/Templates/Components/LeftTextBackHeaderBody/LeftTextBackHeaderBody.js";
import { ROUTE } from "../../../Library/Functions/Route/Route.js";
import { IMAGE } from "../../../Library/Components/Image/Image.js";
import { SESSIONDEJSONDATA } from "../../../Library/Functions/SessionDejsonData/SessionDejsonData.js";
import { COMMUNITYRISELOGO } from "../../../Library/Assets/Icons/Logos/CommunityRise/CommunityRise.js";
import { LEFTTEXT } from "../../../Library/Components/LeftText/LeftText.js";
import { INLINEVIEW } from "../../../Library/Components/InlineView/InlineView.js";
import { BREAK } from "../../../Library/Functions/Break/Break.js";
import { CHECKER } from "../../../Library/Functions/Checker/Checker.js";
const TEXTCOLOR='#ffffff';
export const NEWSPAGE=()=>{

    SESSIONDEJSONDATA('CurrentStory',(data)=>{
  
        LEFTTEXTBACKHEADERBODY('',()=>{

            ROUTE('',HOMEPAGE,'HOMEPAGE');

        },data.Name||'Community Rise Ventures',TEXTCOLOR,()=>{

        },(ELEMENT)=>{

            IMAGE(ELEMENT,data.ImageOne||COMMUNITYRISELOGO,'95%','50%','',()=>{

            });

            LEFTTEXT(ELEMENT,'',data.Story,'#ffffff','20px','1%','',()=>{

            });

            CHECKER(data.ImageTwo||data.ImageThree||data.ImageFour,()=>{

                INLINEVIEW(ELEMENT,'','98%','300px','','1%',(ELEMENTA)=>{

                    CHECKER(data.ImageTwo,()=>{

                        IMAGE(ELEMENT,data.ImageTwo||COMMUNITYRISELOGO,'95%','50%','',()=>{

                        });

                    });

                    CHECKER(data.ImageThree,()=>{

                        IMAGE(ELEMENT,data.ImageThree||COMMUNITYRISELOGO,'95%','50%','',()=>{

                        });

                    });

                    CHECKER(data.ImageFour,()=>{

                        IMAGE(ELEMENT,data.ImageFour||COMMUNITYRISELOGO,'95%','50%','',()=>{

                        });

                    });

                });

            });
            
            BREAK(ELEMENT);

        });

    });

};