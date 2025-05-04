import { HOMEFOOTERTEMPLATE } from "../../../../Library/Templates/Components/HomeFooterTemplate/HomeFooterTemplate.js";
import { HOMEFOOTER } from "../Views/HomeFooter.js";
import { HOMENAV } from "../Views/HomeNav.js";

export const QELANDROIDHOMEPAGE=()=>{

    HOMEFOOTERTEMPLATE('','transparent',(ELEMENT)=>{

        HOMENAV(ELEMENT);

    },(ELEMENT)=>{

       HOMEFOOTER(ELEMENT);

    });
    
};