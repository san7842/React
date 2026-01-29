import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
 import LogoutButton from "../Components/Logout";


const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const username = localStorage.getItem("username") || "User";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/home");
  };

  

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Brand */}
        <h1 className="text-xl font-bold text-yellow-400">MovieBook</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <Link to="/home" className="hover:text-yellow-400 transition">Home</Link>
          </li>
          <li>
            <Link to="/booking" className="hover:text-yellow-400 transition">Booking</Link>
          </li>
         

          {!isLoggedIn && (
            <>
              <li>
                <Link to="/login" className="hover:text-yellow-400 transition">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-yellow-400 transition">Signup</Link>
              </li>
               {/* <li>
                <Link to="/logout" className="hover:text-yellow-400 transition">{<Logout/>}</Link></li>
            */} </>
          )}

          {/* {isLoggedIn && ( */}
            
              {/*  <li className="font-semibold">{username}</li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-red-400 hover:text-red-500 transition"
                >
                  Logout
                </button> 
              </li> */}
             
                    
                
            <LogoutButton />
                
            {/* //  )}  */}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 mt-4 bg-gray-800 rounded-lg">
          <li>
            <Link to="/home" className="block py-2 hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/booking" className="block py-2 hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Booking</Link>
          </li>
          <li>
            <Link to="/admin" className="block py-2 hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Admin</Link>
          </li>

          {!isLoggedIn && (
            <>
              <li>
                <Link to="/login" className="block py-2 hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Login</Link>
              </li>
              <li>
                <Link to="/signup" className="block py-2 hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Signup</Link>
              </li>
            </>
          )}

          {isLoggedIn && (
            <>
              <li className="block py-2 font-semibold">{username}</li>
              <li>
                <button
                  onClick={() => { handleLogout(); setMenuOpen(false); }}
                  className="text-red-400 hover:text-red-500 transition block py-2 w-full text-left"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
