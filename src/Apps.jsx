import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
// import Booking from "./pages/Booking";
import Admin from "./pages/Admin";
import PrivateRoute from "./Components/ProtectedRoute";
import MyBookings from "./pages/MyBookings";
import Book from './pages/Book.jsx'

const Apps = () => {
  return (
    <>
     
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}/>
           {/* <Route path='home' element={<Home />}/> */}
          {/* <Route path='booking' element= {<MyBookings />}/> */}
          <Route path="admin" element={< Admin/>} />
          <Route path='Login' element={<Login />} />
          <Route path='Signup' element= {<Signup />}/>
          <Route path="book" element={<PrivateRoute><Book/></PrivateRoute>}/>
          
          {/* <Route path='book' element={<Book/>} />  */}
        </Route>
         <Route path='/home' element={<Home />}/>
         <Route path='/booking' element= {<MyBookings />}/>
      
        </Routes>
      

       
     </>
  );
};

export default Apps;



// import React from 'react'
// import { Route,Routes } from 'react-router-dom'
// import Layout from './Layout'
// import Home from './Home'
// import Login from './Login'
// import Signup from './Signup'
// import MyBookings from './MyBookings'
// import Book from './Book'

// const App = () => {
//   return (
//     <>

//        <Routes>

//          <Route path='/' element={<Layout/>} > 
           
//            <Route index element={<Home/>} />
//            <Route path='home' element={<Home/>} />
//            <Route path='login' element={<Login/>} />
//            <Route path='signup' element={<Signup/>} />        
//            <Route path='bookings' element={<MyBookings/>} />        
//            <Route path='book' element={<Book/>} />        
         
//          </Route>

//        </Routes>
    
//     </>
//   )
// }

// export default App