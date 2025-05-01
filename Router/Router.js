import { ASSETSICONS } from "../Library/Assets/Assets.js";
import { HOSTINGCHECKER } from "../Library/Functions/HostingChecker/HostingChecker.js";
import { HOSTINGINSTALLER } from "../Library/Functions/HostingInstaller/HostingInstaller.js";
import { HOSTINGUPDATER } from "../Library/Functions/HostingUpdater/HostingUpdater.js";
import { OPERATINGSYSTEM } from "../Library/Functions/OperatingSystem/OperatingSystem.js";
import { ZOOM } from "../Library/Functions/Zoom/Zoom.js";
import { SITECONNECTIONS } from "./SitesConnections.js";

const ROUTED=()=>{

    ZOOM();

    ASSETSICONS();

    HOSTINGINSTALLER();

    HOSTINGUPDATER();

    OPERATINGSYSTEM();

    SITECONNECTIONS();

    HOSTINGCHECKER(()=>{

    });

};

ROUTED();