const LEFTTEXTBACKHEADERBODY=(ELEMENT,Backcallback,WORD,COLOR,TextCallback,BodyCallBack)=>{

    CLEAR(ELEMENT);

    HEADER(ELEMENT,' ',(ELEMENTS)=>{

        LEFTIMAGE(ELEMENTS,WHITEBACKICON,'20px','20px','0.5rem','',(ELEMS)=>{

            CLICK(ELEMS,()=>{

                Backcallback();

            });

        });

        RIGHTTEXT(ELEMENTS,'p',WORD,COLOR,'20px','0.5rem','',(ELEMS)=>{

            CLICK(ELEMS,()=>{

                TextCallback();

            });

        });

    });

    FULLSCROLLVIEW(ELEMENT,'transparent',(ELEMS)=>{

        STYLED(ELEMS,'top','50px');

        BodyCallBack(ELEMS);

    });

};

export{LEFTTEXTBACKHEADERBODY};