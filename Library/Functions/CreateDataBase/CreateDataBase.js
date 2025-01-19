const CREATEDATABASE=(NAME,callback,callback1)=>{
    const DATA={
        "sheetName":NAME
    };
    fetch('https://script.google.com/macros/s/AKfycbzwQ-sl8hKiYPIjVyWUR4M3L-oZi1JmpQBcYh14WswqrBfpOol3N0Q9iR02zKoXY-5thA/exec',{
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
export{CREATEDATABASE};