const INSERTDATA=(LINK,NAME,HEADERS,INFO,callback,callback1)=>{

    const DATA={
        "sheetName":NAME,
        "spreadsheetUrl":LINK,
        "Headers":HEADERS,
        "Data":INFO
    };
    
    fetch('https://script.google.com/macros/s/AKfycbw_d9NafTQycKhhTL0Yhjy12g8DRP7bfBVoLqrdaofT6SI1_zxCEZKtl-Bsaoz0omIOCQ/exec',{
        method:'Post',
        mode:'cors',
        body:JSON.stringify(DATA)
    })

    .then(res =>res.json())

    .then(data =>{

        callback(data)

    } )

    .catch(error =>{

        callback1(error)

    } );
    
};
export{INSERTDATA};