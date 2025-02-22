const GETDATA=(LINK,NAME,callback,callback1)=>{
    const DATA={
        "sheetName":NAME,
        "spreadsheetUrl":LINK,
    };
    
    fetch('https://script.google.com/macros/s/AKfycbwc_ZdByDbw4u-OcEcAaJQt11bfAe3znQ7pYre6pl1KOyIrx8E8PN9yIs1KVcLYPjQlOw/exec',{
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

export{GETDATA};