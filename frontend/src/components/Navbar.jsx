
import React from 'react'
import { Button } from './ui/button'
import logo from '../assets/landing/logo.svg'
import { Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Service from './pages/Service.jsx'


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-8 lg:px-20 py-5 bg-white shadow-sm sticky top-0 z-50'>
      <div className='flex items-center gap-3'>
        <img src={logo} alt="Logo" className="" />
        
      </div>
      <div className='flex items-center gap-8'>
        <ul className='hidden md:flex items-center gap-10'>
         <li className='text-sm font-medium text-slate-700 uppercase tracking-wide hover:text-blue-500 transition cursor-pointer'>
          <a href='#Home'>
            Home
            </a>
          </li>
         <li className='text-sm font-medium text-slate-700 uppercase tracking-wide hover:text-blue-500 transition cursor-pointer'>
          <a href='#Service'>
            Services</a>
          </li>
          <li className='text-sm font-medium text-slate-700 uppercase tracking-wide hover:text-blue-500 transition cursor-pointer'>
            <a href="#About">
  
            About Products</a>
          </li>
          <li className='text-sm font-medium text-slate-700 uppercase tracking-wide hover:text-blue-500 transition cursor-pointer'>
            <a href="#Testimonials">Testimonials</a>
          </li>
        </ul>
        
        <Button className='bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-md transition hover:shadow-lg uppercase tracking-wide'>
          Contact
        </Button>
      </div>
    </nav>
  )
}

export default Navbar