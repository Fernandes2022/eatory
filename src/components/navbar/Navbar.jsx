import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Menu, X } from 'lucide-react';



const menu = [
 {
  name: 'Noodle Soup',
  link: '#home'
 },
 {
  name: 'Rice Bowls',
  link: '#home'
 },
 {
  name: 'Salad Bowls',
  link: '#home'
 },
 {
  name: 'Beverages',
  link: '#home'
 },
 {
  name: 'Kids',
  link: '#home'
 }
]

const Navbar = () => {

 const [menuOpen, setMenuOpen] = useState(false);

 const handleMenu = () => {
    setMenuOpen(!menuOpen);
 }

  return (
    <header className="bg-blue-100">
     <nav className='container'>
       <div data-aos="fade-up" data-aos-once="true" data-aos-delay="500"
 className="flex  justify-between px-6 items-center p-4">
        
        <div>
         <img   src={logo} className='w-32 h-20' alt="" />
         
        </div>

        <div className="hidden sm:block ">
         <ul className='flex gap-6 text-slate-500 text-md font-semibold'>
          {menu.map((item) => (
           <li>
            <a href={item.link}>{item.name}</a>
           </li>
          ))}
         </ul>
        </div>

        <div className='sm:hidden'>
         <button onClick={handleMenu} className='text-3xl text-slate-500'>
          {menuOpen ? <X/> : <Menu />}
         </button>

         <div className="absolute top-28 right-12">
          {menuOpen && 
          <ul className='flex flex-col gap-6 text-slate-500 text-md font-semibold bg-white shadow-2xl p-6 py-10'>
          {menu.map((item) => (
           <li>
            <a href={item.link}>{item.name}</a>
           </li>
          ))}
         </ul>
          }
         </div>
        </div>
       </div>
     </nav>
    </header>
  )
}

export default Navbar