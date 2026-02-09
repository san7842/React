// import React, { useState } from 'react'

// const Book = () => {
//     let [form,setform]=useState({
//         name:"",
//         age:"",
//         number:"",
//         aadharno:"",
//         city:"",
//         people:"",
        
//     })


//     let handlechange=(e)=>{
//       setform({...form,[e.target.name]:e.target.value})

//     }
//     let handlesubmit=(e)=>{
//      e.preventDefault()
//      let valid=true
//      if(form.name.trim()==""){
//       alert("Enter name")
//       valid=false
    
//      }
//      if(valid){
//       let api="http://localhost:3000/Movies"
//       let Loggedemail=localStorage.getItem("useremail")
//       axios.post(api,{...form,Loggedemail:Loggedemail}).then(()=>{
//         alert("BOOking Confirm")
//       })
//     }

//     }
//   return (
//     <>
    
//     <form onSubmit={handlesubmit}>

//       Enter name:<input type='text' name='name' value={form.name} onChange={handlechange}/><br/>
//       Enter age:<input type='text' name='age' value={form.age} onChange={handlechange}/><br/>
//       Enter number:<input type='number' name='number' value={form.number} onChange={handlechange}/><br/>
//       Enter Aadharno:<input type='text' name='aadharno' value={form.aadharno} onChange={handlechange}/><br/>
//       Enter City:<input type='text' name='city' value={form.city} onChange={handlechange}/><br/>
//       Enter People:<input type='number' name='people' value={form.people} onChange={handlechange}/><br/>
//       <button type='submit'> Book Now</button>
//   </form>
  
//    </> 

//   )
// }

// export default Book


// import axios from 'axios'
// import React, { useState } from 'react'

// const Book = () => {
//       let [form,setform]=useState({

//         name:"",
//         age:"",
//         number:"",
//         aadharno:"",
//         date:"",
//         city:"",
//         people:"",
//       })


//       let handlechange=(e)=>{
        
//         setform( {...form, [e.target.name]:e.target.value })

//       }


//       let handleSubmit=(e)=>{

//         e.preventDefault()

//         let valid=true

//         if(form.name.trim()==""){

//             alert("Enter name ")
//             valid=false
//         }

//         if(valid){

//              let api= "http://localhost:3000/Movies"

//              let Loggedemail= localStorage.getItem("useremail")

//              axios.post(api,{...form, loggedemail:Loggedemail}).then(()=>{
//                 alert("Booking Comfirmed")
//              })
// }  }
    
//   return (
//     <>
//        <form onSubmit={handleSubmit}>
           
//           Enter name:<input type='text' name='name' value={form.name} onChange={handlechange}/><br/>
//           Enter age:<input type='text' name='age' value={form.age} onChange={handlechange}/><br/>
//           Enter number:<input type='number' name='number' value={form.number} onChange={handlechange}/><br/>
//           Enter Aadharno:<input type='text' name='aadharno' value={form.aadharno} onChange={handlechange}/><br/>
//           Enter Date:<input type='date' name='date' value={form.date} onChange={handlechange}/><br/>
//           Enter City:<input type='text' name='city' value={form.city} onChange={handlechange}/><br/>
//           Enter People:<input type='number' name='people' value={form.people} onChange={handlechange}/><br/>
//              <button type='submit'>Book Now</button>

//        </form>
    
    
//     </>
//   )
// }

// export default Book




import axios from "axios";
import React, { useState } from "react";
import {useNavigate } from "react-router-dom";


const Book = () => {
  const navigate=useNavigate()
  const [form, setform] = useState({
    name: "",
    age: "",
    number: "",
    aadharno: "",
    date: "",
    city: "",
    people: "",
  });

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (form.name.trim() === "") {
  //     alert("Enter name");
  //     return;
  //   }

  //   let loggedEmail = localStorage.getItem("useremail");

  //   if (!loggedEmail) {
  //     alert("Please login first");
  //     return;
  //   }

  //   const api = "http://localhost:3000/Movies";

  //   axios.post(api, { ...form, loggedemail: loggedEmail })
  //     .then(() => {
  //       alert("Booking Confirmed 🎉");
  //       setForm({
  //         name: "",
  //         age: "",
  //         number: "",
  //         aadharno: "",
  //         date: "",
  //         city: "",
  //         people: "",
  //       });
  //     })
  //     .catch(() => {
  //       alert("Something went wrong ❌");
  //     });
  // };

    let handleChange=(e)=>{
        
        setform( {...form, [e.target.name]:e.target.value })

      }


      let handleSubmit=(e)=>{

        e.preventDefault()

        let valid=true

        if(form.name.trim()==""){

            alert("Enter name ")
            valid=false
        }

        if(valid){

             let api= "http://127.0.0.1:8000/movies_list/"

             let Loggedemail=  JSON.parse(localStorage.getItem("loggedInUser"))

             axios.post(api,{...form, loggedemail:Loggedemail.email}).then(()=>{
                alert("Booking Comfirmed")
                
             })
}  }

  return (

    <div className="relative min-h-screen w-full overflow-hidden">
    
          {/* 🎥 Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover -z-10">
            <source src="./bg3.mp4" type="video/mp4" />
          </video>
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="   bg-tranparents p-8   rounded-xl shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Movie Booking
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border bg-white rounded-2xl focus:outline-none focus:ring-3 focus:ring-amber-300"/>

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={form.age}
          onChange={handleChange}
          className="w-full p-2 border bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400"/>

        <input
          type="number"
          name="number"
          placeholder="Enter Mobile Number"
          value={form.number}
          onChange={handleChange}
          className="w-full p-2 border bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400"/>

        <input
          type="text"
          name="aadharno"
          placeholder="Enter Aadhar Number"
          value={form.aadharno}
          onChange={handleChange}
          className="w-full p-2 border   bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400"/>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full p-2 border  bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400"/>

        <input
          type="text"
          name="city"
          placeholder="Enter City"
          value={form.city}
          onChange={handleChange}
          className="w-full p-2 border  bg-white  rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400"/>

        <input
          type="number"
          name="people"
          placeholder="Number of People"
          value={form.people}
          onChange={handleChange}
          className="w-full p-2 border  bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400"/>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded font-bold hover:text-cyan-300 transition" >
          Book Now
        </button>
        <p className="text-center text-white mt-">
            Not Book
            <span
              className=" font-bold cursor-pointer ml-1 text-rose-500 hover:underline"
              onClick={() => navigate("/home")}>
              Cancle
            </span>
          </p>
      </form>
    </div>
    </div>
  );
};

export default Book;








// import axios from "axios";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import bgVideo from '../assets/bg4.mp4'

// const Book = () => {
//   const loggedEmail = localStorage.getItem("useremail");

//   const [form, setForm] = useState({
//     name: "",
//     age: "",
//     number: "",
//     aadharno: "",
//     city: "",
//     people: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!loggedEmail) {
//       alert("Please login first to book!");
//       return;
//     }

//     if (form.name.trim() === "") {
//       alert("Enter name");
//       return;
//     }

//     const api = "http://localhost:3000/Movies";

//     axios
//       .post(api, { ...form, loggedemail: loggedEmail })
//       .then(() => {
//         alert("Booking Confirmed ✅");
//         setForm({
//           name: "",
//           age: "",
//           number: "",
//           aadharno: "",
//           city: "",
//           people: "",
//         });
//       })
//       .catch(() => {
//         alert("Something went wrong ❌");
//       });
//   };

//   // 🔒 If not logged in
//   if (!loggedEmail) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="bg-white p-6 rounded-xl shadow-md text-center">
//           <h2 className="text-xl font-semibold text-red-600 mb-2">
//             Login Required
//           </h2>
//           <p className="text-gray-600">
//             Please login to book a hotel.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4"
//       >
//         <h2 className="text-2xl font-bold text-center text-blue-600">
//           Hotel Booking
//         </h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Enter Name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />

//         <input
//           type="number"
//           name="age"
//           placeholder="Enter Age"
//           value={form.age}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />

//         <input
//           type="number"
//           name="number"
//           placeholder="Enter Mobile Number"
//           value={form.number}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />

//         <input
//           type="text"
//           name="aadharno"
//           placeholder="Enter Aadhar Number"
//           value={form.aadharno}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />

//         <input
//           type="text"
//           name="city"
//           placeholder="Enter City"
//           value={form.city}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />

//         <input
//           type="number"
//           name="people"
//           placeholder="Number of People"
//           value={form.people}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           Book Now
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Book;












// // import axios from "axios";
// // import React from "react";
// // import { useForm } from "react-hook-form";
// // import bgVideo from '../assets/bg4.mp4'

// // const Book = () => {
// //   const {
// //     register,
// //     handleSubmit,
// //     reset,
// //     formState: { errors },
// //   } = useForm();

// //   const loggedEmail = localStorage.getItem("useremail");
// //   const isLoggedIn = !!loggedEmail;

// //   const onSubmit = (data) => {
// //     if (!isLoggedIn) return;

// //     const api = "http://localhost:3000/hotel";

// //     axios
// //       .post(api, { ...data, loggedemail: loggedEmail })
// //       .then(() => {
// //         alert("Booking Confirmed 🎉");
// //         reset();
// //       });
// //   };

// //   return (

// //     <div className="relative min-h-screen w-full overflow-hidden">
    
// //           {/* 🎥 Background Video */}
// //           <video
// //             autoPlay
// //             loop
// //             muted
// //             playsInline
// //             className="absolute top-0 left-0 w-full h-full object-cover -z-10"
// //           >
// //             <source src={bgVideo} type="video/mp4" />
// //           </video>
    
// //           {/* 🌑 Dark overlay */}
// //           {/* <div className="absolute inset-0 bg-black/60 -z-10"></div> */}

// //     <div className="flex min-h-screen items-center justify-center ">
// //       <form
// //         onSubmit={handleSubmit(onSubmit)}
// //         className="w-full max-w-md rounded-2xl bg-transparent p-8 shadow-lg space-y-4"
// //       >
// //         <h2 className="text-center text-2xl font-bold text-blue-600">
// //           Hotel Booking
// //         </h2>

// //         {/* Name */}
// //         <div>
// //           <label className="block text-white font-medium">Name</label>
// //           <input
// //             {...register("name", { required: "Name is required" })}
// //             className="input  w-[350px]"
// //            />
// //           {errors.name && (
// //             <p className="text-sm text-red-500">{errors.name.message}</p>
// //           )}
// //         </div>

// //         {/* Age */}
// //         <div>
// //           <label className="block text-sm font-medium">Age</label>
// //           <input
// //             type="number"
// //             {...register("age", { required: "Age is required" })}
// //             className="input"
// //           />
// //         </div>

// //         {/* Mobile */}
// //         <div>
// //           <label className="block text-sm font-medium">Mobile Number</label>
// //           <input
// //             type="number"
// //             {...register("number", { required: "Number is required" })}
// //             className="input"
// //           />
// //         </div>

// //         {/* Aadhar */}
// //         <div>
// //           <label className="block text-sm font-medium">Aadhar Number</label>
// //           <input
// //             {...register("aadharno", {
// //               required: "Aadhar is required",
// //               minLength: { value: 12, message: "Must be 12 digits" },
// //             })}
// //             className="input"
// //           />
// //           {errors.aadharno && (
// //             <p className="text-sm text-red-500">
// //               {errors.aadharno.message}
// //             </p>
// //           )}
// //         </div>

// //         {/* City */}
// //         <div>
// //           <label className="block text-sm font-medium">City</label>
// //           <input
// //             {...register("city", { required: "City is required" })}
// //             className="input"
// //           />
// //         </div>

// //         {/* People */}
// //         <div>
// //           <label className="block text-sm font-medium">No. of People</label>
// //           <input
// //             type="number"
// //             {...register("people", { required: "Required" })}
// //             className="input"
// //           />
// //         </div>

// //         {/* Login warning */}
// //         {!isLoggedIn && (
// //           <p className="text-center text-sm text-red-500">
// //             Please login to book your stay 🔐
// //           </p>
// //         )}

// //         <button
// //           type="submit"
// //           disabled={!isLoggedIn}
// //           className={`w-full rounded-lg py-2 font-semibold text-white transition
// //             ${
// //               isLoggedIn
// //                 ? "bg-blue-600 hover:bg-blue-700"
// //                 : "cursor-not-allowed bg-gray-400"
// //             }`}
// //         >
// //           Book Now
// //         </button>
// //       </form>
// //     </div>
// //     </div>
// //   );
// // };

// // export default Book;
