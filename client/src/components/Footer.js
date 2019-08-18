import React from 'react'
import leaf from '../assets/icons/leaf.svg'
import loop from '../assets/icons/add (1).svg'
import schedule from '../assets/icons/calendar.svg'
import user from '../assets/icons/user.svg'

import '../css/Footer.css'

export default function Footer() {
  return (
    <Footer className="Footer-box">
      <div>
        <img src={leaf} />
        <p>Home</p>
      </div>
      <div>
        <img src={loop} />
        <p>Plant search</p>
      </div>
      <div>
        <img src={schedule} />
        <p>Schedule</p>
      </div>
      <div>
        <img src={user} />
        <p>Profile</p>
      </div>
    </Footer>
  );
}
