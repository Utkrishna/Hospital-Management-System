import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import PatientRegistration from './components/PatientRegistration';
import PatientLogin from './components/PatientLogin';
import AppointmentBooking from './components/AppointmentBooking';
import Billing from './components/Billing';
import MedicalRecords from './components/MedicalRecords';
import AdminDashboard from './components/AdminDashboard';
import './App.css'

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <h1 className='h'>Hospital Management System</h1>

        <Routes>
          <Route path="/admin" element={<AdminLogin onLogin={() => setIsAdminLoggedIn(true)} />} />
          <Route path="/dashboard" element={isAdminLoggedIn ? <AdminDashboard /> : <Navigate to="/admin" />} />
          <Route path="/register" element={<PatientRegistration />} />
          <Route path="/patient-login" element={<PatientLogin />} />
          <Route path="/appointments" element={<AppointmentBooking />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/medical-records" element={<MedicalRecords />} />
          <Route path="/" element={<Navigate to="/admin" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
