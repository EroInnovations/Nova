import { FISKONICON } from "./Logos/fiskon/fiskon.js";
import { ADDICON } from "./WhiteIcons/AddIcon/Addicon.js";
import { BACKICON } from "./WhiteIcons/BackIcon/BackIcon.js";
import { INFOICON } from "./WhiteIcons/InfoIcon/InfoIcon.js";
import { MENUICON } from "./WhiteIcons/MenuIcon/MenuIcon.js";


const ICONS=()=>{

const DATA=`const FISKONICON='${FISKONICON}';
const WHITEMENUICON='${MENUICON}';
const WHITEADDICON='${ADDICON}';  
const WHITEBACKICON='${BACKICON}'; 
const WHITEINFOICON='${INFOICON}'; 
`;
    localStorage.setItem("ICONS",DATA);

};
export{ICONS};

`
const WHITEINFOICON='${INFOICON}';

`