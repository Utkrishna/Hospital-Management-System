import React from 'react';
import { useNavigate } from 'react-router-dom';

function MedicalRecords() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/dashboard'); // Redirect to Admin Dashboard
  };

  return (
    <div>
      <h2>Medical Records</h2>
      <p>This section can be expanded to display and update patient medical records.</p>
      <button onClick={handleGoBack}>Back to Dashboard</button>
    </div>
  );
}

export default MedicalRecords;
