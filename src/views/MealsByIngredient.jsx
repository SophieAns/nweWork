import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import LoadingIndicator from '../Components/LoadingIndicator'
import Card from '../Components/Card'
import MealCard from '../Components/MealCard'

const API_BASE_URL = (import.meta.env.VITE_API_URL || "https://www.themealdb.com/api/json/v1/1").replace(/\/$/, "")

function MealsByIngredient() {
    const { ingredient } = useParams()
    const [Meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")


    const fetchMeals = async () => {
        setLoading(true)
        try {
          console.log(`Fetching meals with ingredient: ${ingredient}`)
          console.log(`API URL: ${API_BASE_URL}/filter.php?i=${ingredient}`)
          const response = await fetch(`${API_BASE_URL}/filter.php?i=${ingredient}`)
          const data = await response.json()
          console.log(data);
          setMeals(data.meals)
          setLoading(false)
        } catch (error) {
          console.error('Error fetching meals:', error)
          setError("Error fetching meals")
          setLoading(false)
        }
      }

    useEffect(() => {
      fetchMeals()
    }, [ingredient])

    return (
      <div>
        {Meals.map(meal => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    )
}

export default MealsByIngredient