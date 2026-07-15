import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'

function App() {

  return (
    <Router>
    <Navbar/>
    <Hero/>
    <Routes>
      <Route path="/" element={<Services />} />
    </Routes>
    </Router>
  )
}

export default App
