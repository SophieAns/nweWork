import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MainLayout({children}) {
  return (
    <div>
        <Header />
        <main className="container mx-auto px-4 py-8">
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout 