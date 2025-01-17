const NOVASTART=()=>{

    APPMODE('#cdcdcd');

    CONDITION(localStorage.getItem("UserData"),()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },()=>{

        ROUTE('',LOGINPAGE,'LOGINPAGE');

    })

};

const LOGINPAGE=()=>{

    CLEAR('');

    APPMODE('#cdcdcd');

    DELETEDATA('','UserEmail');
    DELETEDATA('','UserPassword');

    IMAGE('',FISKONICON,'80%','50%',(ELEMENT)=>{

    });

    ROUNDINPUT('','email','#000000','#ffffff','Enter User Email',(data)=>{

        STOREDATA("",'UserEmail',data);

    });

    ROUNDINPUT('','password','#000000','#ffffff','******',(data)=>{

        STOREDATA("",'UserPassword',data);

    });

    ROUNDBUTTON('','80%','','blue','','Login',(ELEMENT)=>{

        CONDITION(!sessionStorage.getItem('UserEmail'),()=>{

            MESSAGEDISPLAY('','Enter User Email');

        },()=>{

            CONDITION(!sessionStorage.getItem('UserPassword'),()=>{

                MESSAGEDISPLAY('','Enter User Password');

            },()=>{

                const USERDATA={
                    "agent93720Login":"",
                    "email":sessionStorage.getItem('UserEmail'),
                    "password":sessionStorage.getItem('UserPassword')
                }

                CONDITION(!navigator.onLine,()=>{

                    MESSAGEDISPLAY('','Check Your Internet Connection');

                },()=>{

                    DISPLAY(ELEMENT,'Please Wait');

                    POSTPACKAGE(NAWERIFISKONLOGINAPI,'cors',USERDATA,(data)=>{

                        CONDITION(data.status === 'success',()=>{

                            JSONIFICATION(data,(MyData)=>{

                                STOREDATA(' ','UserData',MyData);

                                ROUTE('',HOMEPAGE,'HOMEPAGE');

                            });

                        },()=>{

                            MESSAGEDISPLAY('','Invalid User Credits');

                            DISPLAY(ELEMENT,'LogIn');

                        } );

                    },(Error)=>{

                        MESSAGEDISPLAY('','Failed To Login User');

                        DISPLAY(ELEMENT,'LogIn');

                    });

                });

            });

        });

    });

};

const HOMEPAGE=()=>{

    CLEAR('');

    IMAGE('',FISKONICON,'80%','50%',(ELEMENT)=>{

        STYLED(ELEMENT,'position','fixed');

    });

    FLOATFIXEDBUTTON('','black',(ELEMENT)=>{

        IMAGE(ELEMENT,WHITEMENUICON,'25px','25px',(IMAGER)=>{

            CLICK(IMAGER,()=>{

                MENUPAGE();

            });

        });

    });

    IMAGEBUTTON('','indigo','New Farmer','#fff',WHITEADDICON,(ELEMENTS)=>{

        CLICK(ELEMENTS,()=>{

            ROUTE(' ',NEWFARMERPAGE,'NEWFARMERPAGE');

        });

    });

    IMAGEBUTTON('','indigo','All Farmers','#fff',WHITEADDICON,(ELEMENTS)=>{

        CLICK(ELEMENTS,()=>{

            ROUTE(' ',ALLFARMERSPAGE,'ALLFARMERSPAGE');

        });

    });
    
};

const ALLFARMERSPAGE=()=>{

    CLEAR("");

    IMAGE('',FISKONICON,'80%','50%',(ELEMENT)=>{

        STYLED(ELEMENT,'position','fixed');
        STYLED(ELEMENT,'left','0');

    });

    DEJSON(localStorage.getItem("UserData"),(data)=>{

        const LINKER=`https://loans.naweriindustries.com/mobile-endpoints/fetch-all-farmers-endpoint.php?fetchFarmersSingleData=true&agentCodeForBrocker=${data.userId}`

        FULLSCROLLVIEW('','transparent',(ELEMENTS)=>{

            DISPLAY(ELEMENTS,'Loading...');

            GETPACKAGE(LINKER,'cors',(data)=>{

                CLEAR(ELEMENTS);

                REDUX(data,(MyData)=>{

                    CREATEELEMENT(ELEMENTS,'div',(HOLDER)=>{

                        STYLED(HOLDER,'position','relative');
                        STYLED(HOLDER,'width','98%');
                        STYLED(HOLDER,'height','100px');
                        STYLED(HOLDER,'background','#ffffff');
                        STYLED(HOLDER,'diplay','inline-flex');
                        STYLED(HOLDER,'margin','auto');
                        STYLED(HOLDER,'margin-top','1%');
                        STYLED(HOLDER,'margin-bottom','1%');
                        STYLED(HOLDER,'border-radius','10px');

                        CREATEELEMENT(HOLDER,'img',(IMAGERS)=>{

                            STYLED(IMAGERS,'position','absolute');
                            STYLED(IMAGERS,'width','35px');
                            STYLED(IMAGERS,'height','35px');
                            STYLED(IMAGERS,'background','indigo');
                            STYLED(IMAGERS,'padding','3%');
                            STYLED(IMAGERS,'right','5%');
                            STYLED(IMAGERS,'top','20%');
                            STYLED(IMAGERS,'border-radius','50px');

                            IMAGERS.src=WHITEINFOICON;

                        });

                        CREATEELEMENT(HOLDER,'h1',(NAME)=>{

                            STYLED(NAME,'position','relative');
                            STYLED(NAME,'margin-left','0.5rem');
                            STYLED(NAME,'text-align','left');
                            STYLED(NAME,'font-size','20px');
                            STYLED(NAME,'color','indigo');

                            DISPLAY(NAME,MyData.farmerName);
                            
                        });

                        CREATEELEMENT(HOLDER,'h2',(NAME)=>{

                            STYLED(NAME,'position','relative');
                            STYLED(NAME,'margin-left','0.5rem');
                            STYLED(NAME,'text-align','left');
                            STYLED(NAME,'font-size','18px');
                            STYLED(NAME,'color','indigo');

                            DISPLAY(NAME,MyData.farmerDistrict);
                            
                        });

                        CREATEELEMENT(HOLDER,'p',(NAME)=>{

                            STYLED(NAME,'position','relative');
                            STYLED(NAME,'margin-left','0.5rem');
                            STYLED(NAME,'text-align','left');
                            STYLED(NAME,'font-size','16px');
                            STYLED(NAME,'color','indigo');

                            DISPLAY(NAME,MyData.farmerPhone);
                            
                        });

                        CLICK(HOLDER,()=>{

                            JSONIFICATION(MyData,(Datata)=>{

                                STOREDATA('','FarmerData',Datata);

                                ROUTE('Yes',FARMERDETAILPAGE,'ALLFARMERSPAGE');

                            });

                        });
                        
                    });

                });
    
            },()=>{
    
            });

        });

        FLOATFIXEDBUTTON('','black',(ELEMENT)=>{

            IMAGE(ELEMENT,WHITEBACKICON,'25px','25px',(IMAGER)=>{

                STYLED(IMAGER,'transform','rotate(180deg)');
                

                CLICK(IMAGER,()=>{

                    ROUTE('',FARMERDETAILPAGE,'HOMEPAGE');

                });
    
            });
    
        });

    });

};

const NEWFARMERPAGE=()=>{

    setTimeout(() => {

        sessionStorage.setItem("PreviousPage",'HOMEPAGE');
        
    }, 500);

    CLEAR('');

    FULLSCROLLVIEW('','transparent',(ELEMENTS)=>{

        CREATEELEMENT(ELEMENTS,'p',(NAME)=>{

            STYLED(NAME,'position','relative');
            STYLED(NAME,'margin-left','0.5rem');
            STYLED(NAME,'text-align','left');
            STYLED(NAME,'font-size','16px');
            STYLED(NAME,'color','indigo');

            DISPLAY(NAME,'Farmer ID');
            
        });

        ROUNDINPUT(ELEMENTS,'text','#000000','#ffffff',' ',(data)=>{

           
    
        });

        CREATEELEMENT(ELEMENTS,'p',(NAME)=>{

            STYLED(NAME,'position','relative');
            STYLED(NAME,'margin-left','0.5rem');
            STYLED(NAME,'text-align','left');
            STYLED(NAME,'font-size','16px');
            STYLED(NAME,'color','indigo');

            DISPLAY(NAME,'Farmer Name');
            
        });

        ROUNDINPUT(ELEMENTS,'text','#000000','#ffffff',' ',(data)=>{

           
    
        });

        CREATEELEMENT(ELEMENTS,'p',(NAME)=>{

            STYLED(NAME,'position','relative');
            STYLED(NAME,'margin-left','0.5rem');
            STYLED(NAME,'text-align','left');
            STYLED(NAME,'font-size','16px');
            STYLED(NAME,'color','indigo');

            DISPLAY(NAME,'Farmer Phone Number');
            
        });

        ROUNDINPUT(ELEMENTS,'text','#000000','#ffffff',' ',(data)=>{

           
    
        });

        CREATEELEMENT(ELEMENTS,'p',(NAME)=>{

            STYLED(NAME,'position','relative');
            STYLED(NAME,'margin-left','0.5rem');
            STYLED(NAME,'text-align','left');
            STYLED(NAME,'font-size','16px');
            STYLED(NAME,'color','indigo');

            DISPLAY(NAME,'Farmer ID');
            
        });

        ROUNDINPUT(ELEMENTS,'text','#000000','#ffffff',' ',(data)=>{

           
    
        });

        CREATEELEMENT(ELEMENTS,'p',(NAME)=>{

            STYLED(NAME,'position','relative');
            STYLED(NAME,'margin-left','0.5rem');
            STYLED(NAME,'text-align','left');
            STYLED(NAME,'font-size','16px');
            STYLED(NAME,'color','indigo');

            DISPLAY(NAME,'Farmer Districit');
            
        });

        ROUNDINPUT(ELEMENTS,'text','#000000','#ffffff',' ',(data)=>{

           
    
        });

        CREATEELEMENT(ELEMENTS,'p',(NAME)=>{

            STYLED(NAME,'position','relative');
            STYLED(NAME,'margin-left','0.5rem');
            STYLED(NAME,'text-align','left');
            STYLED(NAME,'font-size','16px');
            STYLED(NAME,'color','indigo');

            DISPLAY(NAME,'Farmer Region');
            
        });

        ROUNDINPUT(ELEMENTS,'text','#000000','#ffffff',' ',(data)=>{

           
    
        });

        CREATEELEMENT(ELEMENTS,'p',(NAME)=>{

            STYLED(NAME,'position','relative');
            STYLED(NAME,'margin-left','0.5rem');
            STYLED(NAME,'text-align','left');
            STYLED(NAME,'font-size','16px');
            STYLED(NAME,'color','indigo');

            DISPLAY(NAME,'Farmer Village');
            
        });

        ROUNDINPUT(ELEMENTS,'text','#000000','#ffffff',' ',(data)=>{

           
    
        });

        CREATEELEMENT(ELEMENTS,'p',(NAME)=>{

            STYLED(NAME,'position','relative');
            STYLED(NAME,'margin-left','0.5rem');
            STYLED(NAME,'text-align','left');
            STYLED(NAME,'font-size','16px');
            STYLED(NAME,'color','indigo');

            DISPLAY(NAME,'Number Of Coffee Trees');
            
        });

        ROUNDINPUT(ELEMENTS,'text','#000000','#ffffff',' ',(data)=>{

           
    
        });

        CREATEELEMENT(ELEMENTS,'p',(NAME)=>{

            STYLED(NAME,'position','relative');
            STYLED(NAME,'margin-left','0.5rem');
            STYLED(NAME,'text-align','left');
            STYLED(NAME,'font-size','16px');
            STYLED(NAME,'color','indigo');

            DISPLAY(NAME,'Farm Area(ha)');
            
        });

        ROUNDINPUT(ELEMENTS,'text','#000000','#ffffff',' ',(data)=>{

           
    
        });

        CREATEELEMENT(ELEMENTS,'p',(NAME)=>{

            STYLED(NAME,'position','relative');
            STYLED(NAME,'margin-left','0.5rem');
            STYLED(NAME,'text-align','left');
            STYLED(NAME,'font-size','16px');
            STYLED(NAME,'color','indigo');

            DISPLAY(NAME,'Harvest Estimation(Kgs) - Cherry ');
            
        });

        ROUNDINPUT(ELEMENTS,'text','#000000','#ffffff',' ',(data)=>{

           
    
        });

        CREATEELEMENT(ELEMENTS,'p',(NAME)=>{

            STYLED(NAME,'position','relative');
            STYLED(NAME,'margin-left','0.5rem');
            STYLED(NAME,'text-align','left');
            STYLED(NAME,'font-size','16px');
            STYLED(NAME,'color','indigo');

            DISPLAY(NAME,'Year Of Establishment');
            
        });

        ROUNDINPUT(ELEMENTS,'text','#000000','#ffffff',' ',(data)=>{

           
    
        });

        IMAGE('',FISKONICON,'80%','50%',(ELEMENT)=>{

        });

        BREAK(ELEMENTS);BREAK(ELEMENTS);

        IMAGE(ELEMENTS,FISKONICON,'98%','50%',(ELEMENT)=>{

            STYLED(ELEMENT,'border','1px solid indigo');
            STYLED(ELEMENT,'border-radius','10px');
            STYLED(ELEMENT,'background','#cdcdcd');

        });

        BUTTON(ELEMENTS,'98%','','green','','Select Gender',(ELEMENT)=>{

            ROUTE('Yes',SELECTGENDERPAGE,'HOMEPAGE');

        });

        BUTTON(ELEMENTS,'98%','','green','','Select Country',(ELEMENT)=>{

            ROUTE('Yes',SELECTCOUNTRYPAGE,'HOMEPAGE');

        });

        ROUNDBUTTON(ELEMENTS,'80%','','blue','','Save',(ELEMENT)=>{

        });

        BREAK(ELEMENTS);BREAK(ELEMENTS);BREAK(ELEMENTS);BREAK(ELEMENTS);BREAK(ELEMENTS);BREAK(ELEMENTS);

    });

    FLOATFIXEDBUTTON('','black',(ELEMENT)=>{

        IMAGE(ELEMENT,WHITEBACKICON,'25px','25px',(IMAGER)=>{

            STYLED(IMAGER,'transform','rotate(180deg)');
            
            CLICK(IMAGER,()=>{

                ROUTE('',HOMEPAGE,'HOMEPAGE');

            });

        });

    });

};

const SELECTCOUNTRYPAGE=()=>{

    CLEAR("");

    FULLSCROLLVIEW('','transparent',(ELEMENTS)=>{

        IMAGEBUTTON(ELEMENTS,'indigo','Uganda','#fff',WHITEADDICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{
    
                ROUTE(' ',NEWFARMERPAGE,'NEWFARMERPAGE');
    
            });
    
        });

        IMAGEBUTTON(ELEMENTS,'indigo','Uganda','#fff',WHITEADDICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{
    
                ROUTE(' ',NEWFARMERPAGE,'NEWFARMERPAGE');
    
            });
    
        });

        IMAGEBUTTON(ELEMENTS,'indigo','Uganda','#fff',WHITEADDICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{
    
                ROUTE(' ',NEWFARMERPAGE,'NEWFARMERPAGE');
    
            });
    
        });

        IMAGEBUTTON(ELEMENTS,'indigo','Congo','#fff',WHITEADDICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{
    
                ROUTE(' ',NEWFARMERPAGE,'NEWFARMERPAGE');
    
            });
    
        });

        IMAGEBUTTON(ELEMENTS,'indigo','Kenya','#fff',WHITEADDICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{
    
                ROUTE(' ',NEWFARMERPAGE,'NEWFARMERPAGE');
    
            });
    
        });

        IMAGEBUTTON(ELEMENTS,'indigo','Tanzania','#fff',WHITEADDICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{
    
                ROUTE(' ',NEWFARMERPAGE,'NEWFARMERPAGE');
    
            });
    
        });

        IMAGEBUTTON(ELEMENTS,'indigo','Burundi','#fff',WHITEADDICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{
    
                ROUTE(' ',NEWFARMERPAGE,'NEWFARMERPAGE');
    
            });
    
        });

        IMAGEBUTTON(ELEMENTS,'indigo','South','#fff',WHITEADDICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{
    
                ROUTE(' ',NEWFARMERPAGE,'NEWFARMERPAGE');
    
            });
    
        });

        IMAGEBUTTON(ELEMENTS,'indigo','Ethopia','#fff',WHITEADDICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{
    
                ROUTE(' ',NEWFARMERPAGE,'NEWFARMERPAGE');
    
            });
    
        });

    })

    FLOATFIXEDBUTTON('','black',(ELEMENT)=>{

        IMAGE(ELEMENT,WHITEBACKICON,'25px','25px',(IMAGER)=>{

            STYLED(IMAGER,'transform','rotate(180deg)');
            

            CLICK(IMAGER,()=>{

                ROUTE('',NEWFARMERPAGE,'NEWFARMERPAGE');

            });

        });

    });

}

const SELECTGENDERPAGE=()=>{

    CLEAR("");

    FULLSCROLLVIEW('','transparent',(ELEMENTS)=>{

        IMAGEBUTTON(ELEMENTS,'indigo','Male','#fff',WHITEADDICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{
    
                ROUTE(' ',NEWFARMERPAGE,'NEWFARMERPAGE');
    
            });
    
        });

        IMAGEBUTTON(ELEMENTS,'indigo','Female','#fff',WHITEADDICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{
    
                ROUTE(' ',NEWFARMERPAGE,'NEWFARMERPAGE');
    
            });
    
        });

    });

    FLOATFIXEDBUTTON('','black',(ELEMENT)=>{

        IMAGE(ELEMENT,WHITEBACKICON,'25px','25px',(IMAGER)=>{

            STYLED(IMAGER,'transform','rotate(180deg)');
            

            CLICK(IMAGER,()=>{

                ROUTE('',NEWFARMERPAGE,'NEWFARMERPAGE');

            });

        });

    });

}

const MENUPAGE=()=>{
    
    CONDITION(sessionStorage.getItem("MenuOpen"),()=>{

        CREATEELEMENT('','div',(ELEMENTS)=>{

            DELETEDATA("",'MenuOpen');

            STYLED(ELEMENTS,'position','Fixed');
            STYLED(ELEMENTS,'width','0%');
            STYLED(ELEMENTS,'height','100%');
            STYLED(ELEMENTS,'background','#cdcdcd');
            STYLED(ELEMENTS,'top','0');
            STYLED(ELEMENTS,'border-right','2px solid indigo');

        });

    },()=>{

        CREATEELEMENT('','div',(ELEMENTS)=>{

            STYLED(ELEMENTS,'position','Fixed');
            STYLED(ELEMENTS,'width','70%');
            STYLED(ELEMENTS,'height','100%');
            STYLED(ELEMENTS,'background','#cdcdcd');
            STYLED(ELEMENTS,'top','0');
            STYLED(ELEMENTS,'border-right','2px solid indigo');

            STOREDATA("",'MenuOpen','On');

            CREATEELEMENT(ELEMENTS,'h2',(NAME)=>{

                STYLED(NAME,'position','relative');
                STYLED(NAME,'margin-left','0.5rem');
                STYLED(NAME,'text-align','left');
                STYLED(NAME,'font-size','18px');
                STYLED(NAME,'color','indigo');

                DISPLAY(NAME,'Menu');
                
            });

            CREATEELEMENT(ELEMENTS,'div',(DATA)=>{

                STYLED(DATA,'position','relative');
                STYLED(DATA,'width','98%');
                STYLED(DATA,'height','50px');
                STYLED(DATA,'background','indigo');
                STYLED(DATA,'margin','auto');
                STYLED(DATA,'margin-top','1%');
                STYLED(DATA,'border-radius','10px');
                STYLED(DATA,'display','inline-flex');

                CREATEELEMENT(DATA,'h2',(NAME)=>{

                    STYLED(NAME,'position','relative');
                    STYLED(NAME,'margin-left','0.5rem');
                    STYLED(NAME,'text-align','left');
                    STYLED(NAME,'font-size','18px');
                    STYLED(NAME,'color','white');

                    DISPLAY(NAME,'New Farmer');
                    
                });

            });

            CREATEELEMENT(ELEMENTS,'div',(DATA)=>{

                STYLED(DATA,'position','relative');
                STYLED(DATA,'width','98%');
                STYLED(DATA,'height','50px');
                STYLED(DATA,'background','indigo');
                STYLED(DATA,'margin','auto');
                STYLED(DATA,'margin-top','1%');
                STYLED(DATA,'border-radius','10px');
                STYLED(DATA,'display','inline-flex');

                CREATEELEMENT(DATA,'h2',(NAME)=>{

                    STYLED(NAME,'position','relative');
                    STYLED(NAME,'margin-left','0.5rem');
                    STYLED(NAME,'text-align','left');
                    STYLED(NAME,'font-size','18px');
                    STYLED(NAME,'color','white');

                    DISPLAY(NAME,'New Plot');
                    
                });

            });

            CREATEELEMENT(ELEMENTS,'div',(DATA)=>{

                STYLED(DATA,'position','relative');
                STYLED(DATA,'width','98%');
                STYLED(DATA,'height','50px');
                STYLED(DATA,'background','indigo');
                STYLED(DATA,'margin','auto');
                STYLED(DATA,'margin-top','1%');
                STYLED(DATA,'border-radius','10px');
                STYLED(DATA,'display','inline-flex');

                CREATEELEMENT(DATA,'h2',(NAME)=>{

                    STYLED(NAME,'position','relative');
                    STYLED(NAME,'margin-left','0.5rem');
                    STYLED(NAME,'text-align','left');
                    STYLED(NAME,'font-size','18px');
                    STYLED(NAME,'color','white');

                    DISPLAY(NAME,'All Farmers ');
                    
                });

            });

            CREATEELEMENT(ELEMENTS,'div',(DATA)=>{

                STYLED(DATA,'position','relative');
                STYLED(DATA,'width','98%');
                STYLED(DATA,'height','50px');
                STYLED(DATA,'background','indigo');
                STYLED(DATA,'margin','auto');
                STYLED(DATA,'margin-top','1%');
                STYLED(DATA,'border-radius','10px');
                STYLED(DATA,'display','inline-flex');

                CREATEELEMENT(DATA,'h2',(NAME)=>{

                    STYLED(NAME,'position','relative');
                    STYLED(NAME,'margin-left','0.5rem');
                    STYLED(NAME,'text-align','left');
                    STYLED(NAME,'font-size','18px');
                    STYLED(NAME,'color','white');

                    DISPLAY(NAME,'All Plots');
                    
                });

            });

            CREATEELEMENT(ELEMENTS,'div',(DATA)=>{

                STYLED(DATA,'position','relative');
                STYLED(DATA,'width','98%');
                STYLED(DATA,'height','50px');
                STYLED(DATA,'background','indigo');
                STYLED(DATA,'margin','auto');
                STYLED(DATA,'margin-top','1%');
                STYLED(DATA,'border-radius','10px');
                STYLED(DATA,'display','inline-flex');

                CREATEELEMENT(DATA,'h2',(NAME)=>{

                    STYLED(NAME,'position','relative');
                    STYLED(NAME,'margin-left','0.5rem');
                    STYLED(NAME,'text-align','left');
                    STYLED(NAME,'font-size','18px');
                    STYLED(NAME,'color','white');

                    DISPLAY(NAME,'Reload App');
                    
                });

                CLICK(DATA,()=>{
                    
                    Reload();
                })

            });
    
        });

    });

};

const FARMERDETAILPAGE=()=>{

    CLEAR('');

    DEJSON(sessionStorage.getItem('FarmerData'),(MyData)=>{

        FULLSCROLLVIEW('','transparent',(ELEMENTS)=>{

            BREAK(ELEMENTS);
    
            IMAGE(ELEMENTS,NAWERIFISKONPHOTOS+MyData.farmerPhoto,'98%','50%',(ELEMENT)=>{
    
                STYLED(ELEMENT,'border','1px solid indigo');
                STYLED(ELEMENT,'border-radius','10px');
                STYLED(ELEMENT,'background','#cdcdcd');
    
            });

            LEFTTEXT(ELEMENTS,'','Farmer Name','indigo','20px');

            LEFTBUTTONTEXT(ELEMENTS,'98%','','#fff','indigo',`${MyData.farmerName} `,(ELEMENT)=>{
    
            });

            
            LEFTTEXT(ELEMENTS,'','Farmer Phone Number','indigo','20px');

            LEFTBUTTONTEXT(ELEMENTS,'98%','','#fff','indigo',`${MyData.farmerPhone} `,(ELEMENT)=>{
    
            });

            LEFTTEXT(ELEMENTS,'','Farmer Country','indigo','20px');

            LEFTBUTTONTEXT(ELEMENTS,'98%','','#fff','indigo',`${MyData.farmerCountry} `,(ELEMENT)=>{
    
            });

            LEFTTEXT(ELEMENTS,'','Farmer DIstricit','indigo','20px');

            LEFTBUTTONTEXT(ELEMENTS,'98%','','#fff','indigo',`${MyData.farmerDistrict} `,(ELEMENT)=>{
    
            });

            LEFTTEXT(ELEMENTS,'','Farmer Region','indigo','20px');

            LEFTBUTTONTEXT(ELEMENTS,'98%','','#fff','indigo',`${MyData.staffRegion} `,(ELEMENT)=>{
    
            });

            LEFTTEXT(ELEMENTS,'','Farmer Village','indigo','20px');

            LEFTBUTTONTEXT(ELEMENTS,'98%','','#fff','indigo',`${MyData.staffVillage} `,(ELEMENT)=>{
    
            });

            LEFTTEXT(ELEMENTS,'','Farms Year of Establishment','indigo','20px');

            LEFTBUTTONTEXT(ELEMENTS,'98%','','#fff','indigo',`${MyData.created_at
            } `,(ELEMENT)=>{
    
            });

            LEFTTEXT(ELEMENTS,'','Farmers Gender','indigo','20px');

            LEFTBUTTONTEXT(ELEMENTS,'98%','','#fff','indigo',`${MyData.farmerGender
            } `,(ELEMENT)=>{
    
            });
    
            BREAK(ELEMENTS);BREAK(ELEMENTS);BREAK(ELEMENTS);BREAK(ELEMENTS);BREAK(ELEMENTS);BREAK(ELEMENTS);
    
        });
    
        FLOATFIXEDBUTTON('','black',(ELEMENT)=>{
    
            IMAGE(ELEMENT,WHITEBACKICON,'25px','25px',(IMAGER)=>{
    
                STYLED(IMAGER,'transform','rotate(180deg)');
                
                CLICK(IMAGER,()=>{
    
                    ROUTE('',HOMEPAGE,'HOMEPAGE');
    
                });
    
            });
    
        });

    });

}