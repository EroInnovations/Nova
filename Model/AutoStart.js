const AUTOSTART=()=>{
const DATA=`OPERATINGSYSTEM();AUTORUN();BODY();ZOOM();INSPECTION();URLCOLLECTOR();HOSTINGINSTALLER();HOSTINGUPDATER();
`;
localStorage.setItem('AUTOSTART',DATA);
};
export{AUTOSTART};