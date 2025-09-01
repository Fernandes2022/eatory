import hero from '../../assets/hero.png'

const Hero = () => {
  return (
   <>
    <section id='home' className="bg-slate-50  scroll-mt-28 min-h-screen ">
     <div className="container flex ">
       <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 pt-16 px-6 pl-10 ">
        <div className="flex flex-col gap-4 justify-center items-center sm:items-start " data-aos="fade-up" data-aos-delay="300">
          <span className='inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold'>
            Fresh • Fast • Homemade
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-slate-900 leading-tight">
           Comfort food,
           <br /> made fresh daily.
          </h1>

          <p className='text-slate-700 max-w-xl'>
           Steaming bowls, seasonal produce, and slow-simmered broths. Order your favorite or discover something new—either way, it’s cooked with care.
          </p>

          <ul className='text-slate-600 space-y-2 text-sm'>
           <li>• Locally sourced veggies</li>
           <li>• House-made sauces</li>
           <li>• Vegetarian options available</li>
          </ul>

          <div className='flex gap-3'>
          <a href="#menu" className="p-3 bg-gradient-to-r from-amber-500 to-amber-700 text-white w-36 rounded-full">Browse Menu</a>
          <a href="#contact" className="p-3 border border-amber-600 text-amber-700 w-36 rounded-full">Contact</a>
          </div>
        </div>

        <div className='relative flex justify-center'>
         <img data-aos="zoom-in" data-aos-delay="500" src={hero} className='w-[30rem] sm:scale-100 drop-shadow-2xl' alt="Fresh rice bowl" />

         <div className="hidden md:flex flex-col gap-2 absolute top-6 right-6 bg-white/80 backdrop-blur rounded-xl p-4 shadow-xl">
          <span className='text-slate-900 text-sm font-semibold'>Today’s orders</span>
          <div className='flex items-baseline gap-2'>
            <span className='text-3xl font-bold text-amber-600'>250+</span>
            <span className='text-xs text-slate-500'>served hot</span>
          </div>
         </div>
        </div>
       </div>
      </div>
     </section>
    </>
  )
}

export default Hero