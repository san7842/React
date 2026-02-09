import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import bgVideo from "../assets/bg3.mp4";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    pass: "",
    cpass: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) return alert("Enter name");
    if (isNaN(form.number) || form.number.length < 10)
      return alert("Enter valid number");
    if (form.pass !== form.cpass) return alert("Passwords do not match");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((e) => e.email === form.email))
      return alert("Already registered");

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* 🌑 Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/60 -z-10"></div> */}

      {/* Content */}
      <div className="min-h-screen w-mid flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg
            backdrop-blur-xl bg-transparent rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white mb-6">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="p-8 rounded-xl shadow-lg w-full max-w-md space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-white bg-transparent"/>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-white bg-transparent"/>

            <input
              type="number"
              name="number"
              placeholder="Mobile Number"
              value={form.number}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-white bg-transparent"/>

            <input
              type="password"
              name="pass"
              placeholder="Password"
              value={form.pass}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-white bg-transparent" />

            <input
              type="password"
              name="cpass"
              placeholder="Confirm Password"
              value={form.cpass}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-white bg-transparent"/>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="w-full py-2.5 rounded-lg bg-black text-white font-semibold hover:bg-red-500 transition">
              Sign Up
            </motion.button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Already have an account?
            <span
              className="text-white font-medium cursor-pointer ml-1 hover:underline"
              onClick={() => navigate("/login")}>
              Login
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;

