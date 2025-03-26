const API='https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing';

const TEXTCOLOR='#ffffff';

const NOVASTART=()=>{

    APPMODE('#ffffff')

    ROUTE('',HOMEPAGE,'HOMEPAGE');

    APPUPDATER();

};

const HOMEPAGE=()=>{

    APPUPDATER();

    HOMEHEADERTEMPLATE('','#0F990F','',(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'h2','Qel Medicals',TEXTCOLOR,'20px','','',()=>{

        });

        RIGHTIMAGE(ELEMENT,WHITEUSERICON,'25px','25px','','',()=>{

            ROUTE(' ',USERACCOUNTPAGE,'HOMEPAGE');

        });

    },(ELEMENT)=>{

        FOOTER(ELEMENT,'#0F990F','','25px',(ELEMENTS)=>{

            TEXT(ELEMENTS,'h2','© Qel MediStore 2025','','15px','','',()=>{

            });

        })

        PRODUCTS(ELEMENT);

    });

};

const APPUPDATER=()=>{

    GETDATA(API,'Products',(data)=>{

        const MYDATA=
            {
                "Name":'QelProducts',
                'data':data
            }
        
        STOREINDEXED ('QelProducts', 'QelProducts',MYDATA,(data)=>{

            CHECKER(data === false,()=>{

                UPDATEINDEX('QelProducts', 'QelProducts', MYDATA,()=>{

                });

            } );

            CHECKER(data === true,()=>{

                ROUTE('',HOMEPAGE,'HOMEPAGE');

            } );
            
        });

    },(data)=>{

        console.log(data);

    });

};

const PRODUCTS=(ELEMENT)=>{

    GETINDEXEDDATA('QelProducts', 'QelProducts', (data)=>{

        CHECKER(data.Approved,()=>{

            VIEW(ELEMENT,'#09cc09','45%','45%','2% ',(ELEMENTS)=>{

                STYLED(ELEMENTS,'display','inline-table');
    
                IMAGE(ELEMENTS,data.ImageOne,'100%','250px','',()=>{
    
                    JSONIFICATION(data,(MyData)=>{
    
                        STOREDATA('','Product',MyData);
    
                        ROUTE(' ',PRODUCTPAGE,'HOMEPAGE');
    
                    });
    
                });
    
                FOOTER(ELEMENTS,' ','','',(ELEMENTSE)=>{
    
                    TEXT(ELEMENTSE,'',data.ProductName,'','14.1px','0.5rem','',()=>{
    
                    });
    
                    RIGHTTEXT(ELEMENTSE,'',data.ProductPrice,'white','16px','0.5rem','',()=>{
    
                    });
    
                });
    
            });

        });

    });

};

const USERACCOUNTPAGE=()=>{

    HOMEHEADERTEMPLATE('','#0F990F','',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITESINGLEBACKICON,'20px','20px','0.1rem','',()=>{

            ROUTE('',HOMEPAGE,'HOMEPAGE');

        });

        RIGHTTEXT(ELEMENT,'h2','Profile',TEXTCOLOR,'20px','','',()=>{

        });

    },(ELEMENT)=>{

        FOOTER(ELEMENT,'#0F990F','','25px',(ELEMENTS)=>{

            TEXT(ELEMENTS,'h2','© Qel MediStore 2025','','15px','','',()=>{

            });

        })

    });

};

const PRODUCTPAGE=()=>{

    DEJSON(sessionStorage.getItem('Product'),(data)=>{

        HOMEHEADERTEMPLATE('','#0F990F','',(ELEMENT)=>{

            LEFTIMAGE(ELEMENT,WHITESINGLEBACKICON,'20px','20px','0.1rem','',()=>{
    
                ROUTE('',HOMEPAGE,'HOMEPAGE');
    
            });

            RIGHTTEXT(ELEMENT,'h2',data.ProductName,TEXTCOLOR,'20px','','',()=>{
    
            });

        },(ELEMENT)=>{
    
            IMAGE(ELEMENT,data.ImageOne,'50%','250px','2% auto',()=>{

            });

            CENTERTEXT(ELEMENT,'h2','Price:'+data.ProductPrice,'#0F990F','20px','','2% auto',()=>{

            });

            LEFTTEXT(ELEMENT,'h2','About','#0F990F','20px','1rem','3%',()=>{

            });

            TEXT(ELEMENT,'',data.ProductDetails,'#0F990F','20px','1rem','3%',()=>{

            });

            ROUNDBUTTON(ELEMENT,'50%','50px','#0F990F','','Buy',()=>{

            });

            FOOTER(ELEMENT,'#0F990F','','25px',(ELEMENTS)=>{

                TEXT(ELEMENTS,'h2','© Qel MediStore 2025','','15px','','',()=>{
    
                });
    
            })
    
        });

    });

};