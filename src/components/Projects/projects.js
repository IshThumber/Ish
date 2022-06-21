import React from 'react'
import "./projects.css"
import img from "../../assets/404.svg"

const projects = () => {
  return (
    <div className="projects">
      <div className="project-info">
        <h1>Projects</h1>
      </div>
      <div className="project-img">
        <img className="img404" src={img} alt="df">
        </img>
      </div>
    </div>
  )
}

export default projects