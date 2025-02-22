const CREATETABLE=(LINK,NAME,callback,callback1)=>{
    const DATA={
        "sheetName":NAME,
        "spreadsheetUrl":LINK
    };
    fetch('https://script.google.com/macros/s/AKfycby1mVvqOsNL6dziqyCRHucg5QeVCeeFOtKHmxxtXBWtY38ClEM65rFux1gWfkDFdQDr0w/exec',{
       
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

export{CREATETABLE};