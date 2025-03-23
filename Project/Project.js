const API='https://docs.google.com/spreadsheets/d/1QrPMVra0WEB1L_JWpZyvm1WRoVaSlJk7KFiJiCOgYOQ/edit?usp=sharing';

const NOVASTART=()=>{

    APPMODE('#04143c');

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    HOMEFOOTERTEMPLATE('',' ',(ELEMENTS)=>{

        DISPLAYVIEW(ELEMENTS,' ','95%','50px',(ELEMENT)=>{

            LEFTTEXT(ELEMENT,'','Elite','','20px','0.1rem','',()=>{

            });

            RIGHTIMAGE(ELEMENT,WHITEPOSTICON,'20px','20px','0.1rem','',()=>{

                ROUTE(' ',POSTPAGE,'HOMEPAGE');

            });

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

            ROUTE(' ',DONATEPAGE,'SETTINGSPAGE');

        });

        BUTTONIMAGE(ELEMENTS,'#061b4e','Privacy Policy','',WHITEPRIVACYPOLICYICON,'','2% auto',()=>{

            ROUTE(' ',PRIVACYPOLICYPAGE,'SETTINGSPAGE');

        });

        BUTTONIMAGE(ELEMENTS,'#061b4e','Join Beta','',WHITECREATEDONICON,'','2% auto',()=>{

            ROUTE(' ',JOINBETAPAGE,'SETTINGSPAGE');

        });

        BUTTONIMAGE(ELEMENTS,'#061b4e','Email Updates','',WHITEGMAILICON,'','2% auto',()=>{

            ROUTE(' ',EMAILUPDATEPAGE,'SETTINGSPAGE');

        });

        BUTTONIMAGE(ELEMENTS,'#061b4e','Sync','',WHITERETRYICON,'','2% auto',()=>{

            RELOAD();

        });

        BUTTONIMAGE(ELEMENTS,'#061b4e','Contact Us','',WHITEPHONEICON,'','2% auto',()=>{

            DELETEDATA('','UserSubject');
            DELETEDATA('','UserCountry');
            DELETEDATA('','UserName');
            DELETEDATA('','UserEmail');
            DELETEDATA('','UserMessage');
            DELETEDATA('','Code');

            ROUTE(' ',CONTACTUSPAGE,'SETTINGSPAGE');

        });

    });

};

const DEVELOPERPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Developer','',()=>{

    },(ELEMENTS)=>{

        DISPLAYVIEW(ELEMENTS,' ','95%','50px',(ELEMENT)=>{

            LEFTTEXT(ELEMENT,'','Nova','','20px','0.5rem','',()=>{

                ROUTE(' ',NOVAFRAMEWORKPAGE,'DEVELOPERPAGE');

            });

            CENTERTEXT(ELEMENT,'','Elite Pay','','20px','',()=>{

                ROUTE(' ',ELITEPAYPAGE,'DEVELOPERPAGE');

            });

            RIGHTTEXT(ELEMENT,'','Builders','','20px','0.5rem','',()=>{

                ROUTE(' ',BUILDERSPAGE,'DEVELOPERPAGE');

            });

        });

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
        
        BUTTON(ELEMENT,'98%','50px','#061b4e','',sessionStorage.getItem('UserSubject')||'Select Reason For Contact','1% auto',()=>{

            ROUTE(' ',CONTACTSUBJECTPAGE,'CONTACTUSPAGE');

        });

        BUTTON(ELEMENT,'98%','50px','#061b4e','',sessionStorage.getItem('UserCountry')||'Select Your Country','1% auto',()=>{

            ROUTE(' ',COUNTRIESPAGE,'CONTACTUSPAGE');

        });

        ROUNDINPUT(ELEMENT,'','','transparent','Enter Your Name',(data)=>{

            STOREDATA('','UserName',data);

        });

        ROUNDINPUT(ELEMENT,'','','transparent','Enter Your Email',(data)=>{

            STOREDATA('','UserEmail',data);

        });

        TEXTAREA(ELEMENT,'','','50%','Compose Your Message',(data)=>{

            STOREDATA('','UserMessage',data);

        });

        BUTTON(ELEMENT,'96%','50px','forestgreen','','Submit','2% auto 1% auto',(ELEMENTS)=>{

            CONDITION(sessionStorage.getItem('UserSubject'),()=>{

                CONDITION(sessionStorage.getItem('UserCountry'),()=>{

                    CONDITION(sessionStorage.getItem('UserName'),()=>{

                        CONDITION(sessionStorage.getItem('UserEmail'),()=>{
                            
                            CONDITION(sessionStorage.getItem('UserMessage'),()=>{

                                CONDITION(navigator.onLine,()=>{

                                    MESSAGEDISPLAY('','Please Wait Your Message Is Being Sent','');

                                    DISPLAY(ELEMENTS,'...Please Wait...');

                                    RANDOMCODE((code)=>{

                                        STOREDATA('','Code',code);

                                        const HEADERS=['UserSubject','UserCounty','UserName','UserEmail','UserMessage','CodeNumber'];

                                        const INFO=[sessionStorage.getItem('UserSubject'),sessionStorage.getItem('UserCountry'),sessionStorage.getItem('UserName'),sessionStorage.getItem('UserEmail'),sessionStorage.getItem('UserMessage'),code];

                                        INSERTDATA(API,sessionStorage.getItem('UserSubject'),HEADERS,INFO,(datata)=>{
    
                                            GETDATA(API,sessionStorage.getItem('UserSubject'),(datate)=>{

                                                REDUX(datate,(Element)=>{

                                                    CONDITION(sessionStorage.getItem('Code').toString() === Element.CodeNumber.toString() ,()=>{

                                                        const MESSAGE=`Dear ${Element.UserName}\n\n Your ${Element.UserSubject} Contact has Been Recieved and Assigned Follow Up Number That We Shall Use to Get Back To You.\n\n Your ${Element.UserSubject} Number Issue Tracking  is \n\n ${Element.ID}\n\n Thank You For Patience\n\n From Elite Robust Ontology Contact Team.`;

                                                        EMAILSENDER(Element.UserEmail,Element.UserSubject,MESSAGE,(data)=>{

                                                            ROUTE('',SETTINGSPAGE,'SETTINGSPAGE');

                                                        },(data)=>{

                                                            MESSAGEDISPLAY('','Something Went Wrong','');

                                                            DISPLAY(ELEMENTS,'Submit');

                                                        });

                                                    },()=>{

                                                        MESSAGEDISPLAY('','Something Went Wrong,Try Again','');

                                                        DISPLAY(ELEMENTS,'Submit');

                                                    });

                                                });

                                            },()=>{

                                                MESSAGEDISPLAY('','Something Went Wrong','');

                                                DISPLAY(ELEMENTS,'Submit');

                                            });
    
                                        },(datata)=>{
    
                                            MESSAGEDISPLAY('','Message Sending Failed','');

                                            DISPLAY(ELEMENTS,'Submit');
    
                                        });

                                    });

                                },()=>{

                                    MESSAGEDISPLAY('','Please Check Your Internet Connection','');

                                });

                            },()=>{
                
                                MESSAGEDISPLAY('','Please Write Your Message','');
                
                            });
                
                        },()=>{
            
                            MESSAGEDISPLAY('','Please Provide Your Email','');
            
                        });

                    },()=>{
        
                        MESSAGEDISPLAY('','Please Provide Your Name','');
        
                    });

                },()=>{
    
                    MESSAGEDISPLAY('','Please Select A Country','');
    
                });

            },()=>{

                MESSAGEDISPLAY('','Please Select A Subject','');

            });

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

            STOREDATA('','UserSubject','Complaint');

            ROUTE('',CONTACTUSPAGE,'CONTACTUSPAGE');

        });

        BUTTONIMAGE(ELEMENT,'#061b4e','Inquiries','',WHITEHELPICON,'','2% auto',()=>{

            STOREDATA('','UserSubject','Inquiries');

            ROUTE('',CONTACTUSPAGE,'CONTACTUSPAGE');

        });

        BUTTONIMAGE(ELEMENT,'#061b4e','Business','',WHITESUITCASEICON,'','2% auto',()=>{

            STOREDATA('','UserSubject','Business');

            ROUTE('',CONTACTUSPAGE,'CONTACTUSPAGE');

        });

        BUTTONIMAGE(ELEMENT,'#061b4e','Developer','',WHITEMOBILEDEVELOPMENTICON,'','2% auto',()=>{

            STOREDATA('','UserSubject','Developer');

            ROUTE('',CONTACTUSPAGE,'CONTACTUSPAGE');

        });

        BUTTONIMAGE(ELEMENT,'#061b4e','Others','',WHITESEARCHICON,'','2% auto',()=>{

            STOREDATA('','UserSubject','Others');

            ROUTE('',CONTACTUSPAGE,'CONTACTUSPAGE');

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

                STOREDATA('','UserCountry',data.name);

                ROUTE('',CONTACTUSPAGE,'CONTACTUSPAGE');

            });

        });
       
    });

};

const EMAILUPDATEPAGE=()=>{

    DELETEDATA('','UserEmail');

    const MESSAGE=`When You Sign Up for Our Email Programme,You are Agreeing to the Terms and Conditions of Elite Robust Ontology Of 2025 Act. <br><br> You have Allowed to Join the Mail System where we shall send you updates of our latest products and insider news ,You also get a chance to test some products while in development mode and become a contributor before they even go live to the general Public <br><br> Get Started Today By Providing Your Email Address Below.`;

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',SETTINGSPAGE,'SETTINGSPAGE');

    },'Email','',()=>{

    },(ELEMENT)=>{

        CENTERTEXT(ELEMENT,'','Email Updates','','25px','5% auto',()=>{

        });

        CENTERTEXT(ELEMENT,'','<hr>','','20px','5% auto',()=>{

        });

        LEFTTEXT(ELEMENT,'',MESSAGE,'','18px','2%',()=>{

        });

        ROUNDINPUT(ELEMENT,'','','transparent','Enter Your Email',(data)=>{

            STOREDATA('','UserEmail',data);

        });

        BUTTON(ELEMENT,'96%','50px','forestgreen','','Sign Me Up','2% auto 1% auto',(ELEMENTS)=>{

            CONDITION(sessionStorage.getItem('UserEmail'),()=>{

                CONDITION(navigator.onLine,()=>{

                    MESSAGEDISPLAY('','Please Wait While You Get Signed Up','');

                    DISPLAY(ELEMENTS,'...Please Wait...');

                    RANDOMCODE((code)=>{

                        STOREDATA('','Code',code);

                        const HEADERS=['UserSubject','UserEmail','UserMessage','CodeNumber'];

                        const INFO=['Email Updates',sessionStorage.getItem('UserEmail'),sessionStorage.getItem('UserMessage'),code];

                        INSERTDATA(API,'EmailUpdater',HEADERS,INFO,(datata)=>{

                            GETDATA(API,'EmailUpdater',(datate)=>{

                                REDUX(datate,(Element)=>{

                                    CONDITION(sessionStorage.getItem('Code').toString() === Element.CodeNumber.toString() ,()=>{

                                        const MESSAGE=`Dear User\n\n Your ${Element.UserSubject} Contact has Been Recieved and Assigned Follow Up Number That We Shall Use to Get Back To You.\n\n Your ${Element.UserSubject} Number Issue Tracking  is \n\n ${Element.ID}\n\n Thank You For Patience\n\n From Elite Robust Ontology Contact Team.`;

                                        EMAILSENDER(Element.UserEmail,Element.UserSubject,MESSAGE,(data)=>{

                                            ROUTE('',SETTINGSPAGE,'SETTINGSPAGE');

                                        },(data)=>{

                                            MESSAGEDISPLAY('','Something Went Wrong','');

                                            DISPLAY(ELEMENTS,'Submit');

                                        });

                                    },()=>{

                                        MESSAGEDISPLAY('','Something Went Wrong,Try Again','');

                                        DISPLAY(ELEMENTS,'Submit');

                                    });

                                });

                            },()=>{

                                MESSAGEDISPLAY('','Something Went Wrong','');

                                DISPLAY(ELEMENTS,'SubSign Me Upmit');

                            });

                        },(datata)=>{

                            MESSAGEDISPLAY('','Message Sending Failed','');

                            DISPLAY(ELEMENTS,'Sign Me Up');

                        });

                    });

                },()=>{

                    MESSAGEDISPLAY('','Please Check Your Internet Connection','');

                });

            },()=>{

                MESSAGEDISPLAY('','Please Provide Your Email','');

            });

        });

    });

};

const JOINBETAPAGE=()=>{

    DELETEDATA('','UserEmail');

    const MESSAGE=`When You Sign Up for Our Beta Programme,You are Agreeing to the Terms and Conditions of Elite Robust Ontology Of 2025 Act. <br><br> You have Allowed to Join the Beta System where we shall send you updates of our latest products and insider news ,You also get a chance to test some products while in development mode and become a contributor before they even go live to the general Public <br><br> Get Started Today By Providing Your Email Address Below.`;

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',SETTINGSPAGE,'SETTINGSPAGE');

    },'Beta','',()=>{

    },(ELEMENT)=>{

        CENTERTEXT(ELEMENT,'','Join Beta','','25px','5% auto',()=>{

        });

        CENTERTEXT(ELEMENT,'','<hr>','','20px','5% auto',()=>{

        });

        LEFTTEXT(ELEMENT,'',MESSAGE,'','18px','2%',()=>{

        });

        ROUNDINPUT(ELEMENT,'','','transparent','Enter Your Email',(data)=>{

            STOREDATA('','UserEmail',data);

        });

        BUTTON(ELEMENT,'96%','50px','forestgreen','','Sign Me Up','2% auto 1% auto',(ELEMENTS)=>{

            CONDITION(sessionStorage.getItem('UserEmail'),()=>{

                CONDITION(navigator.onLine,()=>{

                    MESSAGEDISPLAY('','Please Wait While You Get Signed Up','');

                    DISPLAY(ELEMENTS,'...Please Wait...');

                    RANDOMCODE((code)=>{

                        STOREDATA('','Code',code);

                        const HEADERS=['UserSubject','UserEmail','UserMessage','CodeNumber'];

                        const INFO=['Join Beta',sessionStorage.getItem('UserEmail'),sessionStorage.getItem('UserMessage'),code];

                        INSERTDATA(API,'JoinBeta',HEADERS,INFO,(datata)=>{

                            GETDATA(API,'JoinBeta',(datate)=>{

                                REDUX(datate,(Element)=>{

                                    CONDITION(sessionStorage.getItem('Code').toString() === Element.CodeNumber.toString() ,()=>{

                                        const MESSAGE=`Dear User\n\n Your ${Element.UserSubject} Contact has Been Recieved and Assigned Follow Up Number That We Shall Use to Get Back To You.\n\n Your ${Element.UserSubject} Number Issue Tracking  is \n\n ${Element.ID}\n\n Thank You For Patience\n\n From Elite Robust Ontology Contact Team.`;

                                        EMAILSENDER(Element.UserEmail,Element.UserSubject,MESSAGE,(data)=>{

                                            ROUTE('',SETTINGSPAGE,'SETTINGSPAGE');

                                        },(data)=>{

                                            MESSAGEDISPLAY('','Something Went Wrong','');

                                            DISPLAY(ELEMENTS,'Submit');

                                        });

                                    },()=>{

                                        MESSAGEDISPLAY('','Something Went Wrong,Try Again','');

                                        DISPLAY(ELEMENTS,'Submit');

                                    });

                                });

                            },()=>{

                                MESSAGEDISPLAY('','Something Went Wrong','');

                                DISPLAY(ELEMENTS,'SubSign Me Upmit');

                            });

                        },(datata)=>{

                            MESSAGEDISPLAY('','Message Sending Failed','');

                            DISPLAY(ELEMENTS,'Sign Me Up');

                        });

                    });

                },()=>{

                    MESSAGEDISPLAY('','Please Check Your Internet Connection','');

                });

            },()=>{

                MESSAGEDISPLAY('','Please Provide Your Email','');

            });

        });

    });

};

const PRIVACYPOLICYPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',SETTINGSPAGE,'SETTINGSPAGE');

    },'Privacy Policy','',()=>{

    },(ELEMENTS)=>{

        DISPLAY(ELEMENTS,'Under Development');

    });

};

const DONATEPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',SETTINGSPAGE,'SETTINGSPAGE');

    },'Donate','',()=>{

    },(ELEMENTS)=>{

        DISPLAY(ELEMENTS,'Under Development');

    });

};

const NOVAFRAMEWORKPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',DEVELOPERPAGE,'DEVELOPERPAGE');

    },'Nova','',()=>{

    },(ELEMENTS)=>{

        DISPLAY(ELEMENTS,'Under Development');

    });

};

const ELITEPAYPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',DEVELOPERPAGE,'DEVELOPERPAGE');

    },'Elite Pay','',()=>{

    },(ELEMENTS)=>{

        DISPLAY(ELEMENTS,'Under Development');

    });

};

const BUILDERSPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',DEVELOPERPAGE,'DEVELOPERPAGE');

    },'Builders','',()=>{

    },(ELEMENTS)=>{

        DISPLAY(ELEMENTS,'Under Development');

    });

};

const POSTPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Post','',()=>{

    },(ELEMENTS)=>{

        DISPLAY(ELEMENTS,'Under Development');

    });

};