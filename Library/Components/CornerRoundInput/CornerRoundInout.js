const CORNERROUNDINPUT=(ELEMENT,TYPE,COLOR,BGCOLOR,WIDTH,HEIGHT,PLACEHOLDER,callback)=>{

    const ELEMENTS=document.createElement("input");
 
    ELEMENTS.style.width=WIDTH||'95%';
    ELEMENTS.style.borderRadius='10px';
    ELEMENTS.style.height=HEIGHT||'32px';
    ELEMENTS.style.background=BGCOLOR||'#cdcdcd';
    ELEMENTS.style.border='1px solid #cdcdcd';
    ELEMENTS.style.outline='none';
    ELEMENTS.style.color=COLOR||'#cdcdcd';
    ELEMENTS.style.marginTop='1%';
    ELEMENTS.style.marginBottom='1%';
    ELEMENTS.style.padding='1px';

    ELEMENTS.placeholder=PLACEHOLDER||'Your Text';
    ELEMENTS.type=TYPE||'text';
    ELEMENTS.maxLength=49000;
 
    if (ELEMENT) {
 
        ELEMENT.append(ELEMENTS);
 
    } else {
 
        document.querySelector("body").append(ELEMENTS);
 
    };
 
    ELEMENTS.addEventListener("input",()=>{
 
        callback(ELEMENTS.value);
 
    });
 
};
export{CORNERROUNDINPUT};