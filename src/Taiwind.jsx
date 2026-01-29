import { memo } from 'react';
import './Tailwind.css' 

const Taiwind = () => {
  return (
    <div>
     {/* sm =>450px-768px
     md =>758px-1024px
     lg =>1024px-1188px */}
      {/* <h2>Taiwind</h2>
      <button className='text-red-400 bg-amber-200'>click here</button> 
      <div className='w-full h-screen border-4 border-amber-300 flex justify-center items-center bg-{./img2.avif}'>
        <h1>rect Tailwind</h1>
        <img className='bg-{./img2.avif}'></img> 
      </div> */}
      <header className='w-full h-20 border flex justify-evenly items-center  '>
        <h1>
        <img src="/vite.svg" alt="img" class="w-40 h-4" />
</h1>
        <ul className=' hidden sm:flex gap-4 caret-black'>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
        <button className='border p-4 rounded-3xl'>Download</button>
      </header>
 <div className="bg-[url('./img2.avif')] bg-cover bg-center h-screen flex items-center justify-center">
      
    </div>
    </div>
  );
};

export default Taiwind