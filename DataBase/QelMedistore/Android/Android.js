import { PROJECTUPDATE } from "../../../Library/Functions/ProjectUpdater/ProjectUpdater.js";
import { QELANDROIDHOMEPAGE } from "./Pages/HomePage.js";

export const QELANDROIDAPP=()=>{

    PROJECTUPDATE(()=>{

        QELANDROIDHOMEPAGE();

    });

};