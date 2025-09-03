import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import MainLayout from './layouts/MainLayout'
import Ingredients from './views/ingredents'
import MealsByIngredient from "./views/MealsByIngredient"
import MealDetail from './views/MealDetail'
import Login from './Components/Login'
import Register from './Components/Register'
import ProtectedRoute from './Components/ProtectedRoute'



function App() {
  
  // const incrementCount = () => {
  //   setCount(count + 1)
  // }

  // const decrementCount = () => {
  //   if (count > 0) {
  //     setCount(count - 1)
  //   }
  // }

  // const changeSearch = (e) => {
  //   setSearch(e.target.value)
  // } 

  // Example meal data
  // const Meals = {
  //   meal1: {
  //     image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  //     title: "Grilled Salmon",
  //     description: "Delicious grilled salmon served with fresh vegetables and lemon. Perfect for a healthy meal!"
  //   },
  //   meal2: {
  //     image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  //     title: "Grilled Samson",
  //     description: "A delightful grilled Samson dish with a medley of spices and herbs."
  //   }
  // }

  return ( 
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/ingredients" element={
        <ProtectedRoute>
          <Ingredients />
        </ProtectedRoute>
      } />
      <Route path='/ingredients/:ingredient' element={
        <ProtectedRoute>
          <MealsByIngredient />
        </ProtectedRoute>
      } />
      <Route path='/meal/:id' element={
        <ProtectedRoute>
          <MealDetail />
        </ProtectedRoute>
      } />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App
