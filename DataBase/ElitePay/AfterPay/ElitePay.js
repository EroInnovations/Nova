import { BUTTON } from "../../../Library/Components/Button/Button.js";
import { CENTERTEXT } from "../../../Library/Components/CenterText/CenterText.js";
import { LEFTTEXT } from "../../../Library/Components/LeftText/LeftText.js";
import { MESSAGEDISPLAY } from "../../../Library/Components/MessageDisplay/MessageDisplay.js";
import { RIGHTTEXT } from "../../../Library/Components/RightText/RightText.js";
import { BREAK } from "../../../Library/Functions/Break/Break.js";
import { CLEAR } from "../../../Library/Functions/Clear/Clear.js"
import { DOLLAREXCHANGE } from "../../../Library/Functions/DollarExchnager/DollarExchange.js";
import { INSERTDATA } from "../../../Library/Functions/InsertData/InsertData.js";
import { RELOAD } from "../../../Library/Functions/Reload/Reload.js";
import { SESSIONDEJSONDATA } from "../../../Library/Functions/SessionDejsonData/SessionDejsonData.js";
import { SITECLOSE } from "../../../Library/Functions/SiteClose/SiteClose.js";
import { NAVTEMPLATE } from "../../../Library/Templates/Components/NavTemplate/NavTemplate.js";

const ANDROIDAFTERPAY=()=>{

    CLEAR('');

    CENTERTEXT('','h1','Elite Pay','','30px','10% auto auto',()=>{

    });

    CENTERTEXT('','','Payment Recieved','','18px','1% auto',()=>{

    });

    CENTERTEXT('','','Elite Robust Ontology Receipt','Teal','18px','1% auto',()=>{

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

        BREAK('');BREAK('');BREAK('');BREAK('');

        const HEADER=['Name','Email','Amount','Message','Time','PaymentId','ReturnedLink','ReferenceNumber','TrackingNumber','FullData','UserID'];

        const DATA=[data.query.Name,data.query.Email,data.query.Amount,data.query.Details,new Date(),data.query.PayeeId,data.query.ReturnLink,data.query.OrderMerchantReference,data.query.OrderTrackingId,data,data.query.PayeeId];

        if (navigator.onLine) {

            MESSAGEDISPLAY('','Completing Payment Processing','',()=>{});

            INSERTDATA(data.query.ReturnLink,'ElitePay',HEADER,DATA,(resback)=>{

                SITECLOSE();

            },()=>{
    
                MESSAGEDISPLAY('','Payment Processing Failed','',()=>{});

                BUTTON('','50%','50px','forestgreen','','ReSync','auto 25%',()=>{

                    RELOAD();
    
                });
    
            });
            
        } else {

           MESSAGEDISPLAY('','Check Your Internet Connection','',()=>{});
            
        };

    });

};
export{ANDROIDAFTERPAY};