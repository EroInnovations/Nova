const API='https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing';

const TEXTCOLOR=localStorage.getItem('TextColor');

const ELEMENTCOLOR=localStorage.getItem('AppTheme');

const NOVASTART=()=>{

    APPMODE(localStorage.getItem('AppTheme')||'#6b9c30');

    DOWNLOADSAVEINDEX(API,'Catergory','Catergory',()=>{

        DOWNLOADSAVEINDEX(API,'Products','Products',()=>{

            CONDITION(localStorage.getItem('AppTheme'),()=>{

                ROUTE('',HOMEPAGE,'HOMEPAGE');

            },()=>{

                ROUTE('',THEMEPAGE,'THEMEPAGE');

            });

        });

    });

    CONDITION(localStorage.getItem('AppTheme'),()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },()=>{

        ROUTE('',THEMEPAGE,'THEMEPAGE');

    });


};

const THEMEPAGE=()=>{

    CLEAR('');

    CENTERTEXT('','h1','App Theme','#ffffff','30px','40% auto auto',()=>{

    });

    CENTERTEXT('','h1','Choose Your App Color','#ffffff','15px','5% auto ',()=>{

    });

    BUTTONIMAGE('','#333333','Dark Theme','#ffffff',WHITEMOONICON,'50px','1% auto',()=>{

        STOREDATA(' ','AppTheme','#333333');

        STOREDATA(' ','TextColor','#ffffff');

        RELOAD();

    });

    BUTTONIMAGE('','#cdcdcd','Light Theme','#333333',BLACKSUNICON,'50px','2% auto',()=>{

        STOREDATA(' ','AppTheme','#cdcdcd');

        STOREDATA(' ','TextColor','#000');

        RELOAD();

    });

    BUTTONIMAGE('','#33333350','Normal Theme','#ffffff',QELMODENORMAL,'50px','2% auto',()=>{

        STOREDATA(' ','AppTheme','#6b9c30'); 

        STOREDATA(' ','TextColor','#ffffff');

        RELOAD();

    });

};

const BACKICONCOLOR=(callback)=>{

    CHECKER(localStorage.getItem('AppTheme') === '#333333' ,()=>{

        callback(WHITEBACKICON);

    });

    CHECKER(localStorage.getItem('AppTheme') === '#cdcdcd' ,()=>{

        callback(BLACKBACKICON);

    });

    CHECKER(localStorage.getItem('AppTheme') === '#6b9c30' ,()=>{

        callback(WHITEBACKICON);

    });

};

const HOMEPAGE=()=>{

    CLEAR('');

    FULLSCROLLVIEW('','transparent',(ELEMENT)=>{

        NAVTEMPLATE(ELEMENT,'red','95%','50px','5%  auto',()=>{

        })
        
    });

    ROUNDFOOTER('','#333','95%','50px','10px','auto 2% 2%  ',(ELEMENT)=>{

        ICON(ELEMENT,WHITEGRIDICON,'20px','20px','',()=>{

            ROUTE(' ',CATERGORIESPAGE,'HOMEPAGE');

        });


        ICON(ELEMENT,WHITESAVEDICON,'20px','20px','',()=>{

            ROUTE(' ',SAVEDITEMSPAGE,'HOMEPAGE');

        });

        ICON(ELEMENT,WHITESETTINGSICON,'20px','20px','',()=>{

            ROUTE(' ',SETTINGSPAGE,'HOMEPAGE');

        });

    });

};

const CATERGORIESPAGE=()=>{

    HOMEHEADERTEMPLATE('',' ',' ',(ELEMENT)=>{

        BACKICONCOLOR((Data)=>{

            LEFTIMAGE(ELEMENT,Data,'20px','20px','1%','',()=>{

                ROUTE('',HOMEPAGE,'HOMEPAGE');
    
            });

        });
        
        RIGHTTEXT(ELEMENT,'','Catergories',TEXTCOLOR,'','2%','',()=>{

        });

    },(ELEMENT)=>{

        GETINDEXEDDATA('Catergory','Catergory',(data)=>{

            CHECKER(data.Approved,()=>{

                TABLEVIEW(ELEMENT,'transparent','30%','30%','','1%',(ELEMENTS)=>{

                    FREEIMAGE(ELEMENTS,data.ProductImage,'100%','100%','0',(ELEMS)=>{
    
                        STYLED(ELEMS,'border-radius','10px');
                        STYLED(ELEMS,'position','absolute');
                        STYLED(ELEMS,'left','0');
                        STYLED(ELEMS,'right','0');
                        STYLED(ELEMS,'top','0');
                        STYLED(ELEMS,'bottom','0');
    
                    });
    
                    FOOTER(ELEMENTS,'#333333','100%','70px',(ELEMS)=>{
    
                        STYLED(ELEMS,'border-radius','0px 0px 10px 10px');
    
                        TEXT(ELEMS,'',data.ProductName,'#ffffff','16px','',()=>{
    
                        });
    
                    });
    
                }); 

            });

            console.log(data)

        });

    });

};

const SAVEDITEMSPAGE=()=>{

    HOMEHEADERTEMPLATE('',' ',' ',(ELEMENT)=>{

        BACKICONCOLOR((Data)=>{

            LEFTIMAGE(ELEMENT,Data,'20px','20px','1%','',()=>{

                ROUTE('',HOMEPAGE,'HOMEPAGE');
    
            });

        });

        RIGHTTEXT(ELEMENT,'','Favorites',TEXTCOLOR,'','2%','',()=>{

        });

    },(ELEMENT)=>{

    });

};

const SETTINGSPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    HOMEHEADERTEMPLATE('',' ',' ',(ELEMENT)=>{

        BACKICONCOLOR((Data)=>{

            LEFTIMAGE(ELEMENT,Data,'20px','20px','1%','',()=>{

                ROUTE('',HOMEPAGE,'HOMEPAGE');
    
            });

        });

        RIGHTTEXT(ELEMENT,'','Preferences',TEXTCOLOR,'','2%','',()=>{

        });

    },(ELEMENT)=>{

        VIEW(ELEMENT,'red','95%','300px','',(ELEMENTS)=>{

            STYLED(ELEMENTS,'border-radius','10px');

        });

        BUTTONIMAGE(ELEMENT,ELEMENTCOLOR,'Community',TEXTCOLOR,WHITEGROUPICON,'50px','2% auto',()=>{

        });

        BUTTONIMAGE(ELEMENT,ELEMENTCOLOR,'Sellers',TEXTCOLOR,WHITECREATEDONICON,'50px','2% auto',()=>{

        });

        BUTTONIMAGE(ELEMENT,ELEMENTCOLOR,'App Theme',TEXTCOLOR,WHITECONTRASTICON,'50px','2% auto',()=>{

           ROUTE(' ',BACKTHEMEPAGE,'SETTINGSPAGE');
    
        });

        BUTTONIMAGE(ELEMENT,ELEMENTCOLOR,'Terms and Conditions',TEXTCOLOR,WHITEPRIVACYPOLICYICON,'50px','2% auto',()=>{

        });

        BUTTONIMAGE(ELEMENT,ELEMENTCOLOR,'App Help',TEXTCOLOR,WHITEHELPICON,'50px','2% auto',()=>{

        });

        BUTTONIMAGE(ELEMENT,ELEMENTCOLOR,'Contact Us',TEXTCOLOR,WHITEPHONEICON,'50px','2% auto',()=>{

        });

        BUTTONIMAGE(ELEMENT,ELEMENTCOLOR,'App Sync',TEXTCOLOR,WHITERETRYICON,'50px','2% auto',()=>{

            RELOAD()
     
        });

        BUTTONIMAGE(ELEMENT,ELEMENTCOLOR,'Updates',TEXTCOLOR,WHITEMOBILEDEVELOPMENTICON,'50px','2% auto',()=>{

        });

    });

};

const BACKTHEMEPAGE=()=>{

    HOMEHEADERTEMPLATE('',' ',' ',(ELEMENT)=>{

        BACKICONCOLOR((Data)=>{

            LEFTIMAGE(ELEMENT,Data,'20px','20px','1%','',()=>{

                ROUTE('',SETTINGSPAGE,'SETTINGSPAGE');
    
            });

        });

        RIGHTTEXT(ELEMENT,'','Themes',TEXTCOLOR,'','2%','',()=>{

        });

    },(ELEMENT)=>{

        BUTTONIMAGE(ELEMENT,'#333333','Dark Theme','#ffffff',WHITEMOONICON,'50px','1% auto',()=>{

            STOREDATA(' ','AppTheme','#333333');
    
            STOREDATA(' ','TextColor','#ffffff');
    
            RELOAD();
    
        });
    
        BUTTONIMAGE(ELEMENT,'#cdcdcd','Light Theme','#333333',BLACKSUNICON,'50px','2% auto',()=>{
    
            STOREDATA(' ','AppTheme','#cdcdcd');
    
            STOREDATA(' ','TextColor','#000');
    
            RELOAD();
    
        });
    
        BUTTONIMAGE(ELEMENT,'#33333350','Normal Theme','#ffffff',QELMODENORMAL,'50px','2% auto',()=>{
    
            STOREDATA(' ','AppTheme','#6b9c30'); 
    
            STOREDATA(' ','TextColor','#ffffff');
    
            RELOAD();
    
        });

    });

};
