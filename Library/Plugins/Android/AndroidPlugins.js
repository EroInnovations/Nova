import { BATTERY } from "./Battery/Battery.js";
import { NOTIFICATION } from "./Notifications/Notifications.js";
import { VIBRATION } from "./Vibration/Vibration.js";

const ANDROIDPLUGINS=()=>{
const DATA=`const BATTERY='${BATTERY}';
const VIBRATION='${VIBRATION}';
const NOTIFICATION='${NOTIFICATION}';
`;
localStorage.setItem("ANDROIDPLUGINS",DATA);

}
export{ANDROIDPLUGINS};

`
const NOTIFICATION='${NOTIFICATION}';

`