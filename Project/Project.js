const NOVASTART=()=>{

    APPMODE('#8979b3')

    ACCOUNTCHECKER(()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },()=>{

    },()=>{

        ROUTE('',LOGINPAGE,'LOGINPAGE');

    });

};

const LOGINPAGE=()=>{

    CLEAR('');

    ICON('',WINKSTALOGO,'60%','30%','5% auto',()=>{

    });

    INPUT('','email','#ffffff','Enter Email',()=>{

    });

    INPUT('','password','#ffffff','Enter Password',()=>{

    });

    ROUNDBUTTON('','70%','50px','#292435','','Sign In',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    });

};

const HOMEPAGE=()=>{

    HOMEHEADERTEMPLATE('',' ','',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITEMENUICON,'25px','25px','0.5rem','',(ELEMENTS)=>{

            FULLMENUTEMPLATE('','#8979b3','50%','left',(ELEMENTES)=>{

            });

        });

        RIGHTIMAGE(ELEMENT,WHITEUSERICON,'25px','25px','0.5rem','',(ELEMENTS)=>{

            ROUTE(' ',USERACCOUNTPAGE,'HOMEPAGE');

        });

    },(ELEMENT)=>{

    });

};

const USERACCOUNTPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Profile','',()=>{

    },(ELEMENT)=>{

    })

};