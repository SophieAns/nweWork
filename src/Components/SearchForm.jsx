import { useEffect, useState, useRef } from "react"
import React from 'react'
  

function SearchForm({ search, setSearch, handleSearch = () => {} }) {
  const inputRef = useRef(null)

  const onSearch = (e) => {
    e.preventDefault()
    handleSearch(search)
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])
 
  return (
    <form onSubmit={onSearch} className="flex items-center">
      <input
        type="text"
        name="search"
        ref={inputRef}
        value={search}
        onInput={(e) => setSearch(e.target.value)}
        placeholder="Search meals..."
        className="p-2 border border-gray-300 rounded-l"
      />
      <button
        type="submit"
        className="p-2 bg-indigo-600 text-white rounded-r"
      >
        Search
      </button>
    </form>
  )
}

export default SearchForm 