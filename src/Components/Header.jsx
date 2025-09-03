import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <header className="w-full bg-gray-800 dark:bg-red-900 py-4 shadow">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl text-white">MealSearch</Link>
        <nav className='flex gap-4 items-center'>
          <NavLink to="/" className={({isActive}) => isActive ? "text-yellow-600 border-b-2 border-yellow-600" : "text-white p-2"}> Home </NavLink>
          <NavLink to="/ingredients" className={({isActive}) => isActive ? "text-yellow-600 border-b-2 border-yellow-600" : "text-white p-2"}> Ingredients </NavLink> 
          {user ? (
        <div className="flex items-center gap-4">
          <span className='flex flex-col'>
          <span className='text-yellow-600 font-bold text-2xl'>{user.username}</span>
          <span className='text-sm'>{user.email}</span>
          </span>
          <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
        </div>
      ) : (
          <div>
             <NavLink to="/login" className={({isActive}) => isActive ? "text-yellow-600 border-b-2 border-yellow-600" : "text-white p-2"}> Login </NavLink>
            <NavLink to="/register" className={({isActive}) => isActive ? "text-yellow-600 border-b-2 border-yellow-600" : "text-white p-2"}> Sign Up </NavLink>
          </div>
      )}
        </nav>
      </div> 
    </header>
  )
}

export default Header