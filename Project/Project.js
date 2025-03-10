const API='https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?usp=sharing';

const NOVASTART=()=>{

    APPDOWNLOAD();

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

const APPDOWNLOAD=()=>{

    GETDATA(API,'APPMANAGER',(data)=>{

        const MYDATA={
                'Name':'AppManager',
                'data':data,
            }     
        STOREINDEXED('AppManager', 'AppManager', MYDATA, (data)=>{

            CHECKER(data === false,()=>{

                UPDATEINDEX('AppManager', 'AppManager', MYDATA,(datata)=>{


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