const RIGHTTEXT=(ELEMENT,TYPE,WORDS,COLOR,SIZE,callback)=>{

    const ELEMENT1=document.createElement(TYPE||"p");

    ELEMENT1.style.color=COLOR||'#000';
    ELEMENT1.style.fontSize=SIZE||'20px';
    ELEMENT1.style.textAlign='right';
    ELEMENT1.style.marginRight='1%';

    ELEMENT1.innerHTML=WORDS||'Your Word'

    if (ELEMENT) {

        ELEMENT.append(ELEMENT1);
        
    } else {

        document.querySelector("body").append(ELEMENT1);
        
    };

    callback(ELEMENT1);

};
export{RIGHTTEXT}