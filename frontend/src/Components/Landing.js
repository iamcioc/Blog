import React from 'react'
import Navbar from '../Components/Signup/Navbar'
import Hero from "../Components/Hero"
import Cards from "../Components/Cards"
import Footer from '../Components/Signup/Footer'

function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </div>
  )
}

export default Landing