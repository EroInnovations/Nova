const API='https://docs.google.com/spreadsheets/d/1QrPMVra0WEB1L_JWpZyvm1WRoVaSlJk7KFiJiCOgYOQ/edit?usp=sharing';

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

    BACKPAGE('HOMEPAGE');

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

            ROUTE(' ',CONTACTUSPAGE,'SETTINGSPAGE');

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

const CONTACTUSPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',SETTINGSPAGE,'SETTINGSPAGE');

    },'Contact Us','',()=>{

    },(ELEMENT)=>{

        CENTERTEXT(ELEMENT,'','Fill the Form Below','','25px','5% auto',()=>{

        });

        BUTTON(ELEMENT,'96%','50px','#061b4e','','Select Reason For Contact','2% auto 1% auto',()=>{

            CONTACTSUBJECT();

        });

        ROUNDINPUT(ELEMENT,'','','transparent','Enter Your Name',()=>{

        });

        ROUNDINPUT(ELEMENT,'','','transparent','Enter Your Email',()=>{

        });

        TEXTAREA(ELEMENT,'','','50%','Compose Your Message',()=>{

        });

        BUTTON(ELEMENT,'96%','50px','forestgreen','','Sumbit','2% auto 1% auto',()=>{

        });

    });

};

const CONTACTSUBJECT=()=>{

    CENTERVIEW('','#061b4e',(ELEMENT)=>{

        CENTERTEXT(ELEMENT,'','Subject Of Contact ','','20px','5% auto',()=>{

        });

        CENTERTEXT(ELEMENT,'','<hr>','','20px','5% auto',()=>{

        });

        BUTTON(ELEMENT,'96%','50px','#04143c','','Complaint','2% auto 1% auto',()=>{

        });

        BUTTON(ELEMENT,'96%','50px','#04143c','','Inquries','2% auto 1% auto',()=>{

        });

        BUTTON(ELEMENT,'96%','50px','#04143c','','Business','2% auto 1% auto',()=>{

        });

        BUTTON(ELEMENT,'96%','50px','#04143c','','Others','2% auto 1% auto',()=>{

        });

        BUTTONIMAGE(ELEMENT,'brown','Close','',WHITECLOSEICON,'','2% auto',()=>{

            STYLED(ELEMENT,'display','none');

        });

    });

};