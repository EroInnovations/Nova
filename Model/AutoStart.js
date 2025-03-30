const AUTOSTART=()=>{
const DATA=`AUTORUN();
BODY();ZOOM();HOSTINGUPDATER();
`;
localStorage.setItem('AUTOSTART',DATA);
};
export{AUTOSTART}