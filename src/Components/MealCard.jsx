import React from 'react'
import { Link } from 'react-router-dom'

const MealCard = ({ meal }) => {
  return (
    <Link to={`/meal/${meal.idMeal}`} className='max-w-sm rounded overflow-hidden shadow-lg m-4 block'>
      <div className="bg-gray-800 text-white max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={meal.strMealThumb} alt="Meal" />
        <div className="px-6 py-4"> 
          <h2 className='font-bold text-xl mb-2'>{meal.strMeal}</h2>
        </div>
        <p className='text-gray-300 text-base'>{meal.strInstructions?.slice(0, 200)}...</p>
      </div>
    </Link>
  )
}

export default MealCard