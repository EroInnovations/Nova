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