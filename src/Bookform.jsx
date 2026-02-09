// import React, { useState } from 'react'

// const Bookform = () => {

//     let[Form,setForm]=useState({
//         name:"",
//         age:"",
//         aadharno:"",
//         chechin:"",
//         chechout:"",
//         city:"",
//         person:""
//     })

//     let handleChange=(e)=>{
//         setForm({...Form,[e.target.name]:e.target.value})

//     }
//     let handleSubmit=(e)=>{
//         e.preventDefault()
//         let api="http://localhost:3000/Flight"
//         axios.post(api,{...Form,price:500}).then(()=>{
//             alert("Booking Succesfull")
//         })

//     }

//   return (
//     <>
//     <div>Bookform</div>
    
//     <form onSubmit={handleSubmit}>
// Enter Name:<input type='text' name='name' value={Form.name} onChange={handleChange}/><br/><br/>
// Enter Age:<input type='number' name='age' value={Form.age} onChange={handleChange}/><br/><br/>
// Enter Aadhar No:<input type='number' name='aadharno' value={Form.aadharno} onChange={handleChange}/><br/><br/>
// Enter chechin:<input type='date' name='chechin' value={Form.chechin} onChange={handleChange}/><br/><br/>
// Enter chechout:<input type='date' name='chechout' value={Form.chechout} onChange={handleChange}/><br/><br/>
// Enter Person:<input type='number' name='person' value={Form.person} onChange={handleChange}/><br/><br/>

// Select City<select name='city' value={Form.city} onChange={handleChange}>
//     <Option value='Bhopal'>Bhopal</Option>
//     <Option value='Indore'>Indore</Option>
//     <Option value='Rewa'>Rewa</Option>
//     <Option value='Jabalpur'>Jabalpur</Option>

// </select>
// <br/>
// <br/>
//  <button type='submit'>Submit</button>

//     </form>
    
//     </>
    
//   )
// }

// export default Bookform;

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
        Enter Adhare Number <input type="name" name='adharno' value={form.adharno} onChange={handleChange} /><br /><br />
        Enter Number <input type="text" name='number' value={form.number} onChange={handleChange} /><br /><br />
        Enter S <input type="date" name='checkIn' value={form.checkIn} onChange={handleChange} /><br /><br />
        Enter CheckOut <input type="date" name='checkOut' value={form.checkOut} onChange={handleChange} /><br /><br />
        Enter Person <input type="text" name='person' value={form.person} onChange={handleChange} /><br /><br />

        <button type='submit'>Book Now</button>
       </form>
    </>
  )
}

export default Bookfrom