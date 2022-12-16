const BASE_URL = "https://data.cms.gov/provider-data/api/1/metastore/schemas"
method:  "GET",
headers; {
    "Content-Type"; "application/json",
    Accept ; "application/json",
  },
  body: JSON.stringify(getData)


function getData() {
  fetch(BASE_URL)
     .then((res) => res.json())
     .then((data) => {
          hospitalAppointmentSystem.innerHTML = 'data';
          hospitalAppointmentSystem.appendChild(hospitalAppointmentSystem);
     })
  }



  let submit = document.eventListeners('div');
  submit.innerHTML = '<h1>Event Listeners</h1>' +
    '<p>The following event listeners are added:</p>' +
    '<ul>' +
    '<li>When the user clicks the "Book Appointment" button, the "Book Appointment" modal is shown.</li>' 
    '<li>When the user clicks the "Cancel" button in the "Book Appointment" modal, the modal is hidden.</li>' 
    '<li>When the user clicks the "Confirm" button in the "Book Appointment" modal, the appointment is booked.</li>' 
    '<li>When the user clicks the "Cancel Appointment" button, the "Cancel Appointment" modal is shown.</li>' 
    '<li>When the user clicks the "Cancel" button in the "Cancel Appointment" modal, the modal is hidden.</li>' 
    '<li>When the user clicks the "Confirm" button in the "Cancel Appointment" modal, the appointment is cancelled.</li>' 
    '</ul>';
  document.body.appendChild(submit);


let hospitalAppointmentSystem = document.createElement('div');
hospitalAppointmentSystem.innerHTML = '<h1>Hospital Appointment System</h1>';
document.body.appendChild(hospitalAppointmentSystem);

let hospitalAppointmentSystem = document.createElement('div');
hospitalAppointmentSystem.innerHTML = '<h2>Patient Information</h2>';
document.body.appendChild(hospitalAppointmentSystem);

let hospitalAppointmentSystem = document.createElement('div');
hospitalAppointmentSystem.innerHTML = '<h3>Name:</h3>';
document.body.appendChild(hospitalAppointmentSystem);

let hospitalAppointmentSystem = document.createElement('div');
hospitalAppointmentSystem.innerHTML = '<h3>Date of Birth:</h3>';
document.body.appendChild(hospitalAppointmentSystem);

let hospitalAppointmentSystem = document.createElement('div');
hospitalAppointmentSystem.innerHTML = '<h3>Address:</h3>';
document.body.appendChild(hospitalAppointmentSystem);

let hospitalAppointmentSystem = document.createElement('div');
hospitalAppointmentSystem.innerHTML = '<h3>Phone Number:</h3>';
document.body.appendChild(hospitalAppointmentSystem);

let hospitalAppointmentSystem = document.createElement('div');
hospitalAppointmentSystem.innerHTML = '<h3>Email:</h3>';
document.body.appendChild(hospitalAppointmentSystem);

let hospitalAppointmentSystem = document.createElement('div');
hospitalAppointmentSystem.innerHTML = '<h3>Insurance:</h3>';
document.body.appendChild(hospitalAppointmentSystem);

let hospitalAppointmentSystem = document.createElement('div');
hospitalAppointmentSystem.innerHTML = '<h3>Doctor:</h3>';
document.body.appendChild(hospitalAppointmentSystem);

let hospitalAppointmentSystem = document.createElement('div');
hospitalAppointmentSystem.innerHTML = '<h3>Appointment Date:</h3>';
document.body.appendChild(hospitalAppointmentSystem);

let hospitalAppointmentSystem = document.createElement('div');
hospitalAppointmentSystem.innerHTML = '<h3>Appointment Time:</h3>';
document.body.appendChild(hospitalAppointmentSystem);

let hospitalAppointmentSystem = document.createElement('div');
hospitalAppointmentSystem.innerHTML = '<h3>Reason for Appointment:</h3>';
document.body.appendChild(hospitalAppointmentSystem);

let hospitalAppointmentSystem = document.createElement('div');
hospitalAppointmentSystem.innerHTML = '<h3>Symptoms:</h3>';
document.body.appendChild(hospitalAppointmentSystem);

let hospitalAppointmentSystem = document.createElement('div');
hospitalAppointmentSystem.innerHTML = '<h3>Medications:</h3>';
document.body.appendChild(hospitalAppointmentSystem);

let hospitalAppointmentSystem = document.createElement('div');
hospitalAppointmentSystem.innerHTML = '<h3>Allergies:</h3>';
document.body.appendChild(hospitalAppointmentSystem);


let text;
if (confirm("Press a button!") == true) {
  text = "You pressed OK!";
} else {
  text = "You canceled!";
}




