import React from 'react'
import "./style.css"
import img from "../assets/404.svg"

const projects = () => {
  return (
    <div className="projects">
      <div className="project-info">
        <h1>Projects</h1>
      </div>
      <img className="img404" src={img} alt="df">
      </img>
    </div>
  )
}

export default projects