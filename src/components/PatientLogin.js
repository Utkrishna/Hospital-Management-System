import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css'

function PatientLogin() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/patients/login', { email });
      if (res.data === 'Login Successful') {
        alert('Login successful!');
        navigate('/appointments');
      } else {
        alert('Invalid email');
      }
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <div className='p'>
      <h2>Patient Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default PatientLogin;
