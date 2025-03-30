import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Admin.css'

function AdminLogin({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/admin/login', credentials);
      alert(res.data);

      if (res.data === "Login Successful") {
        onLogin();
        navigate('/dashboard');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <div className='das'>
      <h2 className='a'>Admin Login</h2>
      <form onSubmit={handleLogin} className='f'>
        <input className='i' type="text" name="username" placeholder="Username" value={credentials.username} onChange={handleChange} required />
        <input className='i' type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} required />
        <button type="submit" className='b'>Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
