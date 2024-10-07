import React from 'react'

function RecentPost() {
  return (
    <div>
             <section id="recent-posts" class="recent-posts section">
          <div class="container section-title" data-aos="fade-up">
            <h2>Recent Posts</h2>
            <p>Necessitatibus eius consequatur</p>
          </div>

          <div class="container">
            <div class="row gy-5">
              <div class="col-xl-4 col-md-6">
                <div
                  class="post-item position-relative h-100"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div class="post-img position-relative overflow-hidden">
                    <img
                      src="https://bootstrapmade.com/content/demo/AgriCulture/assets/img/blog/blog-1.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <span class="post-date">December 12</span>
                  </div>

                  <div class="post-content d-flex flex-column">
                    <h3 class="post-title">
                      Eum ad dolor et. Autem aut fugiat debitis
                    </h3>

                    <div class="meta d-flex align-items-center">
                      <div class="d-flex align-items-center">
                        <i class="bi bi-person"></i>{" "}
                        <span class="ps-2">Julia Parker</span>
                      </div>
                      <span class="px-3 text-black-50">/</span>
                      <div class="d-flex align-items-center">
                        <i class="bi bi-folder2"></i>{" "}
                        <span class="ps-2">Politics</span>
                      </div>
                    </div>

                    <hr />

                    <a href="blog-details.html" class="readmore stretched-link">
                      <span>Read More</span>
                      <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6">
                <div
                  class="post-item position-relative h-100"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div class="post-img position-relative overflow-hidden">
                    <img
                      src="https://bootstrapmade.com/content/demo/AgriCulture/assets/img/blog/blog-2.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <span class="post-date">July 17</span>
                  </div>

                  <div class="post-content d-flex flex-column">
                    <h3 class="post-title">
                      Et repellendus molestiae qui est sed omnis
                    </h3>

                    <div class="meta d-flex align-items-center">
                      <div class="d-flex align-items-center">
                        <i class="bi bi-person"></i>{" "}
                        <span class="ps-2">Mario Douglas</span>
                      </div>
                      <span class="px-3 text-black-50">/</span>
                      <div class="d-flex align-items-center">
                        <i class="bi bi-folder2"></i>{" "}
                        <span class="ps-2">Sports</span>
                      </div>
                    </div>

                    <hr />

                    <a href="blog-details.html" class="readmore stretched-link">
                      <span>Read More</span>
                      <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="post-item position-relative h-100">
                  <div class="post-img position-relative overflow-hidden">
                    <img
                      src="https://bootstrapmade.com/content/demo/AgriCulture/assets/img/blog/blog-3.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <span class="post-date">September 05</span>
                  </div>

                  <div class="post-content d-flex flex-column">
                    <h3 class="post-title">
                      Quia assumenda est et veritati tirana ploder
                    </h3>

                    <div class="meta d-flex align-items-center">
                      <div class="d-flex align-items-center">
                        <i class="bi bi-person"></i>{" "}
                        <span class="ps-2">Lisa Hunter</span>
                      </div>
                      <span class="px-3 text-black-50">/</span>
                      <div class="d-flex align-items-center">
                        <i class="bi bi-folder2"></i>{" "}
                        <span class="ps-2">Economics</span>
                      </div>
                    </div>

                    <hr />

                    <a href="blog-details.html" class="readmore stretched-link">
                      <span>Read More</span>
                      <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default RecentPost
