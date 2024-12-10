import React from 'react'
import Slider from 'react-slick'
import food2 from '../../assets/food2.png'
import banner from '../../assets/banner.png'
import hero from '../../assets/hero.png'


const menuData = [
 {
  id: '1',
  name: "Noodle Soup",
  price: "$ 299",
  img: food2
 },
 {
  id: '2',
  name: "Pepper Soup",
  price: "$ 20",
  img: banner
 },
 {
  id: '3',
  name: "Rice",
  price: "$ 35",
  img: hero
 },
 {
  id: '4',
  name: "Pepper Soup",
  price: "$ 20",
  img: banner
 }
]

const OurMenu = () => {

 

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
    <section className="py-16 bg-blue-700">
     <div className="container">
      <div className="flex flex-col  gap-10 text-white px-8">
       <div className="flex flex-col gap-4  text-center" data-aos="fade-up" data-aos-delay="500">
        <h1 className="text-4xl font-bold">
         Our Menu
        </h1>

        <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore voluptas esse voluptatum architecto atque vitae rerum libero nihil quae quos.</p>
       </div>

       <div >
        
        <Slider {...settings}>
        {menuData.map((item) => (
          <div className="my-16" data-aos="zoom-in" data-aos-delay="600">
           <div className="flex items-center  flex-col gap-4 py-8 px-6 mx-4 rounded-xl">
             <div className='mb-3 flex '>
              <img className='w-auto rounded-full sm:max-w-[200px] md:max-w-[250px] ' src={item.img} alt="" />
             </div>
             <div>
              <h1 className="text-xl">
               {item.name}
              </h1>
             </div>
             <div className="">
              <h1>
               {item.price}
              </h1>
             </div>
             <div>
              <a href='#home' className='underline'>
               Buy Now
              </a>
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

export default OurMenu