import { VISITOR } from "../../Library/Functions/Visitor/Visitor.js";
import { ANDROIDMAINSITE } from "./Android.js";
const API='https://docs.google.com/spreadsheets/d/1QrPMVra0WEB1L_JWpZyvm1WRoVaSlJk7KFiJiCOgYOQ/edit?usp=sharing';

const ELITECONNECTION=()=>{

    VISITOR(API,'Visitors');

    if (localStorage.getItem('OperatingSystem') === 'Android' ) {
        
        ANDROIDMAINSITE();

        return;

    } 

    if (localStorage.getItem('OperatingSystem') === 'Windows' ) {
        
        console.log('Under Development');

        return;

    } 

    if (localStorage.getItem('OperatingSystem') === 'Web' ) {
        
        console.log('Under Development');

        return;

    } 

};

export{ELITECONNECTION};