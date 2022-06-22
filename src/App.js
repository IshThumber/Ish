import React from 'react'
import { Nav, Header, Projects, Skills, About, Contact, Footer } from "./components"
import "./App.css"

const App = () => {
  return (
    <div className="page">
      <Nav />
      <Header />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App