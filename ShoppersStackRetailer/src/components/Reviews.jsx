import React from "react";
import img1 from '../assets/reviewsimg1.jpg';
import img2 from '../assets/reviewsimg2.jpg';
import img3 from '../assets/reviewsimg3.jpg';
import img4 from '../assets/reviewimg4.jpg'



const Reviews = () => {
  const data = [
    {
      id: 1,
      name: "Double-breasted Blazer",
      user: "shiva",
      rating: 5,
      review: "Great quality and Fast shipping",
      date: "21-12-2025",
      img:img1,
    },
    {
      id: 2,
      name: "Noise Two Wireless",
      user: "shiva",
      rating: 4,
      review: "Great quality and Fast shipping",
      date: "21-12-2025",
      img: img2,
    },
    {
      id: 3,
      name: "Blue Denim Jacket",
      user: "chintu",
      rating: 3,
      review: "Avg quality and Fast shipping",
      date: "21-12-2025",
      img: img3,
    },
    {
      id: 4,
      name: "Go-Boult Tuff Hawk",
      user: "Shifa",
      rating: 4,
      review: "Great quality and too long shipping",
      date: "21-12-2025",
      img: img4,
    },
  ];

  const renderStars = (count) => {
    return "★★★★★☆☆☆☆☆".slice(5 - count, 10 - count);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <button className="text-xl">←</button>
        <h1 className="bg-white px-4 py-2 rounded-lg shadow font-semibold">
          Customer reviews
        </h1>
      </div>

      <div className="bg-white rounded-xl shadow p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-6">
          <input
            type="text"
            placeholder="Search products..."
            className="border rounded-lg px-3 py-2 w-full md:w-1/3"
          />

          <div className="flex gap-3 w-full md:w-auto">
            <select className="border rounded-lg px-3 py-2 w-full md:w-auto">
              <option>Rating</option>
            </select>

            <select className="border rounded-lg px-3 py-2 w-full md:w-auto">
              <option>All Categories</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {data.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-4 border border-gray-400 rounded-lg p-4">
              <img src={item.img} alt="" className="w-24 h-24 object-cover rounded-lg mx-auto sm:mx-0"/>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-600">
                  <span>{item.user}</span>
                  <span className="text-yellow-500">
                    {renderStars(item.rating)}
                  </span>
                </div>
                <p className="text-gray-700 mt-2">
                  “{item.review}”
                </p>
                <p className="text-xs text-gray-500 mt-2">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button className="px-3 py-1 border rounded">‹</button>
          <button className="px-3 py-1 bg-black text-white rounded">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
          <button className="px-3 py-1 border rounded">›</button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;