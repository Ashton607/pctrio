import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import Hero from './components/hero/Hero'

function App() {

  return (
    <Router>
    <Navbar/>
    <Hero/>
    <Routes>

    </Routes>
    </Router>
  )
}

export default App
