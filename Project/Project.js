const NOVASTART=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    HOMEFOOTERTEMPLATE('','transparent',(ELEMENT)=>{

    },(ELEMENT)=>{

        ICONTEXT(ELEMENT,WHITECHATICON,'transparent','#fff','100px','40px','20px','20px','Messages','',()=>{

        });

        ICONTEXT(ELEMENT,WHITEPOSTICON,'transparent','#fff','100px','40px','20px','20px','Post','',()=>{

        });

        ICONTEXT(ELEMENT,WHITEUSERPROFILEICON,'transparent','#fff','100px','40px','20px','20px','Account','',()=>{

        });

    });

};