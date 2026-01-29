import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieSlider from './MovieSlider';
import Background from "./Background";

const moviesList = [
  { id: 1, title: "Inception", price: 250, image: './img3.jpg '},
  { id: 2, title: "Interstellar", price: 300, image: "https://wallpapercave.com/wp/wp1817978.jpg" },
  { id: 3, title: "Avengers: Endgame", price: 200, image: "https://wallpapercave.com/wp/wp4593127.jpg" },
  { id: 4, title: "John Wick 4", price: 280, image: "https://wallpapercave.com/wp/wp12067642.jpg" },
  { id: 5, title: "Fast X", price: 220, image: "https://wallpapercave.com/wp/wp11887077.jpg" },
  { id: 6, title: "Mission Impossible", price: 260, image: "https://wallpapercave.com/wp/wp11120445.jpg" },
];

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [tickets, setTickets] = useState({});
  // const [selectedMovie, setSelectedMovie] = useState(null);
  // const [ticketCount, setTicketCount] = useState(1);

  const handleTicketChange = (movieId, count) => {
    setTickets({ ...tickets, [movieId]: count });
  };

  return (
    <div className="w-full text-white">
      {/* Hero Section with Background Video */}
      <section className="relative w-full h-screen ">
        <Background /> {/* full screen video + overlay + content */}
      </section>

      {/*  Spacer to avoid header overlap */}
      <div className="h-10">    </div>

      {/* 🎞 Movie Slider Section */}
      <section className="ralative z-10 p-6 ">
        <MovieSlider />
      </section>

     

      {/* Movies Grid */}
      <section className=" p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-black ">
        {moviesList.map((movie) => (
          <div key={movie.id} className="bg-black/10 backdrop-blur-lg rounded-xl p-5 shadow-lg">
            <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
            <p className="text-sm mb-4">Price: ₹{movie.price} / ticket</p>
            <select
              className="w-full mb-4 px-3 py-2 rounded bg-black/60 border border-gray-500"
              onChange={(e)=>handleTicketChange(movie.id, Number(e.target.value))}>
              <option value={0}>Select Tickets</option>
              <option value={1}>1 Ticket</option>
              <option value={2}>2 Tickets</option>
              <option value={3}>3 Tickets</option>
              <option value={4}>4 Tickets</option>
            </select>
            <button 
              onClick={() => navigate("/booking", { state: { movie } })}
              className="w-full bg-lime-600 py-2 rounded-lg font-semibold hover:bg-fuchsia-700 transition"> Book Ticket </button>
          </div>
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
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
        <div className="absolute inset-0 bg-black/60 flex items-end p-4">
          <h3 className="text-lg font-bold">{movie.title}</h3>
        </div>
      </div>
    ))}
  </div>
</div> 
      </section>
    </div>
  );
};

export default Home;







