import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-gray-800 dark:bg-red-900 py-4 mt-8">
      <div className="container mx-auto    px-4 text-center text-white-400">
        &copy; {new Date().getFullYear()} Meal Search App. All rights reserved.
      </div>
    </footer> 
  )
}

export default Footer