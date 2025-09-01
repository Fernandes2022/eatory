import React from 'react'
import Slider from 'react-slick'



const testimonials = [
 {
  img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
  name: 'Kim',
  description: '“The broth is rich, the veggies are crisp, and every bite tastes freshly made.”'
 },
 {
  img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=300&auto=format&fit=crop',
  name: 'Ruthh',
  description: '“Speedy service and genuinely comforting flavors. My go-to lunch spot now.”'
 },
 {
  img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop',
  name: 'John',
  description: '“Balanced, wholesome, and satisfying. You can tell they care about ingredients.”'
 },
 {
  img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop',
  name: 'Rick',
  description: '“Great portions, great taste. The rice bowl with chili oil is a winner.”'
 },
]


const Testimonial = () => {


 const settings = {
  
  dots: true,
  arrows: false,
  infinite: true,
  speed: 700,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
   {
    breakpoint: 10000,
    settings: {
     slidesToShow: 3,
     slidesToScroll: 1,
     infinite: true,
    }
   }, {
    breakpoint: 1024,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 1,
     initialSlide: 2,
    }
   }, {
    breakpoint: 640,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
    }
   }
  ]
 }

  return (
   <>
   <section id="testimonials" className="my-12">
    <div className="container">
     <div className="flex flex-col gap-6">
      <div>
       <h1 data-aos="fade-down" data-aos-delay="500" className="text-5xl text-slate-900 text-center font-serif font-bold">
        Testimonial
       </h1>
      </div>

      <div className="my-6 px-6 ">
       <Slider {...settings}>
         {testimonials.map((testi, idx) =>(
          <div className='px-6' data-aos="zoom-in" data-aos-delay="600" key={idx}>
           <div className="flex flex-col space-y-5 bg-blue-200 rounded-lg p-8 shadow-2xl">



          

          <div className='w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/80 shadow'>
            <img src={testi.img} alt={testi.name} className='w-full h-full object-cover' />
          </div>
           <div>
            <blockquote className="  pr-8 pb-12 pt-10 rounded-3xl relative">
          <p className=" mt-2 text-black dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-25 after:right-3 after:text-9xl  after:opacity-25 after:transform after:translate-x-2 after:translate-y-2">
             {testi.description}       
          </p>
    
          </blockquote>
           </div>
           <div>
            <h1 className="text-xl font-bold font-serif">
             {testi.name}
            </h1>
           </div>
           
          </div>
          </div>
         ))}
         </Slider>
      </div>
     </div>
    </div>
   </section>
   </>
  )
}

export default Testimonial