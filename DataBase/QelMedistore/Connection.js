import { APPMODE } from "../../Library/Functions/AppMode/AppMode.js";
import { VISITOR } from "../../Library/Functions/Visitor/Visitor.js";
import { QELANDROIDSEITE } from "./Android.js";

const API='https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing';

const QELCONNECTION=()=>{

    VISITOR(API,'Visitors');

    APPMODE('#333333');

    if (localStorage.getItem('OperatingSystem') === 'Android') {

        QELANDROIDSEITE();
        
    } else {
        
        QELANDROIDSEITE();

    }

};

export{QELCONNECTION}