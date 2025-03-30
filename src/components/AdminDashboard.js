import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDs.css'

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className='app1'>
      <h2>Admin Dashboard</h2>
      <div className='a2'>
      <button onClick={() => navigate('/register')} className='btn' >SingUp</button>
      <button onClick={() => navigate('/patient-login')} className='btn'>Login</button>
      <button onClick={() => navigate('/appointments')} className='btn2'>Appointment-Details</button>
      <button onClick={() => navigate('/billing')} className='btn3'>Billing</button>
      {/* <button onClick={() => navigate('/medical-records')} className='btn2'>Medical-Records</button> */}
      </div>
      
    </div>
  );
}

export default AdminDashboard;
