const NOVASTART=()=>{

    APPMODE('#04143c');

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    HOMEFOOTERTEMPLATE('',' ',()=>{

    },(ELEMENT)=>{

        ICON(ELEMENT,WHITEHOMEICON,'25px','25px','',()=>{

        });

        ICON(ELEMENT,WHITEMOBILEDEVELOPMENTICON,'25px','25px','',()=>{
            
        });

        ICON(ELEMENT,WHITESETTINGSICON,'25px','25px','',()=>{

            ROUTE(' ',SETTINGSPAGE,'HOMEPAGE');
            
        });

    });

};

const SETTINGSPAGE=()=>{

    HOMEHEADERTEMPLATE('',' ',' ',()=>{
        
    },HomeCallBack)

}