import React, { useState } from 'react';
import { registerUser } from './auth'; // Import register function

const Register = ({ setCurrentPage }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [department, setDepartment] = useState('');
  const [isStudent, setIsStudent] = useState(true); // Checkbox for student/faculty

  const handleRegister = () => {
    const additionalData = {
      username,
      phone,
      location,
      department,
      checkbox: {
        student: isStudent,
        faculty: !isStudent,
      },
    };

    registerUser(email, password, additionalData).then(() => {
      setCurrentPage('login'); // Redirect to Login after registration
    });
  };

  return (
    <div>
      <h1>Register</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
      <label>
        <input type="checkbox" checked={isStudent} onChange={() => setIsStudent(!isStudent)} />
        Student
      </label>
      <button onClick={handleRegister}>Sign In</button>
    </div>
  );
};

export default Register;
