document.getElementById('startReminder').addEventListener('click', () => {
    chrome.alarms.create('reminder', { periodInMinutes: 20 });
    alert('20-20-20 reminder started.');
  });
  
  document.getElementById('stopReminder').addEventListener('click', () => {
    chrome.alarms.clear('reminder');
    alert('20-20-20 reminder stopped.');
  });
  