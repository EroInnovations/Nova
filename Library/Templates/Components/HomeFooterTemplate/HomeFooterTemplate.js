const HOMEFOOTERTEMPLATE=(ELEMENT,HomeCallBack,FooterCallBack)=>{

    CLEAR(ELEMENT);

    FULLSCROLLVIEW(ELEMENT,'transparent',(ELEMS)=>{

        HomeCallBack(ELEMS);

    });

    ROUNDFOOTER(ELEMENT,'#333','','50px','50px',(ELEMS)=>{

        FooterCallBack(ELEMS);

    });

};

export{HOMEFOOTERTEMPLATE}