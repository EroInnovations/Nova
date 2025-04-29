const BATTERY=(callback)=>{

    var batteryStatus = Android.getBatteryStatus();

    callback(batteryStatus);

}
export{BATTERY};