import { FOOTER } from "../../../Components/Footer/Footer.js";
import { FULLSCROLLVIEW } from "../../../Components/FullScrollView/FullScrollView.js";
import { CLEAR } from "../../../Functions/Clear/Clear.js";
import { STYLED } from "../../../Functions/Style/Style.js";

const HOMEFOOTERTEMPLATE=(ELEMENT,FooterColor,HomeCallBack,FooterCallBack)=>{

    CLEAR(ELEMENT);

    FULLSCROLLVIEW(ELEMENT,'transparent',(ELEMS)=>{

        STYLED(ELEMS,'bottom','50px');

        HomeCallBack(ELEMS);

    });

    FOOTER(ELEMENT,FooterColor,'100%','50px',(ELEMS)=>{

        FooterCallBack(ELEMS);

    });

};

export{HOMEFOOTERTEMPLATE}