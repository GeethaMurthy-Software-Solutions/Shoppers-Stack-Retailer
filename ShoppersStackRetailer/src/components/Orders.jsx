import React, { useState } from "react";

const Orders = () => {
  const [activeTab, setActiveTab] = useState("All Orders");
  const [search, setSearch] = useState("");

  const orders = [
    { id: "ORD1001", product: "Wireless Headphones", qty: 1, name: "Ravi", sStatus: "Placed", mStatus: "Pending" },
    { id: "ORD1002", product: "Smart Watch", qty: 2, name: "Anjali", sStatus: "Confirmed", mStatus: "Confirmed" },
    { id: "ORD1003", product: "Bluetooth Speaker", qty: 1, name: "Suresh", sStatus: "In Delivery", mStatus: "Shipped" },
    { id: "ORD1004", product: "Blue Denim Jacket", qty: 1, name: "Meena", sStatus: "Delivered", mStatus: "Delivered" },
    { id: "ORD1005", product: "Blazer", qty: 3, name: "Arjun", sStatus: "Placed", mStatus: "Pending" }
  ];

  const tabs = ["All Orders", "Pending", "Shipped", "Delivered", "Cancelation Requests"];

  const filteredOrders = orders.filter(o =>
    o.product.toLowerCase().includes(search.toLowerCase()) &&
    (activeTab === "All Orders" || o.mStatus === activeTab)
  );

  const badgeStyle = (status) => {
    if (status === "Placed" || status === "Confirmed") return "bg-yellow-100 text-yellow-700";
    if (status === "Pending" || status === "Shipped" || status === "Confirmed") return "bg-blue-100 text-blue-700";
    if (status === "Delivered") return "bg-green-100 text-green-700";
    return "bg-gray-100";
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full p-4 md:p-6">

      <h1 className="text-lg md:text-xl font-semibold mb-4">
        ← Orders Management
      </h1>

      <div className="bg-white rounded-xl p-4 mb-4 overflow-x-auto">
        <div className="flex gap-6 sm:gap-40 md:gap:30 text-sm whitespace-nowrap">
          {tabs.map((tab, i) => (
            <span
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer pb-2 ${
                activeTab === tab
                  ? "border-b-2 border-black font-medium"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">

        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="text"
            placeholder="Search orders..."
            className="border rounded-lg px-3 py-2 text-sm w-full sm:w-64 md:w-72"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select className="border rounded-lg px-3 py-2 text-sm w-full sm:w-auto">
            <option>All Status</option>
          </select>

          <select className="border rounded-lg px-3 py-2 text-sm w-full sm:w-auto">
            <option>All Categories</option>
          </select>
        </div>

        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="p-3 text-left">Order ID</th>
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Shopper Details</th>
                <th className="p-3 text-left">Shopper Status</th>
                <th className="p-3 text-left">Merchant Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((o, i) => (
                <tr key={i} className="border-b">
                  <td className="p-3">{o.id}</td>
                  <td className="p-3">{o.product}</td>
                  <td className="p-3">{o.qty}</td>
                  <td className="p-3">{o.name}</td>

                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-xs ${badgeStyle(o.sStatus)}`}>
                      {o.sStatus}
                    </span>
                  </td>

                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-xs ${badgeStyle(o.mStatus)}`}>
                      {o.mStatus}
                    </span>
                  </td>

                  <td className="p-3 flex gap-2">
                    <button className="border px-3 py-1 rounded text-xs">View</button>
                    <button className="bg-black text-white px-3 py-1 rounded text-xs">
                      Update Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden flex flex-col gap-3">
          {filteredOrders.map((o, i) => (
            <div key={i} className="border rounded-lg p-3">
              <p className="font-medium text-sm">{o.product}</p>
              <p className="text-xs text-gray-500">{o.name}</p>
              <p className="text-xs">Qty: {o.qty}</p>

              <div className="flex gap-2 mt-2 flex-wrap">
                <span className={`px-2 py-1 rounded-full text-xs ${badgeStyle(o.sStatus)}`}>
                  {o.sStatus}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs ${badgeStyle(o.mStatus)}`}>
                  {o.mStatus}
                </span>
              </div>

              <div className="flex gap-2 mt-3">
                <button className="border px-2 py-1 rounded text-xs">View</button>
                <button className="bg-black text-white px-2 py-1 rounded text-xs">
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <span className="border px-2 py-1 rounded text-xs">‹</span>
          <span className="border px-2 py-1 rounded bg-black text-white text-xs">1</span>
          <span className="border px-2 py-1 rounded text-xs">2</span>
          <span className="border px-2 py-1 rounded text-xs">3</span>
          <span className="border px-2 py-1 rounded text-xs">›</span>
        </div>

      </div>
    </div>
  );
};

export default Orders;