import React from 'react'
import { FaMobile,  FaGithubSquare, FaLinkedin} from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
export const Contact = () => {
  return (
    <section className='py-5 pg-secondary' id='contact'>
        <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
            <div className='border border-y-purple-300 w-9/12 mx-auto'></div>
            </div>
            <div className='flex justify-center relative'>
            <div className='font-cinzel text-primary text-2xl bg-white px-5 font-bold rounded-full border  border-y-purple-300 '>Contact</div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row   mx-auto w-5/6 justify-between px-30 py-10 font-Merienda md:font-bold md:text-lg'>
            <div className='md:px-20 ' >
            <h1>ANANTH MURUGESAN</h1>
            <h1>Nachippatti,<br/> Vennandur Po,<br/> Rasipuram Tk,<br/> Namakkal Dt - 637 505</h1>
            </div>
            <div className='flex flex-col md:border-s-4 md:border-purple-600 md:px-8'>
                <div className='flex items-center mb-2 md:mb-5'><FaMobile />&nbsp;&nbsp;+91 97152 46737</div>
                <div className='flex items-center mb-2 md:mb-5'><MdAttachEmail />&nbsp;&nbsp;mananth310@gmail.com</div>
                <div className='flex items-center mb-2 md:mb-5'><FaGithubSquare />&nbsp;&nbsp;<a className='items-center' href='https://github.com/mananth310'>https://github.com/mananth310</a></div>
                <div className='flex items-center mb-2 md:mb-5'><FaLinkedin />&nbsp;&nbsp;<a href='www.linkedin.com/in/ananth-murugesan-d3m10y88'>www.linkedin.com/in/ananth-murugesan-d3m10y88</a></div>
                
                
            </div>
            

        </div>
    </section>
  )
}
