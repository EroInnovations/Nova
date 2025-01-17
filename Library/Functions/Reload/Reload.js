const RELOAD=()=>{

    if (localStorage.getItem('Environment') === 'Production' ) {
        
    } else {

        location.href='./index.html';  

    };

};
export{RELOAD};