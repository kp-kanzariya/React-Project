import React from "react";
import sjson from "./script.json";
import ServicesCarousel from "./Swiper";
import Footer from "./Footer";
import CallToAction from "./CallToAction";
import Service1 from "./Service1";
import About1 from "./About1";
import RecentPost from "./RecentPost";
import Testimonials from "./Testimonials";
import WhyUs from "./WhyUs";
import Header from "./Header";

function MainCont() {
  return (
      <div>
          <Header/>
      <div className="main">
        <section id="hero" class="hero section dark-background">
          <div
            id="hero-carousel"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <div class="carousel-item active">
              <img
                src="https://bootstrapmade.com/content/demo/AgriCulture/assets/img/hero_1.jpg"
                alt=""
              />
              <div class="carousel-container">
                <h2>Farming is the best solution of worlds starvation</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div class="carousel-item">
              <img
                src="https://bootstrapmade.com/content/demo/AgriCulture/assets/img/hero_2.jpg"
                alt=""
              />
              <div class="carousel-container">
                <h2>Organic vegetables is good for health</h2>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus.
                </p>
              </div>
            </div>

            <div class="carousel-item">
              <img
                src="https://bootstrapmade.com/content/demo/AgriCulture/assets/img/hero_3.jpg"
                alt=""
              />
              <div class="carousel-container">
                <h2>Providing Fresh Produce Every Single Day</h2>
                <p>
                  Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit.
                </p>
              </div>
            </div>

            <div class="carousel-item">
              <img
                src="https://bootstrapmade.com/content/demo/AgriCulture/assets/img/hero_4.jpg"
                alt=""
              />
              <div class="carousel-container">
                <h2>Farming as a Passione</h2>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius.
                </p>
              </div>
            </div>

            <div class="carousel-item">
              <img
                src="https://bootstrapmade.com/content/demo/AgriCulture/assets/img/hero_5.jpg"
                alt=""
              />
              <div class="carousel-container">
                <h2>Good Food For All</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <a
              class="carousel-control-prev"
              href="#hero-carousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              ></span>
            </a>

            <a
              class="carousel-control-next"
              href="#hero-carousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              ></span>
            </a>

            <ol class="carousel-indicators"></ol>
          </div>
        </section>
        <Service1 />
        <WhyUs />
        <About1 />
        <ServicesCarousel />
        <Testimonials />
        <RecentPost />
        <CallToAction />
          </div>
          <Footer/>
    </div>
  );
}

export default MainCont;
