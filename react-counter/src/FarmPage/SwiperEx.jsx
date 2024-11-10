import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Swiper navigation module styles
import 'swiper/css/pagination'; // Swiper pagination module styles
import GLightbox from 'glightbox';
// import 'glightbox/dist/css/glightbox.min.css';
import '../../node_modules/@glightbox/plugin-core/dist/index'

const ImageSwiper = () => {

  useEffect(() => {
    // Initialize Glightbox
    GLightbox({
      selector: '.glightbox', // Match the class of the <a> tags
    });
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 5000 }}
      slidesPerView={1}
    >
      <SwiperSlide>
        <a href="https://example.com/large-image1.jpg" className="glightbox">
          <img src="https://example.com/small-image1.jpg" alt="Image 1" className="img-fluid" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://example.com/large-image2.jpg" className="glightbox">
          <img src="https://example.com/small-image2.jpg" alt="Image 2" className="img-fluid" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://example.com/large-image3.jpg" className="glightbox">
          <img src="https://example.com/small-image3.jpg" alt="Image 3" className="img-fluid" />
        </a>
      </SwiperSlide>
    </Swiper>
  );
}

export default ImageSwiper;
