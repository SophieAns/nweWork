import React, { useState } from 'react';

// import axios from "axios";


function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:6000/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          password
        })
      });

      const data = await response.json();

      console.log(data);

      if (data.success) {
        console.log('Registration successful');
      } else {
        setError('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    if (email === '' || password === '' || confirmPassword === '' || username === '') {
      setError(true);
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      handleRegister();
    }
  };


  return (
    <div className='max-w-md mx-auto mt-8 font-bold'>
      <h2 className='text-2xl font-bold mb-4'>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block mb-2'>
            Username:
            <input className='border border-gray-300 p-2 rounded w-full'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>
            Email:
            <input className='border border-gray-300 p-2 rounded w-full'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>
            Password:
            <input className='border border-gray-300 p-2 rounded w-full'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>
            Confirm Password:
            <input className='border border-gray-300 p-2 rounded w-full'
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
        </div>
        {error && <p className="text-red-700"> {error} </p>}
        <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-900'>Register</button>
      </form>
    </div>
  );
}

export default Register;
