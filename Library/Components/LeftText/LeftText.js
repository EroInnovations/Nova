const LEFTTEXT=(ELEMENT,TYPE,WORDS,COLOR,SIZE,callback)=>{

    const ELEMENT1=document.createElement(TYPE||"p");

    ELEMENT1.style.color=COLOR||'#000';
    ELEMENT1.style.fontSize=SIZE||'20px';
    ELEMENT1.style.textAlign='left';
    ELEMENT1.style.margin='auto';
    ELEMENT1.style.marginLeft='1%';

    ELEMENT1.innerHTML=WORDS||'Your Word'

    if (ELEMENT) {

        ELEMENT.append(ELEMENT1);
        
    } else {

        document.querySelector("body").append(ELEMENT1);
        
    };

    callback(ELEMENT1);

};
export{LEFTTEXT}