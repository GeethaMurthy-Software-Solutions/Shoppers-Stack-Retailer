import React, { useState } from "react";
import { FaStore, FaBox, FaStar, FaReceipt } from "react-icons/fa";
import { MdDashboard, MdClose, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const [activeItem, setActiveItem] = useState("");

  const menuItems = [
    { name: "Dashboard", icon: <MdDashboard />, link:"/landingpage" },
    { name: "Store Profile", icon: <FaStore />,link:'/landingpage/storeprofile'},
    { name: "Products", icon: <FaBox /> },
    { name: "Orders", icon: <FaReceipt />, link:"/landingpage/orders" },
    { name: "Reviews", icon: <FaStar /> ,link:'/landingpage/reviews'},
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" 
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar Container */}
      <div 
        className={`h-screen w-64 bg-white border-r shadow-md fixed top-0 left-0 pt-14 z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col justify-between pb-8 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        
        {/* Menu */}
        <div className="flex-1 overflow-y-auto">
          
          {/* Dedicated Close Button Row for Mobile */}
          <div className="bg-black flex justify-end px-6 py-3 lg:hidden w-full">
            <button 
              onClick={(e) => {
                e.preventDefault();
                closeSidebar();
              }}
            >
              <MdClose className="text-2xl text-white" />
            </button>
          </div>

          <ul className="flex flex-col w-full">
            {menuItems.map((item, index) => (
             <Link to={item.link || "#"} key={index} className="block w-full">
               <li
                  onClick={() => setActiveItem(item.name)}
                  className={`flex items-center gap-4 px-6 py-3 cursor-pointer
                    ${activeItem === item.name ? "bg-black text-white" : "text-gray-600 hover:bg-gray-50"}
                  `}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium">{item.name}</span>
                </li>
             </Link>
            ))}
          </ul>
        </div>

        {/* Logout Button */}
        <div className="w-full">
          <Link to="/" className="block w-full">
            <div className="flex items-center gap-4 px-6 py-3 cursor-pointer text-red-600 hover:bg-red-50 transition-colors">
              <span className="text-xl"><MdLogout /></span>
              <span className="text-sm font-medium border-none outline-none">Logout</span>
            </div>
          </Link>
        </div>

      </div>
    </>
  );
};

export default Sidebar;