// src/pages/Booking.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const movie = location.state?.movie; // get movie data from navigation

  const [ticketCount, setTicketCount] = useState(1);
  const [user, setUser] = useState(null);
  


  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedUser) navigate("/login");
    else setUser(loggedUser);

    if (!movie) navigate("/home"); // if no movie selected, redirect back
  }, [navigate, movie]);

  const handleBooking = () => {
    alert(
      ` Booking Confirmed!\n\nMovie: ${movie.title}\nTickets: ${ticketCount}\nTotal: ₹${
        ticketCount * movie.price
      }\nBooked by: ${user.name}`
    );
    navigate("/home");
  };

  if (!movie) return null;

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-black to-gray-900 flex items-center justify-center text-white">
      <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl max-w-md w-full text-black">
        <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-64 object-cover rounded mb-4"/>

        <label className="block mb-2 font-semibold">Select Tickets</label>
        <select
          className="w-full border p-2 rounded mb-4"
          value={ticketCount}
          onChange={(e) => setTicketCount(Number(e.target.value))}>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n} Ticket{n > 1 && "s"}
            </option>
          ))}
        </select>

        <p className="font-semibold mb-4">
          Total: ₹{ticketCount * movie.price}
        </p>

        <button
          onClick={handleBooking}
          className="w-full bg-green-600 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
          Confirm Booking
        </button>

        <button
          onClick={() => navigate("/home")}
          className="w-full mt-3 bg-gray-300 py-2 rounded hover:bg-gray-400 transition">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Booking;
