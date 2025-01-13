const INPUT=(ELEMENT,TYPE,COLOR,PLACEHOLDER,callback)=>{

   const ELEMENTS=document.createElement("input");

    ELEMENTS.style.width='95%';
    ELEMENTS.style.height='32px';
    ELEMENTS.style.border='none';
    ELEMENTS.style.background='transparent';
    ELEMENTS.style.borderBottom='1px solid #cdcdcd';
    ELEMENTS.maxLength=49000;
    ELEMENTS.style.outline='none';
    ELEMENTS.type=TYPE||'text';
    ELEMENTS.placeholder=PLACEHOLDER||'Your Text';
    ELEMENTS.style.color=COLOR||'#cdcdcd';
    ELEMENTS.style.marginTop='1%';
    ELEMENTS.style.marginBottom='1%';

    if (ELEMENT) {

        ELEMENT.append(ELEMENTS);

    } else {

        document.querySelector("body").append(ELEMENTS);

    };

    ELEMENTS.addEventListener("input",()=>{

        callback(ELEMENTS.value);

    });

};
export{INPUT};