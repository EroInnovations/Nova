import { FULLSCROLLVIEW } from "../../../Components/FullScrollView/FullScrollView.js";
import { HEADER } from "../../../Components/Header/Header.js";
import { VIEW } from "../../../Components/View/Views.js";
import { CLEAR } from "../../../Functions/Clear/Clear.js";
import { STYLED } from "../../../Functions/Style/Style.js";

const HOMESCROLLHEADERTEMPLATE=(ELEMENT,HeaderColor,BodyColor,callback,HomeCallBack)=>{

    CLEAR(ELEMENT);

    FULLSCROLLVIEW(ELEMENT,BodyColor||'transparent',(ELEMS)=>{

        CLEAR(ELEMS);

        HEADER(ELEMS,HeaderColor,(ELEMIS)=>{

            STYLED(ELEMIS,'position','relative');

            callback(ELEMIS);
    
        });

        VIEW(ELEMS,'transparent','100%','100%','auto',(ELEMENTS)=>{

            HomeCallBack(ELEMENTS);

        });

    });

};

export{HOMESCROLLHEADERTEMPLATE};