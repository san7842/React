
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Layout.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  // const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  

  

  return (
    <div className="min-h-screen flex flex-col">

      <header className="bg-gray-900 text-white shadow-md">
        <nav className="max-w-7xl mx-auto px-6 py-4"> 
          <Navbar/>
        </nav>
      </header>

        <main className="flex-1 w-full mx-auto px-0 py-1">
        <Outlet />
        </main>

      <footer className="bg-gray-900 text-white text-center py-4">
        <Footer/>
      </footer>

    </div>
  );
};

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

