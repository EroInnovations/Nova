import { NOVA } from "../../Model/Model.js";
import { APIS } from "../Apis/Apis.js";
import { ASSETSICONS } from "../Assets/Assets.js";
import { COMPONENTS } from "../Components/Components.js";
import { FUNCTIONS } from "../Functions/Functions.js";
const ROUTER=()=>{
    FUNCTIONS();
    COMPONENTS();
    ASSETSICONS();
    APIS();
    NOVA();
};
export{ROUTER};