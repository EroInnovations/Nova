const AUTOSTART=()=>{

const DATA=`AUTORUN();
BODY();
`;
localStorage.setItem('AUTOSTART',DATA);
};
export{AUTOSTART}