import { BUTTON } from "../../../Library/Components/Button/Button.js";
import { CENTERTEXT } from "../../../Library/Components/CenterText/CenterText.js";
import { LEFTTEXT } from "../../../Library/Components/LeftText/LeftText.js";
import { MESSAGEDISPLAY } from "../../../Library/Components/MessageDisplay/MessageDisplay.js";
import { RIGHTTEXT } from "../../../Library/Components/RightText/RightText.js";
import { CLEAR } from "../../../Library/Functions/Clear/Clear.js"
import { CONDITION } from "../../../Library/Functions/Condition/Condition.js";
import { DOLLAREXCHANGE } from "../../../Library/Functions/DollarExchnager/DollarExchange.js";
import { SESSIONDEJSONDATA } from "../../../Library/Functions/SessionDejsonData/SessionDejsonData.js";
import { WEBSITE } from "../../../Library/Functions/WebSite/WebSite.js";
import { ELITEPAY } from "../../../Library/Server/ElitePay/ElitePay.js";
import { NAVTEMPLATE } from "../../../Library/Templates/Components/NavTemplate/NavTemplate.js";

const ELITEBEFOREPAYSTART=()=>{

    CLEAR();

    CENTERTEXT('','','ELITE PAY','Orange','20px','10% auto auto',()=>{

    });

    CENTERTEXT('','','Payment Receipt','','18px','1% auto',()=>{

    });

    CENTERTEXT('','','Elite Robust Ontology Recipt','Teal','18px','1% auto',()=>{

    });

    SESSIONDEJSONDATA('urlInfo',(data)=>{

        NAVTEMPLATE('','#333','95%','50px','2%',(ELEMENT)=>{

            LEFTTEXT(ELEMENT,'','Paid By :',' ','20px','1%','',()=>{

            });
    
            RIGHTTEXT(ELEMENT,'',data.query.Name,'orange','20px','1%','',()=>{
    
            });

        });

        NAVTEMPLATE('','#333','95%','50px','2%',(ELEMENT)=>{

            LEFTTEXT(ELEMENT,'','Amount :',' ','20px','1%','',()=>{

            });
    
            DOLLAREXCHANGE('UGX',data.query.Amount,(PaidMoney)=>{

                RIGHTTEXT(ELEMENT,'', 'UGX '+ PaidMoney,'orange','20px','1%','',()=>{
    
                });
    
            });

        });

        NAVTEMPLATE('','#333','95%','50px','2%',(ELEMENT)=>{

            LEFTTEXT(ELEMENT,'','Payment For:',' ','20px','1%','',()=>{

            });
    
            RIGHTTEXT(ELEMENT,'',data.query.Details,'orange','20px','1%','',()=>{
    
            });

        });

        NAVTEMPLATE('','#333','95%','50px','2%',(ELEMENT)=>{

            LEFTTEXT(ELEMENT,'','Payment Number:',' ','20px','1%','',()=>{

            });
    
            RIGHTTEXT(ELEMENT,'',data.query.OrderTrackingId,'orange','20px','1%','',()=>{
    
            });

        });

        NAVTEMPLATE('','#333','95%','50px','2%',(ELEMENT)=>{

            LEFTTEXT(ELEMENT,'','Paid To:',' ','20px','1%','',()=>{

            });
    
            RIGHTTEXT(ELEMENT,'','Elite Robust Ontology','orange','20px','1%','',()=>{
    
            });

        });

        NAVTEMPLATE('','#333','95%','50px','2%',(ELEMENT)=>{

            LEFTTEXT(ELEMENT,'','Paid On:',' ','20px','1%','',()=>{

            });
    
            RIGHTTEXT(ELEMENT,'',data.query.PayeeId,'orange','20px','1%','',()=>{
    
            });

        });


        NAVTEMPLATE('','#333','95%','50px','2%',(ELEMENT)=>{

            LEFTTEXT(ELEMENT,'','Contact:',' ','20px','1%','',()=>{

            });
    
            RIGHTTEXT(ELEMENT,'',data.query.Email,'orange','20px','1%','',()=>{
    
            });

        });

        BUTTON('','50%','','forestgreen','','Pay','1% 25%',()=>{

            CONDITION(navigator.onLine,()=>{

                MESSAGEDISPLAY('','Processing Payments','');

                ELITEPAY(data.query.Name,data.query.Email,data.query.Amount,data.query.Details,data.query.ReturnLink,data.query.PayeeId,data.query.Redirected,(url)=>{

                    WEBSITE(url);

                });

            },()=>{

                MESSAGEDISPLAY('','Check Your Internet Connection','');

            });

        });

    });

}

export{ELITEBEFOREPAYSTART}