import { DELETECONTACT } from "./DeleteContact/DeleteContact.js";
import { FOREGROUND } from "./Foreground/Foreground.js";
import { MOVEFILE } from "./MoveFile/MoveFile.js";
import { RELOAD } from "./Reload/Reload.js";
import { STOPFOREGROUND } from "./StopForeground/StopForeground.js";
import { TOAST } from "./Toast/Toast.js";
import { VIBRATION } from "./Vibration/Vibration.js";
const ANDROIDPLUGINS=()=>{
const DATA=`const VIBRATION='${VIBRATION}';
const TOAST='${TOAST}';
const RELOAD='${RELOAD}';
const FOREGROUND='${FOREGROUND}';
const STOPFOREGROUND='${STOPFOREGROUND}';
const DELETECONTACT='${DELETECONTACT}';
const MOVEFILE='${MOVEFILE}';
`;
localStorage.setItem("ANDROIDPLUGINS",DATA);

}
export{ANDROIDPLUGINS};

`
const MOVEFILE='${MOVEFILE}';

`