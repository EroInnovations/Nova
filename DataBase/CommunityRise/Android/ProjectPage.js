import { LEFTTEXTBACKHEADERBODY } from "../../../Library/Templates/Components/LeftTextBackHeaderBody/LeftTextBackHeaderBody.js";
import { ROUTE } from "../../../Library/Functions/Route/Route.js";
import { GETINDEXEDDATA } from "../../../Library/Functions/GetIndexedData/GetIndexedData.js";
const TEXTCOLOR='#ffffff';
export const PROJECTPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Projects',TEXTCOLOR,()=>{

    },(ELEMENT)=>{

        GETINDEXEDDATA('News','News',(data)=>{

            console.log(data);

        });

    });

};