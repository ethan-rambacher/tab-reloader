chrome.alarms.onAlarm.addListener(function (alarm){
    console.log("Reloading tab " + alarm.name);
    chrome.tabs.reload(parseInt(alarm.name));
});