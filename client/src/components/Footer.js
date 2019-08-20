import React from 'react'
import leaf from '../assets/icons/leaf.svg'
import loop from '../assets/icons/add (1).svg'
import schedule from '../assets/icons/calendar.svg'
import user from '../assets/icons/user.svg'

import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer-box">
      <div className="footer-item">
        <img className="icon" src={leaf} />
        <p>Home</p>
      </div>
      <div className="footer-item">
        <img className="icon" src={loop} />
        <p>Plant search</p>
      </div>
      <div className="footer-item">
        <img className="icon" src={schedule} />
        <p>Schedule</p>
      </div>
      <div className="footer-item">
        <img className="icon" src={user} />
        <p>Profile</p>
      </div>
    </footer>
  )
}
