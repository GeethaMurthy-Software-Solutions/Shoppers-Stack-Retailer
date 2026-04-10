import React from "react";

const ViewOrderModal = ({ order, onClose }) => {
  if (!order) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-3">
      
      <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-xl">

        <div className="flex justify-between items-center mb-5">
          <h2 className="font-semibold text-base">View Order</h2>
          <button onClick={onClose} className="text-gray-500">✖</button>
        </div>

        <div className="text-sm space-y-5">

          {/* Order Information */}
          <div>
            <p className="font-semibold mb-2">Order Information</p>
            <div className="grid grid-cols-2 gap-y-2">
              <p><b>Order ID:</b> {order.id}</p>
              <p><b>Date:</b> {order.date}</p>

              <p><b>Product:</b> {order.product}</p>
              <p><b>Quantity:</b> {order.qty}</p>
            </div>
          </div>

          {/* Shopper Details */}
          <div>
            <p className="font-semibold mb-2">Shopper Details</p>
            <div className="grid grid-cols-2 gap-y-2">
              <p><b>Name:</b> {order.name}</p>
            </div>
          </div>

          {/* Status */}
          <div>
            <p className="font-semibold mb-2">Order Status</p>

            <div className="grid grid-cols-2 gap-4">

              <div>
                <p className="text-xs text-gray-500 mb-1">Shopper Status</p>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                  {order.sStatus}
                </span>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">Merchant Status</p>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  {order.mStatus}
                </span>
              </div>

            </div>

          </div>

        </div>

        <div className="flex justify-end mt-6">
          <button onClick={onClose} className="border px-4 py-1.5 text-sm rounded-lg">
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default ViewOrderModal;