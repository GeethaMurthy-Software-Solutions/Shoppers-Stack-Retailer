import React from 'react'
import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // Email validation
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter valid email";
    }

    // Password validation
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Login Successful");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
  
    <div className="fixed inset-0 flex items-center justify-center p-4">
      
      <div className="relative w-full max-w-sm bg-white rounded-xl shadow-lg p-6">
        
        {/* Close Button */}
        <button className="absolute right-3 top-3 text-gray-400 hover:text-black">
          <X size={18} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center pb-3">ShopperStack</h2>
        <p className="text-center text-xl font-semibold text-gray-900 mb-5">Admin Login</p>

       <form onSubmit={handleSubmit}>

          {/* Email */}
          <input
            type="text"
            name="email"
            placeholder="Admin Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-500 rounded-md px-3 py-2 text-sm"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}

          {/* Password */}
          <div className="relative mt-3">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-500 rounded-md px-3 py-2 text-sm"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}

          {/* Forgot password */}
          <div className="text-right mt-2">
            <a className="text-xs text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md mt-4 hover:bg-gray-800"
            onClick={()=>{navigate("/landingpage")}}
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;