import React from 'react'
import buslogo from '../assets/buslogo.png'
import { MdHome } from "react-icons/md";
import { PiTicketBold } from "react-icons/pi";
import { LuContact } from 'react-icons/lu' // ✅ This one exists

import { BiSupport } from "react-icons/bi";
import { IoMdInformationCircleOutline } from "react-icons/io";


const Navbar = () => {
  return (
    <header>
      <div className='flex'>
        <div className='flex justify-normal items-center px-7 py-3 gap-3 '>
          <img   src={buslogo} alt="bus img" width={69} height={50} />
          <p className='text-2xl font-bold  '>Bus 
         <span className='text-red-500' >  Hub </span>  
            
            </p>
        </div>

<div className='justify-center items-center'>
  <ul className='flex  items-center justify-center p-7 gap-11'>
    <div className='flex items-center gap-2'>
    <MdHome /> 
       <li ><a href="/"> Home</a></li> 
    </div>
    <div className='flex items-center gap-2'>
      <PiTicketBold />
    <li><a href="/book">Book Tickets</a></li> 
    </div>
    <div className='flex items-center gap-2'>

 <IoMdInformationCircleOutline />
    <li><a href="/about">About Us</a></li>
    </div>
    <div className='flex items-center gap-2'>
       <LuContact />
    <li><a href="/contact">Contact Us</a></li> 
    </div>
    <div className='flex items-center gap-2'>
  <BiSupport />
    <li><a href="/help">Help/Support</a></li>
    </div>
  </ul>
</div>

      </div>
    </header>
  )
}

export default Navbar