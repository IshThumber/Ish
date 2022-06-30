import React from 'react'



import "./nav.css"

const nav = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="nav-site">
          <a href="/" className="nav-site-link">ishthumber.me</a>
        </div>
        <div className="nav-icons">
          <a href="/" className="nav-icons-link">GitHub</a>
          <a href="/" className="nav-icons-link">Instagram</a>
          <a href="/" className="nav-icons-link">Twitter</a>
          <a href="/" className="nav-icons-link">LinkedIn</a>
        </div>
      </div>
    </div >
  )
}

export default nav