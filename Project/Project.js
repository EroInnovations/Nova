const TEXTCOLOR='#cdcdcd';
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

    FULLSCROLLVIEW('',' ',()=>{

    });

    FLOATFIXEDBUTTON('',APPCOLORS,(ELEMENT)=>{

        IMAGE(ELEMENT,WHITEPOSTICON,'20px','20px','',()=>{

            ROUTE(' ',CREATIONPAGE,'HOMEPAGE');

        });

    });

};

const LOGINPAGE=()=>{

    CLEAR('');

    CENTERTEXT('','','Qel Manager',APPCOLORS,'30px','20% auto',()=>{

    });

    INPUT('', 'email', APPCOLORS, 'Enter Admin Email', ()=>{

    });

    INPUT('', 'password', APPCOLORS, '********', ()=>{

    });

    IMAGEBUTTON('',APPCOLORS,'Sign In','',WHITEENTERICON,'50px','10% auto',()=>{

        STOREDATA(' ','UserData','True');

        ROUTE('',HOMEPAGE,'HOMEPAGE');

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

        ROUTE('',EMAILVERIFICATIONPAGE,'EMAILVERIFICATIONPAGE');

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

    CENTERTEXT('','','Qel Manager',APPCOLORS,'30px','20% auto',()=>{

    });

    INPUT('', 'email', APPCOLORS, 'Enter Verification Code', ()=>{

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

const CREATIONPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Management',APPCOLORS,'',(ELEMENT)=>{

        IMAGEBUTTON(ELEMENT,APPCOLORS,'New Catergory','',WHITEGROUPICON,'50px','1% auto',()=>{

            ROUTE(' ',NEWCATERGORYPAGE,'CREATIONPAGE');
    
        });
        
        IMAGEBUTTON(ELEMENT,APPCOLORS,'New Product','',WHITEGROUPICON,'50px','1% auto',()=>{

            ROUTE(' ',NEWPRODUCTPAGE,'CREATIONPAGE');
    
        });

    });

};

const NEWCATERGORYPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',CREATIONPAGE,'CREATIONPAGE');

    },'Catergory',APPCOLORS,'',(ELEMENT)=>{

        CENTERTEXT(ELEMENT,'','Create a New Catergory',APPCOLORS,'30px','10% auto',()=>{

        });
    
        INPUT(ELEMENT, '', APPCOLORS, 'Enter Catergory Name', ()=>{
    
        });

        TEXTAREA(ELEMENT,'',APPCOLORS,'300px','Describe The Catergory',()=>{

        });

        CENTERTEXT(ELEMENT,'','Add Catergory Image',APPCOLORS,'20px','10% auto',()=>{

        });

        IMAGE(ELEMENT,WHITEHOMEICON,'','300px','',()=>{

        });
    
        IMAGEBUTTON(ELEMENT,APPCOLORS,'Create','',WHITEENTERICON,'50px','10% auto',()=>{
    
        });

    });

};

const NEWPRODUCTPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',CREATIONPAGE,'CREATIONPAGE');

    },'Product',APPCOLORS,'',(ELEMENT)=>{

        
    });

};