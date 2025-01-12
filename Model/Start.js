const NOVASTART=()=>{
    if (!localStorage.getItem('Updates')) {
        location.href='./index.html'; 
    }
};
export{NOVASTART};