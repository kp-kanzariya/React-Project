// ServicesCarousel.js
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import swiperConfig from './script.json';

const ServicesCarousel = () => {
    
const ServiceItem = ({ title, category, imgSrc }) => (
    <div className="service-item">
      <div className="service-item-contents">
        <a href="#">
          <span className="service-item-category">{category}</span>
          <h2 className="service-item-title">{title}</h2>
        </a>
      </div>
      <img src={imgSrc} alt={title} className="img-fluid" />
    </div>
  );
  const [config, setConfig] = useState(null);

  useEffect(() => {
    // Load the swiper configuration
    setConfig(swiperConfig);
  }, []);

  if (!config) {
    return <div>Loading...</div>;
  }

  return (
    <section id="services-2" className="services-2 section dark-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Necessitatibus eius consequatur</p>
      </div>

      <div className="services-carousel-wrap">
        <div className="container">
          <Swiper
            loop={config.loop}
            speed={config.speed}
            autoplay={{ delay: config.autoplay.delay }}
            slidesPerView={config.slidesPerView}
            pagination={{ clickable: config.pagination.clickable }}
            navigation={{
              nextEl: '.js-custom-next',
              prevEl: '.js-custom-prev',
            }}
            breakpoints={config.breakpoints}
            modules={[Pagination, Navigation, Autoplay]}
            className="swiper-wrapper"
          >
            <SwiperSlide className="swiper-slide">
              <ServiceItem
                title="Planting"
                category="We do"
                imgSrc="https://bootstrapmade.com/content/demo/AgriCulture/assets/img/img_sq_1.jpg"
              />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <ServiceItem
                title="Mulching"
                category="We do"
                imgSrc="https://bootstrapmade.com/content/demo/AgriCulture/assets/img/img_sq_3.jpg"
              />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <ServiceItem
                title="Watering"
                category="We do"
                imgSrc="https://bootstrapmade.com/content/demo/AgriCulture/assets/img/img_sq_8.jpg"
              />
            </SwiperSlide>

            {/* More slides here... */}
          </Swiper>

          <div className="swiper-pagination"></div>
          <button className="navigation-prev js-custom-prev">
            <i className="bi bi-arrow-left-short"></i>
          </button>
          <button className="navigation-next js-custom-next">
            <i className="bi bi-arrow-right-short"></i>
          </button>
        </div>
      </div>
    </section>
  );
};


export default ServicesCarousel;
