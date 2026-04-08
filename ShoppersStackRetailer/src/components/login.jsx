import React, { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter valid email";
    }

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
      navigate("/landingpage");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRemember = (e) => {
    setRemember(e.target.checked);
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center px-3 sm:px-4">
      
      {/* Modal */}
      <div className="relative w-full max-w-sm sm:max-w-md bg-white rounded-xl shadow-lg p-5 sm:p-6">

        {/* Close Button */}
        <button className="absolute right-3 top-3 text-gray-400 hover:text-black">
          <X size={20} />
        </button>

        <h2 className="text-xl sm:text-2xl font-bold pb-3 text-center sm:text-left">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          {/* Email */}
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <p className="text-red-500 text-xs">{errors.password}</p>
          )}

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm mt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 sm:w-5 sm:h-5 accent-blue-600 cursor-pointer"
                checked={remember}
                onChange={handleRemember}
              />
              <span className="text-xs sm:text-sm">Remember me</span>
            </label>

            <span className="text-xs sm:text-sm text-blue-500 hover:underline cursor-pointer">
              Forgot password?
            </span>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 rounded-md mt-2 hover:bg-gray-800 transition"
          >
            Login
          </button>

          {/* Bottom Section */}
          <div className="mt-4">

            <p className="text-xs sm:text-sm text-center text-gray-500">
              Don’t have an account?{" "}
              <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                Sign up!
              </span>
            </p>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-[1px] bg-gray-300"></div>
              <span className="text-gray-400 text-xs sm:text-sm">Or</span>
              <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>

            {/* Google Button */}
            <button className="w-full border border-gray-300 rounded-lg py-2.5 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium text-gray-700">
                Continue with Google
              </span>
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;