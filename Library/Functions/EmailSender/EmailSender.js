const EMAILSENDER=(EMAIL,SUBJECT,MESSAGE,callback,callback1)=>{

    const DATA={
        "recipientEmail":EMAIL,
        "subject":SUBJECT,
        "body":MESSAGE
    };

    fetch('https://script.google.com/macros/s/AKfycby4mRY62yOFYUgl0HieChCQhbgifHxU821ngwHoy4XgJREp7Hzd9l2h-f-ni-rR0m90kA/exec',{

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

}
export{EMAILSENDER}