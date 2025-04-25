import { FULLSCROLLVIEW } from "../../../Components/FullScrollView/FullScrollView.js";
import { HEADER } from "../../../Components/Header/Header.js";
import { CLEAR } from "../../../Functions/Clear/Clear.js";
import { STYLED } from "../../../Functions/Style/Style.js";

const HOMEHEADERTEMPLATE=(ELEMENT,HeaderColor,BodyColor,callback,HomeCallBack)=>{

    CLEAR(ELEMENT);

    HEADER(ELEMENT,HeaderColor,(ELEMS)=>{

        callback(ELEMS);

    });

    FULLSCROLLVIEW(ELEMENT,BodyColor||'transparent',(ELEMS)=>{

        STYLED(ELEMS,'top','50px');

        HomeCallBack(ELEMS);

    });

};

export{HOMEHEADERTEMPLATE}