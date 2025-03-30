import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css'

function Billing() {
  const [billing, setBilling] = useState({
    patientId: '',
    amount: '',
    billingDate: '',
  });
  const navigate = useNavigate(); // Initialize navigation

  const handleChange = (e) =>
    setBilling({ ...billing, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/billing/create', billing);
      alert('Billing created successfully!');
      navigate('/dashboard'); // Redirect to Admin Dashboard
    } catch (error) {
      console.error(error);
      alert('Billing creation failed');
    }
  };

  return (
    <div className='p'>
      <h2>Billing</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="patientId" placeholder="Patient ID" value={billing.patientId} onChange={handleChange} required />
        <input type="number" name="amount" placeholder="Amount" value={billing.amount} onChange={handleChange} required />
        <input type="date" name="billingDate" value={billing.billingDate} onChange={handleChange} required />
        <button type="submit">Create Billing</button>
      </form>
    </div>
  );
}

export default Billing;
