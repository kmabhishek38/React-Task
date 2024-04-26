
import img3 from "../../assets/Subtract.png"
import { BiSolidDashboard } from "react-icons/bi";
import '../styles/style.css'
import { RiContactsBookUploadFill } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";
import { AiFillSchedule } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import React, { useState } from 'react';
import Uploader from './upLoad'; 

function SideBar({ onNavItemClicked }) {
  const [showUploader, setShowUploader] = useState(false);

  const handleNavItemClicked = (itemName) => {
    setShowUploader(false);
    onNavItemClicked(itemName);
  };

  return (
    <div>
      <div style={{ marginTop: '5vh', marginLeft: '3vw' }} className='d-flex mb-5'>
        <img src={img3} alt="" style={{ height: '37px', width: '37px' }} />
        <h3 className='ms-2'>Base</h3>
      </div>
      <div style={{ color: 'rgb(133,133,133)' }} className='ms-4' >
        <div className='my-4 side-content' onClick={() => handleNavItemClicked('Dashboard')}>
          <BiSolidDashboard className='me-2' style={{ height: '22px', width: '22px' }} /><span> Dashboard</span>
        </div>
        <div className='mb-4 side-content' onClick={() => handleNavItemClicked('Upload CSV')}>
          <RiContactsBookUploadFill className='me-2' style={{ height: '22px', width: '22px' }} /> <span> Upload</span>
        </div>
        <div className='mb-4 side-content' onClick={() => handleNavItemClicked('Invoice')}>
          <TbFileInvoice className='me-2' style={{ height: '22px', width: '22px' }} /><span> Invoice</span>
        </div>
        <div className='mb-4 side-content' onClick={() => handleNavItemClicked('Schedule')}>
          <AiFillSchedule className='me-2' style={{ height: '22px', width: '22px' }} /><span> Schedule</span>
        </div>
        <div className='mb-4 side-content' onClick={() => handleNavItemClicked('Calendar')}>
          <FaCalendarAlt className='me-2' style={{ height: '22px', width: '22px' }} /><span> Calendar</span>
        </div>
        <div className='mb-4 side-content' onClick={() => handleNavItemClicked('Notification')}>
          <IoNotifications className='me-2' style={{ height: '22px', width: '22px' }} /><span> Notification</span>
        </div>
        <div className='side-content' onClick={() => handleNavItemClicked('Settings')}>
          <IoMdSettings className='me-2' style={{ height: '22px', width: '22px' }} /><span> Settings</span>
        </div>
      </div>
      
    </div>
  );
}

export default SideBar;
