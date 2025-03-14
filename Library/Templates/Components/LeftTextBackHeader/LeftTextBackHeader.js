const LEFTTEXTBACKHEADER=(ELEMENT,Backcallback,WORD,COLOR,TextCallback)=>{

    HEADER(ELEMENT,' ',(ELEMENTS)=>{

        LEFTIMAGE(ELEMENTS,WHITEBACKICON,'20px','20px','0.5rem','',(ELEMS)=>{

            Backcallback();

        });

        RIGHTTEXT(ELEMENTS,'p',WORD,COLOR,'20px','0.5rem','',(ELEMS)=>{

            TextCallback();

        });

    });

};

export{LEFTTEXTBACKHEADER};