const API='https://docs.google.com/spreadsheets/d/1CL2HWe9Pwj18F7O9RKny8oRQFAw5-K_A0Io-rvCWryk/edit?usp=sharing';

const NOVASTART=()=>{

    DATALOADER();

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DATALOADER();

    HOMEFOOTERTEMPLATE('','transparent',(ELEMENT)=>{

        GETINDEXEDDATA('Posts','Posts',(data)=>{

            TABLEVIEW(ELEMENT,'transparent','45%','300px','0px','2%',(ELEMENTS)=>{

                IMAGE(ELEMENTS,data.Main,'100%','300px','',()=>{

                });

                FOOTER(ELEMENTS,'#000000','100%','70px',(ELEMENTES)=>{

                    LEFTTEXT(ELEMENTES,'',data.Name,'','20px','1%','0 auto',()=>{

                    });

                    RIGHTVIEW(ELEMENTES,'forestgreen','100px','40px','15% 2%',(ELE)=>{

                        STYLED(ELE,'border-radius','5px');

                        CENTERTEXT(ELE,'','Edit','#fff','20px','5%',()=>{

                        });

                    });

                });

            });

            console.log(data);

        });

    },(ELEMENT)=>{

        ICONTEXT(ELEMENT,WHITEHOMEICON,'transparent','#fff','100px','40px','20px','20px','Posts','',()=>{

            ROUTE(' ',HOMEPOSTSPAGE,'HOMEPAGE');

        });

        ICONTEXT(ELEMENT,WHITEPOSTICON,'transparent','#fff','100px','40px','20px','20px','Services','',()=>{

            ROUTE(' ',SERVICESPAGE,'HOMEPAGE');

        });

        ICONTEXT(ELEMENT,WHITEGROUPICON,'transparent','#fff','70px','40px','20px','20px','News','',()=>{

            ROUTE(' ',NEWSPAGE,'HOMEPAGE');

        });

    });

};

const HOMEPOSTSPAGE=()=>{

    DELETEDATA('','Title');
    DELETEDATA('','Story');
    DELETEDATA('','FullStory');
    DELETEDATA('','ImageOne');
    DELETEDATA('','ImageTwo');
    DELETEDATA('','ImageThree');
    DELETEDATA('','ImageFour');

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'HomePosts','',()=>{

    },(ELEMENT)=>{

        ROUNDINPUT(ELEMENT,'','','transparent','Enter Post Title','',(data)=>{

            STOREDATA('','Title',data);

        });

        ROUNDINPUT(ELEMENT,'','','transparent','Enter Short Story','',(data)=>{

            STOREDATA('','Story',data);

        });

        TEXTAREA(ELEMENT,'','95%','50%','Enter Full Story','',(data)=>{

            STOREDATA('','FullStory',data);

        });

        CENTERTEXT(ELEMENT,'','Click Images to Update','','','2% auto',()=>{

        });

        IMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'95%','500px','2%',(ELE)=>{

            IMAGEPICKER(ELE,(data)=>{

                STOREDATA('','ImageOne',data);

            });

        });

        IMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'95%','500px','2%',(ELE)=>{

            IMAGEPICKER(ELE,(data)=>{

                STOREDATA('','ImageTwo',data);

            });

        });

        IMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'95%','500px','2%',(ELE)=>{

            IMAGEPICKER(ELE,(data)=>{

                STOREDATA('','ImageThree',data);

            });

        });

        IMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'95%','500px','2%',(ELE)=>{

            IMAGEPICKER(ELE,(data)=>{

                STOREDATA('','ImageFour',data);

            });

        });

        IMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'95%','500px','2%',(ELE)=>{

            IMAGEPICKER(ELE,(data)=>{

                STOREDATA('','ImageOne',data);

            });

        });

        BUTTON(ELEMENT,'50%','50px','forestgreen','','Post','5% auto',()=>{

            CONDITION(sessionStorage.getItem('Title'),()=>{

                CONDITION(sessionStorage.getItem('Story'),()=>{

                    CONDITION(sessionStorage.getItem('FullStory'),()=>{

                        CONDITION(sessionStorage.getItem('ImageOne'),()=>{

                            CONDITION(navigator.onLine,()=>{

                                MESSAGEDISPLAY('','Please Wait','');

                                const HEADER=['Name','Short','Long','Main','One','Two','Three','Time','Posted','PosterImage','Device','Approved'];

                                DEVICE((datata)=>{

                                    const INFO=[sessionStorage.getItem('Title'),sessionStorage.getItem('Story'),sessionStorage.getItem('FullStory'),sessionStorage.getItem('ImageOne'),sessionStorage.getItem('ImageTwo'),sessionStorage.getItem('ImageThree'),sessionStorage.getItem('ImageFour'),new Date(),'Admin','',datata,''];
                                
                                    INSERTDATA(API,'ElgonPosts',HEADER,INFO,()=>{
    
                                        DOWNLOADSAVEINDEX(API,'ElgonPosts','Posts',()=>{
    
                                            ROUTE('',HOMEPAGE,'HOMEPAGE');
    
                                        });

                                        HIDER(3000,()=>{

                                            ROUTE('',HOMEPAGE,'HOMEPAGE');

                                        })
    
                                    },()=>{
    
                                        MESSAGEDISPLAY('','Failed to Post Try Again','');
    
                                    });

                                });

                            },()=>{
            
                                MESSAGEDISPLAY('','Check Your Internet','');
                
                            });

                        },()=>{
        
                            MESSAGEDISPLAY('','Enter First Image','');
            
                        });

                    },()=>{
    
                        MESSAGEDISPLAY('','Enter FullStory','');
        
                    });

                },()=>{

                    MESSAGEDISPLAY('','Enter a Short Story','');
    
                });

            },()=>{

                MESSAGEDISPLAY('','Enter a Title','');

            });

        });

    });

};

const SERVICESPAGE=()=>{

    DELETEDATA('','Title');
    DELETEDATA('','Story');
    DELETEDATA('','Link');
    
    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Services','',()=>{

    },(ELEMENT)=>{

        ROUNDINPUT(ELEMENT,'','','transparent','Enter Service Title','',(data)=>{

            STOREDATA('','Title',data);

        });

        ROUNDINPUT(ELEMENT,'','','transparent','Enter Short Story','',(data)=>{

            STOREDATA('','Story',data);

        });

        ROUNDINPUT(ELEMENT,'','','transparent','Enter YouTube Video Link ','',(data)=>{

            YOUTUBEUD(data,(link)=>{

                STOREDATA('','Link',link);

            });

        });

        BUTTON(ELEMENT,'50%','50px','forestgreen','','Post','5% auto',()=>{

            CONDITION(sessionStorage.getItem('Title'),()=>{

                CONDITION(sessionStorage.getItem('Story'),()=>{

                    CONDITION(sessionStorage.getItem('Link'),()=>{

                        CONDITION(navigator.onLine,()=>{

                            MESSAGEDISPLAY('','Please Wait','');

                            const HEADER=['Name','Short','Long','Time','Posted','PosterImage','Device','Approved'];

                            DEVICE((datata)=>{

                                const INFO=[sessionStorage.getItem('Title'),sessionStorage.getItem('Story'),'https://www.youtube.com/embed/'+sessionStorage.getItem('Link'),new Date(),'Admin','',datata,''];
                            
                                INSERTDATA(API,'ElgonServices',HEADER,INFO,()=>{

                                    DOWNLOADSAVEINDEX(API,'ElgonServices','Service',()=>{

                                        ROUTE('',HOMEPAGE,'HOMEPAGE');

                                    });

                                    HIDER(3000,()=>{

                                        ROUTE('',HOMEPAGE,'HOMEPAGE');

                                    })

                                },()=>{

                                    MESSAGEDISPLAY('','Failed to Post Try Again','');

                                });

                            });

                        },()=>{
        
                            MESSAGEDISPLAY('','Check Your Internet','');
            
                        });

                    },()=>{
    
                        MESSAGEDISPLAY('','Enter YouTube Link','');
        
                    });

                },()=>{

                    MESSAGEDISPLAY('','Enter a Short Story','');
    
                });

            },()=>{

                MESSAGEDISPLAY('','Enter a Title','');

            });

        });

    });  

};

const NEWSPAGE=()=>{

    DELETEDATA('','Title');
    DELETEDATA('','Story');
    DELETEDATA('','FullStory');
    DELETEDATA('','ImageOne');
    DELETEDATA('','ImageTwo');
    DELETEDATA('','ImageThree');
    DELETEDATA('','ImageFour');

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'News','',()=>{

    },(ELEMENT)=>{

        ROUNDINPUT(ELEMENT,'','','transparent','Enter Post Title','',(data)=>{

            STOREDATA('','Title',data);

        });

        ROUNDINPUT(ELEMENT,'','','transparent','Enter Short Story','',(data)=>{

            STOREDATA('','Story',data);

        });

        TEXTAREA(ELEMENT,'','95%','50%','Enter Full Story','',(data)=>{

            STOREDATA('','FullStory',data);

        });

        CENTERTEXT(ELEMENT,'','Click Images to Update','','','2% auto',()=>{

        });

        IMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'95%','500px','2%',(ELE)=>{

            IMAGEPICKER(ELE,(data)=>{

                STOREDATA('','ImageOne',data);

            });

        });

        IMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'95%','500px','2%',(ELE)=>{

            IMAGEPICKER(ELE,(data)=>{

                STOREDATA('','ImageTwo',data);

            });

        });

        IMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'95%','500px','2%',(ELE)=>{

            IMAGEPICKER(ELE,(data)=>{

                STOREDATA('','ImageThree',data);

            });

        });

        IMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'95%','500px','2%',(ELE)=>{

            IMAGEPICKER(ELE,(data)=>{

                STOREDATA('','ImageFour',data);

            });

        });

        IMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'95%','500px','2%',(ELE)=>{

            IMAGEPICKER(ELE,(data)=>{

                STOREDATA('','ImageOne',data);

            });

        });

        BUTTON(ELEMENT,'50%','50px','forestgreen','','Post','5% auto',()=>{

            CONDITION(sessionStorage.getItem('Title'),()=>{

                CONDITION(sessionStorage.getItem('Story'),()=>{

                    CONDITION(sessionStorage.getItem('FullStory'),()=>{

                        CONDITION(sessionStorage.getItem('ImageOne'),()=>{

                            CONDITION(navigator.onLine,()=>{

                                MESSAGEDISPLAY('','Please Wait','');

                                const HEADER=['Name','Short','Long','Main','One','Two','Three','Time','Posted','PosterImage','Device','Approved'];

                                DEVICE((datata)=>{

                                    const INFO=[sessionStorage.getItem('Title'),sessionStorage.getItem('Story'),sessionStorage.getItem('FullStory'),sessionStorage.getItem('ImageOne'),sessionStorage.getItem('ImageTwo'),sessionStorage.getItem('ImageThree'),sessionStorage.getItem('ImageFour'),new Date(),'Admin','',datata,''];
                                
                                    INSERTDATA(API,'ElgonNews',HEADER,INFO,()=>{
    
                                        DOWNLOADSAVEINDEX(API,'ElgonNews','News',()=>{
    
                                            ROUTE('',HOMEPAGE,'HOMEPAGE');
    
                                        });

                                        HIDER(3000,()=>{

                                            ROUTE('',HOMEPAGE,'HOMEPAGE');

                                        })
    
                                    },()=>{
    
                                        MESSAGEDISPLAY('','Failed to Post Try Again','');
    
                                    });

                                });

                            },()=>{
            
                                MESSAGEDISPLAY('','Check Your Internet','');
                
                            });

                        },()=>{
        
                            MESSAGEDISPLAY('','Enter First Image','');
            
                        });

                    },()=>{
    
                        MESSAGEDISPLAY('','Enter FullStory','');
        
                    });

                },()=>{

                    MESSAGEDISPLAY('','Enter a Short Story','');
    
                });

            },()=>{

                MESSAGEDISPLAY('','Enter a Title','');

            });

        });

    }); 

};

const DATALOADER=()=>{

    DOWNLOADSAVEINDEX(API,'ElgonPosts','Posts',(data)=>{

        RELOAD();
        
    });

    DOWNLOADSAVEINDEX(API,'ElgonServices','Videos',(data)=>{

    });

    DOWNLOADSAVEINDEX(API,'ElgonNews','LifeStories',(data)=>{

    });

};