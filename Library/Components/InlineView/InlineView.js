const INLINEVIEW=(ELEMENT,COLOR,WIDTH,HEIGHT,RADIUS,MARGIN,callback)=>{

    const ELEMENT1=document.createElement('div');

    ELEMENT1.style.position='relative';
    ELEMENT1.style.width=WIDTH||'100%';
    ELEMENT1.style.height=HEIGHT||'100%';
    ELEMENT1.style.overflow='hidden';
    ELEMENT1.style.overflowX='auto';
    ELEMENT1.style.display='inline-flex';
    ELEMENT1.style.background=COLOR||'#333333';
    ELEMENT1.style.margin=MARGIN||'auto';
    ELEMENT1.style.borderRadius=RADIUS||'10px';
    ELEMENT1.style.flexShrink='0';
    
    if (ELEMENT) {
        
        ELEMENT.append(ELEMENT1);

    } else {

        document.querySelector("body").append(ELEMENT1);
        
    }

    callback(ELEMENT1);

};
export{INLINEVIEW};