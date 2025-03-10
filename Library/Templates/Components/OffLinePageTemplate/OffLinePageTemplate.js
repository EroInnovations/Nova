const OFFLINEPAGETEMPLATE=(HomeCallBack,ReconnectCallBack)=>{

    CHECKER(!navigator.onLine,()=>{

        CLEAR('');

        FULLSCROLLVIEW('','transparent',(ELEMS)=>{
    
            IMAGE(ELEMS,WHITENOWIFIICON,'50%','30%',(NOIFI)=>{
    
                STYLED(NOIFI,'margin-top','10%');
        
            });
    
            CENTERTEXT(ELEMS,'','Your Offline','','20px',()=>{
    
            });
    
            CENTERTEXT(ELEMS,'','Please Check Your Internet Connection <br> Click Reconnect to try Again <br> Click Cancel To Close. ','','16px',()=>{
    
            });
    
            BREAK(ELEMS);BREAK(ELEMS);
    
            BUTTON(ELEMS,'','50px','forestgreen','','Reconnect',(ELEMENT)=>{
    
                CONDITION(navigator.onLine,()=>{
    
                    ReconnectCallBack();
    
                },()=>{
    
                    MESSAGEDISPLAY('','Check Your Internet','');
    
                });
    
            });
    
            BREAK(ELEMS);
    
            BUTTON(ELEMS,'','50px','brown','','Cancel',(ELEMENT)=>{
    
                HomeCallBack();
    
            });
    
        });
        
    });

};

export{OFFLINEPAGETEMPLATE};