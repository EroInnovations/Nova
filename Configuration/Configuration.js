import { NOVA } from "../Model/Model.js";
import { DESKTOPCONFIGURATION } from "./Desktop/DesktopConfiguration.js";
import { DEVELOPMENTCONFIGURATION } from "./Development/Development.js";
import { MOBILECONFIGURATION } from "./Mobile/MobileConfiguration.js";
import { WEBCONFIGURATION } from "./Web/WebConfiguration.js";

const CONFIGURATION=()=>{

    if (localStorage.getItem('BuildNumber') === '1010' ) {

        MOBILECONFIGURATION();

        return;
        
    };

    if (localStorage.getItem('BuildNumber') === '8080' ) {

        WEBCONFIGURATION();

        return;
        
    };

    if (localStorage.getItem('BuildNumber') === '6060' ) {

        DESKTOPCONFIGURATION();

        return;
        
    };

    if (localStorage.getItem('BuildNumber') === '0101' ) {

        DEVELOPMENTCONFIGURATION();

        return;
        
    };


};
export{CONFIGURATION};