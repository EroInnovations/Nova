import { VIEW } from "../../../Components/View/Views.js";
import { STYLED } from "../../../Functions/Style/Style.js";

const NAVTEMPLATE=(ELEMENT,COLOR,WIDTH,HEIGHT,MARGIN,callback)=>{

    VIEW(ELEMENT,COLOR||' ',WIDTH||'80%',HEIGHT||'80%',MARGIN||'5% auto',(ELEMENTS)=>{

        STYLED(ELEMENTS,'display','inline-flex');

        callback(ELEMENTS);

    });

};
export{NAVTEMPLATE};