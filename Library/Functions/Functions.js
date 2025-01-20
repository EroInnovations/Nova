import { ADD } from "./Add/Add.js";
import { APPMODE } from "./AppMode/AppMode.js";
import { BODY } from "./Body/Body.js";
import { BREAK } from "./Break/Break.js";
import { CHECKER } from "./Checker/Checker.js";
import { CLEAR } from "./Clear/Clear.js";
import { CLICK } from "./Click/Click.js";
import { CONDITION } from "./Condition/Condition.js";
import { CREATEDATABASE } from "./CreateDataBase/CreateDataBase.js";
import { CREATEELEMENT } from "./CreateElement/CreateElement.js";
import { CREATETABLE } from "./CreateTable/CreateTable.js";
import { DEJSON } from "./Dejson/Dejson.js";
import { DELETEDATA } from "./DeleteStorage/DeleteStorage.js";
import { DISPLAY } from "./Display/Display.js";
import { GETDATA } from "./GetData/GetData.js";
import { GETPACKAGE } from "./GetPackage/GetPackage.js";
import { INSERTDATA } from "./InsertData/InsertData.js";
import { JSONIFICATION } from "./Jsonification/Jsonification.js";
import { POSTPACKAGE } from "./PostPackage/PostPackage.js";
import { REDUX } from "./Redux/Redux.js";
import { RELOAD } from "./Reload/Reload.js";
import { ROUTE } from "./Route/Route.js";
import { STOREDATA } from "./StoreData/StoreData.js";
import { STYLED } from "./Style/Style.js";
import { UPDATEDATA } from "./UpdateData/UpdateData.js";

const FUNCTIONS=()=>{

const DATA=`const ADD=${ADD};
const CLICK=${CLICK};
const CREATEELEMENT=${CREATEELEMENT};
const CLEAR=${CLEAR};
const DISPLAY=${DISPLAY};
const APPMODE=${APPMODE};
const BODY=${BODY};
const RELOAD=${RELOAD};
const BREAK=${BREAK};
const STYLED=${STYLED};
const POSTPACKAGE=${POSTPACKAGE};
const STOREDATA=${STOREDATA};
const CHECKER=${CHECKER};
const CONDITION=${CONDITION};
const DELETEDATA=${DELETEDATA};
const JSONIFICATION=${JSONIFICATION};
const ROUTE=${ROUTE};
const DEJSON=${DEJSON};
const GETPACKAGE=${GETPACKAGE};
const REDUX=${REDUX};
const GETDATA=${GETDATA};
const CREATEDATABASE=${CREATEDATABASE};
const CREATETABLE=${CREATETABLE};
const INSERTDATA=${INSERTDATA};
const UPDATEDATA=${UPDATEDATA};
`;

localStorage.setItem('FUNCTIONS',DATA);

};
export{FUNCTIONS};

`

const UPDATEDATA=${UPDATEDATA};

`