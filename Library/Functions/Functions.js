import { ADD } from "./Add/Add.js";
import { APPMODE } from "./AppMode/AppMode.js";
import { BODY } from "./Body/Body.js";
import { CLEAR } from "./Clear/Clear.js";
import { CLICK } from "./Click/Click.js";
import { CREATEELEMENT } from "./CreateElement/CreateElement.js";
import { DISPLAY } from "./Display/Display.js";
import { RELOAD } from "./Reload/Reload.js";

const FUNCTIONS=()=>{

const DATA=`const ADD=${ADD};
const CLICK=${CLICK};
const CREATEELEMENT=${CREATEELEMENT};
const CLEAR=${CLEAR};
const DISPLAY=${DISPLAY};
const APPMODE=${APPMODE};
const BODY=${BODY};
const RELOAD=${RELOAD};
`;
localStorage.setItem('FUNCTIONS',DATA)
};
export{FUNCTIONS};

`

const RELOAD=${RELOAD};

`