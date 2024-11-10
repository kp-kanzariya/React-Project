import React from "react";
import Header from "./Header";
import Service1 from "./Service1";
import Testimonials from "./Testimonials";
import WhyUs from "./WhyUs";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

function ServicePage() {
  return (
    <div>
      <Header />
      <div
        class="page-title dark-background"
        data-aos="fade"
        style={{
          backgroundImage:
            "url(https://bootstrapmade.com/content/demo/AgriCulture/assets/img/page-title-bg.webp)",
        }}
      >
        <div class="container position-relative">
          <h1>Services</h1>
          <p>Home / Services</p>
          <nav class="breadcrumbs">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li class="current">Services</li>
            </ol>
          </nav>
        </div>
          </div>
          <Service1 />
          <WhyUs/>
          <Testimonials />
          <CallToAction />
          <Footer/>
    </div>
  );
}

export default ServicePage;
