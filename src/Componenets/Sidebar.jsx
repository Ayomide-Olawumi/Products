import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/sidebar.css'

const Sidebar = () => {
  return (
    <div>
        <h1>sidebar</h1>
        <div className='sidebar'>
      <Link to='/dashboard/services'>Services</Link>
      <Link to= '/dashboard/orders'>Orders</Link>
      <Link to='/dashboard/others'>Others</Link>
      <Link to='/dashboard/settings'>Settings</Link>
      <Link to='/dashboard/privacy'>Privacy</Link>
    </div>
    </div>
    
  )
}

export default Sidebar
