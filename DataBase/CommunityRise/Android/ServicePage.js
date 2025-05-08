import { LEFTTEXTBACKHEADERBODY } from "../../../Library/Templates/Components/LeftTextBackHeaderBody/LeftTextBackHeaderBody.js";
import { ROUTE } from "../../../Library/Functions/Route/Route.js";
const TEXTCOLOR='#ffffff';
export const SERVICESPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Services',TEXTCOLOR,()=>{

    },()=>{

    });

};