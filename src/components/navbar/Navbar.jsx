import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';



const menu = [
 { name: 'Home', link: '#home' },
 { name: 'Menu', link: '#menu' },
 { name: 'About', link: '#about' },
 { name: 'Testimonials', link: '#testimonials' },
 { name: 'Contact', link: '#contact' },
]

const Navbar = () => {

 const [menuOpen, setMenuOpen] = useState(false);

 const handleMenu = () => {
    setMenuOpen(!menuOpen);
 }

  return (
   <>
    <header className="bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 sticky top-0 z-50 border-b border-slate-100">
     <nav className='container'>
       <div data-aos="fade-up" data-aos-once="true" data-aos-delay="500"
        className="flex justify-between px-6 items-center p-4">
        
        <a href="#home" className="select-none">
          <span className='font-serif text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800'>Eatory</span>
        </a>

        <div className="hidden sm:block ">
         <ul className='flex gap-6 text-slate-700 font-medium'>
          {menu.map((item, idx) => (
           <li key={idx}>
            <a className='hover:text-amber-700 transition-colors' href={item.link}>{item.name}</a>
           </li>
          ))}
         </ul>
        </div>

        <div className='sm:hidden '>
         <button onClick={handleMenu} className='text-3xl text-slate-700'>
          {menuOpen ? <X/> : <Menu />}
         </button>

         
          
         
        </div>
       </div>
     </nav>

     {menuOpen && 
          (
           <div>
             <ul className='bg-white space-y-3 p-4 rounded-md shadow-md absolute right-10 top-24  z-50 '>
          {menu.map((item, idx) => (
           <li key={idx}>
            <a className='inline-block text-xl p-4 w-full rounded-md hover:text-amber-700' href={item.link}>{item.name}</a>
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