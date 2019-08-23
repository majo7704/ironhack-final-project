import React from 'react'
import { Link } from 'react-router-dom'
import leaf from '../assets/icons/leaf.svg'
import loop from '../assets/icons/search.svg'
import schedule from '../assets/icons/calendar.svg'
import user from '../assets/icons/user.svg'
import Auth from '../utils/Auth'

import './Footer.css'
const auth = new Auth();
export default function Footer() {
  const userId = auth.getUser()._id
  return (
    <footer className="footer-box">
      <div className="footer-item">
        <img className="icon" src={leaf} />
        <Link to={'/all'} style={{ textDecorationLine: 'none', color: '#191818'}}>
          <p style={{ fontFamily: "Nunito" }}>Home</p></Link>
      </div>
      <div className="footer-item">
        <img className="icon" src={loop} />
        <Link to={'/search'} style={{ textDecorationLine: 'none', color: '#191818' }}>
          <p style={{ fontFamily: "Nunito" }}>Plant search</p> </Link>
      </div>
      <div className="footer-item">
        <img className="icon" src={schedule} />
        <p style={{ fontFamily: "Nunito" }}>Schedule</p>
      </div>
      <div className="footer-item">
        <img className="icon" src={user} />
        <Link to={`/myJungle/${userId}`} style={{ textDecorationLine: 'none', color: '#191818' }}>
          <p style={{ fontFamily: "Nunito" }}>Profile</p></Link>
      </div>
    </footer>
  )
}
