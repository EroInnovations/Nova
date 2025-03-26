const API='https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing';

const TEXTCOLOR='#ffffff';

const NOVASTART=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

    APPUPDATER();

};

const HOMEPAGE=()=>{

    APPUPDATER();

    HOMEHEADERTEMPLATE('',' ','',(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'h2','Qel Medicals',TEXTCOLOR,'20px','','',()=>{

        });

        RIGHTIMAGE(ELEMENT,WHITEUSERICON,'25px','25px','','',()=>{

            ROUTE(' ',USERACCOUNTPAGE,'HOMEPAGE');

        });

    },(ELEMENT)=>{

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

};

const USERACCOUNTPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Profile','','',()=>{

    });

};

const PRODUCTPAGE=()=>{

    DEJSON(sessionStorage.getItem('Product'),(data)=>{

        LEFTTEXTBACKHEADERBODY('',()=>{

            ROUTE('',HOMEPAGE,'HOMEPAGE');
    
        },data.ProductName,'','',(ELEMENT)=>{

            IMAGE(ELEMENT,data.ImageOne,'50%','250px','2% auto',()=>{

            });

            CENTERTEXT(ELEMENT,'h2','Price:'+data.ProductPrice,TEXTCOLOR,'20px','','2% auto',()=>{

            });

            LEFTTEXT(ELEMENT,'h2','About',TEXTCOLOR,'20px','1rem','3%',()=>{

            });

            TEXT(ELEMENT,'',data.ProductDetails,TEXTCOLOR,'20px','1rem','3%',()=>{

            });

            ROUNDBUTTON(ELEMENT,'50%','50px','Orange','','Buy',()=>{

            });
    
        });

    });

};