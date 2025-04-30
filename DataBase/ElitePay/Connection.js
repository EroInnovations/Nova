import { APPMODE } from "../../Library/Functions/AppMode/AppMode.js";
import { ANDROIDAFTERPAY } from "./ElitePay.js";

const ELITEAFTERPAYCONNECTION=()=>{

    APPMODE('#04143c');

    ANDROIDAFTERPAY();

};

export{ELITEAFTERPAYCONNECTION};