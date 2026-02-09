import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef();

  // Get user from localStorage
  const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const [user, setUser] = useState(storedUser);
  const [open, setOpen] = useState(false);

  // Close dropdown when click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setOpen(false);
    navigate("/login");
  };

  return (
    <header className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center relative">
      
      <h1 className="text-lg font-bold">MyApp</h1>

      
      <div ref={dropdownRef} className="relative">

        {/* If User Logged In */}
        {user ? (
          <>
            {/* Profile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2">
              <img
                src={user.photo || "https://i.pravatar.cc/150?img=3"}
                className="w-9 h-9 rounded-full border-2 border-white"
              />
              <span className="hidden md:block font-medium">{user.name}</span>
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 top-12 w-52 bg-white text-black rounded-lg shadow-lg z-50">
                
                <Link to="/signup" className="block px-4 py-2 hover:bg-gray-200">
                  Signup
                </Link>

                <Link to="/book" className="block px-4 py-2 hover:bg-gray-200">
                  Book
                </Link>

                <Link to="/booking" className="block px-4 py-2 hover:bg-gray-200">
                  My Booking
                </Link>

                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-red-200">
                  Logout
                </button>

              </div>
            )}
          </>
        ) : (
          /* If Not Logged In */
          <Link
            to="/login"
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;

