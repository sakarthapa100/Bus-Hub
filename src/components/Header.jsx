import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlinePerson } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
import { FaUserEdit } from "react-icons/fa";
import ManageTicket from './ManageTicket';






const Navbar = () => {
  return (
    <header className='w-full bg-blue-600  '>
   <div className='flex justify-evenly '>
<div className='flex text-white p-4 text-lg gap-5 '>
  {/* //icons */}
  <FiFacebook />
  <FaInstagram />
  <FaWhatsapp />
  <CiLinkedin />

</div>
<div className='flex text-white'>
  {/* phone number */}
<div className='flex items-center p-3 gap-4'>
<MdOutlinePhone />
<span>01-5970798</span>
</div>
<div className='flex items-center p-3 gap-2'>
<MdOutlinePhone />
<span>01-5970798</span>
</div>
<div className='flex items-center gap-2'>
  < BiLogoGmail />
  <span> info@bushub.com</span>
</div>



</div>

<div>
  {/* button */}
<div className='flex text-white items-center gap-8 p-4  '>
<div className=' flex items-center gap-2'>
<IoTicketOutline />
<span className='bg-blue-600 text-white '><ManageTicket /> </span>
</div>
<div className=' flex items-center gap-2' >
<MdOutlinePerson />
<span>Be an Agent</span>
</div>
<div className=' flex items-center gap-2' >
<LuLogIn />
<span> <a href="/login"> Log In </a></span>
</div>
<div className=' flex items-center gap-2' >
<FaUserEdit />
<span> <a href="/signup"> Sign up </a></span>
</div>


</div>


</div>

   </div>
    </header>
  )
}

export default Navbar