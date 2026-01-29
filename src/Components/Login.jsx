
// import React from 'react';
// import './Login.css'
// const Login =()=> {
//   return (
//     <>
//       <h2>Login</h2>
//       <form>
           
//             Enter Email:<input type="email" name="email"></input><br/>
//             Enter password:<input type="password" name="password"></input><br/>   
//             <button type="submit">Login</button>

//         </form>
//     </>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgVideo from "../assets/bg.mp4"; // adjust path if needed

const Login = () => {
  let navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const validationErrors = validate();
  //   setErrors(validationErrors);

    // if (Object.keys(validationErrors).length === 0) {
    //   alert("Login successful ✅");
    //   navigate("/home");
    // }
//     if (Object.keys(validationErrors).length === 0) {
//   const users = JSON.parse(localStorage.getItem("users")) || [];

//   const matchedUser = users.find(
//     (u) => u.email === form.email && u.pass === form.password
//   );

//   if (!matchedUser) {
//     alert("Invalid credentials ");
//     return;
//   }

//   localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
//   navigate("/home");
// }
 const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length !== 0) return;

  let loggedUser;

  // 👑 Admin login
  if (form.email === "admin@gmail.com" && form.password === "admin123") {
    loggedUser = {
      name: "Admin",
      email: "admin@gmail.com",
      role: "admin",
    };
  } else {
    // 👤 Normal user login
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (u) => u.email === form.email && u.pass === form.password
    );

    if (!matchedUser) {
      alert("Invalid user or password");
      return;
    }

    loggedUser = {
      ...matchedUser,
      role: "user",
    };
  }


  localStorage.setItem("loggedInUser", JSON.stringify(loggedUser));
  navigate("/home");
};

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* 🌑 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🔐 Login Form */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-transparent backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            Login Person
          </h2>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 font-medium text-white">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block mb-1 font-medium text-white">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button className="w-full bg-fuchsia-800 text-white py-2 rounded-lg hover:bg-indigo-500 transition font-black">
            Login
          </button>

          <p className="text-center text-sm mt-4 text-gray-800 font-bold">
            Not registered?
            <span
              onClick={() => navigate("/signup")}
              className="text-white font-medium cursor-pointer ml-1 hover:underline">
              Create account
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
