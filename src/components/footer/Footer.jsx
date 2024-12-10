import React from 'react'
import logo from '../../assets/logo.png'
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
          <img src={logo} className='w-32 h-20' alt="" />

          
         </div>

         <div className="">
            <p className="text-slate-600">
             COzy Vibes, Unforgetable Moments - Your Perfect Espresso Espresso Escape
            </p>
         </div>

         <div className="">
          <a href="https://www.youtube.com" className="p-2 w-36 text-white bg-red-500 rounded-full">
          Visit Youtube channel 
          </a>
         </div>
       </div>

       <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
         <ul className='flex flex-col space-y-6 '>
          <h1 className="text-2xl font-bold">
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
          <h1 className="text-2xl font-bold">
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
          <h1 className="text-2xl font-bold">
           Social Media
          </h1>
         
          <div className="flex gap-3">
           <a href="https://www.linkedin.com">
           <LinkedinIcon className='bg-black text-white w-10 h-8 rounded-sm'/>
           </a>
           <a href="https://www.facebook.com">
           <FacebookIcon className='bg-black text-white w-10 h-8 rounded-full'/>
           </a>
           <a href="https://www.instagram.com">
           <Instagram className=' text-black w-12 h-8 rounded-sm'/>
           </a>
          </div>
         </ul>
       </div>
      </div>
     </div>

     <div className="bottom-0 right-0 left-0 py-4 bg-blue-200">
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