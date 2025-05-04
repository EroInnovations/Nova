import { BUTTON } from "../../../Components/Button/Button.js";
import { CENTERTEXT } from "../../../Components/CenterText/CenterText";
import { FULLSCROLLVIEW } from "../../../Components/FullScrollView/FullScrollView.js";
import { MESSAGEDISPLAY } from "../../../Components/MessageDisplay/MessageDisplay.js";
import { BREAK } from "../../../Functions/Break/Break.js";
import { CHECKER } from "../../../Functions/Checker/Checker.js";
import { CLEAR } from "../../../Functions/Clear/Clear";
import { CONDITION } from "../../../Functions/Condition/Condition";

const OFFLINEPAGETEMPLATE=(ReconnectCallBack,HomeCallBack,Margin)=>{

    CHECKER(!navigator.onLine,()=>{

        CLEAR('');

        FULLSCROLLVIEW('','transparent',(ELEMS)=>{
    
            IMAGE(ELEMS,WHITENOWIFIICON,'50%','30%',Margin,(NOIFI)=>{
        
            });
    
            CENTERTEXT(ELEMS,'','Your Offline','','20px','',()=>{
    
            });
    
            CENTERTEXT(ELEMS,'','Please Check Your Internet Connection <br> Click Reconnect to try Again <br> Click Cancel To Close. ','','16px','',()=>{
    
            });
    
            BREAK(ELEMS);BREAK(ELEMS);
    
            BUTTON(ELEMS,'','50px','forestgreen','','Reconnect',(ELEMENT)=>{
    
                CONDITION(navigator.onLine,()=>{
    
                    ReconnectCallBack();
    
                },()=>{
    
                    MESSAGEDISPLAY('','Check Your Internet','');
    
                });
    
            });
    
            BREAK(ELEMS);
    
            BUTTON(ELEMS,'','50px','brown','','Cancel',(ELEMENT)=>{
    
                HomeCallBack();
    
            });
    
        });
        
    });

};

export{OFFLINEPAGETEMPLATE};