const TEXTCOLOR='#0F990F';

const NOVASTART=()=>{

    APPMODE('#ffffff');
    
    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    HOMEHEADERTEMPLATE('',' ','',(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'h2','Qel Medicals',TEXTCOLOR,'20px','','',()=>{

        });

        RIGHTIMAGE(ELEMENT,GREENMENUICON,'25px','25px','','',()=>{

        });

    },()=>{

    });

};