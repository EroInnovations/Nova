const API='https://docs.google.com/spreadsheets/d/1QrPMVra0WEB1L_JWpZyvm1WRoVaSlJk7KFiJiCOgYOQ/edit?usp=sharing';

const NOVASTART=()=>{

    VISITOR(API,'Visitors');

    HOSTINGCHECKER(()=>{
        
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

    })

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

    const DO=`Elite Robust Ontology is a lead Cloud Native Tech Based Company Located In Mbale City In Northroad Around Peoples Clinic .

    <br><br>

    We Develop Website For Personal and Business Usage,Android Apps and Desktops Softwares.

    <br><br>

    Lets Allow You Imagine and We Innovate and Let You Inspire the rest to Follow the Trend.

    <br><br>

    Don't Miss Out On Our Latest Updates That are Posted On the Elite Andrioid App and Keep Up to date.

    <br><br>

    Download them Now and Join the Trend of Cloud Native Software and Reap its Benefits

    `;

    CLEAR('');

    FULLSCROLLVIEW('',' ',(ELEMENT)=>{

        IMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'250px','250px','1% auto',()=>{

        });

        NAVTEMPLATE(ELEMENT,'','90%','50px','',(ELEMENTS)=>{

            TEXT(ELEMENTS,'','Developers','','20px','',()=>{

            });

            TEXT(ELEMENTS,'','Products','','20px','',()=>{

                ROUTE(' ',DESKTOPCONTACTUSPAGE,'DESKTOPHOMEPAGE');

            });

            TEXT(ELEMENTS,'','Contact Us','','20px','',()=>{

            });

        });

        LEFTTEXT(ELEMENT,'','About Us','','20px','2rem','1% auto',()=>{

        });

        LEFTTEXT(ELEMENT,'',DO,'','20px','2rem','1% auto',()=>{

        });

        LEFTTEXT(ELEMENT,'h3','Our Services','','20px','2rem','1% auto',()=>{

        });

        NAVTEMPLATE(ELEMENT,'#000','90%','300px','',(ELEMENTS)=>{

            VIEW(ELEMENTS,'red','30%','90%','',(ELEMENTSE)=>{

                STYLED(ELEMENTSE,'overflow','hidden');

                IMAGE(ELEMENTSE,'https://th.bing.com/th/id/OIP.WjGRdMeiefZGAuQMXBLsTAHaFE?rs=1&pid=ImgDetMain','100%','100%','',()=>{

                });

                FOOTER(ELEMENTSE,'#00000050','100%','50px',(ELEMENT)=>{

                    CENTERTEXT(ELEMENT,'h2','App Development','','20px','','',()=>{

                    });

                });

            });

            VIEW(ELEMENTS,'red','30%','90%','',(ELEMENTSE)=>{

                STYLED(ELEMENTSE,'overflow','hidden');

                IMAGE(ELEMENTSE,'https://sys-media.moonlyte.com/BlogImages/Blog63-image1.webp','100%','100%','',()=>{

                });

                FOOTER(ELEMENTSE,'#00000050','100%','50px',(ELEMENT)=>{

                    CENTERTEXT(ELEMENT,'h2','WebSite Development','','20px','','',()=>{

                    });

                });

            });

            VIEW(ELEMENTS,'red','30%','90%','',(ELEMENTSE)=>{

                STYLED(ELEMENTSE,'overflow','hidden');

                IMAGE(ELEMENTSE,'https://th.bing.com/th/id/OIP.ojtJH67R0wXy7dqjlZ_wFQAAAA?rs=1&pid=ImgDetMain','100%','100%','',()=>{

                });

                FOOTER(ELEMENTSE,'#00000050','100%','50px',(ELEMENT)=>{

                    CENTERTEXT(ELEMENT,'h2','System Development','','20px','','',()=>{

                    });

                });

            });

        });

        BUTTONIMAGE(ELEMENT,'forestgreen','Download','',WHITEDOWNLOADICON,'50px','',()=>{

            WEBSITE('https://eroinnovations.site/apps/elite.apk');

        });

    });

};

const DESKTOPCONTACTUSPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',DESKTOPHOMEPAGE,'DESKTOPHOMEPAGE');

    },'Reach Us','',()=>{

    },(ELEMENT)=>{

        CENTERTEXT(ELEMENT,'h2','Get In Touch Via','','','',()=>{

        });

        CENTERVIEW(ELEMENT,'',()=>{

        });

        CENTERTEXT(ELEMENT,'h2','OR','','','',()=>{

        });

        NAVTEMPLATE(ELEMENT,'','90%','50px','',(ELEMENTS)=>{

            ICON(ELEMENTS,WHITEGMAILICON,'20px','20px','',()=>{

            });

            ICON(ELEMENTS,WHITEINSTAGRAMICON,'20px','20px','',()=>{

            });

            ICON(ELEMENTS,WHITEPHONEICON,'20px','20px','',()=>{

            });

        });

    });

};