import React, { useState } from 'react';
import "./appointment.css"; // Import CSS file for styling

const AppointmentForm = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [bookedSlots, setBookedSlots] = useState([]);
   // State to store booked slots

  // Define the allowed appointment days
  const allowedDays = ["Monday", "Wednesday", "Friday"]; 
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Define doctors with their schedules
  const doctors = [
    { 
      name: "Dr. Piyush Agrawal", 
      specialization: "Dentist", 
      holidays: ["2024-04-01", "2024-04-05"], // Example holidays for Dr. Piyush Agrawal
      bookedSlots: ["10:00 AM", "11:00 AM", "2:00 PM"] // Example booked slots for Dr. Piyush Agrawal
    },
    { 
      name: "Dr. Rajendra patel", 
      specialization: "Cardiologist", 
      holidays: ["2024-04-01", "2024-04-05"], // Example holidays for Dr. Piyush Agrawal
      bookedSlots: ["2:00 AM", "03:00 AM", "4:00 PM"] // Example booked slots for Dr. Piyush Agrawal
    },
    // Add other doctors here with their schedules
    { 
      name: "Dr.Salman Ajani ", 
      specialization: "Dentist", 
      holidays: ["2024-04-01", "2024-04-05"], // Example holidays for 
      bookedSlots: ["10:00 AM", "11:00 AM", "2:00 PM"] // Example booked slots for Dr. Piyush Agrawal
    },
    { 
      name: "Dr.Additon Smith", 
      specialization: "Physiotherapist", 
      holidays: ["2024-04-01", "2024-04-05"], // Example holidays for Dr. Piyush Agrawal
      bookedSlots: ["10:00 PM", "11:00 PM", "2:00 PM"] // Example booked slots for Dr. Piyush Agrawal
    },
    { 
      name: "Dr.Mahfuz Riad ", 
      specialization: "ENT", 
      holidays: ["2024-04-01", "2024-04-05"], // Example holidays for Dr. Piyush Agrawal
      bookedSlots: ["5:00 AM", "8:00 AM", "2:00 PM"] // Example booked slots for Dr. Piyush Agrawal
    },
    { 
      name: "Dr.David Benjamin", 
      specialization: "Dentist", 
      holidays: ["2024-04-01", "2024-04-05"], // Example holidays for Dr. Piyush Agrawal
      bookedSlots: ["10:00 AM", "11:00 AM", "2:00 PM"] // Example booked slots for Dr. Piyush Agrawal
    },
  ];

  // Function to handle navigation to the previous consecutive day
  const goToPreviousDay = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 1)));
  };

  // Function to handle navigation to the next consecutive day
  const goToNextDay = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)));
  };
  
  // Function to handle selecting a time slot
  const handleTimeSlotSelection = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  // Dummy function to simulate booking appointment
  const bookAppointment = (timeSlot) => {
    // Simulate booking by adding the time slot to the bookedSlots array
    setBookedSlots([...bookedSlots, timeSlot]);
  };

  // Function to generate time slots for appointments
  const generateTimeSlots = () => {
    // Dummy time slots for demonstration
    const timeSlots = [
      '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
      '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
      '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    ];

    // Get the current day of the week
    const currentDayOfWeek = currentDate.getDay(); // Sunday is 0, Monday is 1, and so on

    return timeSlots.map((slot, index) => {
      const isBooked = bookedSlots.includes(slot);
      const isDoctorUnavailable = doctors.some(doctor => doctor.holidays.includes(currentDate.toISOString().split('T')[0]) || doctor.bookedSlots.includes(slot));
      const isDisabled = isBooked || !allowedDays.includes(daysOfWeek[currentDayOfWeek]) || isDoctorUnavailable;
      return (
        <div
          key={index}
          className={`time-slot ${selectedTimeSlot === slot ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
          onClick={() => !isDisabled && handleTimeSlotSelection(slot)} // Allow selection only if the slot is not booked, on a day off, or doctor unavailable
        >
          {slot} {isBooked && <span className="booked-text">Booked</span>}
          {!allowedDays.includes(daysOfWeek[currentDayOfWeek]) && <span className="day-off-text"></span>}
          {isDoctorUnavailable && <span className="unavailable-text">Unavailable</span>}
        </div>
      );
    });
  };

  // Function to handle submitting the appointment
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle appointment submission (e.g., send data to backend)
    console.log('Appointment submitted:', {
      date: currentDate.toDateString(),
      timeSlot: selectedTimeSlot,
      patientName,
      patientEmail,
    });
    // Book the selected time slot
    bookAppointment(selectedTimeSlot);
    // Reset form fields
    setSelectedTimeSlot('');
    setPatientName('');
    setPatientEmail('');
  };

  return (
    <div className="appointment-form-container">
      <div className="appointment-form-header">
        <button onClick={goToPreviousDay}>{"<"}</button>
        <h2>{currentDate.toDateString()}</h2>
        <button onClick={goToNextDay}>{">"}</button>
      </div>
      <div className="appointment-form-body">
        <div className="time-slots">{generateTimeSlots()}</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={patientEmail}
            onChange={(e) => setPatientEmail(e.target.value)}
            required
          />
          <button type="submit">Book Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
