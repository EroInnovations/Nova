const NOVASTART=()=>{

    ACCOUNTCHECKER(()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },()=>{

        ROUTE('',EMAILVERIFICATIONPAGE,'EMAILVERIFICATIONPAGE');

    },()=>{

        ROUTE('',LOGINPAGE,'LOGINPAGE');

    });

};

const HOMEPAGE=()=>{



};

const LOGINPAGE=()=>{

    CLEAR('');

    DISPLAY('',`

        Test
        
    `);

}

const CREATEACCOUNTPAGE=()=>{


}

const EMAILVERIFICATIONPAGE=()=>{


}