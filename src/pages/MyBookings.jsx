import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

const MyBookings = () => {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    name: "",
    age: "",
    number: "",
    aadharno: "",
    city: "",
    date:"",
    people: "",
  });

  const LoggedEmail = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleChange = (e) => {

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchData = () => {
    axios.get("http://127.0.0.1:8000/movies_list/").then((res) => {
      const finalData = res.data.filter(
        (e) => e.loggedemail === LoggedEmail.email
      );
      setData(finalData);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = (id) => {
    // axios.delete(`http://127.0.0.1:8000/movies_list/${id}/`).then(() => {
    axios.delete(`http://127.0.0.1:8000/movies_detail/${id}/`).then(() => {

      fetchData();
      alert("Booking Deleted");
    });
  };

  const formOpen = (e) => {
    setEditId(e.id);
    setForm({ ...e });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    let api=`http://127.0.0.1:8000/movies_detail/${editId}/`
    axios.put(api, {...form,loggedemail:LoggedEmail.email}).then((e) => {
        alert("Booking Updated");
        fetchData();
        setEditId(null);
      });
  };

  const filterData = data.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.number.toString().includes(search)
  );

  return (
    // <div className="w-full text-white bg-black">
    //   <Navbar/>
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-4xl font-bold text-center text-pink-500">
        My Bookings
      </h1>

      {/* Search */}
      <div className="mb-6 flex justify-center bg-grey-100">
        <input
          type="text"
          placeholder="Search by name or number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md rounded-lg border px-4 py-2 text-white bg-pink-400 focus:ring-2 focus:ring-blue-500"/>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filterData.map((e) => (
          <div
            key={e.id}
            className="rounded-2xl bg-fuchsia-700 p-6 shadow-md hover:shadow-lg transition">

            <h2 className="text-3xl justify-center text-center font-bold px-4 py-2  bg-pink-500 text-white rounded-full  mb-2">
              {e.name}
            </h2>
            <p  className="text-white"><b >Age:</b> {e.age}</p>
            <p  className="text-white"><b>Mobile:</b> {e.number}</p>
            <p  className="text-white"><b>Aadhar:</b> {e.aadharno}</p>
            <p  className="text-white"><b>City:</b> {e.city}</p>
            <p  className="text-white"><b>People:</b> {e.people}</p>
            <p  className="text-white"><b>Date:</b> {e.date}</p>
           

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => deleteData(e.id)}
                className="flex-1 rounded-lg bg-red-500 py-2 text-white hover:bg-red-600">
                Delete
              </button>

              <button
                onClick={() => formOpen(e)}
                className="flex-1 rounded-lg bg-yellow-500 py-2 text-white hover:bg-yellow-600">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Form */}
      {editId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg space-y-3"
          >
            <h2 className="text-xl font-bold text-center text-blue-600">
              Edit Booking
            </h2>

            {[
              { label: "Name", name: "name" ,type:"text" },
              { label: "Age", name: "age", type: "number" },
              { label: "Number", name: "number" ,type:"number" },
              { label: "Aadhar", name: "aadharno",type:"number" },
              { label: "Date", name: "date", type: "date" },
              { label: "City", name: "city", type: "text" },
              { label: "People", name: "people" ,type:"number"},
            ].map((f) => (
              <input
                key={f.name}
                type={f.type || "text"}
                name={f.name}
                value={form[f.name]}
                onChange={handleChange}
                placeholder={f.label}
                className="w-full rounded-lg border px-3 py-2"
                required
              />
            ))}

            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700">
                Update
              </button>
              <button
                type="button"
                onClick={() => setEditId(null)}
                className="flex-1 rounded-lg bg-gray-400 py-2 text-white" >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
    // </div>
  );
};

export default MyBookings;
