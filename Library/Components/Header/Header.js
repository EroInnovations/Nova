const HEADER=(ELEMENT,COLOR,callback)=>{

    const ELEMENT1=document.createElement("header");

    ELEMENT1.style.position='absolute';
    ELEMENT1.style.width='100%';
    ELEMENT1.style.background=COLOR||'#cdcdcd';
    ELEMENT1.style.display='inline-flex';
    ELEMENT1.style.left='0';
    ELEMENT1.style.top='0';
    ELEMENT1.style.margin='auto';

    const ELEMS=document.createElement('div');
    ELEMS.style.position='absolute';
    ELEMS.style.bottom='0';
    ELEMS.style.display='inline-flex';
    ELEMS.style.background='transparent';
    ELEMS.style.height='50px';
    ELEMS.style.width='100%';
    ELEMS.style.left='0';

    if (localStorage.getItem('Environment') === 'Production' ) {

        ELEMENT1.style.height='100px';

        ELEMENT1.append(ELEMS);

        if (ELEMENT) {
    
            ELEMENT.append(ELEMENT1);
            
        } else {
    
    
            document.querySelector("body").append(ELEMENT1);
            
        };
    
        callback(ELEMS);

    }else{

        ELEMENT1.style.height='50px';

        if (ELEMENT) {
    
            ELEMENT.append(ELEMENT1);
            
        } else {
    
    
            document.querySelector("body").append(ELEMENT1);
            
        };
    
        callback(ELEMENT1);

    }


};
export{HEADER};