import React from 'react'
import "../style.css"
import url from "../../assets/Component 1.svg"
const header = () => {
  return (
    <div className="header">
      {/* <div className="head">
        <div className="info">
          <h1>Hi! I'm <br /><strong>Ish Thumber</strong></h1>

          <h2>I'm a <strong>Pursuing Full Stack Developer</strong> and <strong>Enthusiastic Web Designer</strong></h2>
        </div>
        <div className="img">
          <img src="https://i.imgur.com/XqQXQZb.png" alt="Ish Thumber" />
        </div>
      </div> */}

      <div className="name">
        <p>Hi! I'm <br /><strong className="ish">Ish Thumber</strong></p>

      </div>

      <div className="img">
        <img src={url} alt="Ish Thumber" />
      </div>
    </div>
  )
}

export default header