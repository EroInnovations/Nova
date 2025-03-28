const TEXTCOLOR='#ffffff';
const APPCOLORS='#0F990F';

const NOVASTART=()=>{

    APPMODE(localStorage.getItem('DarkMode')||APPCOLORS);

    CONDITION(localStorage.getItem('DarkMode'),()=>{

        MYACCOUNT();

    },()=>{

        CLEAR('');

        CENTERVIEW('','#333333',(ELEMENT)=>{
    
            CENTERTEXT(ELEMENT,'','Qel Manager',APPCOLORS,'30px','10% auto',()=>{
    
            });
    
            CENTERTEXT(ELEMENT,'','Choose App Mode',APPCOLORS,'15px','',()=>{
    
            });
    
            IMAGEBUTTON(ELEMENT,APPCOLORS,'Dark Mode','',WHITEMOONICON,'50px','10% auto auto auto',()=>{
    
                STOREDATA(' ','DarkMode','#333333');
    
               RELOAD();

            });
    
            IMAGEBUTTON(ELEMENT,APPCOLORS,'Light Mode','',WHITESUNICON,'50px','5% auto',()=>{
    
                STOREDATA(' ','DarkMode',TEXTCOLOR);
    
                RELOAD();
    
            });
    
        });

    });

};

const MYACCOUNT=()=>{

    ACCOUNTCHECKER(()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },()=>{

        ROUTE('',EMAILVERIFICATIONPAGE,'EMAILVERIFICATIONPAGE');

    },()=>{

        ROUTE('',LOGINPAGE,'LOGINPAGE');

    });

};

const HOMEPAGE=()=>{

    CLEAR('');

}

const LOGINPAGE=()=>{

    CLEAR('');

    CENTERTEXT('','','Qel Manager',APPCOLORS,'30px','20% auto',()=>{

    });

    INPUT('', 'email', APPCOLORS, 'Enter Admin Email', ()=>{

    });

    INPUT('', 'password', APPCOLORS, '********', ()=>{

    });

    IMAGEBUTTON('',APPCOLORS,'Sign In','',WHITEENTERICON,'50px','10% auto',()=>{

    });

    NAVTEMPLATE('',APPCOLORS,'80%','50px','30% auto',(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'','Forgot Password!','','16px','1rem','',()=>{

            ROUTE(' ',FORGOTPASSWORDPAGE,'LOGINPAGE');

        });

        CENTERTEXT(ELEMENT,'','||','Orange','38px','',()=>{

        });

        RIGHTTEXT(ELEMENT,'','Create Account?','','16px','1rem','',()=>{

            ROUTE(' ',CREATEACCOUNTPAGE,'LOGINPAGE');

        });

    });
    
};

const FORGOTPASSWORDPAGE=()=>{

    CLEAR('');

    CENTERTEXT('','','Qel Manager',APPCOLORS,'30px','20% auto',()=>{

    });

    INPUT('', 'email', APPCOLORS, 'Enter Admin Email', ()=>{

    });


    IMAGEBUTTON('',APPCOLORS,'Recover','',WHITEENTERICON,'50px','10% auto',()=>{

    });

    NAVTEMPLATE('',APPCOLORS,'80%','50px','30% auto',(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'','Login In','','16px','1rem','',()=>{

            ROUTE('',LOGINPAGE,'LOGINPAGE');


        });

        CENTERTEXT(ELEMENT,'','||','Orange','38px','',()=>{

        });

        RIGHTTEXT(ELEMENT,'','Create Account?','','16px','1rem','',()=>{

            ROUTE('',CREATEACCOUNTPAGE,'LOGINPAGE');

        });

    });
    
};


const CREATEACCOUNTPAGE=()=>{

    CLEAR('');

    CENTERTEXT('','','Qel Manager',APPCOLORS,'30px','20% auto',()=>{

    });

    INPUT('', 'text', APPCOLORS, 'Enter User Name', ()=>{

    });

    INPUT('', 'email', APPCOLORS, 'Enter Admin Email', ()=>{

    });

    INPUT('', 'password', APPCOLORS, '********', ()=>{

    });

    IMAGEBUTTON('',APPCOLORS,'Sign Up','',WHITEENTERICON,'50px','10% auto',()=>{

    });

    NAVTEMPLATE('',APPCOLORS,'80%','50px','30% auto',(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'','Privacy Policy!','','16px','1rem','',()=>{

        });

        CENTERTEXT(ELEMENT,'','||','Orange','38px','',()=>{

        });

        RIGHTTEXT(ELEMENT,'','Log In?','','16px','1rem','',()=>{

            ROUTE('',LOGINPAGE,'LOGINPAGE');

        });

    });
    
};

const EMAILVERIFICATIONPAGE=()=>{

    CLEAR('');
    
}