const NOVASTART=()=>{
    
    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    HOMEHEADERTEMPLATE('','transparent','',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITEMENUICON,'20px','20px','1rem','',()=>{

            FULLMENUTEMPLATE('','','50%','left',()=>{

            });

        });

        CENTERTEXT(ELEMENT,'','Elite Pay','','','',()=>{

        });

        RIGHTIMAGE(ELEMENT,WHITEUSERICON,'20px','20px','1rem','',()=>{

        });

    },(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'','Our Services','','30px','1rem','5% auto auto',()=>{

        });

        LEFTTEXT(ELEMENT,'','Updated On 1st May,2025','','15px','1rem',' ',()=>{

        });

        FULLSCROLLVIEW(ELEMENT,'#cdcdcd10',(ELEMENTS)=>{

            STYLED(ELEMENTS,'top','20%');

            TABLEVIEW(ELEMENTS,'#cdcdcd30','180px','200px','','2%',(ELEMENTES)=>{

                FOOTER(ELEMENTES,'#000','100%','50px',(ELEMS)=>{

                    STYLED(ELEMS,'border-radius','0px 0px 5px 5px');

                    CENTERTEXT(ELEMS,'','My Account','','20px','',()=>{

                    });

                });

            });

            TABLEVIEW(ELEMENTS,'#cdcdcd30','180px','200px','','2%',(ELEMENTES)=>{

                FOOTER(ELEMENTES,'#000','100%','50px',(ELEMS)=>{

                    STYLED(ELEMS,'border-radius','0px 0px 5px 5px');

                    CENTERTEXT(ELEMS,'','Deposit Money','','20px','',()=>{

                    });

                });

                CLICK(ELEMENTES,()=>{

                    ROUTE(' ',DEPOSITMONEYPAGE,'HOMEPAGE');

                })

            });

            TABLEVIEW(ELEMENTS,'#cdcdcd30','180px','200px','','2%',(ELEMENTES)=>{

                FOOTER(ELEMENTES,'#000','100%','50px',(ELEMS)=>{

                    STYLED(ELEMS,'border-radius','0px 0px 5px 5px');

                    CENTERTEXT(ELEMS,'','My Balance','','20px','',()=>{

                    });

                });

            });

            TABLEVIEW(ELEMENTS,'#cdcdcd30','180px','200px','','2%',(ELEMENTES)=>{

                FOOTER(ELEMENTES,'#000','100%','50px',(ELEMS)=>{

                    STYLED(ELEMS,'border-radius','0px 0px 5px 5px');

                    CENTERTEXT(ELEMS,'','Transactions','','20px','',()=>{

                    });

                });

            });

            TABLEVIEW(ELEMENTS,'#cdcdcd30','180px','200px','','2%',(ELEMENTES)=>{

                FOOTER(ELEMENTES,'#000','100%','50px',(ELEMS)=>{

                    STYLED(ELEMS,'border-radius','0px 0px 5px 5px');

                    CENTERTEXT(ELEMS,'','Transact','','20px','',()=>{

                    });

                });

            });

            TABLEVIEW(ELEMENTS,'#cdcdcd30','180px','200px','','2%',(ELEMENTES)=>{

                FOOTER(ELEMENTES,'#000','100%','50px',(ELEMS)=>{

                    STYLED(ELEMS,'border-radius','0px 0px 5px 5px');

                    CENTERTEXT(ELEMS,'','About App','','20px','',()=>{

                    });

                });

            });

        });

    });

};

const DEPOSITMONEYPAGE=()=>{

    DELETEDATA('','AmountSaved');
    DELETEDATA('','Email');
    DELETEDATA('','Messsage');

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Deposit Funds','',()=>{

    },(ELEMENT)=>{

        CENTERTEXT(ELEMENT,'','Increase Your Wallet Savings','','25px','',()=>{

        });

        ROUNDINPUT(ELEMENT,'tel','','transparent','Enter Amount','',(data)=>{

            CONDITION(data <=499,()=>{

                MESSAGEDISPLAY('','Mininium Amount Is 500','');
                
                DELETEDATA('','AmountSaved');

            },()=>{

                DOLLAREXCHANGE('USD',data,(Amount)=>{

                    STOREDATA('','AmountSaved',Amount);
    
                });

            });

        });

        ROUNDINPUT(ELEMENT,'email','','transparent','Enter Your Email','',(data)=>{

            STOREDATA('','Email',data);

        });

        TEXTAREA(ELEMENT,'','95%','200px','Compose Message','',(data)=>{

            STOREDATA('','Messsage',data);

        });

        IMAGEBUTTON(ELEMENT,'forestgreen','Deposit','',WHITECHECKICON,'50px','',(ELEMENTS)=>{

            CONDITION(sessionStorage.getItem('AmountSaved'),()=>{

                CONDITION(sessionStorage.getItem('Email'),()=>{

                    CONDITION(sessionStorage.getItem('Messsage'),()=>{

                        CONDITION(navigator.onLine,()=>{

                            DISPLAY(ELEMENTS,'...Please Wait ....');

                            const LINK=''

                            ELITEPAY(sessionStorage.getItem('Email'),sessionStorage.getItem('Email'),sessionStorage.getItem('AmountSaved'),sessionStorage.getItem('Messsage'),LINK,(url)=>{

                                WEBSITE(Url);

                            });
    
                        },()=>{
            
                            MESSAGEDISPLAY('','Check Your Internet Connection','');
            
                        });

                    },()=>{
        
                        MESSAGEDISPLAY('','Compose A Message','');
        
                    });

                },()=>{
    
                    MESSAGEDISPLAY('','Enter Your Email','');
    
                });

            },()=>{

                MESSAGEDISPLAY('','Enter Amount','');

            });

        });

    });

};