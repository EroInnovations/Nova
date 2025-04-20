const API='https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing';

const NOVASTART=()=>{

    DOWNLOADSAVEINDEX(API,'Catergory','Catergory',()=>{

        DOWNLOADSAVEINDEX(API,'Products','Products',()=>{

            ROUTE('',HOMEPAGE,'HOMEPAGE');
        
        });

    });

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    CLEAR('');

    FULLSCROLLVIEW('','transparent',(ELEMENT)=>{

        CENTERTEXT(ELEMENT,'','Installing Items to Device','','20px','70% auto',()=>{

        });

        GETINDEXED('Catergory','Catergory',(data)=>{

            CLEAR(ELEMENT);

            console.log(data)

        });

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

        LEFTIMAGE(ELEMENT,WHITEBACKICON,'20px','20px','1%','',()=>{

            ROUTE('',HOMEPAGE,'HOMEPAGE');

        });

        RIGHTTEXT(ELEMENT,'','Catergories','#ffffff','','2%','',()=>{

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

        LEFTIMAGE(ELEMENT,WHITEBACKICON,'20px','20px','1%','',()=>{

            ROUTE('',HOMEPAGE,'HOMEPAGE');

        });

        RIGHTTEXT(ELEMENT,'','Favorites','#ffffff','','2%','',()=>{

        });

    },(ELEMENT)=>{

    });

};

const SETTINGSPAGE=()=>{

    HOMEHEADERTEMPLATE('',' ',' ',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITEBACKICON,'20px','20px','1%','',()=>{

            ROUTE('',HOMEPAGE,'HOMEPAGE');

        });

        RIGHTTEXT(ELEMENT,'','Preferences','#ffffff','','2%','',()=>{

        });

    },(ELEMENT)=>{

    });

};