import { ROUTER } from "../Library/Router/Router.js";
import { NOVA } from "../Model/Model.js";
import { NOVASTARTER } from "../Model/Start.js";

const START=()=>{

    ROUTER();

    NOVA();

    NOVASTARTER();

};

export{START};