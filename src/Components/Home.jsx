
import { useState,React, memo, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
// import Footer from "./Footer";

const MovieSlider = lazy(() => import("./MovieSlider"));
const Background = lazy(() => import("./Background"));

const moviesList = [
  { id: 1, title: "Inception", price: 250, image: "https://wallpapercave.com/wp/wp1917154.jpg" },
  { id: 2, title: "Interstellar", price: 300, image: "https://wallpapercave.com/wp/wp1817978.jpg" },
  { id: 3, title: "Avengers: Endgame", price: 200, image: "https://wallpapercave.com/wp/wp4593127.jpg" },
  { id: 4, title: "John Wick 4", price: 280, image: "https://wallpapercave.com/wp/wp12067642.jpg" },
  { id: 5, title: "Fast X", price: 220, image: "https://wallpapercave.com/wp/wp11887077.jpg" },
   { id: 6, title: "Mission Impossible", price: 260, image: "https://wallpapercave.com/wp/wp11120445.jpg" },
];

const Home = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState({});

  const handleTicketChange = (movieId, count) => {
    setTickets(prev => ({ ...prev, [movieId]: count }));
  };

  return (

    <div className="w-full text-white bg-black">
      <Navbar/>
      {/* 🎥 Hero Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <section className="h-screen">
          <Background />
        </section>
      </Suspense>
      <section>
        <div>
        <h1 className='justify-center text-center font-bold text-[60px] bg-emerald-950 hover:bg-fuchsia-600 hover:text-black'>Movies House</h1>
      </div>
      </section>

      {/* 🎞 Slider */}
      <Suspense fallback={<div>Loading Movies...</div>}>
        <section className="p-6">
          <MovieSlider />
        </section>
      </Suspense>



      {/* 🎬 Movies Grid */}
      <section className="p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {moviesList.map(movie => (
          <motion.div
            key={movie.id}
            whileHover={{ scale: 1.05 }}
            className="bg-black/40 backdrop-blur-xl rounded-xl p-5 shadow-lg" >
            <h2 className="text-xl font-bold">{movie.title}</h2>
            <p className="mb-3">₹{movie.price} / ticket</p>

            <select
              className="w-full mb-4 px-3 py-2 bg-black/60 rounded"
              onChange={(e) => handleTicketChange(movie.id, +e.target.value)}>
              <option value={0}>Select Tickets</option>
              {[1,2,3,4].map(n => (
                <option key={n} value={n}>{n} Ticket</option>
              ))}
            </select>

            <button
              onClick={() => navigate("/Book", { state: { movie, tickets } })}
              className="w-full bg-pink-500 py-2 rounded-lg hover:bg-fuchsia-600 transition">
              Book Ticket
            </button>
          </motion.div>
        ))}
      </section>
       <section>
            {/* Action Movie Slider */}
     <div className="relative h-[300px] overflow-hidden mt-6">
       <div className="flex  m-5 gap-6 animate-slide">
          {moviesList.map((movie) => (
      <div
        key={movie.id}
        className="min-w-[300px] h-[250px] rounded-xl overflow-hidden shadow-lg relative group">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"/>
        <div className="absolute inset-0 bg-black/60 flex items-end p-4">
          <h3 className="text-lg font-bold">{movie.title}</h3>
        </div>
      </div>
    ))}
  </div>
</div> 
      </section>
      <section>
        <div>
          <h1>About for movies </h1>
        </div>
      </section>
      {/* <section><Footer/></section> */}
    </div>

    
  );
};

export default Home;

// import React from 'react'
// import LiquidEther from '../lib/LiquidEther';
// import '../Tailwind.css'
// import { useNavigate } from 'react-router-dom';

// const Home = () => {


//    let navigate=useNavigate()

//   return (
//     <>
    
//     <div style={{ width: '100%', height: 600, position: 'relative',background:"black" }}>
//   <LiquidEther
//     colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
//     mouseForce={20}
//     cursorSize={100}
//     isViscous={false}
//     viscous={30}
//     iterationsViscous={32}
//     iterationsPoisson={32}
//     resolution={0.5}
//     isBounce={false}
//     autoDemo={true}
//     autoSpeed={0.5}
//     autoIntensity={2.2}
//     takeoverDuration={0.25}
//     autoResumeDelay={3000}
//     autoRampDuration={0.6}
//   />
// </div>

//     <h1 className='absolute text-white text-9xl top-[40%] left-[30%]'>Home Page</h1>
    
//     <button onClick={()=>{navigate('/book')}}>Book Now</button>
    
//     </>
//   )
// }

// export default Home

