import React from "react";
import Header from "./Header";
import About1 from "./About1";
import TeamSec from "./TeamSec";
import Service1 from "./Service1";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

function AboutPage() {
  return (
    <div>
      <Header />
      <div style={{backgroundImage:"url(https://bootstrapmade.com/content/demo/AgriCulture/assets/img/page-title-bg.webp)"}}
        class="page-title dark-background"
        data-aos="fade"
        
      >
        <div class="container position-relative">
          <h1>About</h1>
          <p>
            Esse dolorum voluptatum ullam est sint nemo et est ipsa porro
            placeat quibusdam quia assumenda numquam molestias.
          </p>
          <nav class="breadcrumbs">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li class="current">About</li>
            </ol>
          </nav>
        </div>
          </div>
          <About1 />
          <TeamSec />
          <Service1 />
          <CallToAction />
          <Footer/>
    </div>
  );
}

export default AboutPage;
