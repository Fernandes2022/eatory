import { User } from 'lucide-react'
import React from 'react'
import Slider from 'react-slick'



const testimonials = [
 {
  img: <User />,
  name: 'Jelili Rokeeb Adeyeye',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iste quia minima eos fuga. Rerum quaerat aut similique dolor eveniet laboriosam obcaecati id ipsa.'
 },
 {
  img: <User />,
  name: 'Ibraheem Jelili',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iste quia minima eos fuga. Rerum quaerat aut similique dolor eveniet laboriosam obcaecati id ipsa.'
 },
 {
  img: <User />,
  name: 'Jelili Abd-Azeez',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iste quia minima eos fuga. Rerum quaerat aut similique dolor eveniet laboriosam obcaecati id ipsa.'
 },
 {
  img: <User />,
  name: 'Jelili Fawas',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iste quia minima eos fuga. Rerum quaerat aut similique dolor eveniet laboriosam obcaecati id ipsa.'
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
   <section className="my-12">
    <div className="container">
     <div className="flex flex-col gap-6">
      <div>
       <h1 data-aos="fade-down" data-aos-delay="500" className="text-5xl text-black text-center font-serif font-bold">
        Testimonial
       </h1>
      </div>

      <div className="my-6 px-6 ">
       <Slider {...settings}>
         {testimonials.map((testi) =>(
          <div className='px-6' data-aos="zoom-in" data-aos-delay="600">
           <div className="flex flex-col space-y-5 bg-blue-200 rounded-lg p-8 shadow-2xl">



          

           <div className='bg-white w-8 h-8 rounded-full'>
           <h1 >
           {testi.img}
           </h1>
           </div>
           <div>
            <blockquote class="  pr-8 pb-12 pt-10 rounded-3xl relative">
          <p class=" mt-2 text-black dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-25 after:right-3 after:text-9xl  after:opacity-25 after:transform after:translate-x-2 after:translate-y-2">
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