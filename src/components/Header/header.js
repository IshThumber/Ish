import React from 'react'
import "./header.css"
import '../../fonts/Bombing.ttf'
import "../../background.css"
import img from '../../assets/mann.svg'

const header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-img">
          <div className="imgg">
            <img className="img" src={img} alt="ish thumber" />
          </div>
        </div>
        <div className="header-name">
          <h1>Ish Thumber</h1>
        </div>
        {/* <div className="socials"> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default header
