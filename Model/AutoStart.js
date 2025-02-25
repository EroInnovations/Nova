const AUTOSTART=()=>{
const DATA=`AUTORUN();
BODY();ZOOM();
`;
localStorage.setItem('AUTOSTART',DATA);
};
export{AUTOSTART}