import { LEFTTEXTBACKHEADERBODY } from "../../../Library/Templates/Components/LeftTextBackHeaderBody/LeftTextBackHeaderBody.js";
import { ROUTE } from "../../../Library/Functions/Route/Route.js";
import { GETINDEXEDDATA } from "../../../Library/Functions/GetIndexedData/GetIndexedData.js";
import { TABLEVIEW } from "../../../Library/Components/TableView/TabeView.js";
import { IMAGE } from "../../../Library/Components/Image/Image.js";
import { FOOTER } from "../../../Library/Components/Footer/Footer.js";
import { TEXT } from "../../../Library/Components/Text/Text.js";
const TEXTCOLOR='#ffffff';
export const PROJECTPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Projects',TEXTCOLOR,()=>{

    },(ELEMENT)=>{

        GETINDEXEDDATA('News','News',(data)=>{

            console.log(data);

           TABLEVIEW(ELEMENT,'transparent','190px','285px','','auto 1%',(ELEMENTS)=>{
        
            IMAGE(ELEMENTS,data.ImageOne||COMMUNITYRISELOGO,'100%','100%','',()=>{
        
            });

            FOOTER(ELEMENTS,'#000000','','50px',(ELEMENTES)=>{
        
                TEXT(ELEMENTES,'',data.Name||'Community Rise Ventures','white','20px','',()=>{
        
                });
        
            });
        
        });

        });

    });

};