const API='https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing';

const TEXTCOLOR='#ffffff';

const MAINCOLOR='#0F990F';

const NOVASTART=()=>{

    STOREINDEXEDDATA(API,'Products');

    HOSTINGCHECKER(()=>{

        VISITOR(API,'Visitors');

        APPMODE(localStorage.getItem('Color')||MAINCOLOR);
        
    });

};
