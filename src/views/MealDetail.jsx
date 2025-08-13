import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import LoadingIndicator from '../Components/LoadingIndicator'

const API_BASE_URL = (import.meta.env.VITE_API_URL || "https://www.themealdb.com/api/json/v1/1").replace(/\/$/, "")

function MealDetail() {
  const { id } = useParams()
  const [meal, setMeal] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

const fetchMealDetails = async () => {
      setLoading(true)
      setError("")
      try {
        const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`)
        const data = await response.json()
        console.log(data);
        setMeal(data.meals[0])
        setLoading(false)
      } catch (error) {
        console.error('Error fetching meal details:', error)
        setError("Error fetching meal details")
        setLoading(false)
      }
    }

  useEffect(() => {
    
    fetchMealDetails()
  }, [id])

  return (
    <MainLayout>
      <div className='max-w-3xl mx-auto'>
      {loading && <LoadingIndicator />}
      {error && <p className="text-center py-8 text-red-500">{error}</p>}
      {!loading && !error && (
        <div className="p-4">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full mb-4 " />
          <div className='flex items-center justify-between pb-4 mb-4'>
            <h3 className='text-xl text-[#6aa8afff] hover:text-white'><span className='font-bold text-[#e1460bff]'>Category:</span> {meal.strCategory}</h3>
            <h3 className='text-xl text-[#6aa8afff] hover:text-white'><span className='font-bold text-[#e1460bff]'>Area:</span> {meal.strArea}</h3>
            <h3 className='text-xl text-[#6aa8afff] hover:text-white'><span className='font-bold text-[#e1460bff]'>Tags:</span> {meal.strTags}</h3>
          </div>
          <h2 className="text-2xl font-bold mb-4">{meal.strMeal}</h2>
          <p className="mb-4">{meal.strInstructions}</p>
          <div className='flex justify-between'>
            <h4 className="text-lg font-bold mb-2">Ingredients</h4>
            <h4 className="text-lg font-bold mb-2">Measures</h4>
          </div>
          <ul className="list-disc pl-5 mb-5">
            {
            Object.keys(meal).map((key) => {
                if (key.startsWith("strIngredient") && meal[key]) {
                  const measureKey = key.replace("Ingredient", "Measure")
                  return (
                    <div key={key} className="flex justify-between">
                      <div>{meal[key]}</div>
                      <div>{meal[measureKey]}</div>
                    </div>
                  )
                }
                return null
              })
            }
            
          </ul>

          <div className='space-x-4'>
            <a href={meal.strSource} target="_blank" rel="noopener noreferrer"><button className='text-white-500 bg-amber-400 px-4 py-2 rounded text-bold hover:bg-blue-500 font-semibold'>Source</button></a>
            <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer"><button className='text-white-500 bg-red-700 px-4 py-2 rounded text-bold hover:bg-blue-500 font-semibold'>Youtube</button></a>
          </div>
        </div>
      )}
      {!loading && !meal && !error && (
        <p className="text-center py-8 text-gray-400">Meal not found.</p>
      )}
      </div>
    </MainLayout>
  )
}

export default MealDetail