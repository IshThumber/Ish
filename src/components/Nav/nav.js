import React from 'react'
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const nav = () => {
  return (
    <div className="navbar">
      <div className="nav">ishthumber.me</div>
      <div className="icons">
        <a className="instagram" href="https://www.linkedin.com/in/ishthumber/" target="_blank" rel="noopener noreferrer"><FaInstagram color="grey" fontSize="1.5rem" /></a>
        <a className="linkedin" href="https://www.linkedin.com/in/ishthumber/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn color="grey" fontSize="1.5rem" /></a>
        <a className="github" href="https://github.com/IshThumber" target="_blank" rel="noopener noreferrer"><FaGithub color="grey" fontSize="1.5rem" /></a>
      </div>
    </div>
  )
}

export default nav