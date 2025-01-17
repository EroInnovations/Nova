import { AUTORUN } from "./AutoRun.js";
import { AUTOSTART } from "./AutoStart.js";
const NOVA=()=>{
const DATA=`ROUTEJS(localStorage.getItem('FUNCTIONS'));
ROUTEJS(localStorage.getItem('PROJECT'));
ROUTEJS(localStorage.getItem('AUTORUN'));
ROUTEJS(localStorage.getItem('AUTOSTART'));
ROUTEJS(localStorage.getItem('COMPONENTS'));
ROUTEJS(localStorage.getItem('ICONS'));
ROUTEJS(localStorage.getItem('APIS'));

`;
localStorage.setItem('NOVA',DATA);
localStorage.setItem('Updates','Nova');
AUTORUN();
AUTOSTART();
NOVASTART();
};
export{NOVA};
`
ROUTEJS(localStorage.getItem('PROJECT'));
`
