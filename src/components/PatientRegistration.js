import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css'

function PatientRegistration() {
  const [patient, setPatient] = useState({ name: '', email: '', phone: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) =>
    setPatient({ ...patient, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous error message

    try {
      const response = await axios.post('http://localhost:8080/api/patients/register', patient);
      alert(response.data);
      navigate('/dashboard'); // Redirect to dashboard
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data); // Show error message from backend
      } else {
        console.error(error);
        alert('Registration failed');
      }
    }
  };

  return (
    <div className='p'>
      <h2>Patient Registration</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={patient.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={patient.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" value={patient.phone} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default PatientRegistration;
