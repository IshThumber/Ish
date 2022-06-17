import React from 'react'
import { Header, Nav, Contact, Footer, About, Projects } from "./components"
const App = () => {
    return (
        <div className="whole">
            <Nav />
            <Header />
            <Projects />
            <About />
            {/* <Contact /> */}
            <Footer />

        </div>
    )
}

export default App