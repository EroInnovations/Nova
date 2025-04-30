import { CHECKER } from "../../../Functions/Checker/Checker.js";
import { CONDITION } from "../../../Functions/Condition/Condition.js";
import { GETDATA } from "../../../Functions/GetData/GetData.js";
import { STOREINDEXED } from "../../../Functions/StoreIndex/StoreIndex.js";
import { UPDATEINDEX } from "../../../Functions/UpdateIndex/UpdateIndex.js";

const DOWNLOADSAVEINDEX=(API,NAME,NAMED,callback)=>{

    CHECKER(navigator.onLine,()=>{

        GETDATA(API,NAME,(data)=>{

            const Data={
                'Name':NAMED,
                'data':data
            };
    
            STOREINDEXED(NAMED,NAMED,Data,(resback)=>{
    
                CONDITION(resback === false,()=>{
    
                    UPDATEINDEX(NAMED,NAMED,Data,()=>{
    
                    });
    
                },()=>{
    
                    callback();
    
                });
                
            });
    
        });

    });
    
};

export{DOWNLOADSAVEINDEX};