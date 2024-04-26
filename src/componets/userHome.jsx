import React, { useState } from 'react'
import Sidebar from './helper/sideBar'
import Navbar from './helper/navBar'
import Uploader from './helper/upLoad'

function userHome() {
  const [navtilte,setNavtitle]=useState('dashboard')
  const onNavItemClicked=(val)=>{
    setNavtitle(val)
  }
  return (
    <div>
      <div className='d-flex'>
      <Sidebar onNavItemClicked={onNavItemClicked} />
      <Navbar  heading={navtilte}/>
      </div>
      <div>
      <Uploader/>
      </div>
    </div>
  )
}

export default userHome