const NOVASTART=()=>{

    APPMODE('#06173b')

    SCREENWIDTH((Width)=>{

        CONDITION(Width <= 800 ,()=>{

            ROUTE('',MOBILEWEBSITE,'MOBILEWEBSITE');

        },()=>{

            ROUTE('',DESKTOPWEBSITE,'DESKTOPWEBSITE');

        });

        console.log(Width);

    });

};

const MOBILEWEBSITE=()=>{

    CLEAR('');

    ROUTE('',MOBILEHOMEPAGE,'MOBILEHOMEPAGE');

};

const MOBILEHOMEPAGE=()=>{

    CLEAR('');

    HEADER('',' ',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'50px','50px','2%',()=>{

        });

        CENTERTEXT(ELEMENT,'h3','Ero Innovations','','20px',()=>{

        });

        RIGHTIMAGE(ELEMENT,WHITEMENUICON,'25px','25px','5%',()=>{

        });

    });

    FULLSCROLLVIEW('',' ',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

       IMAGE(ELEMENT,EROINNOVATIONSLOGOONE,'93%','50%',()=>{

       });

       CENTERTEXT(ELEMENT,'h5','About Us','','20px',()=>{

       });

       BREAK(ELEMENT);

       const MESSAGES='Software Development Company Located In Mbale City.<br><br> We Develop Android Apps,Desktop Apps and WebSites. <br><br> We offer Cloud Based Systems that are scalable and Easy To Use. <br><br> We let You Imagine ,We Build It and Inspire the Rest. <br><br> Get Your Dream App Built Today Using the Cutting Edge Cloud Based Softwares that are approved to The European Union and More .<br><br> Click the Button Below Today to get Started.';

       LEFTTEXT(ELEMENT,'p',MESSAGES,'','','',()=>{

       });

       IMAGEBUTTON(ELEMENT,'forestgreen','Contact Us ','',WHITEPHONEICON,'50px',()=>{

        GMAIL('eroinnovations9@gmail.com');

       });

       BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);

    });

};

const DESKTOPWEBSITE=()=>{

};

'44a683c3-6ba2-4377-936c-898176776656'