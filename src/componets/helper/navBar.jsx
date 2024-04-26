// NavBar.js
import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import img4 from '../../assets/ass.jpg'

function NavBar({ heading }) {
  return (
    <div style={{ marginTop: '5vh', marginLeft: '10vw' }}>
      <div className='d-flex'>
        <h2>{heading}</h2>
        <div className='' style={{ marginLeft: '55vw' }}>
          <IoNotificationsOutline className='me-3' style={{ height: '25px', width: '25px' }} />
          <img src={img4} style={{ height: '25px', width: '25px', borderRadius: '50%' }} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
