import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css'

function AppointmentBooking() {
  const [appointment, setAppointment] = useState({
    patientId: '',
    doctorId: '',
    appointmentDate: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setAppointment({ ...appointment, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/appointments/book', appointment);
      alert('Appointment booked successfully!');
      navigate('/dashboard'); // Redirect to Admin Dashboard
    } catch (error) {
      console.error(error);
      alert('Booking failed');
    }
  };

  return (
    <div className='p'>
      <h2>Appointment Booking</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="patientId" placeholder="Patient ID" value={appointment.patientId} onChange={handleChange} required />
        <input type="number" name="doctorId" placeholder="Doctor ID" value={appointment.doctorId} onChange={handleChange} required />
        <input type="datetime-local" name="appointmentDate" placeholder="Appointment Date" value={appointment.appointmentDate} onChange={handleChange} required />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default AppointmentBooking;
