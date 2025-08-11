// import React from 'react'
import React, { useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import Card from '../Components/Card'
import LoadingIndicator from '../Components/LoadingIndicator'
import { Link } from 'react-router-dom'

// const API_BASE_URL = import.meta.env.VITE_API_URL


function Ingredients() {
  const [ingredients, setIngredients] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchIngredients = async () => {
      setLoading(true)
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
        const data = await response.json();
        console.log(data);
        setIngredients(data.meals);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching ingredients:', error)
        setError("Error fetching ingredients")
        setLoading(false)
      }
    }

    fetchIngredients()
  }, [])

  return (
    <MainLayout>
      <div className='p-4'>
        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
        {error && <p className="text-center py-8 text-red-500">{error}</p>}
        {loading && <LoadingIndicator />}
        {!loading && ingredients.length === 0 && !error && <p className='text-center py-8 text-gray-400'>No ingredients found.</p>}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ingredients.map(ingredient => (
            <Link key={ingredient.idIngredient} to={`/ingredients/${ingredient.strIngredient}`}>
              <Card>
                <h2>{ingredient.strIngredient}</h2>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default Ingredients