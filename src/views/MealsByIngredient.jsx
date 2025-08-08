import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import LoadingIndicator from '../Components/LoadingIndicator'
import Card from '../Components/Card'

const API_BASE_URL = import.meta.env.VITE_API_URL

function MealsByIngredient() {
    const { ingredient } = useParams()
    const [Meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
      const fetchMeals = async () => {
        setLoading(true)
        try {
          const response = await fetch(`${API_BASE_URL}/filter.php?i=${ingredient}`)
          const data = await response.json()
          setMeals(data.meals)
          setLoading(false)
        } catch (error) {
          console.error('Error fetching meals:', error)
          setError("Error fetching meals")
          setLoading(false)
        }
      }

      fetchMeals()
    }, [ingredient])

    return (
      <div>MealsByIngredient</div>
    )
}

export default MealsByIngredient