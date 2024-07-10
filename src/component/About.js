import React from 'react'
import AnanthImg from '../assets/ananth.jpg';

export const About = () => {
  return (
    <section className=' py-5 pg-secondary' id="about">
        <div className='relative z-40'>
            <div className='absolute inset-0 flex items-center'>
            <div className='border border-y-purple-300 w-9/12 mx-auto'></div>
            </div>
            <div className='flex justify-center relative'>
            <div className='font-cinzel text-primary text-2xl bg-white px-5 font-bold rounded-full border  border-y-purple-300 '>About</div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row px-5  justify-center'>
            <img className='md:w-1/4 p-10 rounded-[50%]' src={AnanthImg}></img>
            <div className='flex flex-col justify-center md:w-1/2 text-primary font-Merienda'>
                <h1 className='text-xl font-bold  mb-4 underline'>About Me</h1>
                <p className=' text-justify mb-4'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, I'm Ananth Murugesan. i'm a certified Full-stack Developer in MERN Stack. Certified by Entri Elevate. Also, I have strong knowledge in HTML, PHP, Ajax, jQuery function, Bootstrap, CSS and MySQL database languages.
              </p>
              <p className=' text-justify mb-4'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I finished some of the projects like Billing Software, CoE Automation Software, Hall Booking Software, Online Examination Software, Maintenance Software, Lab Test Booking Software, Gate Pass Software and Record Section Software.</p> 
              <h1 className='text-xl font-bold mb-4 underline'>Qualification</h1>
              <p className='text-justify'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I complete my  Diploma Mechanical Engineering course in May-2007. My Full Stack Development (MERN Stack) course was completed in August-2024 in between the time i selfly learn other Codeing languages mentioned above through the Youtube. </p>
              
            </div>
        </div>
    </section>

  )
}   
