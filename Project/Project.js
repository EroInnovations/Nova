const API='https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?usp=sharing';

const NOVASTART=()=>{

    APPDOWNLOAD(()=>{

    });

    ACCOUNTCHECKER(()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },()=>{

        ROUTE('',EMAILVERIFICATIONPAGE,'EMAILVERIFICATIONPAGE');

    },()=>{

        ROUTE('',LOGINPAGE,'LOGINPAGE');
        
    });
    
};

const HOMEPAGE=()=>{

    HOMEFOOTERTEMPLATE('',' ',(ELEMENTS)=>{

        DEJSON(localStorage.getItem('UserData'),(data)=>{

            IMAGEBUTTON(ELEMENTS,'transparent',data.UserName,'',data.UserImage||WHITEUSERICON,'50px',()=>{

                ROUTE('',USERACCOUNTPAGE,'HOMEPAGE');

            });

            CENTERTEXT(ELEMENTS,'','My Apps','','18px',()=>{

            });

            VIEW(ELEMENTS,'transparent','100%','80%',(ELEMENT)=>{

                STYLED(ELEMENT,'border-top','1px solid forestgreen');

                DISPLAY(ELEMENT,'<br><br><br><br> ... Please Wait....');

                USERDATA(ELEMENT,data.UserName,'');
    
            });
        
        });

    },(ELEMENTS)=>{

        ICON(ELEMENTS,WHITELISTICON,'25px','25px',(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{
    
               
            });
    
        });

        ICON(ELEMENTS,WHITEPOSTICON,'25px','25px',(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE(' ',POSTPAGE,'HOMEPAGE');
    
            });
    
        });

        ICON(ELEMENTS,WHITEUSERICON,'25px','25px',(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{
    

                
            });
    
        });

    });
   
};

const LOGINPAGE=()=>{

    DELETEDATA('','UserEmail');

    DELETEDATA('','UserPassword');

    CLEAR("");

    IMAGE('',WHITEFOLDERICON,'50%','30%',(ELEMENT)=>{

        STYLED(ELEMENT,'margin-top','25px');
        STYLED(ELEMENT,'margin-bottom','25px');

    }),

    CENTERTEXT('','p','Manage and Collect','','',(ELEMENT)=>{

    });

    ROUNDINPUT('','email','','transparent','Email',(ELEMENT)=>{

        STOREDATA('','UserEmail',ELEMENT);
        
    });

    ROUNDINPUT('','password','','transparent','********',(ELEMENT)=>{

        STOREDATA('','UserPassword',ELEMENT);

    });

    RIGHTTEXT('','p','Forgot Password?','#fff','18px','',(ELEMENT)=>{

        STYLED(ELEMENT,'margin','1rem');

        CLICK(ELEMENT,()=>{

            ROUTE(' ',FORGOTPASSWORDPAGE,'LOGINPAGE');

        });

    });

    BUTTON('','','','forestgreen','#fff','Sign In',(ELEMENT)=>{

        CONDITION(sessionStorage.getItem('UserEmail'),()=>{

            CONDITION(sessionStorage.getItem('UserPassword'),()=>{

                CLOUDLOGINTEMPLATE(ELEMENT,API,'Users','Please Wait','UserEmail',sessionStorage.getItem('UserEmail'),'UserPassword',sessionStorage.getItem('UserPassword'),'Sign In','No Account Founder','Wrong User Password',(data)=>{

                    JSONIFICATION(data,(MyData)=>{

                        STOREDATA(' ','UserData',MyData);

                        ROUTE('',HOMEPAGE,'HOMEPAGE');

                    });
                   
                });
                
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

    IMAGE('',WHITEFOLDERICON,'50%','30%',(ELEMENT)=>{

        STYLED(ELEMENT,'margin-top','25px');
        STYLED(ELEMENT,'margin-bottom','25px');

    }),

    CENTERTEXT('','p','Manage and Collect','','',(ELEMENT)=>{

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

                    CONDITION(navigator.onLine,()=>{

                        DISPLAY(ELEMENT,'Please Wait .....');

                        RANDOMCODE((Code)=>{

                            const Message=`Dear ${sessionStorage.getItem('UserName')},\n\n Your Verification Code is ${Code}.`;
    
                            EMAILSENDER(sessionStorage.getItem('UserEmail'),'Account Creation',Message,(data)=>{
    
                                STOREDATA(' ','VeriifcationCode',Code);
    
                                const USERS={
                                    'UserName':sessionStorage.getItem('UserName'),
                                    'UserEmail':sessionStorage.getItem('UserEmail'),
                                    'UserPassword':sessionStorage.getItem('UserPassword'),
                                }
    
                                JSONIFICATION(USERS,(Mydata)=>{
    
                                    STOREDATA(' ','MyData',Mydata);
    
                                    ROUTE('',EMAILVERIFICATIONPAGE,'EMAILVERIFICATIONPAGE');
    
                                });
    
                            },(datata)=>{

                                console.log(datata);
    
                                MESSAGEDISPLAY('','Failed TO Send Verification Code');
    
                                DISPLAY(ELEMENT,'Sign Up');

                            });
            
                        });

                    },()=>{

                        MESSAGEDISPLAY('','Check Your Internet','');

                    });
        
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

    IMAGE('',WHITEFOLDERICON,'50%','30%',(ELEMENT)=>{

        STYLED(ELEMENT,'margin-top','25px');
        STYLED(ELEMENT,'margin-bottom','25px');

    }),

    CENTERTEXT('','p','Manage and Collect','','',(ELEMENT)=>{

    });

    BREAK('');

    ROUNDINPUT('','email','','transparent','Email',(ELEMENT)=>{

        STOREDATA('','UserEmail',ELEMENT);

    });

    BUTTON('','','','forestgreen','#fff','Recover',(ELEMENT)=>{

        CONDITION(sessionStorage.getItem('UserEmail'),()=>{

            FORGOTPASSWORDTEMPLATE(ELEMENT,API,'Users','Please Wait','Recover','UserEmail',sessionStorage.getItem('UserEmail'),'Failed to Recover','No User Account',(ReturnedData)=>{

                const Message=`Dear ${ReturnedData.UserName},\n\n Your Account Password Is ==== ${ReturnedData.UserPassword}===.\n\n Don't Share Your Account Password!.`;
    
                MOVIELANDEREMAIL(sessionStorage.getItem('UserEmail'),'Password Recovery',Message,(data)=>{

                    ROUTE(' ',FORGOTPASSWORDMESSAGEPASSWORD,'FORGOTPASSWORDMESSAGEPASSWORD');

                },(datata)=>{

                    MESSAGEDISPLAY('','Failed To Recover Password');

                    DISPLAY(ELEMENT,'Recover');

                }); 

            });

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

    IMAGE('',WHITEFOLDERICON,'50%','30%',(ELEMENT)=>{

        STYLED(ELEMENT,'margin-top','25px');
        STYLED(ELEMENT,'margin-bottom','25px');

    }),

    CENTERTEXT('','p','Manage and Collect','','',(ELEMENT)=>{

    });

    BREAK('');

    ROUNDINPUT('','tel','','transparent','Enter Verification Code',(ELEMENT)=>{

        STOREDATA('','VerificationCode',ELEMENT);

    });

    BUTTON('','','','forestgreen','#fff','Verify',(ELEMENT)=>{

        CONDITION(sessionStorage.getItem('VerificationCode'),()=>{

            CONDITION(sessionStorage.getItem('VerificationCode') === localStorage.getItem('VeriifcationCode') ,()=>{

                CONDITION(navigator.onLine,()=>{

                    DISPLAY(ELEMENT,'Please Wait ...');

                    GETDATA(API,'Users',(data)=>{

                        LOCALDEJSONDATA('MyData',(MyData)=>{

                            FINDER(data,'UserEmail', MyData.UserEmail,(ReturnedData)=>{

                                CONDITION(ReturnedData.UserEmail === MyData.UserEmail,()=>{

                                    DISPLAY(ELEMENT,'Verify');

                                    MESSAGEDISPLAY('','User With Account Exists','');

                                },()=>{

                                    const HEADER=['UserName','UserEmail','UserPassword'];

                                    const INFOS=[MyData.UserName,MyData.UserEmail,MyData.UserPassword];

                                    INSERTDATA(API,'Users',HEADER,INFOS,(data)=>{

                                        GETDATA(API,'Users',(data)=>{

                                            FINDER(data,'UserEmail', MyData.UserEmail,(ReturnedData)=>{

                                                CONDITION(ReturnedData.UserEmail === MyData.UserEmail,()=>{

                                                    JSONIFICATION(ReturnedData,(ThisData)=>{

                                                        STOREDATA(' ','UserData',ThisData);

                                                        DELETEDATA(' ','VeriifcationCode');

                                                        DELETEDATA(' ','MyData');

                                                        ROUTE('',HOMEPAGE,'HOMEPAGE');

                                                    });
                
                                                },()=>{

                                                    DISPLAY(ELEMENT,'Verify');

                                                    MESSAGEDISPLAY('','Something Went Wrong','');

                                                })

                                            });

                                        })

                                    },(data)=>{

                                        DISPLAY(ELEMENT,'Verify');

                                        MESSAGEDISPLAY('','Failed to Create Account!','');

                                    });

                                });

                            });

                        });

                    },(data)=>{

                        DISPLAY(ELEMENT,'Verify');

                        MESSAGEDISPLAY('','Something Went Wrong','');

                    });

                },()=>{

                    MESSAGEDISPLAY('','Check Your Internet','');

                });
    
            },()=>{
    
                MESSAGEDISPLAY('','Wrong Verification Code','');
    
            });

        },()=>{

            MESSAGEDISPLAY('','Enter Verification Code','');

        });

    });

    BUTTON('','','','blue','#fff','Cancel',(ELEMENT)=>{

        DELETEDATA(' ','VeriifcationCode');

        ROUTE('',CREATEACCOUNTPAGE,'CREATEACCOUNTPAGE');

    });
   
};

const APPDOWNLOAD=(callback)=>{

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

};

const POSTPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Create','COLOR',()=>{

    },(ELEMENT)=>{

        VIEW(ELEMENT,'','45%','30%',(ELEMENTS)=>{

            STYLED(ELEMENTS,'display','inline-table');
            STYLED(ELEMENTS,'margin-left','2%');
            STYLED(ELEMENTS,'margin-right','2%');

        });

        VIEW(ELEMENT,'red','45%','30%',(ELEMENTS)=>{

            STYLED(ELEMENTS,'display','inline-table');
            STYLED(ELEMENTS,'margin-left','2%');
            STYLED(ELEMENTS,'margin-right','2%');

        });

        VIEW(ELEMENT,'red','45%','30%',(ELEMENTS)=>{

            STYLED(ELEMENTS,'display','inline-table');
            STYLED(ELEMENTS,'margin-left','2%');
            STYLED(ELEMENTS,'margin-right','2%');

        });

        VIEW(ELEMENT,'','45%','30%',(ELEMENTS)=>{

            STYLED(ELEMENTS,'display','inline-table');
            STYLED(ELEMENTS,'margin-left','2%');
            STYLED(ELEMENTS,'margin-right','2%');

        });
       
    });
  
};

const USERDATA=(ELEMENT,Name,Delete)=>{

    CONDITION(Delete,()=>{

        CLEAR(ELEMENT);

        GETINDEXEDDATA ('AppManager', 'AppManager', (data)=>{

            CHECKER( data.Owner === Name && data.Deleted ,()=>{

                VIEW(ELEMENT,' ','46%','35%',(ELEMENTS)=>{
    
                    STYLED(ELEMENTS,'display','inline-table');
                    STYLED(ELEMENTS,'margin','1.5%');
                    STYLED(ELEMENTS,'border','1px solid forestgreen');
    
                    ICON(ELEMENTS,WHITECHECKICON,'25px','25px',(ELEMENTSE)=>{
    
                        STYLED(ELEMENTSE,'position','absolute');
                        STYLED(ELEMENTSE,'top','5%');
                        STYLED(ELEMENTSE,'right','5%');
                        STYLED(ELEMENTSE,'background','forestgreen');
                        STYLED(ELEMENTSE,'padding','2%');
                        STYLED(ELEMENTSE,'border-radius','5px');
    
                        CLICK(ELEMENTSE,()=>{
    
                            CHECKER(navigator.onLine,()=>{
    
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
        
                            });

                            NOINTERNETTEMPLATE();
    
                        });
                
                    });
            
                    IMAGE(ELEMENTS,data.AppIcon||WHITEFOLDERICON,'50%','70%',()=>{
    
                    });
    
                    CENTERTEXT(ELEMENTS,'',data.AppName,'','18px',()=>{
    
                    });
        
                });

            });
    
        });

    },()=>{

        CLEAR(ELEMENT);

        GETINDEXEDDATA ('AppManager', 'AppManager', (data)=>{

            CHECKER( data.Owner === Name && !data.Deleted ,()=>{

                VIEW(ELEMENT,' ','46%','35%',(ELEMENTS)=>{
    
                    STYLED(ELEMENTS,'display','inline-table');
                    STYLED(ELEMENTS,'margin','1.5%');
                    STYLED(ELEMENTS,'border','1px solid forestgreen');
        
                    ICON(ELEMENTS,WHITEPENCILICON,'25px','25px',(ELEMENTSE)=>{
        
                        STYLED(ELEMENTSE,'position','absolute');
                        STYLED(ELEMENTSE,'top','5%');
                        STYLED(ELEMENTSE,'right','5%');
                        STYLED(ELEMENTSE,'background','forestgreen');
                        STYLED(ELEMENTSE,'padding','2%');
                        STYLED(ELEMENTSE,'border-radius','5px');
        
                        CLICK(ELEMENTSE,()=>{
                
                        });
                
                    });
        
                    ICON(ELEMENTS,WHITEDELETEICON,'25px','25px',(ELEMENTSE)=>{
        
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
            
                    IMAGE(ELEMENTS,data.AppIcon||WHITEFOLDERICON,'50%','70%',()=>{
        
                    });
        
                    CENTERTEXT(ELEMENTS,'',data.AppName,'','18px',()=>{
        
                    });
        
                });

            });

        });

    });
 
};

const USERACCOUNTPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Account','',()=>{

    },(ELEMENT)=>{

        DEJSON(localStorage.getItem('UserData'),(data)=>{

            VIEW(ELEMENT,'transparent','100%','auto',(ELEMENTS)=>{

                STYLED(ELEMENTS,'display','inline-table');
                STYLED(ELEMENTS,'border-top','1px solid forestgreen');

                BREAK(ELEMENTS);

                IMAGEBUTTON(ELEMENTS,'forestgreen','My Profile','',WHITEPROFILEICON,'50px',()=>{

                    ROUTE('',USERACCOUNTPAGE,'HOMEPAGE');
    
                });

                IMAGEBUTTON(ELEMENTS,'forestgreen','Deleted Projects','',WHITEDELETEICON,'50px',()=>{

                    ROUTE('',DELETEDATAPAGE,'USERACCOUNTPAGE');
    
                });

                IMAGEBUTTON(ELEMENTS,'forestgreen','Settings ','',WHITESETTINGSICON,'50px',()=>{

                    ROUTE('',USERACCOUNTPAGE,'HOMEPAGE');
    
                });

                IMAGEBUTTON(ELEMENTS,'forestgreen','App Version ','',WHITEMOBILEDEVELOPMENTICON,'50px',()=>{

                    ROUTE('',USERACCOUNTPAGE,'HOMEPAGE');
    
                });

                BREAK(ELEMENTS);BREAK(ELEMENTS);

            });

        });

    });

};

const DELETEDATAPAGE=()=>{
    
    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',USERACCOUNTPAGE,'USERACCOUNTPAGE');

    },'Account','',()=>{

    },(ELEMENT)=>{

        DEJSON(localStorage.getItem('UserData'),(data)=>{

            VIEW(ELEMENT,'transparent','100%','auto',(ELEMENTS)=>{

                STYLED(ELEMENTS,'display','inline-table');
                STYLED(ELEMENTS,'border-top','1px solid forestgreen');

                USERDATA(ELEMENT,data.UserName,'Deleted');
                
            });

        });

    });

};