import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

const API_BASE_URL = import.meta.env.VITE_API_URL

function MealDetail() {
  const { id } = useParams()
  const [meal, setMeal] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchMeal = async () => {
      setLoading(true)
      setError("")
      try {
        const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`)
        const data = await response.json()
        setMeal(data.meals ? data.meals[0] : null)
      } catch (err) {
        setError("Error fetching meal details")
      }
      setLoading(false)
    }
    fetchMeal()
  }, [id])

  return (
    <MainLayout>
      {loading && <p className="text-center py-8 text-gray-400">Loading...</p>}
      {error && <p className="text-center py-8 text-red-500">{error}</p>}
      {meal && (
        <div className="max-w-2xl mx-auto bg-gray-800 text-white rounded shadow-lg p-6">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full rounded mb-4" />
          <h2 className="text-3xl font-bold mb-2">{meal.strMeal}</h2>
          <p className="mb-4">{meal.strInstructions}</p>
          <div>
            <span className="font-semibold">Category:</span> {meal.strCategory}
          </div>
          <div>
            <span className="font-semibold">Area:</span> {meal.strArea}
          </div>
          <div className="mt-4">
            <span className="font-semibold">Ingredients:</span>
            <ul className="list-disc list-inside">
              {Array.from({ length: 20 }, (_, i) => i + 1)
                .map(i => ({
                  ingredient: meal[`strIngredient${i}`],
                  measure: meal[`strMeasure${i}`]
                }))
                .filter(item => item.ingredient && item.ingredient.trim())
                .map((item, idx) => (
                  <li key={idx}>{item.ingredient} - {item.measure}</li>
                ))}
            </ul>
          </div>
        </div>
      )}
      {!loading && !meal && !error && (
        <p className="text-center py-8 text-gray-400">Meal not found.</p>
      )}
    </MainLayout>
  )
}

export default MealDetail