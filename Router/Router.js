import { ASSETSICONS } from "../Library/Assets/Assets.js";
import { BODY } from "../Library/Functions/Body/Body.js";
import { HOSTINGCHECKER } from "../Library/Functions/HostingChecker/HostingChecker.js";
import { HOSTINGINSTALLER } from "../Library/Functions/HostingInstaller/HostingInstaller.js";
import { HOSTINGUPDATER } from "../Library/Functions/HostingUpdater/HostingUpdater.js";
import { OPERATINGSYSTEM } from "../Library/Functions/OperatingSystem/OperatingSystem.js";
import { URLCOLLECTOR } from "../Library/Functions/UrlCollector/UrlCollector.js";
import { ZOOM } from "../Library/Functions/Zoom/Zoom.js";
import { ROUTER } from "../Library/Router/Router.js";
import { NOVA } from "../Model/Model.js";
import { SITECONNECTIONS } from "./SitesConnections.js";

const ROUTED=()=>{

    NOVA();

    ROUTER();

    SITECONNECTIONS();

};

ROUTED();

/*

    ROUTER

    BODY();

    URLCOLLECTOR();

    ZOOM();

    ASSETSICONS();

    //HOSTINGINSTALLER();

    //HOSTINGUPDATER();

    OPERATINGSYSTEM();

*/