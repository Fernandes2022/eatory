import React from 'react'
import { FacebookIcon, Instagram, LinkedinIcon } from 'lucide-react'


const links = [
 'Home',
 'About',
 'Contact',
 'Blog'
]

const Footer = () => {
  return (
    <>
    <section className="">
     <div className="container px-8">

      <div className="flex flex-col md:flex-row gap-8 my-16">

       <div className="flex flex-col gap-6">

         <div className=" px-4">
          <h2 className='font-serif text-3xl bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800'>Eatory</h2>
         </div>

         <div className="">
            <p className="text-slate-600">
             Fresh bowls, cozy vibes, and flavors that feel like home.
            </p>
         </div>

         <div className="">
          <a href="https://www.youtube.com" className="p-2 w-44 text-white bg-amber-600 hover:bg-amber-700 transition rounded-full">
          Visit Youtube channel 
          </a>
         </div>
       </div>

       <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
         <ul className='flex flex-col space-y-6 '>
          <h1 className="text-2xl font-bold text-slate-800">
           Important Links
          </h1>
         {links.map((items) => (
          <li >
           <a href="#home" className=' '>
           {items}
          </a>
          </li>
         ))}
         </ul>
         <ul className='flex flex-col space-y-6 '>
          <h1 className="text-2xl font-bold text-slate-800">
           Quick Links
          </h1>
         {links.map((items) => (
          <li >
           <a href="#home" className=' '>
           {items}
          </a>
          </li>
         ))}
         </ul>
         <ul className='flex flex-col space-y-6 '>
          <h1 className="text-2xl font-bold text-slate-800">
           Social Media
          </h1>
         
          <div className="flex gap-3">
           <a href="https://www.linkedin.com">
           <LinkedinIcon className='text-slate-700 w-10 h-8'/>
           </a>
           <a href="https://www.facebook.com">
           <FacebookIcon className='text-slate-700 w-10 h-8'/>
           </a>
           <a href="https://www.instagram.com">
           <Instagram className=' text-slate-700 w-12 h-8'/>
           </a>
          </div>
         </ul>
       </div>
      </div>
     </div>

     <div className="bottom-0 right-0 left-0 py-4 bg-slate-100">
      <div className="flex flex-col items-center">
         <h1>Copyright &copy; 2024. All rights reserved</h1>
          <h1>Designed by Timi-tech (X: @Timi_tech_)</h1>
      </div>
     </div>
    </section>
    </>
  )
}

export default Footer