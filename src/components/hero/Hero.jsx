import React from 'react'
import hero from '../../assets/hero.png'

const Hero = () => {
  return (
   <>
    <section id='home' className="bg-blue-100 scroll-mt-28 min-h-screen">
     <div className="container flex">
       <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 pt-16 px-6 pl-10">
        <div className="flex flex-col gap-2 justify-center items-center sm:items-start" data-aos="fade-up" data-aos-delay="300">
          <h1 className="bg-clip-text  font-serif text-8xl bg-gradient-to-b from-blue-800 to-blue-400 text-transparent">
           Rice
           <span className='text-sm text-black font-bold'>Bowl</span>
          </h1>

          <p className='text-slate-700'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Non atque at assumenda quod aliquid iusto voluptates, officia numquam dolorem eveniet, minus amet debitis itaque!
          </p>

          <a href="#home" className="p-3 bg-gradient-to-r from-orange-500 to-orange-800 text-white w-36 rounded-full">View our Menu</a>
        </div>

        <div>
         <img data-aos="zoom-in" data-aos-delay="500" src={hero} className='w-[30rem]  sm:scale-100' alt="" />

         <div className="hidden absolute top-[12rem] right-[22rem] md:block">
          <h1 className='rounded-lg p-4 bg-blue-800 w-32'>Fresh Food</h1>
         </div>
        </div>
       </div>
     </div>
    </section>
    </>
  )
}

export default Hero