import React from 'react'

const MealCard = ({ meal }) => {
  return (
    <div className="bg-gray-800 text-white max-w-sm round overflow-hidden shadow-lg m-4">
        <img className="w-full" src={meal.strMealThumb} alt="Meal" />
        <div className="px-6 py-4"> 
          <h2 className='font-bold text-xl mb-2'>{meal.strMeal}</h2>
        </div>
        <p className='text-gray-300 text-base'>{meal.strInstructions?.slice(0, 200)}...</p>
    </div>
  )
}

export default MealCard