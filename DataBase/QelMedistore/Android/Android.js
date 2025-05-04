import { CONDITION } from "../../../Library/Functions/Condition/Condition.js";
import { RELOAD } from "../../../Library/Functions/Reload/Reload.js";
import { STOREDATA } from "../../../Library/Functions/StoreData/StoreData.js";
import { QELANDROIDHOMEPAGE } from "./HomePage.js";

const QELANDROIDAPP=()=>{

    CONDITION(localStorage.getItem('Updates'),()=>{

        QELANDROIDHOMEPAGE();

    },()=>{

        STOREDATA(' ','Updates','Approved');        

        RELOAD();

    });

};

export{QELANDROIDAPP};