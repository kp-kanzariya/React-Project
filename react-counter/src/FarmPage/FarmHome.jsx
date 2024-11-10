import React from 'react'
// import 'swiper/swiper-bundle.css';
// import 'glightbox/';
// import Header from './Header'
import MainCont from './MainCont'
// import Footer from './Footer'
import AboutPage from './AboutPage'
import ServicePage from './ServicePage'
import TestimonialPage from './TestimonialPage'
import ContactPage from './ContactPage'
import BlogPage from './BlogPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import ImageSwiper from './SwiperEx'


function Home() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainCont/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/service' element={<ServicePage/>} />
          <Route path='/testi' element={<TestimonialPage/>} />
          <Route path='/blog' element={<BlogPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
      </Routes>
      
      </BrowserRouter>
      {/* <BlogPage/> */}
      {/* <ContactPage/> */}
      {/* <TestimonialPage/> */}
      {/* <ServicePage/> */}
      {/* <AboutPage/> */}
      {/* <Header />
      <MainCont />
      <Footer /> */}
      {/* <ImageSwiper/> */}

    </div>
  )
}

export default Home
