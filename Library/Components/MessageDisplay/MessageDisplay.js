const MESSAGEDISPLAY=(ELEMENT,MESSAGE,TIME)=>{

    const ELEMENT1=document.createElement('div');

    ELEMENT1.style.width='95%';
    ELEMENT1.style.position='absolute';
    ELEMENT1.style.height='50px';
    ELEMENT1.style.background='#000000';
    ELEMENT1.style.left='2%';
    ELEMENT1.style.display='inline-flex';
    ELEMENT1.style.bottom='3%';
    ELEMENT1.style.borderRadius='10px';
    ELEMENT1.style.color='#cdcdcd';

    const TEXTER=document.createElement("h1");

    TEXTER.innerHTML=MESSAGE||"Your Message";
    TEXTER.style.margin='auto';
    TEXTER.style.fontSize='25px';

    ELEMENT1.append(TEXTER);

    setTimeout(() => {

        ELEMENT1.style.display='none';
        
    }, TIME||'2000');


    if (ELEMENT) {
        
        ELEMENT.append(ELEMENT1);

    } else {

        document.querySelector("body").append(ELEMENT1);
        
    };

};
export{MESSAGEDISPLAY}