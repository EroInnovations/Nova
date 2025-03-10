const CONNECTIONLINK='https://docs.google.com/spreadsheets/d/15BPlgHpUmm65nUNSLRwlRzaWv1hPenriWVvL5MDcmiw/edit?gid=0#gid=0';

const NOVASTART=()=>{

    APPMODE('#ffffff');

    CLEAR('');

    ROUTE("",HOMEPAGE,'HOMEPAGE');

    DATATED();

};

const DATATED=()=>{

    GETDATA(CONNECTIONLINK,'News',(data)=>{
        
        const MYDATA={
            "Name":"CommunityRise",
            "Data":data
        }

        STOREINDEXED('CommunityRise','CommunityRise', MYDATA, (data)=>{

            if (data === true ) {

                
            } else {

                UPDATEINDEX('CommunityRise','CommunityRise', MYDATA,()=>{

                   
                });

            };

        });

    },(Error)=>{

        MESSAGEDISPLAY('','Something Went Wrong');

    });

}

const HOMEPAGE=()=>{

    CLEAR("");

    FULLSCROLLVIEW('','transparent',(ELEMENT)=>{

        HEADER(ELEMENT,'transparent',(ELEMENTS)=>{

            ICON(ELEMENTS,COMMUNITYRISELOGO,'25px','25px',()=>{

            });

            TEXT(ELEMENTS,'h2','News','#000000','20px',(ELE)=>{

                STYLED(ELE,'margin','auto');

                CLICK(ELE,()=>{

                    ROUTE(' ',NEWSPAGE,'HOMEPAGE');

                })

            });

            TEXT(ELEMENTS,'h2','Services','#000000','20px',(ELE)=>{

                STYLED(ELE,'margin','auto');

                CLICK(ELE,()=>{

                    ROUTE(' ',SERVICESPAGE,'HOMEPAGE');

                })

            });

            TEXT(ELEMENTS,'h2','About Us','#000000','20px',(ELE)=>{

                STYLED(ELE,'margin','auto');

                CLICK(ELE,()=>{

                    ROUTE(' ',ABOUTUSPAGE,'HOMEPAGE');

                })

            });

        });

        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'','50%',(ELE)=>{

        });

        TEXT(ELEMENT,'p','Creating a Smile and making a difference!','#000000','20px',()=>{

        });

        TEXT(ELEMENT,'p','By One Donation at a time.','#000000','20px',()=>{

        });

        TEXT(ELEMENT,'p','Donate Today and Change The World','#000000','20px',()=>{

        });

        LEFTTEXT(ELEMENT,'h3','Updates','blue','25px','',()=>{

        });

        VIEW(ELEMENT,'transparent',(ELEMENTS)=>{

            STYLED(ELEMENTS,'width','98%');
            STYLED(ELEMENTS,'height','50%');
            STYLED(ELEMENTS,'margin','auto');
            STYLED(ELEMENTS,'border-radius','10px');
            STYLED(ELEMENTS,'margin-top','10px');
            STYLED(ELEMENTS,'margin-bottom','10px');
            STYLED(ELEMENTS,'overflow','hidden');

            IMAGE(ELEMENTS,COMMUNITYRISEMOSQUECONSTRUCTION,'100%','100%',(ELE)=>{

            });

        });


        TEXT(ELEMENT,'p',' Whats Happening in Community Rise','#000000','20px',()=>{

        });

        ROUNDBUTTON(ELEMENT,'50%','50px','blue','','Latest News',(ELE)=>{

            ROUTE(' ',NEWSPAGE,'HOMEPAGE');


        },()=>{

        });

        VIEW(ELEMENT,'transparent',(ELEMENTS)=>{

            STYLED(ELEMENTS,'width','98%');
            STYLED(ELEMENTS,'height','50%');
            STYLED(ELEMENTS,'margin','auto');
            STYLED(ELEMENTS,'border-radius','10px');
            STYLED(ELEMENTS,'margin-top','10px');
            STYLED(ELEMENTS,'margin-bottom','10px');
            STYLED(ELEMENTS,'overflow','hidden');

            IMAGE(ELEMENTS,CommunityRiseBoreHole,'100%','100%',(ELE)=>{

            });

        });

        TEXT(ELEMENT,'p',' Create a differences Today','#000000','20px',()=>{

        });

        ROUNDBUTTON(ELEMENT,'50%','50px','blue','','Donate Now',()=>{

            ROUTE(' ',DONATEPAGE,'HOMEPAGE');

        });

        LEFTTEXT(ELEMENT,'h3','Who We Are!','blue','20px','#000000',()=>{

        });
        
        TEXT(ELEMENT,'p',`Community Rise Ventures is a Non Government Founded Organisation that has taken steps to try and solve the community problems ,Our Vision is to create a stable and sustainable Community for enhanced Development`,'#000000','20px',()=>{

        });

        LEFTTEXT(ELEMENT,'h3','Community Changes','blue','20px','#000000',()=>{

        });

        TEXT(ELEMENT,'p',`Join Us Today in the Health and Safety of Girl Children Via the Information Below`,'#000000','20px',()=>{

        });

        VIEW(ELEMENT,'transparent',(ELEMENTS)=>{

            STYLED(ELEMENTS,'width','98%');
            STYLED(ELEMENTS,'height','50%');
            STYLED(ELEMENTS,'margin','auto');
            STYLED(ELEMENTS,'border-radius','10px');
            STYLED(ELEMENTS,'margin-top','10px');
            STYLED(ELEMENTS,'margin-bottom','10px');
            STYLED(ELEMENTS,'overflow','hidden');

            IMAGE(ELEMENTS,COMMUNITYRISEPADS,'100%','100%',(EL)=>{

            });

        });

        LEFTTEXT(ELEMENT,'h3','Reach Us Today','blue','20px','',()=>{

        });

        VIEW(ELEMENT,'blue',(ELEMENTS)=>{

            STYLED(ELEMENTS,'width','98%');
            STYLED(ELEMENTS,'height','50px');
            STYLED(ELEMENTS,'margin','auto');
            STYLED(ELEMENTS,'border-radius','10px');
            STYLED(ELEMENTS,'margin-top','10px');
            STYLED(ELEMENTS,'margin-bottom','10px');
            STYLED(ELEMENTS,'display','inline-flex');

            ICON(ELEMENTS,WHITEXICON,'25px','25px',(ELEMENT)=>{

                CLICK(ELEMENT,()=>{

                });

            });

            ICON(ELEMENTS,WHITEFACEBOOKICON,'25px','25px',(ELEMENT)=>{

                CLICK(ELEMENT,()=>{

                    FACEBOOK('');

                });

            });

            ICON(ELEMENTS,WHITEINSTAGRAMICON,'25px','25px',(ELEMENT)=>{

                CLICK(ELEMENT,()=>{

                    INSTAGRAM('community_rise_ventures');

                });

            });

            ICON(ELEMENTS,WHITEWHATSAPPICON,'25px','25px',(ELEMENT)=>{

                CLICK(ELEMENT,()=>{

                    WHATSAPP('0779332496');

                });

            });

            ICON(ELEMENTS,WHITEGMAILICON,'25px','25px',(ELEMENT)=>{

                CLICK(ELEMENT,()=>{

                    GMAIL('Communityriseventures@gmail.com');

                });

            });

        });

        BREAK(ELEMENT); BREAK(ELEMENT);

    })

};

const NEWSPAGE=()=>{

    CLEAR("");

    FULLSCROLLVIEW('','transparent',(ELEMENT)=>{

        CLEAR(ELEMENT);

        HEADER(ELEMENT,'transparent',(ELEMENTS)=>{

            ICON(ELEMENTS,WHITEBACKICON,'25px','25px',(ELE)=>{

                STYLED(ELE,'margin-left','0.5rem');
                STYLED(ELE,'background','#000');
                STYLED(ELE,'padding','2%');
                STYLED(ELE,'border-radius','50px');

                CLICK(ELE,()=>{

                    ROUTE('',HOMEPAGE,'HOMEPAGE');

                });

            });

            TEXT(ELEMENTS,'h3','Updates','#000000','20px',(ELE)=>{

                STYLED(ELE,'margin-right','0.5rem');

                CLICK(ELE,()=>{

                    ROUTE(' ',NEWSPAGE,'HOMEPAGE');

                });

            });

        });

        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);

        GETINDEXED ('CommunityRise', 'CommunityRise', (data)=>{

            REDUX(data,(Element)=>{

                REDUX(Element.Data,(Elements)=>{

                    console.log(Elements)

                    VIEW(ELEMENT,'',(ELEMENTS)=>{

                        STYLED(ELEMENTS,'width','98%');
                        STYLED(ELEMENTS,'height','auto');
                        STYLED(ELEMENTS,'margin','auto');
                        STYLED(ELEMENTS,'border-radius','10px');
                        STYLED(ELEMENTS,'margin-top','10px');
                        STYLED(ELEMENTS,'margin-bottom','10px');
                        STYLED(ELEMENTS,'overflow','hidden');

                        IMAGE(ELEMENTS,Elements.ImageOne,'100%','50%',(ELEMENTSS)=>{

                            STYLED(ELEMENTSS,'background','red');

                        });

                        TEXT(ELEMENTS,'p',Elements.Story,'#000000','20px',(ELE)=>{

                            STYLED(ELE,'margin-right','0.5rem');
            
                            CLICK(ELE,()=>{
            
                                ROUTE(' ',NEWSPAGE,'HOMEPAGE');
            
                            })
            
                        });

                        VIEW(ELEMENTS,'blue',(ELEMENTSES)=>{

                            STYLED(ELEMENTSES,'width','100%');
                            STYLED(ELEMENTSES,'height','90%');
                            STYLED(ELEMENTSES,'margin','auto');
                            STYLED(ELEMENTSES,'border-radius','0px');
                            STYLED(ELEMENTSES,'margin-top','10px');
                            STYLED(ELEMENTSES,'margin-bottom','10px');
                            STYLED(ELEMENTSES,'overflow','hidden');
                            STYLED(ELEMENTSES,'overflowX','auto');
                            STYLED(ELEMENTSES,'display','inline-flex');
                           
                            IMAGE(ELEMENTSES,Elements.ImageOne||COMMUNITYRISELOGO,'90%','50%',(ELEMENTSS)=>{

                                STYLED(ELEMENTSS,'margin','auto');
                                STYLED(ELEMENTSS,'margin-left','1%');
                                STYLED(ELEMENTSS,'margin-right','1%');
    
                            });

                            IMAGE(ELEMENTSES,Elements.ImageTwo||COMMUNITYRISELOGO,'90%','50%',(ELEMENTSS)=>{

                                STYLED(ELEMENTSS,'margin','auto');
                                STYLED(ELEMENTSS,'margin-left','1%');
                                STYLED(ELEMENTSS,'margin-right','1%');
    
                            });

                            IMAGE(ELEMENTSES,Elements.ImageThree||COMMUNITYRISELOGO,'90%','50%',(ELEMENTSS)=>{

                                STYLED(ELEMENTSS,'margin','auto');
                                STYLED(ELEMENTSS,'margin-left','1%');
                                STYLED(ELEMENTSS,'margin-right','1%');
    
                            });

                            IMAGE(ELEMENTSES,Elements.ImageFour||COMMUNITYRISELOGO,'90%','50%',(ELEMENTSS)=>{

                                STYLED(ELEMENTSS,'margin','auto');
                                STYLED(ELEMENTSS,'margin-left','1%');
                                STYLED(ELEMENTSS,'margin-right','1%');
    
                            });

                        });

                    });

                });

            });

        });

    });

    FLOATFIXEDBUTTON('','black',(ELEMENT)=>{
    
        IMAGE(ELEMENT,WHITEADDICON,'25px','25px',(IMAGER)=>{

            STYLED(IMAGER,'transform','rotate(180deg)');
            
            CLICK(IMAGER,()=>{

                ROUTE('',UPDATENEWSPAGE,'NEWSPAGE');

            });

        });

    });

};

const SERVICESPAGE=()=>{

    CLEAR("");

    FULLSCROLLVIEW('','transparent',(ELEMENT)=>{

        HEADER(ELEMENT,'transparent',(ELEMENTS)=>{

            ICON(ELEMENTS,WHITEBACKICON,'25px','25px',(ELE)=>{

                STYLED(ELE,'margin-left','0.5rem');
                STYLED(ELE,'background','#000');
                STYLED(ELE,'padding','2%');
                STYLED(ELE,'border-radius','50px');

                CLICK(ELE,()=>{

                    ROUTE('',HOMEPAGE,'HOMEPAGE');

                });

            });

            TEXT(ELEMENTS,'h3','Services','#000000','20px',(ELE)=>{

                STYLED(ELE,'margin-right','0.5rem');

                CLICK(ELE,()=>{

                    ROUTE(' ',NEWSPAGE,'HOMEPAGE');

                })

            });

        });

        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'','50%',(ELE)=>{

        });

        TEXT(ELEMENT,'h2','Our Services','blue','20px',(ELE)=>{

            STYLED(ELE,'margin','auto');

        });

        LEFTTEXT(ELEMENT,'p',`Community Rise Ventures is a Non Government Founded Organisation that is dedicated to solving community arising challenges and leave a great smile.<br>We Solve the Following Community Based Problems With Permanet Solutions`,'#000000','18px','',()=>{

        });

        TEXT(ELEMENT,'h2','Quality Education','blue','20px',(ELE)=>{

            STYLED(ELE,'margin','auto');

        });

        LEFTTEXT(ELEMENT,'p',`Community Rise Ventures is a Non Government Founded Organisation that is dedicated to solving community arising challenges and leave a great smile.<br>We Solve the Following Community Based Problems With Permanet Solutions`,'#000000','18px','',()=>{

        });

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'','50%',(ELE)=>{

        });

        TEXT(ELEMENT,'h2','Quality Health','blue','20px',(ELE)=>{

            STYLED(ELE,'margin','auto');

        });

        LEFTTEXT(ELEMENT,'p',`Community Rise Ventures is a Non Government Founded Organisation that is dedicated to solving community arising challenges and leave a great smile.<br>We Solve the Following Community Based Problems With Permanet Solutions`,'#000000','18px','',()=>{

        });

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'','50%',(ELE)=>{

        });

        
        TEXT(ELEMENT,'h2','Housing For Orphans','blue','20px',(ELE)=>{

            STYLED(ELE,'margin','auto');

        });

        LEFTTEXT(ELEMENT,'p',`Community Rise Ventures is a Non Government Founded Organisation that is dedicated to solving community arising challenges and leave a great smile.<br>We Solve the Following Community Based Problems With Permanet Solutions`,'#000000','18px','',()=>{

        });

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'','50%',(ELE)=>{

        });

        
        TEXT(ELEMENT,'h2','Worship Center Constructions','blue','20px',(ELE)=>{

            STYLED(ELE,'margin','auto');

        });

        LEFTTEXT(ELEMENT,'p',`Community Rise Ventures is a Non Government Founded Organisation that is dedicated to solving community arising challenges and leave a great smile.<br>We Solve the Following Community Based Problems With Permanet Solutions`,'#000000','18px','',()=>{

        });

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'','50%',(ELE)=>{

        });

        
        TEXT(ELEMENT,'h2','Quality Water Supply','blue','20px',(ELE)=>{

            STYLED(ELE,'margin','auto');

        });

        LEFTTEXT(ELEMENT,'p',`Community Rise Ventures is a Non Government Founded Organisation that is dedicated to solving community arising challenges and leave a great smile.<br>We Solve the Following Community Based Problems With Permanet Solutions`,'#000000','18px','',()=>{

        });

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'','50%',(ELE)=>{

        });

    });

};

const ABOUTUSPAGE=()=>{

    CLEAR("");

    FULLSCROLLVIEW('','transparent',(ELEMENT)=>{

        HEADER(ELEMENT,'transparent',(ELEMENTS)=>{

            ICON(ELEMENTS,WHITEBACKICON,'25px','25px',(ELE)=>{

                STYLED(ELE,'margin-left','0.5rem');
                STYLED(ELE,'background','#000');
                STYLED(ELE,'padding','2%');
                STYLED(ELE,'border-radius','50px');
                CLICK(ELE,()=>{

                    ROUTE('',HOMEPAGE,'HOMEPAGE');

                });

            });

            TEXT(ELEMENTS,'h3','Donate','#000000','20px',(ELE)=>{

                STYLED(ELE,'margin-right','0.5rem');

                CLICK(ELE,()=>{

                    ROUTE(' ',DONATEPAGE,'ABOUTUSPAGE');

                });

            });

        });

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'','50%',(ELE)=>{

        });

        LEFTTEXT(ELEMENT,'h3','Who We Are!','blue','20px','',()=>{

        });

        LEFTTEXT(ELEMENT,'p',`We are Non Government Funded Organisation Located in Mbale City.`,'#000000','20px','',()=>{

        });

        LEFTBUTTONTEXT(ELEMENT,'98%','50px','blue','','location',()=>{

        });

        LEFTTEXT(ELEMENT,'p',`Community Rise Ventures is Located In Kasanvu in Mbale City along Mbale College`,'#000000','20px','',()=>{

        });

        LEFTBUTTONTEXT(ELEMENT,'98%','50px','blue','','Mission',()=>{

        });

        LEFTTEXT(ELEMENT,'p',`We are Aimed At Creating Smiles and Changing Community Lives for the Better`,'#000000','20px','',()=>{

        });

    });

};

const DONATEPAGE=()=>{

    CLEAR("");

    FULLSCROLLVIEW('','transparent',(ELEMENT)=>{

        HEADER(ELEMENT,'transparent',(ELEMENTS)=>{

            ICON(ELEMENTS,WHITEBACKICON,'25px','25px',(ELE)=>{

                STYLED(ELE,'margin-left','0.5rem');
                STYLED(ELE,'background','#000');
                STYLED(ELE,'padding','2%');
                STYLED(ELE,'border-radius','50px');

                CLICK(ELE,()=>{

                    ROUTE('',ABOUTUSPAGE,'ABOUTUSPAGE');

                });

            });

            TEXT(ELEMENTS,'h3','Donate Now','#000000','20px',(ELE)=>{

                STYLED(ELE,'margin-right','0.5rem');

            });

        });

        BREAK(ELEMENT);BREAK(ELEMENT);

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'','50%',(ELE)=>{

        });

        TEXT(ELEMENT,'h2','Donate Today','blue','20px',(ELE)=>{

            STYLED(ELE,'margin','auto');

        });

        LEFTTEXT(ELEMENT,'p',`Community Rise Ventures being a Non Government Funded Organisation uses Fundeds Collected From Donations to Render Better Services to the Community.<br><br>To Get Started Today Please Donate Via the Sources Below`,'#000000','18px','',()=>{

        });

        TEXT(ELEMENT,'h2',`Bank Account Number <br><Br>60080462400 <br><br>Bank Name: Absa Bank. `,'forestgreen','20px',(ELE)=>{

            STYLED(ELE,'margin','auto');

        });

        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);

        TEXT(ELEMENT,'p','Your Suppport is Greatly Appreciated','blue','20px',(ELE)=>{

            STYLED(ELE,'margin','auto');

        });

        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);

    });

};

const UPDATENEWSPAGE=()=>{

    CLEAR("");

    FULLSCROLLVIEW('','transparent',(ELEMENT)=>{

        HEADER(ELEMENT,'transparent',(ELEMENTS)=>{

            ICON(ELEMENTS,WHITEBACKICON,'25px','25px',(ELE)=>{

                STYLED(ELE,'margin-left','0.5rem');
                STYLED(ELE,'background','#000');
                STYLED(ELE,'padding','2%');
                STYLED(ELE,'border-radius','50px');

                CLICK(ELE,()=>{

                    ROUTE('',ABOUTUSPAGE,'ABOUTUSPAGE');

                });

            });

            TEXT(ELEMENTS,'h3','Tell Your Story','#000000','20px',(ELE)=>{

                STYLED(ELE,'margin-right','0.5rem');

            });

        });

        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);

        ROUNDINPUT(ELEMENT,'text','#000','','Enter Your Name',(data)=>{

            STOREDATA('','Name',data);

        });

        ROUNDINPUT(ELEMENT,'text','#000','','Enter Your Location',(data)=>{

            STOREDATA('','Location',data);

        });

        ROUNDINPUT(ELEMENT,'email','#000','','Enter Your Email',(data)=>{

            STOREDATA('','Email',data);

        });
        TEXTAREA(ELEMENT,'text','#000','Tell Us Your Story',(data)=>{

            STOREDATA('','Story',data);

        });

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'98%','70%',(ELEMENTS)=>{

            STYLED(ELEMENTS,'border','1px solid green');

            CLICK(ELEMENTS,()=>{

                IMAGEPICKER(ELEMENTS,(data)=>{

                    STOREDATA('','ImageOne',data);
                
                });
    
            });

        });

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'98%','70%',(ELEMENTS)=>{

            STYLED(ELEMENTS,'border','1px solid green');

            CLICK(ELEMENTS,()=>{

                IMAGEPICKER(ELEMENTS,(data)=>{

                    STOREDATA('','ImageTwo',data);
                
                });
    
            });

        });

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'98%','70%',(ELEMENTS)=>{

            STYLED(ELEMENTS,'border','1px solid green');

            CLICK(ELEMENTS,()=>{

                IMAGEPICKER(ELEMENTS,(data)=>{

                    STOREDATA('','ImageThree',data);
                
                });
    
            });

        });

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'98%','70%',(ELEMENTS)=>{

            STYLED(ELEMENTS,'border','1px solid green');

            CLICK(ELEMENTS,()=>{

                IMAGEPICKER(ELEMENTS,(data)=>{

                    STOREDATA('','ImageFour',data);
                
                });
    
            });

        });

        BUTTON(ELEMENT,'','','#000','#fff','Share Your Story',(ELEMENTS)=>{

            CONDITION(sessionStorage.getItem('Name'),()=>{

                CONDITION(sessionStorage.getItem('Location'),()=>{

                    CONDITION(sessionStorage.getItem('Email'),()=>{

                        CONDITION(sessionStorage.getItem('Story'),()=>{

                            CONDITION(sessionStorage.getItem('ImageOne')||sessionStorage.getItem('ImageTwo')||sessionStorage.getItem('ImageThree')||sessionStorage.getItem('ImageFour'),()=>{

                                CONDITION(navigator.onLine,()=>{

                                    DISPLAY(ELEMENTS,'Please Wait');

                                    const HEADERS=['Name','Location','Email','Story','ImageOne','ImageTwo','ImageThree','ImageFour'];

                                    const DATA=[sessionStorage.getItem('Name'),sessionStorage.getItem('Location'),sessionStorage.getItem('Email'),sessionStorage.getItem('Story'),sessionStorage.getItem('ImageOne'),sessionStorage.getItem('ImageTwo'),sessionStorage.getItem('ImageThree'),sessionStorage.getItem('ImageFour'),]

                                    INSERTDATA(CONNECTIONLINK,'News',HEADERS,DATA,(data)=>{

                                        GETDATA(CONNECTIONLINK,'News',(data)=>{
        
                                            const MYDATA={
                                                "Name":"CommunityRise",
                                                "Data":data
                                            }
                                    
                                            STOREINDEXED('CommunityRise','CommunityRise', MYDATA, (data)=>{
                                    
                                                if (data === true ) {
                                    
                                                    ROUTE(' ',NEWSPAGE,'HOMEPAGE');
                                                    
                                                } else {
                                    
                                                    UPDATEINDEX('CommunityRise','CommunityRise', MYDATA,()=>{
                                    
                                                        ROUTE(' ',NEWSPAGE,'HOMEPAGE');
                                    
                                                    });
                                    
                                                };
                                    
                                            });
                                    
                                        },(Error)=>{
                                    
                                            MESSAGEDISPLAY('','Something Went Wrong');
                                    
                                        });
        
                                    },(Error)=>{
        
                                        MESSAGEDISPLAY('','Something Went Wrong');
        
                                    });
        

                                },()=>{

                                    MESSAGEDISPLAY('','Check Your Internet');

                                });

                            },()=>{
                
                                MESSAGEDISPLAY('','Add Atleast One Image');
                
                            });

                        },()=>{
            
                            MESSAGEDISPLAY('','Tell Us Your Story');
            
                        });

                    },()=>{
        
                        MESSAGEDISPLAY('','Enter Your Email');
        
                    });

                },()=>{
    
                    MESSAGEDISPLAY('','Enter Your Location');
    
                });

            },()=>{

                MESSAGEDISPLAY('','Enter Your Name');

            });

        });

        BREAK(ELEMENT);BREAK(ELEMENT);

    });

};