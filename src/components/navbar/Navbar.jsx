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
   <>
    <header className="bg-blue-100 ">
     <nav className='container  '>
       <div data-aos="fade-up" data-aos-once="true" data-aos-delay="500"
        className="flex  justify-between px-6 items-center p-4">
        
        <div>
         <img   src={logo} className='w-32 h-20' alt="" />
         
        </div>

        <div className="hidden sm:block ">
         <ul className='flex gap-6 text-slate-500  font-semibold'>
          {menu.map((item) => (
           <li>
            <a href={item.link}>{item.name}</a>
           </li>
          ))}
         </ul>
        </div>

        <div className='sm:hidden '>
         <button onClick={handleMenu} className='text-3xl text-slate-500'>
          {menuOpen ? <X/> : <Menu />}
         </button>

         
          
         
        </div>
       </div>
     </nav>

     {menuOpen && 
          (
           <div>
             <ul className='bg-white space-y-3 p-4 rounded-md shadow-md absolute right-10 top-24  z-50 '>
          {menu.map((item) => (
           <li>
            <a className='inline-block text-xl p-4 w-full rounded-md' href={item.link}>{item.name}</a>
           </li>
          ))}
         </ul>
           </div>
          )
          }
    </header>
   </>
  )
}

export default Navbar