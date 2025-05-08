const METRICSPAGE=()=>{

    CLEAR('');

    IMAGE('',EROINNOVATIONSLOGOONE,'','','',()=>{

    });

    NAVTEMPLATE('','transparent','98%','50px','1%',(ELEMENT)=>{

        TEXT(ELEMENT,'h3','Home','','','',()=>{

            ROUTE('',ABOUTUSPAGE,'ABOUTUSPAGE');

        });

        TEXT(ELEMENT,'h3','Download Data','blue','','',()=>{

        });

    });

    CENTERTEXT('','h1','Site Performance','','25px','2%',()=>{

    });

    VIEW('',' ','98%','auto','',(ELEMENT)=>{

        const Message='The Following Content Your About to See is the Real Time Information of People Visiting this Site Device Based But the Information For Orders and Stake Holders is Private but Available to Share Holders not Even Our Employees have Access to it and its Represented as Weekly Data.';

        LEFTTEXT(ELEMENT,'',Message,'','','1%','',()=>{

        });

        NAVTEMPLATE(ELEMENT,'transparent','98%','50px','1%',(ELEMENT)=>{

            TEXT(ELEMENT,'h3','Desktop','forestgreen','','',()=>{
    
                
            });
    
            TEXT(ELEMENT,'h3','Android','orange','','',()=>{
    
            });

                
            TEXT(ELEMENT,'h3','Ios','teal','','',()=>{
    
            });
    
        });

        NAVTEMPLATE(ELEMENT,'transparent','98%','50px','1%',(ELEMENT)=>{

            TEXT(ELEMENT,'h3','50','','','',()=>{
    
                
            });
    
            TEXT(ELEMENT,'h3','11,000','','','',()=>{
    
            });

                
            TEXT(ELEMENT,'h3','1','','','',()=>{
    
            });
    
        });

        BREAK(ELEMENT);
        
    });

};