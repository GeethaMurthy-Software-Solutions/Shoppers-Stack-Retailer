import React, { useState } from "react";

const UpdateStatusModal = ({ order, onClose }) => {
  const [status, setStatus] = useState(order?.mStatus || "Confirmed");

  if (!order) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-3">
      
      <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-semibold text-base">Update Order Status</h2>
          <button onClick={onClose} className="text-gray-500">✖</button>
        </div>

        {/* Top Info */}
        <div className="grid grid-cols-2 gap-y-3 text-sm mb-4">
          <p><span className="font-semibold">Order ID:</span> {order.id}</p>
          <p><span className="font-semibold">Shopper:</span> {order.name}</p>

          <p><span className="font-semibold">Product:</span> {order.product}</p>
          <p><span className="font-semibold">Quantity:</span> {order.qty}</p>
        </div>

        {/* Status Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">

          {/* Shopper Status */}
          <div>
            <p className="text-xs text-gray-500 mb-1">Shopper Status</p>
            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
              {order.sStatus}
            </span>
          </div>

          {/* Merchant Status */}
          <div>
            <p className="text-xs text-gray-500 mb-1">Merchant Status</p>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border w-full px-3 py-2 text-sm rounded-lg focus:outline-none"
            >
              <option>Pending</option>
              <option>Confirmed</option>
              <option>Shipped</option>
              <option>In Delivery</option>
              <option>Delivered</option>
              <option>Cancel Approved</option>
              <option>Cancel Rejected</option>
            </select>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="border px-4 py-1.5 text-sm rounded-lg"
          >
            Cancel
          </button>

          <button className="bg-black text-white px-4 py-1.5 text-sm rounded-lg">
            Update Status
          </button>
        </div>

      </div>
    </div>
  );
};

export default UpdateStatusModal;