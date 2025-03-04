const RIGHTTEXT=(ELEMENT,TYPE,WORDS,COLOR,SIZE,RIGHT,callback)=>{

    const ELEMENT1=document.createElement(TYPE||"p");

    ELEMENT1.style.color=COLOR||'#cdcdcd';
    ELEMENT1.style.fontSize=SIZE||'20px';
    ELEMENT1.style.textAlign='right';
    ELEMENT1.style.margin='auto';
    ELEMENT1.style.marginRight=RIGHT||'1%';

    ELEMENT1.innerHTML=WORDS||'Your Word'

    if (ELEMENT) {

        ELEMENT.append(ELEMENT1);
        
    } else {

        document.querySelector("body").append(ELEMENT1);
        
    };

    callback(ELEMENT1);

};
export{RIGHTTEXT}