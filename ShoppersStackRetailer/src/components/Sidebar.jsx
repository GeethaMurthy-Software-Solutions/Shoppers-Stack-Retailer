import React from "react";
import { FaStore, FaBox, FaStar, FaReceipt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <MdDashboard />, active: true },
    { name: "Store Profile", icon: <FaStore /> },
    { name: "Products", icon: <FaBox /> },
    { name: "Orders", icon: <FaReceipt /> },
    { name: "Reviews", icon: <FaStar /> },
  ];

  return (
    <div className="h-screen w-64 bg-white border-r shadow-md fixed top-0 left-0 pt-16 z-40">
      
      {/* Menu */}
      <ul className="flex flex-col w-full">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-4 px-6 py-3 cursor-pointer
              ${item.active ? "bg-black text-white" : "text-gray-600 hover:bg-gray-50"}
            `}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-medium">{item.name}</span>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Sidebar;