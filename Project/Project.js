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

        RIGHTTEXT(ELEMENT,'','Profile','','',()=>{

        });

    });

    FULLSCROLLVIEW('','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        IMAGEBUTTON(ELEMENT,'forestgreen','Sync','',WHITERETRYICON,'50px',(ELEMENT)=>{

            RELOAD();

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

    CLEAR("");

    BREAK('');BREAK('');

    ROUNDINPUT('','email','','transparent','Enter User Email',(ELEMENT)=>{

    });

    ROUNDINPUT('','password','','transparent','Enter User Password',(ELEMENT)=>{


    });

    RIGHTTEXT('','p','Forgot Password','#fff','18px',(ELEMENT)=>{

        STYLED(ELEMENT,'margin-right','1rem');

        CLICK(ELEMENT,()=>{

            ROUTE(' ',FORGOTPASSWORDPAGE,'LOGINPAGE');

        });

    });

    BUTTON('','','','forestgreen','#fff','Sign In',(ELEMENT)=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    });

    BUTTON('','','','blue','#fff','Create Account',(ELEMENT)=>{

        ROUTE(' ',CREATEACCOUNTPAGE,'LOGINPAGE');

    });
   
};

const CREATEACCOUNTPAGE=()=>{

    CLEAR("");

    BREAK('');BREAK('');

    ROUNDINPUT('','text','','transparent','Enter User Name',()=>{

    });

    ROUNDINPUT('','email','','transparent','Enter User Email',()=>{

    });

    ROUNDINPUT('','password','','transparent','Enter User Password',()=>{

    });

    BUTTON('','','','forestgreen','#fff','Sign Up',(ELEMENT)=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    });

    BUTTON('','','','blue','#fff','LogIn',(ELEMENT)=>{

        ROUTE('',LOGINPAGE,'LOGINPAGE');

    });
   
};

const FORGOTPASSWORDPAGE=()=>{

    CLEAR("");

    BREAK('');BREAK('');

    ROUNDINPUT('','email','','transparent','Enter User Email',(ELEMENT)=>{

    });

    BUTTON('','','','forestgreen','#fff','Recover',(ELEMENT)=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    });

    BUTTON('','','','blue','#fff','Cancel',(ELEMENT)=>{

        ROUTE('',LOGINPAGE,'LOGINPAGE');

    });
   
};