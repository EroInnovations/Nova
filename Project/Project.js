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

    BACKPAGE('SETTINGSPAGE');

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',SETTINGSPAGE,'SETTINGSPAGE');

    },'Contact Us','',()=>{

    },(ELEMENT)=>{

        CENTERTEXT(ELEMENT,'','Fill the Form Below <hr>','','25px','5% auto',()=>{

        });
        
        BUTTON(ELEMENT,'98%','50px','#061b4e','','Select Reason For Contact','1% auto',()=>{

            ROUTE(' ',CONTACTSUBJECTPAGE,'CONTACTUSPAGE');

        });

        BUTTON(ELEMENT,'98%','50px','#061b4e','','Select Your Country','1% auto',()=>{

            ROUTE(' ',COUNTRIESPAGE,'CONTACTUSPAGE');

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

const CONTACTSUBJECTPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',CONTACTUSPAGE,'CONTACTUSPAGE');

    },'Subject','',()=>{

    },(ELEMENT)=>{

        CENTERTEXT(ELEMENT,'','Select Reason For Contact','','25px','5% auto',()=>{

        });

        CENTERTEXT(ELEMENT,'','<hr>','','20px','5% auto',()=>{

        });

        BUTTONIMAGE(ELEMENT,'#061b4e','Complaint','',WHITEGROUPICON,'','2% auto',()=>{

        });

        BUTTONIMAGE(ELEMENT,'#061b4e','Inquiries','',WHITEHELPICON,'','2% auto',()=>{

        });

        BUTTONIMAGE(ELEMENT,'#061b4e','Business','',WHITESUITCASEICON,'','2% auto',()=>{

        });

        BUTTONIMAGE(ELEMENT,'#061b4e','Others','',WHITESEARCHICON,'','2% auto',()=>{

        });

    });

};

const COUNTRIESPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',CONTACTUSPAGE,'CONTACTUSPAGE');

    },'Country','',()=>{

    },(ELEMENT)=>{

        REDUX(COUNTRIES,(data)=>{

            BUTTONIMAGE(ELEMENT,'#061b4e',data.name,'',WHITELOCATIONICON,'','2% auto',()=>{

                ROUTE('',CONTACTUSPAGE,'CONTACTUSPAGE');

            });

        });
       
    });

};