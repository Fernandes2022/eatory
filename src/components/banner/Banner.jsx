import React from 'react'
import banner from '../../assets/banner.png'

const Banner = () => {
  return (
    <>
    <section id="about" className="min-h-[75vh]">
     <div className="container">
      <div className="grid py-12 px-8 grid-cols-1 sm:grid-cols-2 gap-3" data-aos="fade-up" data-aos-delay="500">

       <div>
        <img src={banner} data-aos="zoom-in" data-aos-delay="600" alt="Assorted fresh bowl ingredients" />
       </div>

       <div className="flex flex-col justify-center gap-3">
        <h1 className='font-semibold text-xl text-amber-700'>
         ABOUT
        </h1>

        <h1 className="text-4xl font-serif text-slate-900">
         Fresh Bowl
        </h1>

        <p>
         We prepare every bowl to order using locally sourced produce, fragrant spices, and slow-simmered broths. Whether you're craving something hearty or light, our kitchen brings comfort food to life.
        </p>

        <a href="#menu" className="p-3 bg-gradient-to-r from-amber-500 to-amber-700 text-white w-36 rounded-full">Explore the Menu</a>
       </div>
      </div>
     </div>
    </section>
    </>
  )
}

export default Banner