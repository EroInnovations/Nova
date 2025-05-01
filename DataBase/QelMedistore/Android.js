import { CENTERTEXT } from "../../Library/Components/CenterText/CenterText.js";
import { IMAGE } from "../../Library/Components/Image/Image.js";
import { LEFTVIEW } from "../../Library/Components/LeftView/LeftView.js";
import { RIGHTVIEW } from "../../Library/Components/RightView/RightView.js";
import { VIEW } from "../../Library/Components/View/Views.js";
import { CLEAR } from "../../Library/Functions/Clear/Clear.js";

export const QELANDROIDSEITE=()=>{

    CLEAR();

    IMAGE('',QELMODENORMAL,'100%','300px','',()=>{

    });

    CENTERTEXT('','h1','Qel Medistore','','30px','10% auto auto',()=>{

    });

    CENTERTEXT('','h1','Enhancing Logistics','','20px','1% auto',()=>{

    });


    VIEW('','red','95%','250px','3%',(ELEMENT)=>{

        LEFTVIEW(ELEMENT,'orange','60%','100%','',()=>{

        });

        RIGHTVIEW(ELEMENT,'black','40%','100%','',()=>{

        });

    });

    VIEW('','red','95%','250px','3%',(ELEMENT)=>{

        LEFTVIEW(ELEMENT,'orange','40%','100%','',()=>{

        });

        RIGHTVIEW(ELEMENT,'black','60%','100%','',()=>{

        });

    });
    
};        