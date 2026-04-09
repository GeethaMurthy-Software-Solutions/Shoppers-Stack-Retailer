import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import Jacketpml from "../assets/Jacketpml.png";
import toppml from "../assets/toppml.png";
import kurtapml from "../assets/kurtapml.png";
import shoespml from "../assets/shoespml.png";
import headphonespml from "../assets/headphonespml.png";
import watchpmml from "../assets/watchpmml.png";
import casualjpml from "../assets/casualjpml.png"
import shirtpml from "../assets/shirtpml.png"
import  hourglassespml  from "../assets/hourglassespml.png";
import tumbpml from "../assets/tumbpml.png";
import nostockpml from "../assets/nostockpml.png"

const products = [
  { id: 1, name: "Blue Denim jacket", category: "Men Clothes", price: 499, rprice: 299, image: Jacketpml, status: "ACTIVE", para : "160 in Stocks" },
  { id: 2, name: "Blazer", category: "Women Clothes", price: 899, rprice: 599, image: toppml, status: "OUT", para : "0 in Stocks"  },
  { id: 3, name: "print Dress", category: "Shoes", price: 1999, rprice: 1299, image: kurtapml, status: "ACTIVE", para : "180 in Stocks"  },
  { id: 4, name: "Boots", category: "Shoes", price: 1499, rprice: 999, image: shoespml, status: "OUT", para : "0 in Stocks"  },
  { id: 5, name: "headphones", category: "Watches", price: 2999, rprice: 1999, image: headphonespml, status: "ACTIVE",para : "169 in Stocks"  },
  { id: 6, name: "hawk", category: "Watches", price: 1299, rprice: 899, image: watchpmml, status: "ACTIVE", para : "108 in Stocks"  },
  { id: 7, name: "max mara", category: "Electronics", price: 999, rprice: 799, image: casualjpml, status: "ACTIVE", para : "89 in Stocks"  },
  { id: 8, name: "Veneta", category: "Electronics", price: 1499, rprice: 1199, image: shirtpml, status: "OUT", para : "0 in Stocks"  }
];

const ProductsML = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-3">

      <h1 className="text-xl font-bold mb-4 flex items-center gap-3 pt-4">
        <GoArrowLeft /> Product Management
      </h1>

      <div className="flex gap-3 mb-6 pt-9">
        <div className=" border-gray-300 rounded bg-white flex-1 h-20 relative p-3">

              <img
                className="h-5 w-5 absolute top-2 right-2"
                src={hourglassespml}
                alt=""
              />

              <div className="flex flex-col justify-center items-center h-full">
                <p className="text-gray-400 text-sm">ALL PRODUCTS</p>
                <h1 className="text-2xl font-semibold">140</h1>
              </div>
          </div>

          <div className=" border-gray-300 rounded bg-white flex-1 h-20 relative p-3">
              <img
                className="h-5 w-5 absolute top-2 right-2"
                src={tumbpml}
                alt=""
              />

              
              <div className="flex flex-col justify-center items-center h-full">
                <p className="text-gray-400 text-sm">ACTIVE</p>
                <h5 className=" text-2xl font-semibold">1,247</h5>
              </div>
          </div> 

          <div className=" border-gray-300 rounded bg-white flex-1 h-20 relative p-3">

              <img
                className="h-5 w-5 absolute top-2 right-2"
                src={nostockpml}
                alt=""
              />

             
              <div className="flex flex-col justify-center items-center h-full">
                <p className="text-gray-400 text-sm"> OUT OF STOCK</p>
                <h5 className="text-2xl font-semibold">32</h5>
              </div>
          </div>
        
      </div>

      <div className="bg-white rounded-2xl">

        <div className="relative p-5 h-17 flex gap-10 text-xs">
          <FiSearch className="absolute left-7 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            className="border-gray-300 border rounded px-9 py-1  md:w-1/4"
            type="text"
            placeholder="Search products..."
          />
  
            <div className="flex gap-5">
              <button className="border border-gray-300 flex items-center rounded p-2.5 gap-5 w-35 ">All Status <RiArrowDropDownLine /></button>
              <button className="border border-gray-300 flex items-center rounded p-2.5 gap-8 w-40 ">All Categories <RiArrowDropDownLine /></button>
            </div>

            <div className="ml-auto">
              <button className="bg-black text-white flex items-center w-32 justify-center p-2 rounded-[10px] gap-1"><IoIosAdd />ADD PRODUCTS</button>
            </div>
        </div>


        <hr className="text-gray-200" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-18 p-4 pt-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded shadow hover:shadow-md transition p-3 flex gap-2 h-35"
            >

              <img
                src={product.image}
                alt={product.name}
                className="h-24 w-20 object-contain"
              />

              <div className="flex flex-col justify-between flex-1 ">
                <div className="space-y-1 ">
                  <h2 className="text-[10px]  font-semibold">
                    {product.name}
                  </h2>
                  <p className="text-gray-500 text-[10px]">
                    {product.category}
                  </p>
                  <p className="text-gray-400 text-[10px] ">
                    ₹{product.price}
                  </p>
                  <p className="text-green-600 text-[10px] ">
                    ₹{product.rprice}
                  </p>
                  <p className="text-[10px] text-gray-700">
                    {product.para}
                  </p>
                </div>

                <div className="flex gap-2 mt-2 justify-center ">
                 <button className="flex items-center justify-center w-5 h-4 rounded-4xl hover:border-gray-200 bg-gray-200">
                      <FaRegEdit className="w-2.5" />
                  </button>
                  <button className="border px-0.5 bg-gray-200 text-xs rounded"><RiDeleteBin5Line className="w-2.5" /></button>
                  <button
                      className={`w-16 text-[10px] rounded-2xl ${
                        product.status === "ACTIVE"
                          ? "bg-green-200 text-green-700"
                          : "bg-red-200 text-red-700"
                        }`}
                        >
                          {product.status === "ACTIVE" ? "ACTIVE" : "OUT"}
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className=" text-gray-200" />

        <div className="flex justify-end p-4 gap-2">
          {[<MdKeyboardArrowLeft />,1, 2, 3, <MdKeyboardArrowRight />].map((num) => (
            <button
              key={num}
              className="border px-3 py-1 rounded hover:bg-black hover:text-white"
            >
              {num}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProductsML;