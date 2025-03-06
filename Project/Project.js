const NOVASTART=()=>{

    APPMODE('#06173b');

    SCREENWIDTH((Width)=>{

        CONDITION(Width <= 800 ,()=>{

            ROUTE('',MOBILEWEBSITE,'MOBILEWEBSITE');

        },()=>{

            ROUTE('',DESKTOPWEBSITE,'DESKTOPWEBSITE');

        });

    });

};

const MOBILEWEBSITE=()=>{

    CLEAR('');

    ROUTE('',MOBILEHOMEPAGE,'MOBILEHOMEPAGE');

};

const MOBILEHOMEPAGE=()=>{

    CLEAR('');

    HEADER('',' ',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'50px','50px','2%',()=>{

        });

        CENTERTEXT(ELEMENT,'h3','Ero Innovations','','20px',()=>{

        });

        RIGHTIMAGE(ELEMENT,WHITEMENUICON,'25px','25px','5%',(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                MENUPAGE('');

            });

        });

    });

    FULLSCROLLVIEW('',' ',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        IMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'93%','50%',()=>{

        });

        CENTERTEXT(ELEMENT,'h5','About Us','','20px',()=>{

        });

        BREAK(ELEMENT);

        const MESSAGES='Software Development Company Located In Mbale City.<br><br> We Develop Android Apps,Desktop Apps and WebSites. <br><br> We offer Cloud Based Systems that are scalable and Easy To Use. <br><br> We let You Imagine ,We Build It and Inspire the Rest. <br><br> Get Your Dream App Built Today Using the Cutting Edge Cloud Based Softwares that are approved to The European Union and More .<br><br> Click the Button Below Today to get Started.';

        LEFTTEXT(ELEMENT,'p',MESSAGES,'','16px','',()=>{

        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Order Now','',WHITEPHONEICON,'50px',()=>{

            GMAIL('eroinnovations9@gmail.com');

        });

        BREAK(ELEMENT);BREAK(ELEMENT);

        CENTERTEXT(ELEMENT,'h5','Mission','','20px',()=>{

        });

        BREAK(ELEMENT);

        const MESSAGEONE='Our Mission is to create Long Life Solutions that are solve a Problem in society with a permanet method not a temporary Solution.';
        
        LEFTTEXT(ELEMENT,'p',MESSAGEONE,'','16px','',()=>{

        });

        BREAK(ELEMENT);

        FOOTER(ELEMENT,' ','100%','50px',(ELEMENTS)=>{

            STYLED(ELEMENTS,'position','relative');

            CENTERTEXT(ELEMENTS,'h5','&copy Ero Innovations 2025','','20px',()=>{

            });

        });

       BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);

    });

};

const MENUPAGE=()=>{

    FULLSCROLLVIEW('','#06173b',(ELEMENT)=>{

        STYLED(ELEMENT,'width','50%');

        STYLED(ELEMENT,'display','block');

        STYLED(ELEMENT,'overflow','hidden');

        STYLED(ELEMENT,'border-right','1px solid #cdcdcd');

        HEADER(ELEMENT,' ',(ELEMENTS)=>{

            STYLED(ELEMENTS,'position','relative');

            LEFTIMAGE(ELEMENTS,EROINNOVATIONSLOGOONE,'50px','50px','2%',()=>{
    
            });
    
            RIGHTIMAGE(ELEMENTS,WHITECLOSEICON,'25px','25px','5%',(ELEMENTS)=>{
    
                CLICK(ELEMENTS,()=>{

                    STYLED(ELEMENT,'display','none');
                    
                });
    
            });
    
        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Apps','',WHITEAPPICON,'50px',(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                ROUTE(' ',MOBILEAPPSPAGE,'MOBILEHOMEPAGE');

            });
 
        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Systems','',WHITESECRETCODEICON,'50px',(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                ROUTE(' ',MOBILESYSTEMPAGE,'MOBILEHOMEPAGE');

            });

           
        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Docs','',WHITEPENCILICON,'50px',(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                ROUTE(' ',MOBILEDOCSPAGE,'MOBILEHOMEPAGE');

            });

        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Help','',WHITEINFOICON,'50px',(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                ROUTE(' ',MOBILEHELPPAGE,'MOBILEHOMEPAGE');

            });

        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Sync','',WHITERETRYICON,'50px',(ELEMENT)=>{

            RELOAD();

        });

        FOOTER(ELEMENT,' ','100%','50px',(ELEMENTS)=>{

            CENTERTEXT(ELEMENTS,'h5','&copy Ero Innovations 2025','','13px',()=>{

            });

        });

    });

};

const MOBILEAPPSPAGE=()=>{

    CLEAR('');

    HEADER('',' ',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITEBACKICON,'20px','20px','2%',(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE('',MOBILEHOMEPAGE,'MOBILEHOMEPAGE');

            });

        });

        CENTERTEXT(ELEMENT,'h3','Apps','','20px',()=>{

        });

        RIGHTIMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'50px','50px','2%',()=>{

        });

    });

    FULLSCROLLVIEW('',' ',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

    });

};

const MOBILESYSTEMPAGE=()=>{

    CLEAR('');

    HEADER('',' ',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITEBACKICON,'20px','20px','2%',(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE('',MOBILEHOMEPAGE,'MOBILEHOMEPAGE');

            });

        });

        CENTERTEXT(ELEMENT,'h3','Systems','','20px',()=>{

        });

        RIGHTIMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'50px','50px','2%',()=>{

        });

    });

    FULLSCROLLVIEW('',' ',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

    });

};

const MOBILEDOCSPAGE=()=>{

    CLEAR('');

    HEADER('',' ',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITEBACKICON,'20px','20px','2%',(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE('',MOBILEHOMEPAGE,'MOBILEHOMEPAGE');

            });

        });

        CENTERTEXT(ELEMENT,'h3','Docs','','20px',()=>{

        });

        RIGHTIMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'50px','50px','2%',()=>{

        });

    });

    FULLSCROLLVIEW('',' ',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

    });

};

const MOBILEHELPPAGE=()=>{

    CLEAR('');

    HEADER('',' ',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITEBACKICON,'20px','20px','2%',(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE('',MOBILEHOMEPAGE,'MOBILEHOMEPAGE');

            });

        });

        CENTERTEXT(ELEMENT,'h3','Help','','20px',()=>{

        });

        RIGHTIMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'50px','50px','2%',()=>{

        });

    });

    FULLSCROLLVIEW('',' ',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        CENTERTEXT(ELEMENT,'h3','Intouch Today ','','20px',()=>{

        });

        LEFTTEXT(ELEMENT,'p','Please Get Intouch With Us to Get More Details Via','','15px','',()=>{

        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Gmail ','',WHITEGMAILICON,'50px',()=>{

            GMAIL('eroinnovations9@gmail.com');

        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Instagram','',WHITEINSTAGRAMICON,'50px',()=>{

            GMAIL('eroinnovations9@gmail.com');

        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Contact Us ','',WHITEPHONEICON,'50px',()=>{

            GMAIL('eroinnovations9@gmail.com');

        });

    });

};

const DESKTOPWEBSITE=()=>{

    CLEAR('');

};

'44a683c3-6ba2-4377-936c-898176776656'