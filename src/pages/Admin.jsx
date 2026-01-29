// import React, { useEffect, useState } from "react";

// const AdminDashboard = () => {
//   const [movies, setMovies] = useState([]);
//   const [form, setForm] = useState({
//     title: "",
//     price: "",
//     image: "",
//   });

//   useEffect(() => {
//     const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
//     setMovies(storedMovies);
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const addMovie = () => {
//     if (!form.title || !form.price || !form.image) {
//       alert("Fill all fields 🚨");
//       return;
//     }

//     const newMovie = {
//       id: Date.now(),
//       title: form.title,
//       price: Number(form.price),
//       image: form.image,
//     };

//     const updatedMovies = [...movies, newMovie];
//     setMovies(updatedMovies);
//     localStorage.setItem("movies", JSON.stringify(updatedMovies));

//     setForm({ title: "", price: "", image: "" });
//   };

//   const deleteMovie = (id) => {
//     const updatedMovies = movies.filter((m) => m.id !== id);
//     setMovies(updatedMovies);
//     localStorage.setItem("movies", JSON.stringify(updatedMovies));
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <h1 className="text-3xl font-bold mb-6">🎛️ Admin Dashboard</h1>

//       {/* ➕ Add Movie */}
//       <div className="bg-white/10 p-6 rounded-xl mb-8">
//         <h2 className="text-xl font-semibold mb-4">Add New Movie</h2>

//         <div className="grid md:grid-cols-3 gap-4">
//           <input
//             name="title"
//             placeholder="Movie Title"
//             value={form.title}
//             onChange={handleChange}
//             className="p-2 rounded bg-black border"
//           />
//           <input
//             name="price"
//             placeholder="Price"
//             type="number"
//             value={form.price}
//             onChange={handleChange}
//             className="p-2 rounded bg-black border"
//           />
//           <input
//             name="image"
//             placeholder="Image URL"
//             value={form.image}
//             onChange={handleChange}
//             className="p-2 rounded bg-black border"
//           />
//         </div>

//         <button
//           onClick={addMovie}
//           className="mt-4 bg-green-600 px-6 py-2 rounded hover:bg-green-700"
//         >
//           Add Movie 🎬
//         </button>
//       </div>

//       {/* 🎬 Movie List */}
//       <div className="grid md:grid-cols-3 gap-6">
//         {movies.map((movie) => (
//           <div
//             key={movie.id}
//             className="bg-white/10 rounded-xl overflow-hidden"
//           >
//             <img
//               src={movie.image}
//               alt={movie.title}
//               className="h-48 w-full object-cover"
//             />
//             <div className="p-4">
//               <h3 className="font-bold text-lg">{movie.title}</h3>
//               <p>₹{movie.price}</p>

//               <button
//                 onClick={() => deleteMovie(movie.id)}
//                 className="mt-3 bg-red-600 px-4 py-1 rounded hover:bg-red-700"
//               >
//                 Delete ❌
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin= () => {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    image: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    setMovies(storedMovies);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addMovie = () => {
    if (!form.title || !form.price || !form.image) {
      alert("Fill all fields 🚨");
      return;
    }

    const newMovie = {
      id: Date.now(),
      title: form.title,
      price: Number(form.price),
      image: form.image,
    };

    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));

    setForm({ title: "", price: "", image: "" });
  };

  const deleteMovie = (id) => {
    const updatedMovies = movies.filter((m) => m.id !== id);
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">

      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate("/home")}
        className="right mb-6 bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700">Back </button>

      <h1 className="text-3xl font-bold mb-6">🎛️ Admin Dashboard</h1>

      {/* ➕ Add Movie */}
      <div className="bg-white/10 p-6 rounded-xl mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Movie</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <input
            name="title"
            placeholder="Movie Title"
            value={form.title}
            onChange={handleChange}
            className="p-2 rounded bg-black border"
          />
          <input
            name="price"
            placeholder="Price"
            type="number"
            value={form.price}
            onChange={handleChange}
            className="p-2 rounded bg-black border"
          />
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Image URL</label>
            <input
              name="image"
              type="file"
              placeholder="Image "
              value={form.image}
              onChange={handleChange}
              className="p-2 rounded bg-black border"
            />
          </div>
        </div>

        <button
          onClick={addMovie}
          className="mt-4 bg-green-600 px-6 py-2 rounded hover:bg-green-700"
        >
          Add Movie 🎬
        </button>
      </div>

      {/* 🎬 Movie List */}
      <div className="grid md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white/10 rounded-xl overflow-hidden"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{movie.title}</h3>
              <p>₹{movie.price}</p>

              <button
                onClick={() => deleteMovie(movie.id)}
                className="mt-3 bg-red-600 px-4 py-1 rounded hover:bg-red-700">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;

