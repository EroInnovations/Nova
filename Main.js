import { EROINNOVATIONSLOGOONE } from "./Library/Assets/CompanyImages/EroInnovations/LogoOne.js";
import { CENTERTEXT } from "./Library/Components/CenterText/CenterText.js";
import { IMAGE } from "./Library/Components/Image/Image.js";
import { TEXT } from "./Library/Components/Text/Text.js";
import { APPMODE } from "./Library/Functions/AppMode/AppMode.js";
import { BODY } from "./Library/Functions/Body/Body.js";
import { CLEAR } from "./Library/Functions/Clear/Clear.js";
import { INSPECTION } from "./Library/Functions/Inspection/Inspection.js";
import { OPERATINGSYSTEM } from "./Library/Functions/OperatingSystem/OperatingSystem.js";
import { VISITOR } from "./Library/Functions/Visitor/Visitor.js";
import { NAVTEMPLATE } from "./Library/Templates/Components/NavTemplate/NavTemplate.js";

const API='https://docs.google.com/spreadsheets/d/1QrPMVra0WEB1L_JWpZyvm1WRoVaSlJk7KFiJiCOgYOQ/edit?usp=sharing';

OPERATINGSYSTEM();

BODY();

APPMODE('#04143c');

VISITOR(API,'Visitors');

INSPECTION();

const NOVASTART=()=>{

    CLEAR('');

    IMAGE('',EROINNOVATIONSLOGOONE,'50%','500px','5% auto',()=>{

    });

    NAVTEMPLATE('','#04145c50','80%','50px','',(ELEMENTS)=>{

        TEXT(ELEMENTS,'h1','Developers','','20px','',()=>{

        });

        TEXT(ELEMENTS,'h1','About Us','','20px','',()=>{

        });

        TEXT(ELEMENTS,'h1','Contact Us','','20px','',()=>{

        });

    });

};

NOVASTART();