const AUTORUN=()=>{
const DATA=`const AUTORUN=()=>{
    import('../Start/Start.js')
    .then(module =>
        {
            if (typeof module.START === 'function') {
                module.START();
            } else {
                console.error('START is not defined in the module');
                }
            }
        )
    .catch(error =>
        {
                console.error('Error loading the module:', error);
        }
    );  
};  
`;
localStorage.setItem('AUTORUN',DATA);
};
export{AUTORUN};