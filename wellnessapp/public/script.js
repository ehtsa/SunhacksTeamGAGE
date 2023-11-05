// script.js

// Function to handle the check-in form submission
function submitCheckIn(event) {
    event.preventDefault(); // Prevent the default form submission
    const mood = document.getElementById('mood').value;
    const feelings = document.getElementById('feelings').value;
  
    // Send the check-in data to the server
    fetch('/api/checkin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mood, feelings }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        alert('Check-in successful');
      }
    })
    .catch(error => {
      alert('Error during check-in');
      console.error(error);
    });
  }
  
  // Function to handle the reminders form submission
  function submitReminders(event) {
    event.preventDefault(); // Prevent the default form submission
    const medName = document.getElementById('medName').value;
    const medTime = document.getElementById('medTime').value;
    const hydrationInterval = document.getElementById('hydrationInterval').value;
  
    // Send the reminders data to the server
    fetch('/api/reminders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ medName, medTime, hydrationInterval }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        alert('Reminders saved successfully');
      }
    })
    .catch(error => {
      alert('Error saving reminders');
      console.error(error);
    });
  }
  
  // Attach the submit event listeners to the forms
  document.getElementById('checkinForm').addEventListener('submit', submitCheckIn);
  document.getElementById('remindersForm').addEventListener('submit', submitReminders);
  