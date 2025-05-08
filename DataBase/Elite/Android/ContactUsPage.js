
const CONTACTUSPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    CLEAR('');

    IMAGE('',EROINNOVATIONSLOGOONE,'','','',()=>{

    });

    NAVTEMPLATE('','transparent','98%','50px','1%',(ELEMENT)=>{

        TEXT(ELEMENT,'h3','Home','','','',()=>{

            ROUTE('',HOMEPAGE,'HOMEPAGE');

        });

        TEXT(ELEMENT,'h3','Social Media','','','',()=>{

            ROUTE(' ',SOCIALMEDIAPAGE,'HOMEPAGE');

        });

    });

    CENTERTEXT('','','Direct Contact','','20px','',()=>{

    });

    ROUNDINPUT('','','#cdcdcd','transparent','Your Subject','2%',()=>{

    });

    ROUNDINPUT('','','#cdcdcd','transparent','Your Names','2%',()=>{

    });

    ROUNDINPUT('','','#cdcdcd','transparent','Your Email','2%',()=>{

    });

    TEXTAREA('','','95%','200px','Your Message','2%',()=>{

    });
    
    BUTTON('','95%','50px','forestgreen','','Send','2%',()=>{

    });

    BREAK('');
};