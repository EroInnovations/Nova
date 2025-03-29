const API='https://docs.google.com/spreadsheets/d/1QrPMVra0WEB1L_JWpZyvm1WRoVaSlJk7KFiJiCOgYOQ/edit?usp=sharing';

const NOVASTART=()=>{

    VISITORS();

    APPMODE('#04143c');

    SCREENWIDTH((data)=>{

        CONDITION(data >800,
            ()=>{

                ROUTE('',DESKTOPHOMEPAGE,'DESKTOPHOMEPAGE');

            },
            ()=>{

                ROUTE('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');
                
            }

        );

    });

};

const ANDROIDHOMEPAGE=()=>{

    const WELCOMENOTE=`

    <br><br>
    
    Ero Innovations,We are the lead Developer in Cloud Native Software.

    <br><br>

    Get Your Latest Android ,Desktop and Website Built with Cutting Fully Proven and Tested Softwares and FrameWorks to Get Your Ideas to Life .

    <br><br>

    Ero Innovations,We let You Imagine,then We Innovate Your Dreams and Let Others get Inspired.

    <br><br>

    We let Handle Developments of Also Systems and Server Configurations and Frame Work Developments For Both Tech and Non Tech Related Clients With Ease.
    
    `;

    HOMESCROLLHEADERTEMPLATE('',' ',' ',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'25px','25px','0.5rem','',()=>{

        });

        CENTERTEXT(ELEMENT,'h2','Ero Innovations','','20px','','',()=>{

        });

        RIGHTIMAGE(ELEMENT,WHITEMENUICON,'25px','25px','0.5rem','',()=>{

            FULLMENUTEMPLATE('','#04143c','50%','right',(ELEMENTS)=>{

                ANDROIDMENU(ELEMENTS);

            });

        });

    },(ELEMENT)=>{

        IMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'100%','50%','',()=>{

        });

        CENTERTEXT(ELEMENT,'h2','Welcome','','20px','',()=>{

        });

        LEFTTEXT(ELEMENT,'',WELCOMENOTE,'','16px','0.2rem','',()=>{

        });

        LEFTTEXT(ELEMENT,'h1','Reach Us','','20px','0.2rem','5% auto',()=>{

        });

        NAVTEMPLATE(ELEMENT,'','90%','50px','',(ELEMENTS)=>{

            ICON(ELEMENTS,WHITEGMAILICON,'25px','25px','',()=>{

            });

            ICON(ELEMENTS,WHITEINSTAGRAMICON,'25px','25px','',()=>{

            });

            ICON(ELEMENTS,WHITEWHATSAPPICON,'25px','25px','',()=>{

            });

        });

    });

};

const ANDROIDMENU=(ELEMENT)=>{

    BUTTONIMAGE(ELEMENT,' ','About Us','',WHITEINFOICON,'50px','',()=>{

        ROUTE(' ',ANDROIDABOUTUSPAGE,'ANDROIDHOMEPAGE');

    });

    BUTTONIMAGE(ELEMENT,' ','Developers','',WHITEMOBILEDEVELOPMENTICON,'50px','',()=>{

        ROUTE(' ',ANDROIDDEVELOPERPAGE,'ANDROIDHOMEPAGE');

    });

    BUTTONIMAGE(ELEMENT,' ','Contact Us','',WHITEPHONEICON,'50px','',()=>{

        ROUTE(' ',ANDROIDDCONTACTUSPAGE,'ANDROIDHOMEPAGE');

    });

    BUTTONIMAGE(ELEMENT,' ','Download App','',WHITEDOWNLOADICON,'50px','',()=>{

        WEBSITE('https://eroinnovations.site/apps/elite.apk');

    });

};

const ANDROIDABOUTUSPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

    },'About Us','','',(ELEMENT)=>{

        DISPLAY(ELEMENT,'Under Development');

    });

};

const ANDROIDDEVELOPERPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

    },'Developers','','',(ELEMENT)=>{

        DISPLAY(ELEMENT,'Under Development');

    });

};

const ANDROIDDCONTACTUSPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

    },'Contact Us','','',(ELEMENT)=>{

        DISPLAY(ELEMENT,'Under Development');

    });

};

const DESKTOPHOMEPAGE=()=>{

    CLEAR('');


};

const VISITORS=()=>{

    DEVICE((data)=>{

        CHECKER(navigator.onLine,()=>{

            GETDATA(API,'Visitors',(MyData)=>{

                FINDER(MyData,'ID',localStorage.getItem('ID'),(Users)=>{

                    CONDITION(Users.ID === localStorage.getItem('ID'),()=>{

                        JSONADDER ( Users.RevistDate,[new Date()],(dataDat)=>{

                            const INFO=[data,Users.Date,Users.Language,Users.DeviceScreen,dataDat,Users.VistedTimes+1];
                        
                            UPDATEDATA(API,'Visitors',Users.ID,INFO,(datata)=>{
            
                            },()=>{
            
                            });

                        });

                    },()=>{
                        
                        JSONADDER ( new Date(),[new Date()],(dataDat)=>{

                            const HEADERS=['Users','Date','Language','DeviceScreen','RevistDate','VistedTimes'];

                            const INFO=[data,new Date(),data.language,data.screen,dataDat,1];
                            
                            INSERTDATA(API,'Visitors',HEADERS,INFO,(datata)=>{
    
                                STOREDATA(' ','ID',datata.uniqueId);
            
                            },()=>{
            
                            });

                        });

                    } );                  
                });


            },()=>{

            })

        });

    })

};