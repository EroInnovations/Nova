import { AUTORUN } from "./AutoRun.js";
import { AUTOSTART } from "./AutoStart.js";
const NOVA=()=>{
const DATA=`ROUTEJS(localStorage.getItem('FUNCTIONS'));
ROUTEJS(localStorage.getItem('AUTORUN'));
ROUTEJS(localStorage.getItem('AUTOSTART'));
ROUTEJS(localStorage.getItem('COMPONENTS'));
`;
localStorage.setItem('NOVA',DATA);
localStorage.setItem('Updates','Nova');
setTimeout(() => {
AUTORUN();
AUTOSTART();
setTimeout(() => {
    NOVASTART(); 
    }, 2000);
}, 2000);
};
export{NOVA};
`
ROUTEJS(localStorage.getItem('COMPONENTS'));
`
