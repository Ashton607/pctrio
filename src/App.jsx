import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import About from './components/about/About'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
            </>
          }
        />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App