chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create('reminder', { periodInMinutes: 20 });
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'reminder') {
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icons/icon128.png',
        title: '20-20-20 Rule Reminder',
        message: 'Take a 20-second break and look at something 20 feet away.'
      });
    }
  });
  