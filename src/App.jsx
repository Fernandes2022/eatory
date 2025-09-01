import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Banner from './components/banner/Banner'
import OurMenu from './components/ourmenu/OurMenu'
import Testimonial from './components/testimonial/Testimonial'
import GetStarted from './components/getStarted/GetStarted'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'

const App = () => {
  React.useEffect(() => {
    AOS.init(
        {
          offset: 100,
          duration: 500,
          easing: "ease-in-sine",
          delay: 100, 
        }
    );
    AOS.refresh();
  });

  return (
    <>
    <main>
      <Navbar />
      <Hero />
      <Banner />
      <OurMenu />
      <Testimonial />
      <GetStarted />
      <Contact />
      <Footer />
    </main>
    </>
  )
}

export default App