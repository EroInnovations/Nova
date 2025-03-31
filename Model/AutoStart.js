const AUTOSTART=()=>{
const DATA=`AUTORUN();
BODY();ZOOM();HOSTINGUPDATER();INSPECTION();
`;
localStorage.setItem('AUTOSTART',DATA);
};
export{AUTOSTART}