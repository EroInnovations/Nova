import { EROINNOVATIONSLOGOONE } from "../../Library/Assets/CompanyImages/EroInnovations/LogoOne.js";
import { BUTTON } from "../../Library/Components/Button/Button.js";
import { IMAGE } from "../../Library/Components/Image/Image.js";
import { TEXT } from "../../Library/Components/Text/Text.js";
import { VIEW } from "../../Library/Components/View/Views.js";
import { APPMODE } from "../../Library/Functions/AppMode/AppMode.js"
import { CLEAR } from "../../Library/Functions/Clear/Clear.js";
import { COPY } from "../../Library/Functions/CopyText/CopyText.js";
import { IMAGEPICKER } from "../../Library/Functions/ImagePicker/ImagePicker.js";
import { RELOAD } from "../../Library/Functions/Reload/Reload.js";
import { ROUTE } from "../../Library/Functions/Route/Route.js";
import { NAVTEMPLATE } from "../../Library/Templates/Components/NavTemplate/NavTemplate.js";

const NOVASTART=()=>{

    APPMODE('#04143c');

    ROUTE('',HOMEPAGE,'HOMEPAGE');

}

const HOMEPAGE=()=>{

    CLEAR('');

    IMAGE('',EROINNOVATIONSLOGOONE,'99%','70%','',(ELEMENT)=>{

        IMAGEPICKER(ELEMENT,(data)=>{

            VIEW('',' ','98%','250px','',(ELEMENTS)=>{

                TEXT(ELEMENTS,'',data,'','','',()=>{

                });

                NAVTEMPLATE(ELEMENTS,' ','100%','50px','',(ELEMENTES)=>{

                    BUTTON(ELEMENTES,'200px','50px','forestgreen','','Copy','',()=>{

                        COPY(data,()=>{

                        });

                    });

                    BUTTON(ELEMENTES,'200px','50px','forestgreen','','Clear','',()=>{

                        RELOAD();

                    });

                });

            });

        });

    });

};

NOVASTART();