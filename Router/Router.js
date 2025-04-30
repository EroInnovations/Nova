import { COMMUNITYRISE } from "../DataBase/CommunityRise/Connection.js";
import { ELITECONNECTION } from "../DataBase/Elite/Connection.js";
import { ELITEAFTERPAYCONNECTION } from "../DataBase/ElitePay/Connection.js";
import { HOSTINGCHECKER } from "../Library/Functions/HostingChecker/HostingChecker.js";
import { HOSTINGINSTALLER } from "../Library/Functions/HostingInstaller/HostingInstaller.js";
import { HOSTINGUPDATER } from "../Library/Functions/HostingUpdater/HostingUpdater.js";
import { OPERATINGSYSTEM } from "../Library/Functions/OperatingSystem/OperatingSystem.js";
import { ZOOM } from "../Library/Functions/Zoom/Zoom.js";

const ROUTED=()=>{

    HOSTINGINSTALLER();

    HOSTINGUPDATER();

    OPERATINGSYSTEM();

    ZOOM();

    HOSTINGCHECKER(()=>{

        if (localStorage.getItem('NAME') === 'd8c2c6df-f989-44b3-9c81-d95c31892e28' ) {
        
            COMMUNITYRISE();
    
            return;
    
        };

        if (localStorage.getItem('NAME') === 'a2aed934-667d-4828-b97a-4ffc8ef7ff7d' ) {
        
            ELITECONNECTION();
    
            return;
    
        };

        if (localStorage.getItem('NAME') === 'b1f9d667-f2fe-4d28-a0d1-f6f5cda87f70' ) {
        
            ELITEAFTERPAYCONNECTION();
    
            return;
    
        };

    });

};

ROUTED();