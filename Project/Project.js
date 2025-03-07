const MOVIELANDERAPI='https://docs.google.com/spreadsheets/d/1t0yjEoSVX7qnI3L3tv1N7gBCI-A5e0Y67wu74qzXnUs/edit?usp=sharing';

const NOVASTART=()=>{

    CLEAR("");

    APPMODE('#000');

    CONDITION(localStorage.getItem('UserData'),()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },()=>{

        CONDITION(localStorage.getItem('VeriifcationCode'),()=>{

            ROUTE('',EMAILVERIFICATIONPAGE,'EMAILVERIFICATIONPAGE');

        },()=>{

            ROUTE('',LOGINPAGE,'LOGINPAGE');

        });

    });

    MOVIESCATERGORY();

    MOVIESUPDATERS();
    
};

const HOMEPAGE=()=>{

    CLEAR("");

    FULLSCROLLVIEW('','transparent',(ELEMENT)=>{

    });

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

    FULLSCROLLVIEW('','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        DISPLAY(ELEMENT,'Please Wait ...');

        GETINDEXED('Catergoy', 'Catergoy', (data)=>{

            REDUX(data,(element)=>{

                REDUX(element.data,(elements)=>{

                    DISPLAY(ELEMENT,elements);

                    console.log(elements);
    
                });

            });

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

    IMAGE('',MOVIZ,'50%','30%',(ELEMENT)=>{

        STYLED(ELEMENT,'margin-top','25px');
        STYLED(ELEMENT,'margin-bottom','25px');

    }),

    CENTERTEXT('','p','Watch and Save','','',(ELEMENT)=>{

    });

    BREAK('');

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

                CLOUDLOGINTEMPLATE(ELEMENT,MOVIELANDERAPI,'Users','Ready For ','UserEmail',sessionStorage.getItem('UserEmail'),'UserPassword',sessionStorage.getItem('UserPassword'),'Sign In','No Account Founder','Wrong User Password',(data)=>{

                    console.log(data);

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

    IMAGE('',MOVIZ,'50%','30%',(ELEMENT)=>{

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

                    CONDITION(navigator.onLine,()=>{

                        DISPLAY(ELEMENT,'Please Wait .....');

                        RANDOMCODE((Code)=>{

                            const Message=`Dear ${sessionStorage.getItem('UserName')},\n\n Your Verification Code is ${Code}.`;
    
                            MOVIELANDEREMAIL(sessionStorage.getItem('UserEmail'),'Account Creation',Message,(data)=>{
    
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

    IMAGE('',MOVIZ,'50%','30%',(ELEMENT)=>{

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

            FORGOTPASSWORDTEMPLATE(ELEMENT,MOVIELANDERAPI,'Users','Please Wait','Recover','UserEmail',sessionStorage.getItem('UserEmail'),'Failed to Recover','No User Account',(ReturnedData)=>{

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

    IMAGE('',MOVIZ,'50%','30%',(ELEMENT)=>{

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

            CONDITION(sessionStorage.getItem('VerificationCode') === localStorage.getItem('VeriifcationCode') ,()=>{

                CONDITION(navigator.onLine,()=>{

                    DISPLAY(ELEMENT,'Please Wait ...');

                    GETDATA(MOVIELANDERAPI,'Users',(data)=>{

                        LOCALDEJSONDATA('MyData',(MyData)=>{

                            FINDER(data,'UserEmail', MyData.UserEmail,(ReturnedData)=>{

                                CONDITION(ReturnedData.UserEmail === MyData.UserEmail,()=>{

                                    DISPLAY(ELEMENT,'Verify');

                                    MESSAGEDISPLAY('','User With Account Exists','');

                                },()=>{

                                    const HEADER=['UserName','UserEmail','UserPassword'];

                                    const INFOS=[MyData.UserName,MyData.UserEmail,MyData.UserPassword];

                                    INSERTDATA(MOVIELANDERAPI,'Users',HEADER,INFOS,(data)=>{

                                        GETDATA(MOVIELANDERAPI,'Users',(data)=>{

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
 
            DELETEDATA(' ','UserData');
 
            RELOAD();

        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Updates','',WHITEMOBILEDEVELOPMENTICON,'50px',(ELEMENT)=>{

        });
        
    });

}; 

const FORGOTPASSWORDMESSAGEPASSWORD=()=>{

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

    CENTERTEXT('','p','The Password has been Sent to Your Email!','','',(ELEMENT)=>{

    });

    BUTTON('','','','blue','#fff','Back',(ELEMENT)=>{

        ROUTE('',FORGOTPASSWORDPAGE,'FORGOTPASSWORDPAGE');

    });
   
};

const MOVIESCATERGORY=()=>{

    CHECKER(navigator.onLine,()=>{

        GETDATA(MOVIELANDERAPI,'Catergory',(data)=>{

            const MYDATA={
                'Name':'Catergoy',
                'data':data
            }

            CONDITION(localStorage.getItem('MoviesUpdated'),()=>{

                UPDATEINDEX('Catergoy', 'Catergoy', MYDATA, ()=>{

                    STOREDATA(' ','MoviesUpdated',new Date());

                });

            },()=>{

                STOREINDEXED('Catergoy', 'Catergoy', MYDATA, (data)=>{

                    CHECKER(data === true,()=>{

                        STOREDATA(' ','MoviesUpdated',new Date());
                    
                    });

                });

            });

        },(data)=>{
    
            console.log(data);
            
        });

    });

};

const MOVIESUPDATERS=()=>{

    CHECKER(navigator.onLine,()=>{

        GETDATA(MOVIELANDERAPI,'Movies',(data)=>{

            const MYDATA={
                'Name':'Movies',
                'data':data
            }

            CONDITION(localStorage.getItem('MoviesUpdate'),()=>{

                UPDATEINDEX('Movies', 'Movies', MYDATA, ()=>{

                    STOREDATA(' ','MoviesUpdate',new Date());

                });

            },()=>{

                STOREINDEXED('Movies', 'Movies', MYDATA, (data)=>{

                    CHECKER(data === true,()=>{

                        STOREDATA(' ','MoviesUpdate',new Date());
                    
                    });

                });

            });

        },(data)=>{
    
            console.log(data);
            
        });

    });

};