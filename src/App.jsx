import { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import About from './components/about/About'
import Ourwork from './components/ourwork/Ourwork'
import Testimonial from './components/testimonial/Testimonial'
import WhyUs from './components/whyus/WhyUs'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollToTop from './ScrollToTop'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  return (
    <>
      <Hero />
      <Services />
      <Ourwork/>
      <Testimonial/>
      <WhyUs/>
      <Contact/>
    </>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App