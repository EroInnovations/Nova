import { PROJECTUPDATE } from "../../../Library/Functions/ProjectUpdater/ProjectUpdater.js";
import { COLLECTION } from "./Collection.js";
import { QELANDROIDHOMEPAGE } from "./Pages/HomePage.js";

export const QELANDROIDAPP=()=>{

    COLLECTION();

    PROJECTUPDATE(()=>{

        NOVASTART();

        //QELANDROIDHOMEPAGE();

    });

};
