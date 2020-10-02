'use strict';

function startReloading() {
    chrome.tabs.query({ 'active': true, 'currentWindow': true }, function (tabs) {
        console.log('Start reloading ' + tabs[0].url + ' every 6 seconds');
        chrome.alarms.create(tabs[0].id.toString(), { 'periodInMinutes': 0.1 });
    });
}

function stopReloading() {
    chrome.tabs.query({ 'active': true, 'currentWindow': true }, function (tabs) {
        console.log('Stop reloading ' + tabs[0].url);
        chrome.alarms.clear(tabs[0].id.toString());
    });
}

document.getElementById('startButton').addEventListener('click', startReloading);
document.getElementById('stopButton').addEventListener('click', stopReloading);