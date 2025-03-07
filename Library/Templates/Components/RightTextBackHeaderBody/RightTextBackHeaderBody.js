const RIGHTTEXTBACKHEADERBODY=(ELEMENT,Backcallback,WORD,COLOR,TextCallback,BodyCallBack)=>{

    CLEAR(ELEMENT);

    HEADER(ELEMENT,' ',(ELEMENTS)=>{

        LEFTTEXT(ELEMENTS,'p',WORD,COLOR,'20px','0.5rem',(ELEMS)=>{

            CLICK(ELEMS,()=>{

                TextCallback();

            });

        });

        RIGHTIMAGE(ELEMENTS,WHITEBACKICON,'20px','20px','0.5rem',(ELEMS)=>{

            STYLED(ELEMS,'transform','rotate(180deg)');

            CLICK(ELEMS,()=>{

                Backcallback();

            });

        });

    });

    FULLSCROLLVIEW(ELEMENT,'transparent',(ELEMS)=>{

        STYLED(ELEMS,'top','50px');

        BodyCallBack(ELEMS);

    });

};

export{RIGHTTEXTBACKHEADERBODY};