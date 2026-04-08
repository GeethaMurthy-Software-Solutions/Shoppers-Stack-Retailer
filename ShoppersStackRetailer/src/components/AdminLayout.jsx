import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />

      <div className="flex">
        
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} closeSidebar={()=>setIsOpen(false)} />

        {/* Main Content */}
        <div className="
          mt-14 flex-1 p-4 sm:p-6 transition-all duration-300
          lg:ml-64  
        ">
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default AdminLayout