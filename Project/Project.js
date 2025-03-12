const API='https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?usp=sharing';

const NOVASTART=()=>{

    ACCOUNTCHECKER(()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },()=>{

        ROUTE('',LOGINPAGE,'LOGINPAGE');

    },()=>{

        ROUTE('',LOGINPAGE,'LOGINPAGE');

    });
    
};

const HOMEPAGE=()=>{

    HOMEHEADERTEMPLATE('','#333333','',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITEMENUICON,'30px','25px','1rem','',(ELEMENTS)=>{

            FULLMENUTEMPLATE('','#333333','50%','left',(ELEMENT)=>{

                MENUPAGE(ELEMENT);

            });
        
        });

        CENTERTEXT(ELEMENT,'','App Manager','','20px','',()=>{

        });

        RIGHTIMAGE(ELEMENT,WHITEUSERICON,'30px','30px','1rem','',(ELEMENTS)=>{

        });

    },()=>{

    });
    
};

const LOGINPAGE=()=>{

    CLEAR('');

    CENTERVIEW('','#33333350',(ELEMENT)=>{

        STYLED(ELEMENT,'border-radius','10px');

        BREAK(ELEMENT);BREAK(ELEMENT);

        IMAGE(ELEMENT,WHITEFOLDERICON,'50%','40%','',()=>{

        });

        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);

        INPUT(ELEMENT,'email','','Enter User Email',(data)=>{

            STOREDATA('','UserEmail',data);

        });

        BREAK(ELEMENT);BREAK(ELEMENT);

        INPUT(ELEMENT,'password','','Enter User Password',(data)=>{

            STOREDATA('','UserPassword',data);

        });

        BREAK(ELEMENT);BREAK(ELEMENT);

        BUTTON(ELEMENT,'80%','50px','forestgreen','','Sign In',(ELEMSTS)=>{

            CONDITION(sessionStorage.getItem('UserEmail'),()=>{

                CONDITION(sessionStorage.getItem('UserPassword'),()=>{

                    CLOUDLOGINTEMPLATE(ELEMSTS,API,'Users','Please Wait','UserEmail',sessionStorage.getItem('UserEmail'),'UserPassword',sessionStorage.getItem('UserPassword'),'Sign In','No User Account Found','Wrong User Password',(data)=>{

                        JSONIFICATION(data,(MyData)=>{
 
                            STOREDATA(' ','UserData',MyData);

                            ROUTE('',HOMEPAGE,'HOMEPAGE');

                        });

                    });

                },()=>{
    
                    MESSAGEDISPLAY('','Enter User Password','');
    
                });

            },()=>{

                MESSAGEDISPLAY('','Enter User Email','');

            });

        });

        FOOTER(ELEMENT,' ','','80px',(ELES)=> {

            LEFTTEXT(ELES,'','Forgot Password !' ,'','25px','5rem','',()=>{

            });

            CENTERTEXT(ELES,'','||','forestgreen','40px','',()=>{

            });

            RIGHTTEXT(ELES,'','Create Account ?','','25px','5rem','',(ELEMSE)=>{

                ROUTE(' ',CREATEACCOUNTPAGE,'LOGINPAGE');

            });

        });

    });

};

const CREATEACCOUNTPAGE=()=>{

    CLEAR('');

    CENTERVIEW('','#33333350',(ELEMENT)=>{

        STYLED(ELEMENT,'border-radius','10px');

        BREAK(ELEMENT);BREAK(ELEMENT);

        IMAGE(ELEMENT,WHITEFOLDERICON,'50%','40%','',()=>{

        });

        BREAK(ELEMENT);BREAK(ELEMENT);

        INPUT(ELEMENT,'text','','Enter User Name',()=>{

        });

        BREAK(ELEMENT);BREAK(ELEMENT);

        INPUT(ELEMENT,'email','','Enter User Email',()=>{

        });

        BREAK(ELEMENT);BREAK(ELEMENT);

        INPUT(ELEMENT,'password','','Enter User Password',()=>{

        });

        BREAK(ELEMENT);BREAK(ELEMENT);

        BUTTON(ELEMENT,'80%','50px','forestgreen','','Sign Up',()=>{

            CONDITION(sessionStorage.getItem('UserName'),()=>{

                CONDITION(sessionStorage.getItem('UserEmail'),()=>{

                    CONDITION(sessionStorage.getItem('UserPassword'),()=>{

                    
                    },()=>{
        
                        MESSAGEDISPLAY('','Enter User Password','');
        
                    });

                },()=>{
    
                    MESSAGEDISPLAY('','Enter User Email','');
    
                });

            },()=>{

                MESSAGEDISPLAY('','Enter User Name','');

            });

        });

        FOOTER(ELEMENT,' ','','80px',(ELES)=> {

            LEFTTEXT(ELES,'','Privacy Policy !' ,'','25px','5rem','',()=>{

            });

            CENTERTEXT(ELES,'','||','forestgreen','40px','',()=>{

            });

            RIGHTTEXT(ELES,'','Log In ?','','25px','5rem','',()=>{

                ROUTE('',LOGINPAGE,'LOGINPAGE');

            });

        });

    });

};

const MENUPAGE=(ELEMENT)=>{

    BUTTONIMAGE(ELEMENT,'forestgreen','New Project','',WHITEPOSTICON,'50px',()=>{

    });

    FOOTER(ELEMENT,'red','','',(ELES)=> {

        IMAGEBUTTON(ELES,'forestgreen','Log Out','',WHITENEXTICON,'50px',()=>{

            DELETEDATA(' ','UserData');

            RELOAD();

        });

    });

};
