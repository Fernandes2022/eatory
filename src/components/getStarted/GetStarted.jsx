import React from 'react'
import banner from '../../assets/banner.png'

const GetStarted = () => {
  return (
    <>
    <section className="bg-blue-600">
     <div className="container">
      <div data-aos="fade-up" data-aos-delay="700" className="my-12 py-16 flex flex-col md:justify-between md:flex-row gap-4 px-10">

         <div className="flex flex-col md:justify-between md:flex-row text-white md:items-center gap-12">
          <div className='flex flex-col gap-6'>
          <h1 className="text-4xl font-bold">
           Ready to get Started
           </h1>
           <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sapiente.
           </p>
          </div>

          <div className="flex">
           <input type="email" placeholder='Enter your Emaill' className='px-3 h-10 rounded-l-md bg-white text-slate-500'/>
           <a href="#home" className="p-2 bg-white text-blue-700 rounded-r-md font-bold h-10 inline-flex shrink-0">
            Get Started
           </a>
          </div>
         </div>

         <div className="hidden md:block">
          <img src={banner} className='h-28 w-36' alt="" />
         </div>
      </div>
     </div>
    </section>
    </>
  )
}

export default GetStarted