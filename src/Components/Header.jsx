import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="w-full bg-gray-800 dark:bg-gray-900 py-4 shadow">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl text-white">MealSearch</Link>
        <nav className='flex gap-4 items-center'>
          <NavLink to="/" className={({isActive}) => isActive ? "text-indigo-600 p-2" : "text-white p-2"}> Home </NavLink>
          <NavLink to="/ingredients" className={({isActive}) => isActive ? "text-indigo-600 p-2" : "text-white p-2"}> Ingredients </NavLink>
        </nav>
      </div> 
    </header>
  )
}

export default Header