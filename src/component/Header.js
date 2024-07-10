import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
export const Header = () => {
  const [toggleMenu,setToggleMenu]=useState(false);

  return (
    <header className='fixed w-full flex justify-between px-5 pg-primary p-2 z-30'>
      <a className="font-bold text-white" href='#'>ANANTH MURUGESAN</a>
      <nav className='menu '>
        <ul className='flex text-white'>
        <li><a href='/'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul></nav>
      {toggleMenu && <nav className='block md:hidden nav-mobile'>
        <ul className='flex flex-col text-white'>
        <li><a href='/'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul></nav>}
      <button onClick={()=>setToggleMenu(!toggleMenu) } className='block md:hidden'><Bars3Icon className=' text-white h-5'/></button>
    </header>
  )
}
