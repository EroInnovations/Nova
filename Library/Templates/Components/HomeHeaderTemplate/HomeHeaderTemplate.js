const HOMEHEADERTEMPLATE=(ELEMENT,HeaderColor,BodyColor,callback,HomeCallBack)=>{

    CLEAR(ELEMENT);

    HEADER(ELEMENT,HeaderColor,(ELEMS)=>{

        callback(ELEMS);

    });

    FULLSCROLLVIEW(ELEMENT,BodyColor||'transparent',(ELEMS)=>{

        if (localStorage.getItem('Environment') === 'Production' ) {

            STYLED(ELEMS,'top','100px');

        }else{

            STYLED(ELEMS,'top','50px');

        }

        HomeCallBack(ELEMS);

    });

};

export{HOMEHEADERTEMPLATE}