import { APPMODE } from "../../Library/Functions/AppMode/AppMode.js";
import { VISITOR } from "../../Library/Functions/Visitor/Visitor.js";
import { ANDROIDELGON } from "./Android.js";

const API='https://docs.google.com/spreadsheets/d/1CL2HWe9Pwj18F7O9RKny8oRQFAw5-K_A0Io-rvCWryk/edit?usp=sharing';


export const ELGONCONNECTION=()=>{

    VISITOR(API,'ElgonUsers');

    APPMODE('#333333');

    if (localStorage.getItem('OperatingSystem') === 'Android') {

        ANDROIDELGON();
        
    } else {

        ANDROIDELGON();
        
    };

};