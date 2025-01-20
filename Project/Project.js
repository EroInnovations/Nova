const NOVASTART=()=>{

    APPMODE('#000');

    const HEADERS=['NAme','Age'];

    const JJ=['Hen','ERSR'];
    
    UPDATEDATA('https://docs.google.com/spreadsheets/d/1MLiFVK_B4_TcJ1c_LtTfjs7hA-_xHWpxGyoy6mBqTzY/edit?gid=0#gid=0','test','e1087189-d592-48fd-ae39-167de60f7f93',JJ,(data)=>{

        console.log(data);

    },(data)=>{

        console.log(data);

    });

};