import { HOMEFOOTERTEMPLATE } from "../../../Library/Templates/Components/HomeFooterTemplate/HomeFooterTemplate.js";
import { HOMEFOOTER } from "./Pages/HomeFooter.js";
import { HOMENAV } from "./Pages/HomeNav.js";

export const QELANDROIDHOMEPAGE=()=>{

    HOMEFOOTERTEMPLATE('','transparent',(ELEMENT)=>{

        HOMENAV(ELEMENT);

    },(ELEMENT)=>{

       HOMEFOOTER(ELEMENT);

    });
    
};