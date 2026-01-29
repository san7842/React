
// import {React , useState } from 'react';
// import './Signup.css'
// const Signup=()=>{
       
//  const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         errors: {}
//       });
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//           ...formData,
//           [name]: value,
//           errors: {
//             ...formData.errors,
//             [name]: validateField(name, value)
//           }
//         });
//       };
    
//       const validateField = (name, value) => {
//         switch (name) {
//           case 'name':
//             return value.trim() === '' ? 'Name is required' : null;
//           case 'email':
//             const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//             return !emailRegex.test(value) ? 'Invalid email' : null;
//           case 'password':
//             return value.length < 8 ? 'Password must be at least 8 characters' : null;
//           case 'confirmPassword':
//             return value !== formData.password ? 'Passwords do not match' : null;
//           default:
//             return null;
//         }
//       };
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         const { name, email, password, confirmPassword } = formData;
//         const errors = {
//           name: validateField('name', name),
//           email: validateField('email', email),
//           password: validateField('password', password),
//           confirmPassword: validateField('confirmPassword', confirmPassword)
//         };
    
//         setFormData({
//           ...formData,
//           errors
//         });
    
//         if (!Object.values(errors).some(error => error !== null)) {
//           // Form is valid, proceed with submission
//           console.log('Form submitted:', { name, email, password });
//         }
//       };
    
//       return (
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Name:</label>
//             <input type="text" name="name" value={formData.name} onChange={handleChange} />
//             {formData.errors.name && <p style={{ color: 'red' }}>{formData.errors.name}</p>}
//           </div>
//           <div>
//             <label>Email:</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} />
//             {formData.errors.email && <p style={{ color: 'red' }}>{formData.errors.email}</p>}
//           </div>
//           <div>
//             <label>Password:</label>
//             <input type="password" name="password" value={formData.password} onChange={handleChange} />
//             {formData.errors.password && <p style={{ color: 'red' }}>{formData.errors.password}</p>}
//           </div>
//           <div>
//             <label>Confirm Password:</label>
//             <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
//             {formData.errors.confirmPassword && <p style={{ color: 'red' }}>{formData.errors.confirmPassword}</p>}
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       );
//     }
    
   
// export default Signup;

// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";




// const Signup = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     number: "",
//     pass: "",
//     cpass: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.name.trim()) return alert("Enter name");
//     if (isNaN(form.number) || form.number.length < 10)
//       return alert("Enter valid number");
//     if (form.pass !== form.cpass)  return alert("Passwords do not match");

//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     if (users.find((e) => e.email === form.email))
//       return alert("Already registered");

//     users.push(form);
//     localStorage.setItem("users", JSON.stringify(users));
//     navigate("/login");
//   };

//   return (

       

//     <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-black px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 40, scale: 0.95 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}

//         className=" w-full max-w-sm sm:max-w-md md:max-w-lg
//            backdrop-blur-xl bg-black rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8">

//         <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white mb-6">Create Account</h2>

//         <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
//           <input
//             type="text" name="name"placeholder="Full Name"value={form.name} onChange={handleChange}
//             className="w-full px-4 py-2 sm:py-2.5 rounded-lg border border-gray-300
//               focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-white"/>

//           <input
//             type="email" name="email"  placeholder="Email Address"  value={form.email} onChange={handleChange}
          
//             className="w-full px-4 py-2 sm:py-2.5  rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500
//                     focus:border-indigo-500 outline-none  text-white"/>
                   
                   

//           <input
//             type="number"
//             name="number"
//             placeholder="Mobile Number"
//             value={form.number}
//             onChange={handleChange}
//             className="
//               w-full px-4 py-2 sm:py-2.5
//               rounded-lg border border-gray-300
//               focus:ring-2 focus:ring-indigo-500
//               focus:border-indigo-500 outline-none  text-white
//             "
//           />

//           <input
//             type="password"
//             name="pass"
//             placeholder="Password"
//             value={form.pass}
//             onChange={handleChange}
//             className="
//               w-full px-4 py-2 sm:py-2.5
//               rounded-lg border border-gray-300
//               focus:ring-2 focus:ring-indigo-500
//               focus:border-indigo-500 outline-none  text-white
//             "
//           />

//           <input
//             type="password"
//             name="cpass"
//             placeholder="Confirm Password"
//             value={form.cpass}
//             onChange={handleChange}
//             className="
//               w-full px-4 py-2 sm:py-2.5
//               rounded-lg border border-gray-300
//               focus:ring-2 focus:ring-indigo-500
//               focus:border-indigo-500 outline-none  text-white
//             "
//           />

//           <motion.button
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.96 }}
//             type="submit"
//             className="
//               w-full py-2.5 sm:py-3
//               rounded-lg bg-cyan-600 text-white
//               font-semibold text-base sm:text-lg
//               hover:bg-indigo-700 transition
//             "
//           >
//             Sign Up
//           </motion.button>
//         </form>

//         <p className="text-center text-sm sm:text-base text-gray-400 mt-6">
//           Already have an account?
//           <span
//             className="text-white font-medium cursor-pointer ml-1 hover:underline"
//             onClick={() => navigate("/login")}
//           >
//             Login
//           </span>
//         </p>
//       </motion.div>
//     </div>
    
    
//   );
// };

// export default Signup;

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
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* 🌑 Dark overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Content */}
      <div className="min-h-screen w-mid flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg
            backdrop-blur-xl bg-transparent rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white mb-6">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-white bg-transparent"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-white bg-transparent"
            />

            <input
              type="number"
              name="number"
              placeholder="Mobile Number"
              value={form.number}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-white bg-transparent"
            />

            <input
              type="password"
              name="pass"
              placeholder="Password"
              value={form.pass}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-white bg-transparent"
            />

            <input
              type="password"
              name="cpass"
              placeholder="Confirm Password"
              value={form.cpass}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-white bg-transparent"
            />

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="w-full py-2.5 rounded-lg bg-black text-white font-semibold hover:bg-red-500 transition"
            >
              Sign Up
            </motion.button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Already have an account?
            <span
              className="text-white font-medium cursor-pointer ml-1 hover:underline"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;

