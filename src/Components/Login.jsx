import React, { useState } from 'react';

import axios from "axios";






function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:6000/login', {
        email,
        password
      });
      if (response.data.success) {
        console.log('Login successful');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API or authentication function here
    if (email === '' && password === '') {
      setError(true);
      // Login successful, redirect or update state
      // console.log('Login successful');
    } else {
      handleLogin();
    }
  };


  return (
    <div className='max-w-md mx-auto mt-8 font-bold'>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className=''>
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
          <label className=''>
            Password:
            <input className='border border-gray-300 p-2 rounded w-full'
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        {error && <p className="text-red-700">Invalid email or password</p>}
        <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-900'>Login</button>
      </form>
    </div>
  );
}

export default Login;
