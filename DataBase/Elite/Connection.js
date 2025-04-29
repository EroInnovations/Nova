import { APPMODE } from "../../Library/Functions/AppMode/AppMode.js";
import { VISITOR } from "../../Library/Functions/Visitor/Visitor.js";
import { ANDROIDMAINSITE } from "./Android.js";
import { WINDOWSMAINSITE } from "./Desktop.js";
const API='https://docs.google.com/spreadsheets/d/1QrPMVra0WEB1L_JWpZyvm1WRoVaSlJk7KFiJiCOgYOQ/edit?usp=sharing';

const ELITECONNECTION=()=>{

    APPMODE('#04143c');

    VISITOR(API,'Visitors');

    if (localStorage.getItem('OperatingSystem') === 'Android' ) {
        
        ANDROIDMAINSITE();

        return;

    } 

    if (localStorage.getItem('OperatingSystem') === 'Windows' ) {
        
        WINDOWSMAINSITE();

        return;

    } 

    if (localStorage.getItem('OperatingSystem') === 'Web' ) {
        
        console.log('Under Development');

        return;

    } 

};

export{ELITECONNECTION};