const MOVIELANDERAPI='https://docs.google.com/spreadsheets/d/1t0yjEoSVX7qnI3L3tv1N7gBCI-A5e0Y67wu74qzXnUs/edit?usp=sharing';

const NOVASTART=()=>{

    CLEAR("");

    APPMODE('#000');

    CONDITION(localStorage.getItem('User'),()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },()=>{

        ROUTE('',LOGINPAGE,'LOGINPAGE');

    });
    
};

const HOMEPAGE=()=>{

    CLEAR("");

    ROUNDFOOTER('','#333','','50px','50px',(ELEMENT)=>{

        ICON(ELEMENT,WHITELISTICON,'25px','25px',(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE(' ',CATERGORYPAGE,'HOMEPAGE');
                
            });

        });

        ICON(ELEMENT,WHITEMOVIEICON,'25px','25px',(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE(' ',FREEMOVIESPAGE,'HOMEPAGE');
                
            });
        
        });

        ICON(ELEMENT,WHITEUSERICON,'25px','25px',(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE(' ',USERACCOUNTPAGE,'HOMEPAGE');
                
            });

        });

    });

};

const USERACCOUNTPAGE=()=>{

    CLEAR('');

    HEADER('','transparent',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITESINGLEBACKICON,'20px','20px',(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE('',HOMEPAGE,'HOMEPAGE');
                
            });

        });

        RIGHTTEXT(ELEMENT,'','Profile','','',(ELEMENTS)=>{

            STYLED(ELEMENTS,'height','40%');

        });

    });

    FULLSCROLLVIEW('','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        VIEW(ELEMENT,'transparent',(ELEMENTS)=>{

            STYLED(ELEMENTS,'height','40%');
            STYLED(ELEMENTS,'width','98%');
            STYLED(ELEMENTS,'margin-top','1rem');
            STYLED(ELEMENTS,'border','1px solid #cdcdcd50');
            STYLED(ELEMENTS,'overflow-Y','hidden');

        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Community','',WHITEGROUPICON,'50px',(ELEMENT)=>{

        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Business Tools','',WHITECREATEDONICON,'50px',(ELEMENT)=>{
 
        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Settings','',WHITESETTINGSICON,'50px',(ELEMENT)=>{
  
            CLICK(ELEMENT,()=>{

                ROUTE(' ',SETTINGSPAGE,'USERACCOUNTPAGE')

            });

        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Help','',WHITEINFOICON,'50px',(ELEMENT)=>{
   
        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Contact Us','',WHITEPHONEICON,'50px',(ELEMENT)=>{
   
        });

    });

};

const CATERGORYPAGE=()=>{

    CLEAR('');

    HEADER('','transparent',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITESINGLEBACKICON,'20px','20px',(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE('',HOMEPAGE,'HOMEPAGE');
                
            });

        });

        RIGHTTEXT(ELEMENT,'','Catergory','','',()=>{

        });

    });

};

const FREEMOVIESPAGE=()=>{

    CLEAR('');

    HEADER('','transparent',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITESINGLEBACKICON,'20px','20px',(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE('',HOMEPAGE,'HOMEPAGE');
                
            });

        });

        RIGHTTEXT(ELEMENT,'','Free Movies','','',()=>{

        });

    });

};

const LOGINPAGE=()=>{

    DELETEDATA('','UserEmail');

    DELETEDATA('','UserPassword');

    CLEAR("");

    BREAK('');BREAK('');

    IMAGE('',WHITEHOMEICON,'25%','15%',(ELEMENT)=>{

        STYLED(ELEMENT,'margin-top','25px');
        STYLED(ELEMENT,'margin-bottom','25px');

    }),

    CENTERTEXT('','p','Your Home Cinema','','',(ELEMENT)=>{

    });

    BREAK('');

    ROUNDINPUT('','email','','transparent','Email',(ELEMENT)=>{

        STOREDATA('','UserEmail',ELEMENT);
        
    });

    ROUNDINPUT('','password','','transparent','********',(ELEMENT)=>{

        STOREDATA('','UserPassword',ELEMENT);

    });

    RIGHTTEXT('','p','Forgot Password?','#fff','18px',(ELEMENT)=>{

        STYLED(ELEMENT,'margin-right','1rem');

        CLICK(ELEMENT,()=>{

            ROUTE(' ',FORGOTPASSWORDPAGE,'LOGINPAGE');

        });

    });

    BUTTON('','','','forestgreen','#fff','Sign In',(ELEMENT)=>{

        CONDITION(sessionStorage.getItem('UserEmail'),()=>{

            CONDITION(sessionStorage.getItem('UserPassword'),()=>{

                ROUTE('',HOMEPAGE,'HOMEPAGE');
    
            },()=>{
    
                MESSAGEDISPLAY('','Enter Password','');
    
            });

        },()=>{

            MESSAGEDISPLAY('','Enter Email','');

        });

    });

    BUTTON('','','','blue','#fff','Create Account',(ELEMENT)=>{

        ROUTE(' ',CREATEACCOUNTPAGE,'LOGINPAGE');

    });
   
};

const CREATEACCOUNTPAGE=()=>{

    DELETEDATA('','UserName');

    DELETEDATA('','UserEmail');

    DELETEDATA('','UserPassword');

    CLEAR("");

    BREAK('');BREAK('');

    IMAGE('',WHITEHOMEICON,'25%','15%',(ELEMENT)=>{

        STYLED(ELEMENT,'margin-top','25px');
        STYLED(ELEMENT,'margin-bottom','25px');

    }),

    CENTERTEXT('','p','Your Home Cinema','','',(ELEMENT)=>{

    });

    BREAK('');

    ROUNDINPUT('','text','','transparent','User Name',(ELEMENT)=>{

        STOREDATA('','UserName',ELEMENT);

    });

    ROUNDINPUT('','email','','transparent','Email',(ELEMENT)=>{

        STOREDATA('','UserEmail',ELEMENT);

    });

    ROUNDINPUT('','password','','transparent','********',(ELEMENT)=>{

        STOREDATA('','UserPassword',ELEMENT);

    });

    BUTTON('','','','forestgreen','#fff','Sign Up',(ELEMENT)=>{

        CONDITION(sessionStorage.getItem('UserName'),()=>{

            CONDITION(sessionStorage.getItem('UserEmail'),()=>{

                CONDITION(sessionStorage.getItem('UserPassword'),()=>{
    
                    ROUTE('',EMAILVERIFICATIONPAGE,'EMAILVERIFICATIONPAGE');
        
                },()=>{
        
                    MESSAGEDISPLAY('','Enter Password','');
        
                });
    
            },()=>{
    
                MESSAGEDISPLAY('','Enter Email','');
    
            });
            
        },()=>{

            MESSAGEDISPLAY('','Enter UserName','');

        });

    });

    BUTTON('','','','blue','#fff','Log In',(ELEMENT)=>{

        ROUTE('',LOGINPAGE,'LOGINPAGE');

    });
   
};

const FORGOTPASSWORDPAGE=()=>{

    DELETEDATA('','UserEmail');

    CLEAR("");

    BREAK('');BREAK('');

    IMAGE('',WHITEHOMEICON,'25%','15%',(ELEMENT)=>{

        STYLED(ELEMENT,'margin-top','25px');
        STYLED(ELEMENT,'margin-bottom','25px');

    }),

    CENTERTEXT('','p','Your Home Cinema','','',(ELEMENT)=>{

    });

    BREAK('');

    ROUNDINPUT('','email','','transparent','Email',(ELEMENT)=>{

        STOREDATA('','UserEmail',ELEMENT);

    });

    BUTTON('','','','forestgreen','#fff','Recover',(ELEMENT)=>{

        CONDITION(sessionStorage.getItem('UserEmail'),()=>{

            ROUTE('',HOMEPAGE,'HOMEPAGE');

        },()=>{

            MESSAGEDISPLAY('','Enter Email','');

        });

    });

    BUTTON('','','','blue','#fff','Cancel',(ELEMENT)=>{

        ROUTE('',LOGINPAGE,'LOGINPAGE');

    });
   
};

const EMAILVERIFICATIONPAGE=()=>{

    DELETEDATA('','VerificationCode');

    CLEAR("");

    BREAK('');BREAK('');

    IMAGE('',WHITEHOMEICON,'25%','15%',(ELEMENT)=>{

        STYLED(ELEMENT,'margin-top','25px');
        STYLED(ELEMENT,'margin-bottom','25px');

    }),

    CENTERTEXT('','p','Your Home Cinema','','',(ELEMENT)=>{

    });

    BREAK('');

    ROUNDINPUT('','tel','','transparent','Enter Verification Code',(ELEMENT)=>{

        STOREDATA('','VerificationCode',ELEMENT);

    });

    BUTTON('','','','forestgreen','#fff','Verify',(ELEMENT)=>{

        CONDITION(sessionStorage.getItem('VerificationCode'),()=>{

            ROUTE('',HOMEPAGE,'HOMEPAGE');

        },()=>{

            MESSAGEDISPLAY('','Enter Verification Code','');

        });

    });

    BUTTON('','','','blue','#fff','Cancel',(ELEMENT)=>{

        ROUTE('',LOGINPAGE,'LOGINPAGE');

    });
   
};

const SETTINGSPAGE=()=>{  

    CLEAR('');

    HEADER('','transparent',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITESINGLEBACKICON,'20px','20px',(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE('',USERACCOUNTPAGE,'USERACCOUNTPAGE');
                
            });

        });

        RIGHTTEXT(ELEMENT,'','Settings','','',()=>{

        });

    });

    FULLSCROLLVIEW('','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        IMAGEBUTTON(ELEMENT,'forestgreen','App Lock','',WHITELOCKICON,'50px',(ELEMENT)=>{

        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Sync','',WHITERETRYICON,'50px',(ELEMENT)=>{

            RELOAD();

        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Privacy Policy','',WHITEPRIVACYPOLICYICON,'50px',(ELEMENT)=>{
  
        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Device','',WHITEDEVICEICON,'50px',(ELEMENT)=>{
   
        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Player Mode','',WHITEPLAYICON,'50px',(ELEMENT)=>{
 
        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Delete Account','',WHITEDELETEICON,'50px',(ELEMENT)=>{
 
        });

        IMAGEBUTTON(ELEMENT,'forestgreen','LogOut','',WHITELOGOUTICON,'50px',(ELEMENT)=>{
 
            RELOAD();

        });

        IMAGEBUTTON(ELEMENT,'forestgreen','LogOut','',WHIT,'50px',(ELEMENT)=>{
 
            RELOAD();

        });
        

    });

}; 