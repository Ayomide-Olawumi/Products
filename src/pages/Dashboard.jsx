import React from 'react'
import Sidebar from '../Componenets/Sidebar'
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div>
        <Sidebar/>
        <Outlet/>
        </div>

    </div>
  )
}

export default Dashboard
