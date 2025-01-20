const UPDATEDATA=(LINK,NAME,ID,INFO,callback,callback1)=>{
    const DATA={
        "sheetName":NAME,
        "spreadsheetUrl":LINK,
        "id":ID,
        "data":INFO,
        "action":"update"
    };
    fetch('https://script.google.com/macros/s/AKfycbyVHo8tKvSSKGYliowU6sLvNzSaDxSNOz3k3jXCx_zQuWN1juHFwwThLJPs-LtYNisr/exec',{
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
export{UPDATEDATA};