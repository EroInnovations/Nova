import { CLEAR } from "../../Library/Functions/Clear/Clear.js"
import { HIDER } from "../../Library/Functions/Hider/Hider.js";
import { ROUTE } from "../../Library/Functions/Route/Route.js";

const ANDROIDAFTERPAY=()=>{

    CLEAR('');

    HIDER(1000,()=>{
        
        ROUTE('',HOMEPAGE,'HOMEPAGE');
    });

};
export{ANDROIDAFTERPAY};