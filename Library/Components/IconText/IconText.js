const ICONTEXT=(ELEMENT,SOURCE,COLOR,TEXTCOLOR,HOLDERWIDTH,HOLDERHEIGHT,WIDTH,HEIGHT,TEXT,MARGIN,callback)=>{

    const ELEMENT1=document.createElement('div');

    ELEMENT1.style.position='relative';
    ELEMENT1.style.width=HOLDERWIDTH||'auto';
    ELEMENT1.style.height=HOLDERHEIGHT||'auto';
    ELEMENT1.style.background=COLOR||'#cdcdcd';
    ELEMENT1.style.margin=MARGIN||'auto';
    ELEMENT1.style.display='inline-flex';
    ELEMENT1.style.padding='1%';

    const ELEMENT2=document.createElement('img');
    ELEMENT2.src=SOURCE;

    ELEMENT2.style.position='relative';
    ELEMENT2.style.width=WIDTH||'20px';
    ELEMENT2.style.height=HEIGHT||'20px';
    ELEMENT2.style.margin='auto';
    ELEMENT2.style.marginTop='0.1%';
    ELEMENT2.style.top='0';

    ELEMENT1.append(ELEMENT2);

    const ELEMENT3=document.createElement('h2');
    ELEMENT3.innerHTML=TEXT||'Your Word';

    ELEMENT3.style.position='absolute';
    ELEMENT3.style.fontSize='16px';
    ELEMENT3.style.width='100%';
    ELEMENT3.style.height='auto';
    ELEMENT3.style.top='auto';
    ELEMENT3.style.bottom='0';
    ELEMENT3.style.textAlign='centre';
    ELEMENT3.style.marginTop='1rem';
    ELEMENT3.style.marginBottom='1%';
    ELEMENT3.style.color=TEXTCOLOR||'#333333';

    ELEMENT1.append(ELEMENT3);

    if (ELEMENT) {

        ELEMENT.append(ELEMENT1);
        
    } else {


        document.querySelector("body").append(ELEMENT1);
        
    };

    ELEMENT1.addEventListener('click',()=>{

        callback(ELEMENT1);

    });

};
export{ICONTEXT};