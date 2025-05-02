const SITECLOSE=()=>{

    if (localStorage.getItem('Environment') === 'Production' ) {
        
        EliteWebInterface.closeWebView();

    } else {

        close();
        
    }
  
};
export{SITECLOSE}