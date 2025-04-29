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