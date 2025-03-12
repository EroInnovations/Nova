const VIEW=(ELEMENT,COLOR,WIDTH,HEIGHT,MARGIN,callback)=>{

    const ELEMENT1=document.createElement('div');

    ELEMENT1.style.position='relative';
    ELEMENT1.style.width=WIDTH||'100%';
    ELEMENT1.style.height=HEIGHT||'100%';
    ELEMENT1.style.overflow='hidden';
    ELEMENT1.style.overflowY='auto';
    ELEMENT1.style.display='block';
    ELEMENT1.style.background=COLOR||'#cdcdcd';
    ELEMENT1.style.margin=MARGIN||'auto';
    
    if (ELEMENT) {
        
        ELEMENT.append(ELEMENT1);

    } else {

        document.querySelector("body").append(ELEMENT1);
        
    }

    callback(ELEMENT1);

};
export{VIEW};