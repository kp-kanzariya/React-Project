import React from 'react'
import Header from './Header'
import Testimonials from './Testimonials'
import CallToAction from './CallToAction'
import Footer from './Footer'

function TestimonialPage() {
  return (
    <div>
          <Header />
          <div class="page-title dark-background" data-aos="fade" style={{backgroundImage:"url(https://bootstrapmade.com/content/demo/AgriCulture/assets/img/page-title-bg.webp)"}}>
      <div class="container position-relative">
        <h1>Testimonials</h1>
        <p>
          Home
          /
          Testimonials
        </p>
        <nav class="breadcrumbs">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li class="current">Testimonials</li>
          </ol>
        </nav>
      </div>
          </div>
          <Testimonials />
          <CallToAction />
          <Footer/>
    </div>
  )
}

export default TestimonialPage
