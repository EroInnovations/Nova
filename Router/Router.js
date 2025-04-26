import { COMMUNITYRISE } from "../DataBase/CommunityRise/Connection.js";
import { HOSTINGCHECKER } from "../Library/Functions/HostingChecker/HostingChecker.js";
import { HOSTINGUPDATER } from "../Library/Functions/HostingUpdater/HostingUpdater.js";
import { OPERATINGSYSTEM } from "../Library/Functions/OperatingSystem/OperatingSystem.js";
import { ZOOM } from "../Library/Functions/Zoom/Zoom.js";

const ROUTED=()=>{

    HOSTINGUPDATER();

    OPERATINGSYSTEM();

    ZOOM();

    HOSTINGCHECKER(()=>{

        if (localStorage.getItem('NAME') === 'd8c2c6df-f989-44b3-9c81-d95c31892e28' ) {
        
            COMMUNITYRISE();
    
            return;
    
        };

    });

};

ROUTED();