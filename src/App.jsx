import Navbar from "./Navbar"
import Footer from "./Footer"
import Img1 from "./assets/react.svg"
import Inter from "./ProductCard.jsx"

const App=()=>{

  let myname="sandeep"
  let age=18
  return(
    <>
    <Navbar/>
    {{Inter}}
    {/* {{Img1}} */}
    {/* <h1 style={{color:"red",backgroundColor:"green"}}>Hello form react{myname}</h1>
    {(age>=18)?"eligible for vote":"not eligible"} */}
    <Footer/>
    </>



  )
}
export default App