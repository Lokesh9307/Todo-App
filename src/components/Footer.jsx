import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineUser } from 'react-icons/ai';
import { BiLogoDevTo } from 'react-icons/bi';
import './footer.css';


const Footer = () => {
  return (
    <div className="Footer">
      <div style={{ margin: 0, padding: 0, }}>
        <footer className='footer-container'>
          <p>&copy;2023</p>
          <p>All Rights Reserved By <span style={{ color: 'white' }}>Lokesh Umredkar</span></p>
          <br />
          <div className="contact-links">
            <a href="https://github.com/Lokesh9307" target='blank'><AiFillGithub /></a>
            <a href="https://in.linkedin.com/in/lokesh-umredkar-2a0961243?trk=people-guest_people_search-card" target='blank'><AiFillLinkedin /></a>
            <a href="https://www.instagram.com/itz_lokesh_02/" target='blank'><AiFillInstagram /></a>
            <a href="https://lokeshumredkar-portfolio.netlify.app/" target='blank'><BiLogoDevTo /></a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer