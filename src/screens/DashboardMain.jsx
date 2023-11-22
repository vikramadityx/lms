import React from 'react'
import { Routes, Route } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Dashboard from './dashboard/Dashboard';
import Inventory from './dashboard/Inventory'


const DashboardMain = () => {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory/*" element={<Inventory/>} />
        </Routes>
      </div>
    </div>
  )
}

export default DashboardMain