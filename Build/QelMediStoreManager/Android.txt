const API='https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing';

const TEXTCOLOR='#cdcdcd';
const APPCOLORS='#0F990F';

const NOVASTART=()=>{

    APPDATA();

    APPMODE(localStorage.getItem('DarkMode')||APPCOLORS);

    CONDITION(localStorage.getItem('DarkMode'),()=>{

        MYACCOUNT();

    },()=>{

        CLEAR('');

        CENTERVIEW('','#333333',(ELEMENT)=>{
    
            CENTERTEXT(ELEMENT,'','Qel Manager',APPCOLORS,'30px','10% auto',()=>{
    
            });
    
            CENTERTEXT(ELEMENT,'','Choose App Mode',APPCOLORS,'15px','',()=>{
    
            });
    
            IMAGEBUTTON(ELEMENT,APPCOLORS,'Dark Mode','',WHITEMOONICON,'50px','10% auto auto auto',()=>{
    
                STOREDATA(' ','DarkMode','#333333');
    
               RELOAD();

            });
    
            IMAGEBUTTON(ELEMENT,APPCOLORS,'Light Mode','',WHITESUNICON,'50px','5% auto',()=>{
    
                STOREDATA(' ','DarkMode',TEXTCOLOR);
    
                RELOAD();
    
            });
    
        });

    });

};

const MYACCOUNT=()=>{

    ACCOUNTCHECKER(()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },()=>{

        ROUTE('',EMAILVERIFICATIONPAGE,'EMAILVERIFICATIONPAGE');

    },()=>{

        ROUTE('',LOGINPAGE,'LOGINPAGE');

    });

};

const HOMEPAGE=()=>{

    CLEAR('');

    FULLSCROLLVIEW('',' ',(ELEMENTS)=>{

        PRODUCTS(ELEMENTS);

    });

    FLOATFIXEDBUTTON('',APPCOLORS,(ELEMENT)=>{

        IMAGE(ELEMENT,WHITEPOSTICON,'20px','20px','',()=>{

            ROUTE(' ',CREATIONPAGE,'HOMEPAGE');

        });

    });

};

const LOGINPAGE=()=>{

    CLEAR('');

    CENTERTEXT('','','Qel Manager',APPCOLORS,'30px','20% auto',()=>{

    });

    INPUT('', 'email', APPCOLORS, 'Enter Admin Email', ()=>{

    });

    INPUT('', 'password', APPCOLORS, '********', ()=>{

    });

    IMAGEBUTTON('',APPCOLORS,'Sign In','',WHITEENTERICON,'50px','10% auto',()=>{

        STOREDATA(' ','UserData','True');

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    });

    NAVTEMPLATE('',APPCOLORS,'80%','50px','30% auto',(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'','Forgot Password!','','16px','1rem','',()=>{

            ROUTE(' ',FORGOTPASSWORDPAGE,'LOGINPAGE');

        });

        CENTERTEXT(ELEMENT,'','||','Orange','38px','',()=>{

        });

        RIGHTTEXT(ELEMENT,'','Create Account?','','16px','1rem','',()=>{

            ROUTE(' ',CREATEACCOUNTPAGE,'LOGINPAGE');

        });

    });
    
};

const FORGOTPASSWORDPAGE=()=>{

    CLEAR('');

    CENTERTEXT('','','Qel Manager',APPCOLORS,'30px','20% auto',()=>{

    });

    INPUT('', 'email', APPCOLORS, 'Enter Admin Email', ()=>{

    });


    IMAGEBUTTON('',APPCOLORS,'Recover','',WHITEENTERICON,'50px','10% auto',()=>{

    });

    NAVTEMPLATE('',APPCOLORS,'80%','50px','30% auto',(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'','Login In','','16px','1rem','',()=>{

            ROUTE('',LOGINPAGE,'LOGINPAGE');


        });

        CENTERTEXT(ELEMENT,'','||','Orange','38px','',()=>{

        });

        RIGHTTEXT(ELEMENT,'','Create Account?','','16px','1rem','',()=>{

            ROUTE('',CREATEACCOUNTPAGE,'LOGINPAGE');

        });

    });
    
};

const CREATEACCOUNTPAGE=()=>{

    CLEAR('');

    CENTERTEXT('','','Qel Manager',APPCOLORS,'30px','20% auto',()=>{

    });

    INPUT('', 'text', APPCOLORS, 'Enter User Name', ()=>{

    });

    INPUT('', 'email', APPCOLORS, 'Enter Admin Email', ()=>{

    });

    INPUT('', 'password', APPCOLORS, '********', ()=>{

    });

    IMAGEBUTTON('',APPCOLORS,'Sign Up','',WHITEENTERICON,'50px','10% auto',()=>{

        ROUTE('',EMAILVERIFICATIONPAGE,'EMAILVERIFICATIONPAGE');

    });

    NAVTEMPLATE('',APPCOLORS,'80%','50px','30% auto',(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'','Privacy Policy!','','16px','1rem','',()=>{

        });

        CENTERTEXT(ELEMENT,'','||','Orange','38px','',()=>{

        });

        RIGHTTEXT(ELEMENT,'','Log In?','','16px','1rem','',()=>{

            ROUTE('',LOGINPAGE,'LOGINPAGE');

        });

    });
    
};

const EMAILVERIFICATIONPAGE=()=>{

    CLEAR('');

    CENTERTEXT('','','Qel Manager',APPCOLORS,'30px','20% auto',()=>{

    });

    INPUT('', 'email', APPCOLORS, 'Enter Verification Code', ()=>{

    });

    IMAGEBUTTON('',APPCOLORS,'Recover','',WHITEENTERICON,'50px','10% auto',()=>{

    });

    NAVTEMPLATE('',APPCOLORS,'80%','50px','30% auto',(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'','Login In','','16px','1rem','',()=>{

            ROUTE('',LOGINPAGE,'LOGINPAGE');


        });

        CENTERTEXT(ELEMENT,'','||','Orange','38px','',()=>{

        });

        RIGHTTEXT(ELEMENT,'','Create Account?','','16px','1rem','',()=>{

            ROUTE('',CREATEACCOUNTPAGE,'LOGINPAGE');

        });

    });
    
};

const CREATIONPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Management',APPCOLORS,'',(ELEMENT)=>{

        IMAGEBUTTON(ELEMENT,APPCOLORS,'New Catergory','',WHITEGROUPICON,'50px','1% auto',()=>{

            ROUTE(' ',NEWCATERGORYPAGE,'CREATIONPAGE');
    
        });
        
        IMAGEBUTTON(ELEMENT,APPCOLORS,'New Product','',WHITEGROUPICON,'50px','1% auto',()=>{

            ROUTE(' ',NEWPRODUCTPAGE,'CREATIONPAGE');
    
        });

    });

};

const NEWCATERGORYPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',CREATIONPAGE,'CREATIONPAGE');

    },'Catergory',APPCOLORS,'',(ELEMENT)=>{

        CENTERTEXT(ELEMENT,'','Create a New Catergory',APPCOLORS,'30px','10% auto',()=>{

        });
    
        INPUT(ELEMENT, '', APPCOLORS, 'Enter Catergory Name', (data)=>{

            STOREDATA('','Name',data);
    
        });

        TEXTAREA(ELEMENT,'',APPCOLORS,'300px','Describe The Catergory',(data)=>{

            STOREDATA('','Details',data);

        });

        CENTERTEXT(ELEMENT,'','Add Catergory Image',APPCOLORS,'20px','10% auto',()=>{

        });

        IMAGE(ELEMENT,WHITEHOMEICON,'','300px','',(ELEMENTS)=>{

            IMAGEPICKER(ELEMENTS, (data)=>{

                STOREDATA('','Image',data);

            });

        });
    
        IMAGEBUTTON(ELEMENT,APPCOLORS,'Create','',WHITEENTERICON,'50px','10% auto',()=>{
    
            CONDITION(sessionStorage.getItem('Name'),()=>{

                CONDITION(sessionStorage.getItem('Details'),()=>{

                    CONDITION(sessionStorage.getItem('Image'),()=>{

                        CONDITION(navigator.onLine,()=>{

                            MESSAGEDISPLAY('','Please Wait','');

                            GETDATA(API,'Catergory',(data)=>{

                                FINDER(data,'ProductName',sessionStorage.getItem('Name'),(resback)=>{

                                    CONDITION(resback.ProductName === sessionStorage.getItem('Name'),()=>{

                                        MESSAGEDISPLAY('','Catergory Name Exists','');

                                    },()=>{

                                        MESSAGEDISPLAY('','Creating New Catergory','');

                                        const HEADERS=['ProductName','ProductDetails','ProductImage','ProductDate','Approved'];

                                        const INFO=[sessionStorage.getItem('Name'),sessionStorage.getItem('Details'),sessionStorage.getItem('Image'),new Date(),'Approved'];

                                        INSERTDATA(API,'Catergory',HEADERS,INFO,()=>{

                                            GETDATA(API,'Catergory',(data)=>{

                                                const MYDATA={
                                                    'Name':'Catergory',
                                                    'data':data
                                                }

                                                STOREINDEXED('Catergory', 'Catergory', MYDATA, (datata)=>{

                                                    CONDITION(datata === false,()=>{

                                                        UPDATEINDEX('Catergory', 'Catergory', MYDATA,()=>{
                                                          
                                                            ROUTE('',HOMEPAGE,'HOMEPAGE');
                                                            
                                                        })

                                                    } ,()=>{

                                                        ROUTE('',HOMEPAGE,'HOMEPAGE');

                                                    });

                                                });

                                            });

                                        },()=>{

                                            MESSAGEDISPLAY('','Failed To Create New Catergory','');

                                        });

                                    });

                                    console.log(resback);
                                });

                            },(data)=>{

                                console.log(data);

                            });

                        },()=>{
            
                            MESSAGEDISPLAY('','Your OffLine,Check Your Internet','');
            
                        });

                    },()=>{
        
                        MESSAGEDISPLAY('','Add Catergory Image','');
        
                    });

                },()=>{
    
                    MESSAGEDISPLAY('','Enter Catergory Details','');
    
                });

            },()=>{

                MESSAGEDISPLAY('','Enter Catergory Name','');

            });

        });

    });

};

const NEWPRODUCTPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',CREATIONPAGE,'CREATIONPAGE');

    },'Product',APPCOLORS,'',(ELEMENT)=>{

        
    });

};

const APPDATA=()=>{

    CHECKER(navigator.onLine,()=>{

        GETDATA(API,'Catergory',(data)=>{

            const MYDATA={
                'Name':'Catergory',
                'data':data
            }
    
            STOREINDEXED('Catergory', 'Catergory', MYDATA, (datata)=>{
    
                CONDITION(datata === false,()=>{
    
                    UPDATEINDEX('Catergory', 'Catergory', MYDATA,()=>{
                 
                    })
    
                } ,()=>{
    
    
                });
    
            });
    
        });

        GETDATA(API,'Products',(data)=>{

            const MYDATA={
                'Name':'Products',
                'data':data
            }
    
            STOREINDEXED('Products', 'Products', MYDATA, (datata)=>{
    
                CONDITION(datata === false,()=>{
    
                    UPDATEINDEX('Products', 'Products', MYDATA,()=>{
                 
                    })
    
                } ,()=>{
    
    
                });
    
            });
    
        });

    });

};

const PRODUCTS=(ELEMENT)=>{

    GETINDEXEDDATA('Products', 'Products', (data)=>{

        CHECKER(data.Approved,()=>{

            VIEW(ELEMENT,'transparent','45%','25%','1% 1% 5% 1%',(ELEMENTS)=>{

                STYLED(ELEMENTS,'display','inline-table');
                   
                IMAGE(ELEMENTS,data.ImageOne,'100%','250px',' 0',()=>{
    
                });
    
                FOOTER(ELEMENTS,'#0F990F80','','50px',(ELEMENTSE)=>{
    
                    LEFTTEXT(ELEMENTSE,'',data.ProductName,TEXTCOLOR,'14.1px','0.3rem','',()=>{
    
                    });
    
                    RIGHTTEXT(ELEMENTSE,'',data.ProductPrice ,TEXTCOLOR,'16px','0.3rem','',()=>{
    
                    });
    
                });

                CLICK(ELEMENTS,()=>{

                    JSONIFICATION(data,(MyData)=>{
    
                        STOREDATA('','Product',MyData);
    
                        ROUTE(' ',PRODUCTPAGE,'HOMEPAGE');
    
                    });

                });
    
            });

        });

    });

};