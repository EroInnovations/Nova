const MOVIELANDEREMAIL=(EMAIL,SUBJECT,MESSAGE,callback,callback1)=>{

    const DATA={

        "recipientEmail":EMAIL,

        "subject":SUBJECT,

        "body":MESSAGE
        
    };

    fetch('https://script.google.com/macros/s/AKfycbzmJa92eilnyZLZPKlBB3Oj9cyVy_xRb56TA2UbnTvDJBvppd8duPI_PgP-FUt0NElA/exec',{

        method:'Post',

        mode:'cors',

        body:JSON.stringify(DATA)

    })

    .then(res =>res.json())

    .then(data =>{

        callback(data);

    } )

    .catch(error =>{

        callback1(error);

    } );

};

export{MOVIELANDEREMAIL};