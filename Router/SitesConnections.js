import { COMMUNITYRISE } from "../DataBase/CommunityRise/Connection.js";
import { ELGONCONNECTION } from "../DataBase/ElgonScriptureUnion/Connection.js";
import { ELITECONNECTION } from "../DataBase/Elite/Connection.js";
import { ELITEAFTERPAYCONNECTION, ELITEBEFOREPAY } from "../DataBase/ElitePay/Connection.js";
import { QELCONNECTION } from "../DataBase/QelMedistore/Connection.js";
import { BODY } from "../Library/Functions/Body/Body.js";

export const SITECONNECTIONS=()=>{

    BODY();

    if (localStorage.getItem('NAME') === 'd8c2c6df-f989-44b3-9c81-d95c31892e28' ) {
        
        COMMUNITYRISE();

        return;

    };

    if (localStorage.getItem('NAME') === 'a2aed934-667d-4828-b97a-4ffc8ef7ff7d' ) {
    
        ELITECONNECTION();

        return;

    };

    if (localStorage.getItem('NAME') === 'b1f9d667-f2fe-4d28-a0d1-f6f5cda87f70' ) {
    
        if (localStorage.getItem('POS') === 'Paid' ) {

            ELITEAFTERPAYCONNECTION();
            
        } else {

            ELITEBEFOREPAY();
            
        };

    };

    if (localStorage.getItem('NAME') === '17ea81ea-b4fa-4b7a-8f3e-10ef438b880f' ) {
    
        QELCONNECTION();

        return;

    };

    if (localStorage.getItem('NAME') === '8e66d79d-84b7-4ba0-9d60-0e74189675b6' ) {
    
        ELGONCONNECTION();

        return;

    };

};