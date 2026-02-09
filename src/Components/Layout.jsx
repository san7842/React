
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./Layout.css";
import Navbar from "./Navbar";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-gray-600 text-white hover:bg-fuchsia-400 shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <div className="w-[100px]">
            <img src="logo1.jpg" alt="Logo" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 font-medium">
              <NavLinks />
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-700 px-6 pb-4">
            <ul className="flex flex-col gap-4 font-medium">
              <NavLinks onClick={() => setMenuOpen(false)} />
            </ul>
          </div>
        )}
      </header>
     
      {/* Page Content */}
      <main className="flex-1 p-0">
        
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <Footer />
      </footer>
    </div>
  );
};

/* Reusable Nav Links */
const NavLinks = ({ onClick }) => (
  <>
    {/* <li>
      <Link onClick={onClick} to="/home" className="px-4 py-2 bg-pink-500 text-white rounded-full  shadow-lg hover:shadow-xl 
               hover:-translate-y-0.5  hover:text-fuchsia-500 active:translate-y-0 active:shadow-md  transition-all duration-200"></Link>
    </li> */}
    <li>
      <Link onClick={onClick} to="/login" className="px-4 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:shadow-xl 
               hover:-translate-y-0.5  hover:text-fuchsia-500 active:translate-y-0 active:shadow-md  transition-all duration-200">Login</Link>
    </li>
    <li>
      <Link onClick={onClick} to="/signup" className="px-4 py-2 bg-pink-500 text-white rounded-full  shadow-lg hover:shadow-xl 
                 hover:-translate-y-0.5  hover:text-fuchsia-500 active:translate-y-0 active:shadow-md  transition-all duration-200">Signup</Link>
    </li>
   
  </>
);

export default Layout;









// import React from "react";
// import './Layout.css'
// import { Link, Outlet } from "react-router-dom"
// const Layout=()=>{
//     return(
//         <>
   
       
//        <header>
         
//         <nav>
//             <ul id="nav">
//                 <li> <Link to="/home">Home</Link></li>
//                  <li> <Link to="/login">Login</Link></li>
//                   <li><Link to="/signup">Signup</Link> </li>
//                  <li><Link to="/admin">Admin</Link> </li>
//                  <li><Link to="/book">Book</Link> </li>
//             </ul>
//         </nav>
//        </header>
       
//        <Outlet/>
      
//      <footer>
//         this is footer
//      </footer>
//         </>
//     )
// }
// export default Layout;

