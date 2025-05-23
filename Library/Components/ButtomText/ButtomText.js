const BOTTOMTEXT=(ELEMENT,TYPE,WORDS,COLOR,SIZE,BOTTOM,MARGIN,callback)=>{

    const ELEMENT1=document.createElement(TYPE||"p");

    ELEMENT1.style.position='absolute'; 
    ELEMENT1.style.color=COLOR||'#cdcdcd';
    ELEMENT1.style.fontSize=SIZE||'20px';
    ELEMENT1.style.textAlign='left';
    ELEMENT1.style.margin=MARGIN||'auto';
    ELEMENT1.style.bottom=BOTTOM||'1%';

    ELEMENT1.innerHTML=WORDS||'Your Word'

    if (ELEMENT) {

        ELEMENT.append(ELEMENT1);
        
    } else {

        document.querySelector("body").append(ELEMENT1);
        
    };

    ELEMENT1.addEventListener('click',()=>{

        callback(ELEMENT1);

    });

};
export{BOTTOMTEXT};