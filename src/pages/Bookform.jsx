import axios from 'axios'
import React, { useState } from 'react'

const Bookfrom = () => {

    let [form,setform]=useState({
        name:"",
        age:"",
        city:"",
        adharno:"",
        number:"",
        checkIn:"",
        checkOut:"",
        person:"",
    })
    
    let handleChange=(e)=>{
        setform({...form,[e.target.name]:e.target.value})
    }

    let handleSubmit=(e)=>{
        e.preventDefault()

        let api="http://localhost:3000/hotal"

        axios.post(api,{...form,price:500}).then(()=>{
            alert("Booking Succesfull")
        })
    }
  return (
    <>
       <form onSubmit={handleSubmit}>

        Enter Name <input type="text" name='name' value={form.name} onChange={handleChange} /><br /><br />
        Enter Age <input type="text" name='age' value={form.age} onChange={handleChange} /><br /><br />
        Enter City <select name='city' value={form.city} onChange={handleChange}> 
            <option value="Bhopal">Bhopal</option>
            <option value="Indore">Indore</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Karachi">Karachi</option>
            <option value="Miami">Miami</option>
            </select><br /><br />

        Enter Adhare Number <input type="name" name='adharno' value={form.adharno} onChange={handleChange} /><br /><br />
        Enter Number <input type="text" name='number' value={form.number} onChange={handleChange} /><br /><br />
        Enter CheckIn <input type="date" name='checkIn' value={form.checkIn} onChange={handleChange} /><br /><br />
        Enter CheckOut <input type="date" name='checkOut' value={form.checkOut} onChange={handleChange} /><br /><br />
        Enter Person <input type="text" name='person' value={form.person} onChange={handleChange} /><br /><br />

        <button type='submit'>Book Now</button>
       </form>
    </>
  )
}

export default Bookfrom