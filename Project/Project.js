const API='https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?usp=sharing';

const NOVASTART=()=>{

    APPDOWNLOAD(()=>{

    });

    ACCOUNTCHECKER(()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },()=>{

        ROUTE('',LOGINPAGE,'LOGINPAGE');

    },()=>{

        ROUTE('',LOGINPAGE,'LOGINPAGE');

    });
    
};

const HOMEPAGE=()=>{

    DEJSON(localStorage.getItem('UserData'),(data)=>{

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
    
        },(ELEMENT)=>{
    
            USERDATA(ELEMENT,data.ID,'');
    
        });

    });
    
};

const LOGINPAGE=()=>{

    DELETEDATA('','UserEmail');

    DELETEDATA('','UserPassword');

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

            LEFTTEXT(ELES,'','Forgot Password !' ,'','25px','5rem','',(ELEMSE)=>{

                ROUTE(' ',FORGOTPASSWORDPAGE,'LOGINPAGE');

            });

            CENTERTEXT(ELES,'','||','forestgreen','40px','',(ELEMSE)=>{


            });

            RIGHTTEXT(ELES,'','Create Account ?','','25px','5rem','',(ELEMSE)=>{

                ROUTE(' ',CREATEACCOUNTPAGE,'LOGINPAGE');

            });

        });

    });

};

const CREATEACCOUNTPAGE=()=>{

    DELETEDATA('','UserName');

    DELETEDATA('','UserEmail');

    DELETEDATA('','UserPassword');

    CLEAR('');

    CENTERVIEW('','#33333350',(ELEMENT)=>{

        STYLED(ELEMENT,'border-radius','10px');

        BREAK(ELEMENT);BREAK(ELEMENT);

        IMAGE(ELEMENT,WHITEFOLDERICON,'50%','40%','',()=>{

        });

        BREAK(ELEMENT);BREAK(ELEMENT);

        INPUT(ELEMENT,'text','','Enter User Name',(data)=>{

            STOREDATA('','UserName',data);

        });

        BREAK(ELEMENT);BREAK(ELEMENT);

        INPUT(ELEMENT,'email','','Enter User Email',(data)=>{

            STOREDATA('','UserEmail',data);

        });

        BREAK(ELEMENT);BREAK(ELEMENT);

        INPUT(ELEMENT,'password','','Enter User Password',(data)=>{

            STOREDATA('','UserPassword',data);

        });

        BREAK(ELEMENT);BREAK(ELEMENT);

        BUTTON(ELEMENT,'80%','50px','forestgreen','','Sign Up',(ELEMENT)=>{

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

const FORGOTPASSWORDPAGE=()=>{

    DELETEDATA('','UserEmail');

    DELETEDATA('','UserPassword');

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

        BUTTON(ELEMENT,'80%','50px','forestgreen','','Recover',(ELEMSTS)=>{

            CONDITION(sessionStorage.getItem('UserEmail'),()=>{

                CLOUDLOGINTEMPLATE(ELEMSTS,API,'Users','Please Wait','UserEmail',sessionStorage.getItem('UserEmail'),'UserPassword',sessionStorage.getItem('UserPassword'),'Sign In','No User Account Found','Wrong User Password',(data)=>{

                    JSONIFICATION(data,(MyData)=>{

                        STOREDATA(' ','UserData',MyData);

                        ROUTE('',HOMEPAGE,'HOMEPAGE');

                    });

                });

            },()=>{

                MESSAGEDISPLAY('','Enter User Email','');

            });

        });

        FOOTER(ELEMENT,' ','','80px',(ELES)=> {

            LEFTTEXT(ELES,'','Log In !' ,'','25px','5rem','',()=>{

                ROUTE('',LOGINPAGE,'LOGINPAGE');

            });

            CENTERTEXT(ELES,'','||','forestgreen','40px','',()=>{

            });

            RIGHTTEXT(ELES,'','Create Account ?','','25px','5rem','',(ELEMSE)=>{

                ROUTE(' ',CREATEACCOUNTPAGE,'LOGINPAGE');

            });

        });

    });

};

const MENUPAGE=(ELEMENT)=>{

    BUTTONIMAGE(ELEMENT,'forestgreen','New Project','',WHITEPOSTICON,'50px',()=>{

    });

    FOOTER(ELEMENT,' ','','60px',(ELES)=> {

        IMAGEBUTTON(ELES,'forestgreen','Log Out','',WHITENEXTICON,'50px',()=>{

            DELETEDATA(' ','UserData');

            RELOAD();

        });

    });

};

const APPDOWNLOAD=(callback)=>{

    CHECKER(navigator.onLine,()=>{
        
        GETDATA(API,'APPMANAGER',(data)=>{

            const MYDATA={
                    'Name':'AppManager',
                    'data':data,
                }     
            STOREINDEXED('AppManager', 'AppManager', MYDATA, (data)=>{

                CHECKER(data === false,()=>{

                    UPDATEINDEX('AppManager', 'AppManager', MYDATA,(datata)=>{

                        callback();

                    });

                });

            });
            
        },(data)=>{

            console.log(data);

        });

    });

};

const USERDATA=(ELEMENT,Name,Delete)=>{

    CONDITION(Delete,()=>{

        CLEAR(ELEMENT);

        GETINDEXEDDATA ('AppManager', 'AppManager', (data)=>{

            CHECKER( data.Owner === Name && data.AppDeleted ,()=>{

                VIEW(ELEMENT,' ','46%','35%','',(ELEMENTS)=>{
    
                    STYLED(ELEMENTS,'display','inline-table');
                    STYLED(ELEMENTS,'margin','1.5%');
                    STYLED(ELEMENTS,'border','1px solid forestgreen');
    
                    ICON(ELEMENTS,WHITECHECKICON,'25px','25px','',(ELEMENTSE)=>{
    
                        STYLED(ELEMENTSE,'position','absolute');
                        STYLED(ELEMENTSE,'top','5%');
                        STYLED(ELEMENTSE,'right','5%');
                        STYLED(ELEMENTSE,'background','forestgreen');
                        STYLED(ELEMENTSE,'padding','2%');
                        STYLED(ELEMENTSE,'border-radius','5px');
    
                        CLICK(ELEMENTSE,()=>{

                            CONDITION(navigator.onLine,()=>{

                                MESSAGEDISPLAY('',`${data.AppName} is Being Restored`,'');
    
                                const INFO=[data.AppName,data.AppDescription,data.AppColors,data.AppConfiguration,data.AppCreatedOn,data.AppVersion,'',data.AppKeyWord,data.AppPackageName,data.AppCompany,data.AndroidDesign,data.AndroidFunctions,data.DesktopDesign,data.DesktopFunctions,data.WebDesign,data.WebFunctions,data.SharedDesign,data.SharedFunctions,data.AppLogic,data.AppRegion,data.AppState,data.AppCatergory,data.AppIcon,data.UpdatedOn,data.Owner];
    
                                UPDATEDATA(API,'APPMANAGER',data.ID,INFO,()=>{
        
                                    APPDOWNLOAD(()=>{
        
                                        ROUTE('',HOMEPAGE,'HOMEPAGE');
        
                                    });
        
                                },()=>{
        
                                        MESSAGEDISPLAY('','Failed to Delete App','');
        
                                    }
    
                                );

                            },()=>{

                                NOINTERNETTEMPLATE();

                            });
        
                        });
                
                    });
            
                    IMAGE(ELEMENTS,data.AppIcon||WHITEFOLDERICON,'50%','70%','',()=>{
    
                    });
    
                    CENTERTEXT(ELEMENTS,'',data.AppName,'','18px','',()=>{
    
                    });
        
                });

            });
    
        });

    },()=>{

        CLEAR(ELEMENT);

        GETINDEXEDDATA ('AppManager', 'AppManager', (data)=>{

            CHECKER( data.Owner === Name && !data.AppDeleted ,()=>{

                VIEW(ELEMENT,' ','46%','35%','',(ELEMENTS)=>{
    
                    STYLED(ELEMENTS,'display','inline-table');
                    STYLED(ELEMENTS,'margin','1.5%');
                    STYLED(ELEMENTS,'border','1px solid forestgreen');
        
                    ICON(ELEMENTS,WHITEPENCILICON,'25px','25px','',(ELEMENTSE)=>{
        
                        STYLED(ELEMENTSE,'position','absolute');
                        STYLED(ELEMENTSE,'top','5%');
                        STYLED(ELEMENTSE,'right','5%');
                        STYLED(ELEMENTSE,'background','forestgreen');
                        STYLED(ELEMENTSE,'padding','2%');
                        STYLED(ELEMENTSE,'border-radius','5px');
        
                        CLICK(ELEMENTSE,()=>{

                            JSONIFICATION(data,(MyData)=>{

                                STOREDATA('','MyProject',MyData);

                                ROUTE(' ',UPDATEPROJECTPAGE,'HOMEPAGE');

                            });

                        });
                
                    });
        
                    ICON(ELEMENTS,WHITEDELETEICON,'25px','25px','',(ELEMENTSE)=>{
        
                        STYLED(ELEMENTSE,'position','absolute');
                        STYLED(ELEMENTSE,'top','5%');
                        STYLED(ELEMENTSE,'left','5%');
                        STYLED(ELEMENTSE,'background','transparent');
                        STYLED(ELEMENTSE,'padding','2%');
                        STYLED(ELEMENTSE,'border-radius','5px');
        
                        CLICK(ELEMENTSE,()=>{

                            CONDITION(navigator.onLine,()=>{

                                MESSAGEDISPLAY('',`${data.AppName} is Being Deleted`,'');
        
                                const INFO=[data.AppName,data.AppDescription,data.AppColors,data.AppConfiguration,data.AppCreatedOn,data.AppVersion,'Deleted',data.AppKeyWord,data.AppPackageName,data.AppCompany,data.AndroidDesign,data.AndroidFunctions,data.DesktopDesign,data.DesktopFunctions,data.WebDesign,data.WebFunctions,data.SharedDesign,data.SharedFunctions,data.AppLogic,data.AppRegion,data.AppState,data.AppCatergory,data.AppIcon,data.UpdatedOn,data.Owner];
        
                                UPDATEDATA(API,'APPMANAGER',data.ID,INFO,()=>{
        
                                    APPDOWNLOAD(()=>{
        
                                        ROUTE('',HOMEPAGE,'HOMEPAGE');
        
                                    });
        
                                },()=>{
        
                                        MESSAGEDISPLAY('','Failed to Delete App','');
        
                                    }
        
                                );

                            },()=>{

                                NOINTERNETTEMPLATE();

                            });
        
                        });
                
                    });
            
                    IMAGE(ELEMENTS,data.AppIcon||WHITEFOLDERICON,'50%','70%','',()=>{
        
                    });
        
                    CENTERTEXT(ELEMENTS,'',data.AppName,'','18px','',(ELEMENTSE)=>{

                        CLICK(ELEMENTSE,()=>{

                            JSONIFICATION(data,(MyData)=>{

                                STOREDATA('','MyProject',MyData);
    
                                ROUTE(' ',MYPROJECTDETAILSPAGE,'HOMEPAGE');
    
                            });

                        });

                    });
        
                });

            });

        });

    });
 
};