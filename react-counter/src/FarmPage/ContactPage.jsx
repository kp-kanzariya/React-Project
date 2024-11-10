import React from "react";
import Header from "./Header";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

function ContactPage() {
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
          <h1>Contact</h1>
          <p>Home / Contact</p>
          <nav class="breadcrumbs">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li class="current">Contact</li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="contact" class="contact section">
        <div class="mb-5">
          <iframe
                      style={{ width: "100%", height: " 400px" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameborder="0"
            allowfullscreen=""
          ></iframe>
        </div>

        <div class="container" data-aos="fade">
          <div class="row gy-5 gx-lg-5">
            <div class="col-lg-4">
              <div class="info">
                <h3>Get in touch</h3>
                <p>
                  Et id eius voluptates atque nihil voluptatem enim in tempore
                  minima sit ad mollitia commodi minus.
                </p>

                <div class="info-item d-flex">
                  <i class="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>

                <div class="info-item d-flex">
                  <i class="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h4>Email:</h4>
                    <p>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        class="__cf_email__"
                        data-cfemail="b8d1d6ded7f8ddc0d9d5c8d4dd96dbd7d5"
                      >
                        [email&#160;protected]
                      </a>
                    </p>
                  </div>
                </div>

                <div class="info-item d-flex">
                  <i class="bi bi-phone flex-shrink-0"></i>
                  <div>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-8">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                class="php-email-form"
              >
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required=""
                    />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div class="form-group mt-3">
                  <textarea
                    class="form-control"
                    name="message"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
          </section>
          <CallToAction />
          <Footer/>
    </div>
  );
}

export default ContactPage;