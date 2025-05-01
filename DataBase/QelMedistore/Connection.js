import { APPMODE } from "../../Library/Functions/AppMode/AppMode.js";
import { QELANDROIDSEITE } from "./Android.js";

const QELCONNECTION=()=>{

    APPMODE('#cdcdcd');

    if (localStorage.getItem('OperatingSystem') === 'Android') {

        QELANDROIDSEITE();
        
    } else {
        
    }

};

export{QELCONNECTION}