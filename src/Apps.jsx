import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";
import PrivateRoute from "./Components/ProtectedRoute";

const Apps = () => {
  return (
    <>
     
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}/>
           <Route path='home' element={<Home />}/>
          <Route path='/booking' element= {<Booking />}/>
          <Route path="admin" element={< Admin/>} />
          <Route path='Login' element={<Login />} />
          <Route path='Signup' element= {<Signup />}/>
          {/* <Route path="booking" element={<PrivateRoute><Booking/></PrivateRoute>}/> */}
          

        </Route>
         {/* <Route path='home' element={<Home />}/> */}
        {/* <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element= {<Signup />}/> */}
        
        </Routes>
      

       
     </>
  );
};

export default Apps;



