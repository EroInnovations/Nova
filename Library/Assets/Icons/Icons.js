import { FISKONICON } from "./Logos/fiskon/fiskon.js";
import { WINKSTA } from "./Logos/Winksta/Winksta.js";
import { ADDICON } from "./WhiteIcons/AddIcon/Addicon.js";
import { BACKICON } from "./WhiteIcons/BackIcon/BackIcon.js";
import { INFOICON } from "./WhiteIcons/InfoIcon/InfoIcon.js";
import { MENUICON } from "./WhiteIcons/MenuIcon/MenuIcon.js";
import { SHOPPINGCART } from "./WhiteIcons/ShoppingCart/ShoppingCart.js";


const ICONS=()=>{

const DATA=`const FISKONICON='${FISKONICON}';
const WHITEMENUICON='${MENUICON}';
const WHITEADDICON='${ADDICON}';  
const WHITEBACKICON='${BACKICON}'; 
const WHITEINFOICON='${INFOICON}'; 
const WHITESHOPPINGCART='${SHOPPINGCART}';
const WINKSTALOGO='${WINKSTA}';
`;
    localStorage.setItem("ICONS",DATA);

};
export{ICONS};

`
const WINKSTALOGO='${WINKSTA}';

`