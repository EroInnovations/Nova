const API='https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing';

const TEXTCOLOR=localStorage.getItem('TextColor');

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

            TABLEVIEW(ELEMENT,' ','45%','40%','','2.5%',(ELEMENTS)=>{

                FREEIMAGE(ELEMENTS,data.ProductImage,'100%','100%','0',(ELEMS)=>{

                    STYLED(ELEMS,'border-radius','10px');
                    STYLED(ELEMS,'position','absolute');
                    STYLED(ELEMS,'left','0');
                    STYLED(ELEMS,'right','0');
                    STYLED(ELEMS,'top','0');
                    STYLED(ELEMS,'bottom','0');

                });

                FOOTER(ELEMENTS,'#333333','100%','80px',(ELEMS)=>{

                    STYLED(ELEMS,'border-radius','0px 0px 10px 10px');

                    TEXT(ELEMS,'',data.ProductName,'#ffffff','20px','',()=>{

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

    HOMEHEADERTEMPLATE('',' ',' ',(ELEMENT)=>{

        BACKICONCOLOR((Data)=>{

            LEFTIMAGE(ELEMENT,Data,'20px','20px','1%','',()=>{

                ROUTE('',HOMEPAGE,'HOMEPAGE');
    
            });

        });

        RIGHTTEXT(ELEMENT,'','Preferences',TEXTCOLOR,'','2%','',()=>{

        });

    },(ELEMENT)=>{

    });

};