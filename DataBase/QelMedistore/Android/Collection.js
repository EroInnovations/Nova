import { HOMEROUTER } from "./Functions/Routing/HomeRoute.js";
import { LOCATIONROUTER } from "./Functions/Routing/LocationRouter.js";
import { SECTIONROUTER } from "./Functions/Routing/SectionRoute.js";
import { QELANDROIDHOMEPAGE } from "./Pages/HomePage.js";
import { LOCATIONPAGE } from "./Pages/LocationPage.js";
import { SECTIONPAGE } from "./Pages/SectionPage.js";
import { HOMEFOOTER } from "./Views/HomeFooter.js";
import { HOMENAV } from "./Views/HomeNav.js";

const NOVASTART=()=>{
    QELANDROIDHOMEPAGE();
};

export const COLLECTION=()=>{

const DATA=`const NOVASTART='${NOVASTART}';
const QELANDROIDAPP='${QELANDROIDHOMEPAGE}';
const LOCATIONPAGE='${LOCATIONPAGE}';
const SECTIONPAGE='${SECTIONPAGE}';
const HOMEFOOTER='${HOMEFOOTER}';
const HOMENAV='${HOMENAV}';
const HOMEROUTER='${HOMEROUTER}';
const LOCATIONROUTER='${LOCATIONROUTER}';
const SECTIONROUTER='${SECTIONROUTER}';
  
`;

localStorage.setItem("PROJECT",DATA);

};

`
const NOVASTART='${NOVASTART}';

`

