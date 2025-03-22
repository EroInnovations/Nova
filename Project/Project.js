const NOVASTART=()=>{

    APPMODE('#04143c');

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    HOMEFOOTERTEMPLATE('',' ',(ELEMENTS)=>{

        CENTERTEXT(ELEMENTS,'h1','Ero Innovations','','25px','5% auto',()=>{

        });


        LEFTTEXT(ELEMENTS,'','Under Development','','18px','2%',()=>{

        });

    },(ELEMENT)=>{

        ICON(ELEMENT,WHITEHOMEICON,'25px','25px','',()=>{

        });

        ICON(ELEMENT,WHITEMOBILEDEVELOPMENTICON,'25px','25px','',()=>{
          
            ROUTE(' ',DEVELOPERPAGE,'HOMEPAGE');
            
        });

        ICON(ELEMENT,WHITESETTINGSICON,'25px','25px','',()=>{

            ROUTE(' ',SETTINGSPAGE,'HOMEPAGE');
            
        });

    });

};

const SETTINGSPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Settings','',()=>{

    },(ELEMENTS)=>{

        BUTTONIMAGE(ELEMENTS,'#061b4e','Donate','',WHITESUBSCRIPTIONICON,'','2% auto',()=>{

        });

        BUTTONIMAGE(ELEMENTS,'#061b4e','Join Beta','',WHITECREATEDONICON,'','2% auto',()=>{

        });

        BUTTONIMAGE(ELEMENTS,'#061b4e','Email Updates','',WHITEGMAILICON,'','2% auto',()=>{

        });

        BUTTONIMAGE(ELEMENTS,'#061b4e','Sync','',WHITERETRYICON,'','2% auto',()=>{

            RELOAD();

        });

        BUTTONIMAGE(ELEMENTS,'#061b4e','Contact Us','',WHITEPHONEICON,'','2% auto',()=>{

        });

    });

};

const DEVELOPERPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Developer','',()=>{

    },(ELEMENTS)=>{

        DISPLAY(ELEMENTS,'Under Development');

    });

};