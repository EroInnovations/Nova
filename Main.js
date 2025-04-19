import { APPMODE } from "./Library/Functions/AppMode/AppMode.js";
import { BODY } from "./Library/Functions/Body/Body.js";
import { CHECKER } from "./Library/Functions/Checker/Checker.js";
import { INSPECTION } from "./Library/Functions/Inspection/Inspection.js";
import { OPERATINGSYSTEM } from "./Library/Functions/OperatingSystem/OperatingSystem.js";
import { VISITOR } from "./Library/Functions/Visitor/Visitor.js";
import { ANDROIDSITE } from "./Site/Android.js";

const API='https://docs.google.com/spreadsheets/d/1QrPMVra0WEB1L_JWpZyvm1WRoVaSlJk7KFiJiCOgYOQ/edit?usp=sharing';

OPERATINGSYSTEM();

BODY();

APPMODE('#04143c');

VISITOR(API,'Visitors');

INSPECTION();

const NOVASTART=()=>{

    CHECKER(localStorage.getItem('OperatingSystem') === 'Android',()=>{

        ANDROIDSITE();

    } );

};

NOVASTART();