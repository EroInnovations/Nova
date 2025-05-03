import { APPMODE } from "../../Library/Functions/AppMode/AppMode.js";
import { ANDROIDAFTERPAY } from "./AfterPay/ElitePay.js";
import { ELITEBEFOREPAYSTART } from "./BeforePay/BeforePay.js";

const ELITEAFTERPAYCONNECTION=()=>{

    APPMODE('#04143c');

    ANDROIDAFTERPAY();

};

const ELITEBEFOREPAY=()=>{

    APPMODE('#04143c');

    ELITEBEFOREPAYSTART();

}

export{ELITEAFTERPAYCONNECTION,ELITEBEFOREPAY};