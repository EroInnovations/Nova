const SCREENHEIGHT=(callback)=>{

    callback(JSON.stringify({ screenHeight: screen.height }));

};

export{SCREENHEIGHT};