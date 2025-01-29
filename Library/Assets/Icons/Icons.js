import { ADDPERSONICON } from "./AddPersonIcon/AddPersonIcon.js";
import { ANDROIDICON } from "./AndroidIcon/AndroidIcon.js";
import { APPICON } from "./AppIcon/AppIcon.js";
import { BAGICON } from "./BagIcon/BagIcon.js";
import { BICYCLEICON } from "./BicycleIcon/BicycleIcon.js";
import { DROPDOWNICON } from "./DropDownIcon/DropDownIcon.js";
import { LEFTBACKICON } from "./LeftBackIcon/LeftBackIcon.js";
import { FISKONICON } from "./Logos/fiskon/fiskon.js";
import { WINKSTA } from "./Logos/Winksta/Winksta.js";
import { SONGBACKICON } from "./SongBackIcon/SongBackIcon.js";
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
const WHITEADDPERSONICON='${ADDPERSONICON}';
const WHITEANDROIDICON='${ANDROIDICON}';
const WHITEAPPICON='${APPICON}';
const WHITELEFTBACKICON='${LEFTBACKICON}';
const WHITESONGBACKICON='${SONGBACKICON}';
const WHITEBAGICON='${BAGICON}';
const WHITEBICYCLEICON='${BICYCLEICON}';
const WHITEDROPDOWNICON='${DROPDOWNICON}';
`;
    localStorage.setItem("ICONS",DATA);

};
export{ICONS};

`
const WHITEDROPDOWNICON='${DROPDOWNICON}';

`