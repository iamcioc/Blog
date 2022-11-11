import React from 'react'
import LoginForm from "./LoginForm"
import Navbar from '../Signup/Navbar'
import Footer from '../Signup/Footer'

function Login() {
  return (
      <div>
          <Navbar />
          <LoginForm />
          <Footer />
    </div>
  )
}

export default Login