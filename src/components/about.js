import React from 'react'
import "./style.css"
import img from "../assets/undraw_handcrafts_computer.svg";



const about = () => {
  return (
    <div className="about">
      {/* <div className="about-img"> */}
      {/* <img src={img} alt="about" /> */}
      {/* </div> */}
      <div className="about-text">
        <h1>About</h1>
      </div>
      <p className="about-info">
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </p>
    </div>
  )
}

export default about