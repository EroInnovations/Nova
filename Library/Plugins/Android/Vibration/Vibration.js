const VIBRATION=(TIME)=>{

    if (localStorage.getItem('Environment') === 'Production' ) {
        
        Android.vibrate(TIME||500);

    };

};

export{VIBRATION};