import React from 'react'
import banner from '../../assets/banner.png'

const Banner = () => {
  return (
    <>
    <section className="min-h-[75hv]">
     <div className="container">
      <div className="grid py-12 px-8 grid-cols-1 sm:grid-cols-2 gap-3" data-aos="fade-up" data-aos-delay="500">

       <div>
        <img src={banner} data-aos="zoom-in" data-aos-delay="600" alt="" />
       </div>

       <div className="flex flex-col justify-center gap-3">
        <h1 className='font-semibold text-xl'>
         ABOUT
        </h1>

        <h1 className="text-4xl font-serif text-blue-600">
         Fresh Bowl
        </h1>

        <p>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, illum ea! Non harum, aperiam hic consectetur at illum accusantium fugit vitae, cum beatae dolorum perspiciatis itaque aliquam sapiente quidem enim.
        </p>

        <a href="#home" className="p-3 bg-gradient-to-r from-orange-500 to-orange-800 text-white w-36 rounded-full">View our Menu</a>
       </div>
      </div>
     </div>
    </section>
    </>
  )
}

export default Banner