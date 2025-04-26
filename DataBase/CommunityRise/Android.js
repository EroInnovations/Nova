import { APPMODE } from "../../Library/Functions/AppMode/AppMode.js"
import { CLEAR } from "../../Library/Functions/Clear/Clear.js";
import { DISPLAY } from "../../Library/Functions/Display/Display.js";
import { ROUTE } from "../../Library/Functions/Route/Route.js";

export const ANDROIDCOMMUNITYRISE=()=>{

    APPMODE('#cdcdcd');

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    CLEAR('');

    DISPLAY('','Testing');

};