import React, { useState } from "react";
import ViewOrderModal from "./ViewOrderModal";
import UpdateStatusModal from "./UpdateStatusModal";

const Orders = () => {
  const [activeTab, setActiveTab] = useState("ALL ORDERS");
  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const orders = [
    { id: "ORD1001", product: "Wireless Headphones", qty: 1, name: "Ravi", date: "12-09-2025", sStatus: "Placed", mStatus: "Pending" },
    { id: "ORD1002", product: "Smart Watch", qty: 2, name: "Anjali", date: "12-09-2025", sStatus: "Confirmed", mStatus: "Confirmed" },
    { id: "ORD1003", product: "Bluetooth Speaker", qty: 1, name: "Suresh", date: "12-09-2025", sStatus: "In Delivery", mStatus: "Shipped" },
    { id: "ORD1004", product: "Jacket", qty: 1, name: "Meena", date: "12-09-2025", sStatus: "Delivered", mStatus: "Delivered" }
  ];

  const tabs = ["ALL ORDERS", "PENDING", "SHIPPED", "DELIVERED", "CANCELATION REQUESTS"];

  const filteredOrders = orders.filter(o =>
    o.product.toLowerCase().includes(search.toLowerCase()) &&
    (activeTab === "ALL ORDERS" || o.mStatus.toUpperCase() === activeTab)
  );

  const badge = (s) => {
    if (s === "Placed" || s === "Confirmed") return "bg-yellow-100 text-yellow-700";
    if (s === "Pending" || s === "Shipped") return "bg-blue-100 text-blue-700";
    if (s === "Delivered") return "bg-green-100 text-green-700";
    return "bg-gray-100";
  };

  return (
    <div className="bg-gray-100 min-h-screen p-3 md:p-6">

      <div className={`${showViewModal || showUpdateModal ? "opacity-40 pointer-events-none" : ""}`}>

        <h1 className="text-lg md:text-xl font-semibold mb-4">Orders Management</h1>

        {/* TABS FIXED */}
        <div className="bg-white rounded-xl px-3 pt-3 mb-4">
          <div className="flex overflow-x-auto no-scrollbar gap-6 text-xs md:text-sm whitespace-nowrap border-b">

            {tabs.map((t, i) => (
              <span
                key={i}
                onClick={() => setActiveTab(t)}
                className={`cursor-pointer pb-3 uppercase flex-shrink-0 ${
                  activeTab === t
                    ? "border-b-2 border-black font-semibold text-black"
                    : "text-gray-500"
                }`}
              >
                {t}
              </span>
            ))}

          </div>
        </div>

        <div className="bg-white rounded-xl p-3 mb-4">
          <input
            type="text"
            placeholder="Search orders..."
            className="border rounded-lg px-3 py-2 text-sm w-full md:w-80"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden md:block bg-white rounded-xl p-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="p-3 text-left">Order ID</th>
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-left">Qty</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Shopper</th>
                <th className="p-3 text-left">Merchant</th>
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
                    <span className={`px-3 py-1 text-xs rounded-full ${badge(o.sStatus)}`}>
                      {o.sStatus}
                    </span>
                  </td>

                  <td className="p-3">
                    <span className={`px-3 py-1 text-xs rounded-full ${badge(o.mStatus)}`}>
                      {o.mStatus}
                    </span>
                  </td>

                  <td className="p-3 flex gap-2">
                    <button
                      className="border px-3 py-1 text-xs rounded"
                      onClick={() => {
                        setSelectedOrder(o);
                        setShowViewModal(true);
                      }}
                    >
                      View
                    </button>

                    <button
                      className="bg-black text-white px-3 py-1 text-xs rounded"
                      onClick={() => {
                        setSelectedOrder(o);
                        setShowUpdateModal(true);
                      }}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE CARDS */}
        <div className="md:hidden flex flex-col gap-3">
          {filteredOrders.map((o, i) => (
            <div key={i} className="bg-white p-3 rounded-xl shadow-sm">

              <p className="text-sm font-medium">{o.product}</p>
              <p className="text-xs text-gray-500">{o.name}</p>
              <p className="text-xs">Qty: {o.qty}</p>

              <div className="flex gap-2 mt-2">
                <span className={`px-2 py-1 text-[10px] rounded-full ${badge(o.sStatus)}`}>{o.sStatus}</span>
                <span className={`px-2 py-1 text-[10px] rounded-full ${badge(o.mStatus)}`}>{o.mStatus}</span>
              </div>

              <div className="flex gap-2 mt-3">
                <button
                  className="border px-2 py-1 text-[10px] rounded flex-1"
                  onClick={() => {
                    setSelectedOrder(o);
                    setShowViewModal(true);
                  }}
                >
                  View
                </button>

                <button
                  className="bg-black text-white px-2 py-1 text-[10px] rounded flex-1"
                  onClick={() => {
                    setSelectedOrder(o);
                    setShowUpdateModal(true);
                  }}
                >
                  Update
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {showViewModal && (
        <ViewOrderModal order={selectedOrder} onClose={() => setShowViewModal(false)} />
      )}

      {showUpdateModal && (
        <UpdateStatusModal order={selectedOrder} onClose={() => setShowUpdateModal(false)} />
      )}

    </div>
  );
};

export default Orders;