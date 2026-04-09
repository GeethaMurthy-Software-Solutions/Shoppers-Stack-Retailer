import React, { useState } from "react";

const StoreProfile = () => {
  const [formData, setFormData] = useState({
    companyName: "Violet Fashion Pvt Ltd",
    email: "merchant@email.com",
    gst: "29ABCDE1234F1Z5",
    registration: "REG-458921",
    companyType: "Private Limited",
    website: "https://www.violetfashion.com",
    commission: "12%",
    address: "Hyderabad, Telangana, India",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Store Profile</h1>
        <p className="text-gray-600">
          View and manage your business and store details
        </p>
      </div>
      <div className="flex justify-center">
        <div className="bg-white rounded-xl shadow w-full max-w-5xl p-4 md:p-6">
          <div className="mb-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              ✅ Approved
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            <div>
              <label className="text-sm">Company Name</label>
              <input name="companyName" value={formData.companyName} onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg bg-gray-100"/>
            </div>
            <div>
              <label className="text-sm">Merchant Email</label>
              <input name="email"value={formData.email} onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg bg-gray-100"/>
            </div>
            <div>
              <label className="text-sm">GST Number</label>
              <input name="gst" value={formData.gst} onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg bg-gray-100"/>
            </div>
            <div>
              <label className="text-sm">Registration Number</label>
              <input name="registration" value={formData.registration} onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg bg-gray-100"/>
            </div>
            <div>
              <label className="text-sm">Company Type</label>
              <input name="companyType"value={formData.companyType}onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg bg-gray-100"/>
            </div>
            <div>
              <label className="text-sm">Website</label>
              <input name="website" value={formData.website} onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg bg-gray-100"/>
            </div>
            <div>
              <label className="text-sm">Commission Percentage</label>
              <input name="commission" value={formData.commission} onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg bg-gray-100"/>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm">Business Address</label>
              <textarea name="address"value={formData.address}onChange={handleChange}rows="3"
                className="w-full mt-1 p-2 border rounded-lg bg-gray-100"/>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 w-full sm:w-auto">
              Save Profile Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreProfile;