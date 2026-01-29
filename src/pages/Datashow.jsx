import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Datashow = () => {
  let [Data,setData]=useState([])
  let [Search,setsearch]=useState({})


  let FetchData=()=>{

     let api='http://localhost:3000/Flight'

        axios.get(api).then((res)=>{
         setData(res.data)

        }).catch((err)=>{
            
        })

  }
    useEffect(()=>{
        FetchData()

    },[])

    let DeleteData=(id)=>{

      let api=`http://localhost:3000/Flight/${id}`
      axios.delete(api).then(()=>{
       alert("Data delete")
       FetchData()
      })
     
    }
    let handlesearch=(e)=>{
      setsearch(e.target.value)
    }
  return (
    <>Datashow
    <h1>Data will show here</h1>
     Search <input type='text' value={Search} onChange={handlesearch}/>
    <table border={1}>
      <thead>
        <tr>
          <th>Name</th>
           <th>Age</th>
            <th>Aadhar No.</th>
             <th>ChechIn</th>
              <th>ChechOut</th>
              <th>City</th>
              <th>Person</th>
              <th>Delete</th> 
               <th>Total</th>
        </tr>
      </thead>
      <tbody>
       {
        Data.map((e)=>(
         <tr key={e.id}>
          <td>{e.name}</td>
          <td>{e.age}</td>
          <td>{e.aadharno}</td>
          <td>{e.chechin}</td>
          <td>{e.chechout}</td>
           <td>{e.city}</td>
            <td>{e.person}</td>
            {/* <td>{e.person*price}</td> */}
            <td onClick={()=>{DeleteData(e.id)}}>Delete</td>

         </tr> 
        )
        )
       }
      </tbody>

    </table>
    </>
  )
}

export default Datashow