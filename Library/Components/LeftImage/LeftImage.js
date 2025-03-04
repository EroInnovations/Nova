const LEFTIMAGE=(ELEMENT,SOURCE,WIDTH,HEIGHT,LEFT,callback)=>{

    const ELEMENT1=document.createElement('img');

    ELEMENT1.style.width=WIDTH||'95%';
    ELEMENT1.style.height=HEIGHT||'95%';
    ELEMENT1.style.margin='auto';
    ELEMENT1.style.marginLeft=LEFT||'1%';

    ELEMENT1.src=SOURCE;

    callback(ELEMENT1);

    if (ELEMENT) {
        
       ELEMENT.append(ELEMENT1);
        
    } else {

        document.querySelector("body").append(ELEMENT1);
        
    }

};
export{LEFTIMAGE};