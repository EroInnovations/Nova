const NOVASTART=()=>{
    
ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    HOMEHEADERTEMPLATE('','#333333','',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITEMENUICON,'30px','25px','1rem','',(ELEMENTS)=>{

            FULLMENUTEMPLATE('','#333333','50%','left',(ELEMENT)=>{

                MENUPAGE(ELEMENT);

            });
        
        });

        CENTERTEXT(ELEMENT,'','App Manager','','20px','',()=>{

        });

        RIGHTIMAGE(ELEMENT,WHITEUSERICON,'30px','30px','1rem','',(ELEMENTS)=>{

        });

    },()=>{

    });
    
};

const MENUPAGE=(ELEMENT)=>{

    BUTTONIMAGE(ELEMENT,'forestgreen','New Project','',WHITEPOSTICON,'50px',()=>{

    });

    FOOTER(ELEMENT,' ','','',(ELES)=> {

        LEFTTEXT(ELES,'','Log Out','','20px','1rem',()=>{

        });

        RIGHTIMAGE(ELES,WHITENEXTICON,'25px','25px','1rem','',(ELEMENTS)=>{

        });

    });

};
