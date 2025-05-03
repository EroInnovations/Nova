import { APPMODE } from "../../Library/Functions/AppMode/AppMode.js";
import { ANDROIDELGON } from "./Android.js"

export const ELGONCONNECTION=()=>{

    APPMODE('#333333');

    if (localStorage.getItem('OperatingSystem') === 'Android') {

        ANDROIDELGON();
        
    } else {

        ANDROIDELGON();
        
    };

};