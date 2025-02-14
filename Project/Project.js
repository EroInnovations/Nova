const NOVASTART=()=>{

    CLEAR("");

    APPMODE('#000');

    AUDIO('','',(ELES)=>{

        CLICK(ELES,()=>{

            AUDIOPICKER(ELES,(data)=>{

                ELES.src=data;

            }) 

        })

    })
    
};