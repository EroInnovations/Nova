const NOVASTART=()=>{

    APPMODE('#000');

    CREATEDATABASE('Home',(data)=>{

        console.log(data);

    },(data)=>{

        console.log(data);

    })

    CREATETABLE('https://docs.google.com/spreadsheets/d/1MLiFVK_B4_TcJ1c_LtTfjs7hA-_xHWpxGyoy6mBqTzY/edit?gid=0#gid=0','test',(data)=>{

        console.log(data);

    },(data)=>{

        console.log(data);

    })

    const HEADERS=['NAme','Age'];
    const JJ=['Hen','RR']

    INSERTDATA('https://docs.google.com/spreadsheets/d/1MLiFVK_B4_TcJ1c_LtTfjs7hA-_xHWpxGyoy6mBqTzY/edit?gid=0#gid=0','test',HEADERS,JJ,(data)=>{

        console.log(data)

    },(data)=>{

        console.log(data)


    })

    
    
}