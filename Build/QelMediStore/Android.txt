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

    DELETEDATA('','PageBack');

    HOMEFOOTERTEMPLATE('',' ',(ELEMENT)=>{

        NAVTEMPLATE(ELEMENT,'transparent','98%','50px','3% auto',(ELEMENT)=>{

            LEFTIMAGE(ELEMENT,WHITELOCATIONICON,'25px','23px','1%','',()=>{

                ROUTE(' ',USERLOCATIONPAGE,HOMEPAGE);

            });

            LEFTTEXT(ELEMENT,'p',localStorage.getItem('UserLocation')||'Kampala','#cdcdcd','18px','-11%','',()=>{

                ROUTE(' ',USERLOCATIONPAGE,HOMEPAGE);

            });

            CENTERTEXT(ELEMENT,'h1','Qel','','20px','auto 19%',()=>{

            });

            RIGHTIMAGE(ELEMENT,WHITEUSERICON,'28px','28px','1%','',()=>{

                ROUTE('',USERACCOUNTPAGE,'HOMEPAGE');

            });

        });

        INLINEVIEW(ELEMENT,'#00000010','98%','250px','1%','1%',(ELEMENT)=>{

            GETINDEXEDDATA('Products','Products',(data)=>{

                CHECKER(data.Approved,()=>{

                    INLINEVIEW(ELEMENT,'orange','80%','200px','1%','auto 5%',(ELEMENT)=>{

                    });

                });

            });

        });

        LEFTTEXT(ELEMENT,'h1','Best Sellers','#cdcdcd','22px','2%','3% auto',()=>{

        });

        INLINEVIEW(ELEMENT,'#00000010','98%','250px','1%','2%',(ELEMENT)=>{

            GETINDEXEDDATA('Products','Products',(data)=>{

                CHECKER(data.Approved,()=>{

                    INLINEVIEW(ELEMENT,'#cdcdcd10','45%','200px','1%','auto 2%',(ELEMENTS)=>{

                        IMAGE(ELEMENTS,data.ProductImage,'95%','90%','',()=>{
        
                        });
        
                        NAVTEMPLATE(ELEMENTS,'forestgreen','50px','40px','1%',(ELEMENTES)=>{
        
                            STYLED(ELEMENTES,'position','absolute');
                            STYLED(ELEMENTES,'right','0');
                            STYLED(ELEMENTES,'border-radius','0px 0px 10px 10px');
        
                            CENTERTEXT(ELEMENTES,'h1',data.ProductNumber,'','20px','',()=>{
        
                            });
        
                        });
        
                        FOOTER(ELEMENTS,'#000000','100%','50px',(ELEMENTIS)=>{
        
                            LEFTTEXT(ELEMENTIS,'',data.ProductName,'orange','13px','2%','2% auto',()=>{
        
                            });
        
                            BOTTOMTEXT(ELEMENTIS,'','UGX '+data.ProductPrice,'','20px','5%','auto 5%',()=>{
        
                            });
        
                        });
    
                        CLICK(ELEMENTS,()=>{
    
                            JSONIFICATION(data,(MyData)=>{
    
                                STOREDATA('','CurrentProduct',MyData);
    
                                ROUTE(' ',PRODUCTDETAILSPAGE,'HOMEPAGE');
    
                            });
    
                        });
        
                    });

                });

            });

        });

        LEFTTEXT(ELEMENT,'h1','Best Sellers','#cdcdcd','22px','2%','3% auto',()=>{

        });

        INLINEVIEW(ELEMENT,'#00000010','98%','250px','1%','2%',(ELEMENT)=>{

            GETINDEXEDDATA('Products','Products',(data)=>{

                CHECKER(data.Approved,()=>{

                    INLINEVIEW(ELEMENT,'#cdcdcd10','45%','200px','1%','auto 2%',(ELEMENTS)=>{

                        IMAGE(ELEMENTS,data.ProductImage,'95%','90%','',()=>{
        
                        });
        
                        NAVTEMPLATE(ELEMENTS,'forestgreen','50px','40px','1%',(ELEMENTES)=>{
        
                            STYLED(ELEMENTES,'position','absolute');
                            STYLED(ELEMENTES,'right','0');
                            STYLED(ELEMENTES,'border-radius','0px 0px 10px 10px');
        
                            CENTERTEXT(ELEMENTES,'h1',data.ProductNumber,'','20px','',()=>{
        
                            });
        
                        });
        
                        FOOTER(ELEMENTS,'#000000','100%','50px',(ELEMENTIS)=>{
        
                            LEFTTEXT(ELEMENTIS,'',data.ProductName,'orange','13px','2%','2% auto',()=>{
        
                            });
        
                            BOTTOMTEXT(ELEMENTIS,'','UGX '+data.ProductPrice,'','20px','5%','auto 5%',()=>{
        
                            });
        
                        });
    
                        CLICK(ELEMENTS,()=>{
    
                            JSONIFICATION(data,(MyData)=>{
    
                                STOREDATA('','CurrentProduct',MyData);
    
                                ROUTE(' ',PRODUCTDETAILSPAGE,'HOMEPAGE');
    
                            });
    
                        });
        
                    });

                });

            });

        });

        LEFTTEXT(ELEMENT,'h1','Best Sellers','#cdcdcd','22px','2%','3% auto',()=>{

        });

        INLINEVIEW(ELEMENT,'#00000010','98%','250px','1%','2%',(ELEMENT)=>{

            GETINDEXEDDATA('Products','Products',(data)=>{

                CHECKER(data.Approved,()=>{

                    INLINEVIEW(ELEMENT,'#cdcdcd10','45%','200px','1%','auto 2%',(ELEMENTS)=>{

                        IMAGE(ELEMENTS,data.ProductImage,'95%','90%','',()=>{
        
                        });
        
                        NAVTEMPLATE(ELEMENTS,'forestgreen','50px','40px','1%',(ELEMENTES)=>{
        
                            STYLED(ELEMENTES,'position','absolute');
                            STYLED(ELEMENTES,'right','0');
                            STYLED(ELEMENTES,'border-radius','0px 0px 10px 10px');
        
                            CENTERTEXT(ELEMENTES,'h1',data.ProductNumber,'','20px','',()=>{
        
                            });
        
                        });
        
                        FOOTER(ELEMENTS,'#000000','100%','50px',(ELEMENTIS)=>{
        
                            LEFTTEXT(ELEMENTIS,'',data.ProductName,'orange','13px','2%','2% auto',()=>{
        
                            });
        
                            BOTTOMTEXT(ELEMENTIS,'','UGX '+data.ProductPrice,'','20px','5%','auto 5%',()=>{
        
                            });
        
                        });
    
                        CLICK(ELEMENTS,()=>{
    
                            JSONIFICATION(data,(MyData)=>{
    
                                STOREDATA('','CurrentProduct',MyData);
    
                                ROUTE(' ',PRODUCTDETAILSPAGE,'HOMEPAGE');
    
                            });
    
                        });
        
                    });

                });

            });

        });

        LEFTTEXT(ELEMENT,'h1','Best Sellers','#cdcdcd','22px','2%','3% auto',()=>{

        });

        INLINEVIEW(ELEMENT,'#00000010','98%','250px','1%','2%',(ELEMENT)=>{

            GETINDEXEDDATA('Products','Products',(data)=>{

                CHECKER(data.Approved,()=>{

                    INLINEVIEW(ELEMENT,'#cdcdcd10','45%','200px','1%','auto 2%',(ELEMENTS)=>{

                        IMAGE(ELEMENTS,data.ProductImage,'95%','90%','',()=>{
        
                        });
        
                        NAVTEMPLATE(ELEMENTS,'forestgreen','50px','40px','1%',(ELEMENTES)=>{
        
                            STYLED(ELEMENTES,'position','absolute');
                            STYLED(ELEMENTES,'right','0');
                            STYLED(ELEMENTES,'border-radius','0px 0px 10px 10px');
        
                            CENTERTEXT(ELEMENTES,'h1',data.ProductNumber,'','20px','',()=>{
        
                            });
        
                        });
        
                        FOOTER(ELEMENTS,'#000000','100%','50px',(ELEMENTIS)=>{
        
                            LEFTTEXT(ELEMENTIS,'',data.ProductName,'orange','13px','2%','2% auto',()=>{
        
                            });
        
                            BOTTOMTEXT(ELEMENTIS,'','UGX '+data.ProductPrice,'','20px','5%','auto 5%',()=>{
        
                            });
        
                        });
    
                        CLICK(ELEMENTS,()=>{
    
                            JSONIFICATION(data,(MyData)=>{
    
                                STOREDATA('','CurrentProduct',MyData);
    
                                ROUTE(' ',PRODUCTDETAILSPAGE,'HOMEPAGE');
    
                            });
    
                        });
        
                    });

                });

            });

        });

        INLINEVIEW(ELEMENT,'#00000010','98%','250px','1%','1%',(ELEMENT)=>{

            INLINEVIEW(ELEMENT,'orange','98%','250px','1%','',(ELEMENT)=>{

            });

        });

        LEFTTEXT(ELEMENT,'h1','Best Sellers','#cdcdcd','22px','2%','3% auto',()=>{

        });

        INLINEVIEW(ELEMENT,'#00000010','98%','250px','1%','2%',(ELEMENT)=>{

            GETINDEXEDDATA('Products','Products',(data)=>{

                CHECKER(data.Approved,()=>{

                    INLINEVIEW(ELEMENT,'#cdcdcd10','45%','200px','1%','auto 2%',(ELEMENTS)=>{

                        IMAGE(ELEMENTS,data.ProductImage,'95%','90%','',()=>{
        
                        });
        
                        NAVTEMPLATE(ELEMENTS,'forestgreen','50px','40px','1%',(ELEMENTES)=>{
        
                            STYLED(ELEMENTES,'position','absolute');
                            STYLED(ELEMENTES,'right','0');
                            STYLED(ELEMENTES,'border-radius','0px 0px 10px 10px');
        
                            CENTERTEXT(ELEMENTES,'h1',data.ProductNumber,'','20px','',()=>{
        
                            });
        
                        });
        
                        FOOTER(ELEMENTS,'#000000','100%','50px',(ELEMENTIS)=>{
        
                            LEFTTEXT(ELEMENTIS,'',data.ProductName,'orange','13px','2%','2% auto',()=>{
        
                            });
        
                            BOTTOMTEXT(ELEMENTIS,'','UGX '+data.ProductPrice,'','20px','5%','auto 5%',()=>{
        
                            });
        
                        });
    
                        CLICK(ELEMENTS,()=>{
    
                            JSONIFICATION(data,(MyData)=>{
    
                                STOREDATA('','CurrentProduct',MyData);
    
                                ROUTE(' ',PRODUCTDETAILSPAGE,'HOMEPAGE');
    
                            });
    
                        });
        
                    });

                });

            });

        });

        LEFTTEXT(ELEMENT,'h1','Best Sellers','#cdcdcd','22px','2%','3% auto',()=>{

        });

        INLINEVIEW(ELEMENT,'#00000010','98%','250px','1%','2%',(ELEMENT)=>{

            GETINDEXEDDATA('Products','Products',(data)=>{

                CHECKER(data.Approved,()=>{

                    INLINEVIEW(ELEMENT,'#cdcdcd10','45%','200px','1%','auto 2%',(ELEMENTS)=>{

                        IMAGE(ELEMENTS,data.ProductImage,'95%','90%','',()=>{
        
                        });
        
                        NAVTEMPLATE(ELEMENTS,'forestgreen','50px','40px','1%',(ELEMENTES)=>{
        
                            STYLED(ELEMENTES,'position','absolute');
                            STYLED(ELEMENTES,'right','0');
                            STYLED(ELEMENTES,'border-radius','0px 0px 10px 10px');
        
                            CENTERTEXT(ELEMENTES,'h1',data.ProductNumber,'','20px','',()=>{
        
                            });
        
                        });
        
                        FOOTER(ELEMENTS,'#000000','100%','50px',(ELEMENTIS)=>{
        
                            LEFTTEXT(ELEMENTIS,'',data.ProductName,'orange','13px','2%','2% auto',()=>{
        
                            });
        
                            BOTTOMTEXT(ELEMENTIS,'','UGX '+data.ProductPrice,'','20px','5%','auto 5%',()=>{
        
                            });
        
                        });
    
                        CLICK(ELEMENTS,()=>{
    
                            JSONIFICATION(data,(MyData)=>{
    
                                STOREDATA('','CurrentProduct',MyData);
    
                                ROUTE(' ',PRODUCTDETAILSPAGE,'HOMEPAGE');
    
                            });
    
                        });
        
                    });

                });

            });

        });

        LEFTTEXT(ELEMENT,'h1','Best Sellers','#cdcdcd','22px','2%','3% auto',()=>{

        });

        INLINEVIEW(ELEMENT,'#00000010','98%','250px','1%','2%',(ELEMENT)=>{

            GETINDEXEDDATA('Products','Products',(data)=>{

                CHECKER(data.Approved,()=>{

                    INLINEVIEW(ELEMENT,'#cdcdcd10','45%','200px','1%','auto 2%',(ELEMENTS)=>{

                        IMAGE(ELEMENTS,data.ProductImage,'95%','90%','',()=>{
        
                        });
        
                        NAVTEMPLATE(ELEMENTS,'forestgreen','50px','40px','1%',(ELEMENTES)=>{
        
                            STYLED(ELEMENTES,'position','absolute');
                            STYLED(ELEMENTES,'right','0');
                            STYLED(ELEMENTES,'border-radius','0px 0px 10px 10px');
        
                            CENTERTEXT(ELEMENTES,'h1',data.ProductNumber,'','20px','',()=>{
        
                            });
        
                        });
        
                        FOOTER(ELEMENTS,'#000000','100%','50px',(ELEMENTIS)=>{
        
                            LEFTTEXT(ELEMENTIS,'',data.ProductName,'orange','13px','2%','2% auto',()=>{
        
                            });
        
                            BOTTOMTEXT(ELEMENTIS,'','UGX '+data.ProductPrice,'','20px','5%','auto 5%',()=>{
        
                            });
        
                        });
    
                        CLICK(ELEMENTS,()=>{
    
                            JSONIFICATION(data,(MyData)=>{
    
                                STOREDATA('','CurrentProduct',MyData);
    
                                ROUTE(' ',PRODUCTDETAILSPAGE,'HOMEPAGE');
    
                            });
    
                        });
        
                    });

                });

            });

        });

        LEFTTEXT(ELEMENT,'h1','Best Sellers','#cdcdcd','22px','2%','3% auto',()=>{

        });

        INLINEVIEW(ELEMENT,'#00000010','98%','250px','1%','2%',(ELEMENT)=>{

            GETINDEXEDDATA('Products','Products',(data)=>{

                CHECKER(data.Approved,()=>{

                    INLINEVIEW(ELEMENT,'#cdcdcd10','45%','200px','1%','auto 2%',(ELEMENTS)=>{

                        IMAGE(ELEMENTS,data.ProductImage,'95%','90%','',()=>{
        
                        });
        
                        NAVTEMPLATE(ELEMENTS,'forestgreen','50px','40px','1%',(ELEMENTES)=>{
        
                            STYLED(ELEMENTES,'position','absolute');
                            STYLED(ELEMENTES,'right','0');
                            STYLED(ELEMENTES,'border-radius','0px 0px 10px 10px');
        
                            CENTERTEXT(ELEMENTES,'h1',data.ProductNumber,'','20px','',()=>{
        
                            });
        
                        });
        
                        FOOTER(ELEMENTS,'#000000','100%','50px',(ELEMENTIS)=>{
        
                            LEFTTEXT(ELEMENTIS,'',data.ProductName,'orange','13px','2%','2% auto',()=>{
        
                            });
        
                            BOTTOMTEXT(ELEMENTIS,'','UGX '+data.ProductPrice,'','20px','5%','auto 5%',()=>{
        
                            });
        
                        });
    
                        CLICK(ELEMENTS,()=>{
    
                            JSONIFICATION(data,(MyData)=>{
    
                                STOREDATA('','CurrentProduct',MyData);
    
                                ROUTE(' ',PRODUCTDETAILSPAGE,'HOMEPAGE');
    
                            });
    
                        });
        
                    });

                });

            });

        });

    },(ELEMENT)=>{

        ICONTEXT(ELEMENT,WHITEGRIDICON,'transparent','#cdcdcd','50px','40px','23px','23px','Sections','',()=>{

            ROUTE(' ',SECTIONSPAGE,'HOMEPAGE');

        });

        ICONTEXT(ELEMENT,WHITESAVEDICON,'transparent','#cdcdcd','50px','40px','23px','23px','Saved','',()=>{

            ROUTE(' ',SAVEDPAGE,'HOMEPAGE');

        });

        ICONTEXT(ELEMENT,WHITESHOPPINGCART,'transparent','#cdcdcd','50px','40px','23px','23px','Shop','',()=>{

            ROUTE(' ',SHOPPAGE,'HOMEPAGE');

        });

        ICONTEXT(ELEMENT,WHITESETTINGSICON,'transparent','#cdcdcd','50px','40px','23px','23px','Settings','',()=>{

            ROUTE(' ',SETTINGSPAGE,'HOMEPAGE');

        });

    });

    DOWNLOADSAVEINDEX(API,'Catergory','Catergory',()=>{

    });

    DOWNLOADSAVEINDEX(API,'Products','Products',()=>{

    });

};

const SECTIONSPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'All Sections','',()=>{

    },(ELEMENT)=>{

        GETINDEXEDDATA('Catergory','Catergory',(data)=>{

            console.log(data);

            TABLEVIEW(ELEMENT,'#cdcdcd10','45%','250px','1%','2%',(ELEMENTS)=>{

                IMAGE(ELEMENTS,data.ProductImage,'95%','250px','',()=>{
    
                });
    
                FOOTER(ELEMENTS,'#000000','100%','50px',(ELEMENTIS)=>{
    
                    BOTTOMTEXT(ELEMENTIS,'',data.ProductName,'','20px','20%','auto 8%',()=>{
    
                    });
    
                });

                CLICK(ELEMENTS,()=>{

                    STOREDATA('','DataSection',data.ID);

                    STOREDATA('','DataName',data.ProductName);

                    ROUTE(' ',ALLSECTIONSPAGE,'SECTIONSPAGE');

                });
    
            });

        });

    });
  
};

const ALLSECTIONSPAGE=()=>{

    BACKPAGE('SECTIONSPAGE');

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',SECTIONSPAGE,'SECTIONSPAGE');

    },sessionStorage.getItem('DataName'),'',()=>{

    },(ELEMENT)=>{

        GETINDEXEDDATA('Products','Products',(data)=>{

            CHECKER(data.Approved,()=>{

                CHECKER(data.ProductCatergory === sessionStorage.getItem('DataSection') ,()=>{

                    TABLEVIEW(ELEMENT,'#cdcdcd10','45%','250px','1%','2%',(ELEMENTS)=>{
                        
                        IMAGE(ELEMENTS,data.ProductImage,'95%','250px','',()=>{
        
                        });
        
                        NAVTEMPLATE(ELEMENTS,'forestgreen','50px','40px','1%',(ELEMENTES)=>{
        
                            STYLED(ELEMENTES,'position','absolute');
                            STYLED(ELEMENTES,'right','0');
                            STYLED(ELEMENTES,'border-radius','0px 0px 10px 10px');
        
                            CENTERTEXT(ELEMENTES,'h1',data.ProductNumber,'','20px','',()=>{
        
                            });
        
                        });
        
                        FOOTER(ELEMENTS,'#000000','100%','50px',(ELEMENTIS)=>{
        
                            LEFTTEXT(ELEMENTIS,'',data.ProductName,'orange','13px','2%','2% auto',()=>{
        
                            });
        
                            BOTTOMTEXT(ELEMENTIS,'','UGX '+data.ProductPrice,'','20px','5%','auto 5%',()=>{
        
                            });
        
                        });
    
                        CLICK(ELEMENTS,()=>{

                            STOREDATA('','PageBack','ALLSECTIONSPAGE');
    
                            JSONIFICATION(data,(MyData)=>{
    
                                STOREDATA('','CurrentProduct',MyData);
    
                                ROUTE(' ',PRODUCTDETAILSPAGE,'HOMEPAGE');
    
                            });
    
                        });

                    });

                });

            });

        });

    });
  
};

const SAVEDPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Favorite','',()=>{

    },(ELEMENT)=>{

        TABLEVIEW(ELEMENT,'#cdcdcd10','40%','200px','1%','2%',(ELEMENTS)=>{

            IMAGE(ELEMENTS,EROINNOVATIONSLOGOONE,'95%','90%','',()=>{

            });

            FOOTER(ELEMENTS,'#000000','100%','50px',(ELEMENTIS)=>{

                LEFTTEXT(ELEMENTIS,'','item Name','ForestGreen','15px','2%','2% auto',()=>{

                });

                BOTTOMTEXT(ELEMENTIS,'','UGX 8,000,000','','20px','5%','auto 5%',()=>{

                });


            });

        });

    });
  
};

const SHOPPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Purchase','',()=>{

    },(ELEMENT)=>{

        TABLEVIEW(ELEMENT,'#cdcdcd10','40%','200px','1%','2%',(ELEMENTS)=>{

            IMAGE(ELEMENTS,EROINNOVATIONSLOGOONE,'95%','90%','',()=>{

            });

            FOOTER(ELEMENTS,'#000000','100%','50px',(ELEMENTIS)=>{

                LEFTTEXT(ELEMENTIS,'','item Name','ForestGreen','15px','2%','2% auto',()=>{

                });

                BOTTOMTEXT(ELEMENTIS,'','UGX 8,000,000','','20px','5%','auto 5%',()=>{

                });


            });

        });

    });
  
};

const SETTINGSPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Preferences','',()=>{

    },(ELEMENT)=>{

    });
  
};

const USERACCOUNTPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Profile','',()=>{

    },(ELEMENT)=>{

    });
  
};

const USERLOCATIONPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Address','',()=>{

    },(ELEMENT)=>{

        REDUX(UGANDANDISTRICITS,(data)=>{

            BUTTONIMAGE(ELEMENT,'transparent',data.District,'',WHITELOCATIONICON,'50px','1%',()=>{

                STOREDATA(' ','UserLocation',data.District);

                ROUTE('',HOMEPAGE,'HOMEPAGE');

            });

        });

    });
  
};

const PRODUCTDETAILSPAGE=()=>{

    CHECKER(sessionStorage.getItem('PageBack'),()=>{

        ROUTE('',ALLSECTIONSPAGE,'ALLSECTIONSPAGE');

    })

    LEFTTEXTBACKHEADERBODY('',()=>{

        CONDITION(sessionStorage.getItem('PageBack'),()=>{

            ROUTE('',ALLSECTIONSPAGE,'ALLSECTIONSPAGE');   

        },()=>{

            ROUTE('',HOMEPAGE,'HOMEPAGE');

        });

    },'Product Details','',()=>{

    },(ELEMENT)=>{

        SESSIONDEJSONDATA('CurrentProduct',(Data)=>{

            VIEW(ELEMENT,'#cdcdcd10','95%','400px','2% auto',(ELEMENTS)=>{

                STYLED(ELEMENTS,'overflow','hidden');

                IMAGE(ELEMENTS,Data.ProductImage,'95%','100%','',()=>{
    
                });

            });

            CENTERTEXT(ELEMENT,'h1',Data.ProductName,'','25px','1%',()=>{
    
            });

            NAVTEMPLATE(ELEMENT,'transparent','98%','50px','3% auto',(ELEMENTS)=>{

                LEFTIMAGE(ELEMENTS,WHITESUBSCRIPTIONICON,'25px','23px','4%','',()=>{
    
                });
    
                LEFTTEXT(ELEMENTS,'p','UGX'+Data.ProductPrice,'orange','20px','1%','',()=>{
    
                });
    
                CENTERTEXT(ELEMENTS,'h1','Reviews','','20px','',()=>{
    
                });
    
                RIGHTIMAGE(ELEMENTS,WHITESAVEICON,'28px','28px','2%','',()=>{
    
                });
    
            });

            VIEW(ELEMENT,'#cdcdcd10','95%','200px','2% auto',(ELEMENTS)=>{

                LEFTTEXT(ELEMENTS,'p',Data.ProductDetails,'#cdcdcd','18px','1%','2%',()=>{

    
                });

            });

            IMAGEBUTTON(ELEMENT,'forestgreen','Buy Now','',WHITESUBSCRIPTIONICON,'50px','',()=>{

            });

            IMAGEBUTTON(ELEMENT,'teal','Add To Cart','',WHITESHOPPINGCART,'50px','1%',()=>{

            });

            console.log(Data)

        });

    });
  
};