const AUDIO=(ELEMENTS,SRC,callback)=>{

    const ELEMENT=document.createElement("Audio");

    ELEMENT.src=SRC;

    callback(ELEMENT);

    if (ELEMENTS) {

        ELEMENTS.append(ELEMENTS)
        
    } else {
        
        document.querySelector("body").append(ELEMENT);

    }

}
export{AUDIO};