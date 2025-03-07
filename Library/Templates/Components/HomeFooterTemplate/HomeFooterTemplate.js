const HOMEFOOTERTEMPLATE=(ELEMENT,FooterColor,HomeCallBack,FooterCallBack)=>{

    CLEAR(ELEMENT);

    FULLSCROLLVIEW(ELEMENT,'transparent',(ELEMS)=>{

        HomeCallBack(ELEMS);

    });

    FOOTER(ELEMENT,FooterColor,'100%','50px',(ELEMS)=>{

        STYLED(ELEMS,'border-top','1px solid #cdcdcd20');

        FooterCallBack(ELEMS);

    });

};

export{HOMEFOOTERTEMPLATE}