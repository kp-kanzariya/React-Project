import React from "react";

function Home() {
  return (
    <div>
      {/*welcome-hero start */}
      <section id="welcome-hero" className="welcome-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="header-text">
                <h2>
                  hi <span>,</span> i am <br /> kanzariya <br /> kruparth{" "}
                  <span>.</span>{" "}
                </h2>
                <p>web designer / devloper</p>
                <a href="assets/download/new.pdf" download>
                  download resume
                </a>
              </div>
              {/*/.header-text*/}
            </div>
            {/*/.col*/}
          </div>
          {/* /.row*/}
        </div>
        {/* /.container*/}
      </section>
      {/*/.welcome-hero*/}
      <section id="about" className="about">
        <div className="section-heading text-center">
          <h2>about me</h2>
        </div>
        <div className="container">
          <div className="about-content">
            <div className="row">
              <div className="col-sm-6">
                <div className="single-about-txt">
                  <h3>I am a Professional Web Designer / Developer.</h3>
                  <p>
                    Skilled in creating responsive and interactive web
                    applications using HTML, CSS, JavaScript, and modern tools
                    like React.js and Redux. Experienced with Bootstrap and
                    jQuery for building dynamic and mobile-friendly user
                    interfaces. Knowledgeable in PHP and MySQL for backend
                    development and database management.
                  </p>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="single-about-add-info">
                        <h3>phone</h3>
                        <p>+91 7874773789</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-about-add-info">
                        <h3>email</h3>
                        <p>kruparth1610@gmail.com</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-about-add-info"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-offset-1 col-sm-5">
                <div className="single-about-img">
                  <img
                    src="assets/images/about/profile-image.png"
                    alt="profile_image"
                  />
                  <div className="about-list-icon">
                    <ul>
                      <li>
                        <a href="https://www.linkedin.com/in/kruparth-kanzariya-4b363924a/">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                      {/* / li */}

                      <li>
                        <a href="https://github.com/kp-kanzariya">
                          <i class="fa fa-github" aria-hidden="true"></i>
                        </a>
                      </li>
                      {/* / li */}

                      <li>
                        <a href="https://x.com/kpkazanriya">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      {/* / li */}
                      <li>
                        <a href="https://www.instagram.com/kru_parth_.16/">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      {/* / li */}
                    </ul>
                    {/* / ul */}
                  </div>
                  {/* /.about-list-icon */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/.about*/}

      <div>
        {/*education start */}
        <section id="education" className="education">
          <div className="section-heading text-center">
            <h2>education</h2>
          </div>
          <div className="container">
            <div className="education-horizontal-timeline">
              <div className="row">
                <div className="col-sm-4">
                  <div className="single-horizontal-timeline">
                    <div className="experience-time">
                      <h2>2024 jul-oct</h2>
                      <h3>
                        react<span> </span> Js Developer
                      </h3>
                    </div>
                    {/*/.experience-time*/}
                    <div className="timeline-horizontal-border">
                      <i className="fa fa-circle" aria-hidden="true" />
                      <span
                        className="single-timeline-horizontal spacial-horizontal-line
									"
                      />
                    </div>
                    <div className="timeline">
                      <div className="timeline-content">
                        <h4 className="title">TOPS Technologies Pvt. Ltd</h4>
                        <h5>Ahmedabad , gujarat</h5>
                        <p className="description">
                          React.js is a JavaScript library for building fast,
                          interactive user interfaces using a component-based
                          architecture. It efficiently updates the UI with its
                          virtual DOM, supports JSX (HTML-like syntax in
                          JavaScript), and enables state management through
                          Hooks, making it ideal for developing scalable
                          single-page applications.
                        </p>
                      </div>
                      {/*/.timeline-content*/}
                    </div>
                    {/*/.timeline*/}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-horizontal-timeline">
                    <div className="experience-time">
                      <h2>2021 - 2024</h2>
                      <h3>
                        bachelor <span>of </span> computer application
                      </h3>
                    </div>
                    {/*/.experience-time*/}
                    <div className="timeline-horizontal-border">
                      <i className="fa fa-circle" aria-hidden="true" />
                      <span className="single-timeline-horizontal" />
                    </div>
                    <div className="timeline">
                      <div className="timeline-content">
                        <h4 className="title">St Xaviers College </h4>
                        <h5>Ahmedabad, Gujarat</h5>
                        <p className="description">
                          The Bachelor of Computer Application (BCA) is a
                          three-year undergraduate degree focused on computer
                          science and IT. It covers foundational concepts in
                          programming, software development, database
                          management, networking, web development, and operating
                          systems.
                        </p>
                      </div>
                      {/*/.timeline-content*/}
                    </div>
                    {/*/.timeline*/}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-horizontal-timeline">
                    <div className="experience-time">
                      <h2>2020 - 2021</h2>
                      <h3>intermediate - GSHSEB</h3>
                    </div>
                    {/*/.experience-time*/}
                    <div className="timeline-horizontal-border">
                      <i className="fa fa-circle" aria-hidden="true" />
                      <span className="single-timeline-horizontal" />
                    </div>
                    <div className="timeline">
                      <div className="timeline-content">
                        <h4 className="title">mangalam vidhyalaya</h4>
                        <h5>halvad , morbi</h5>
                        <p className="description">
                          PCB (Physics, Chemistry, Biology) Physics: emphasizing
                          the fundamental laws of nature. Chemistry:chemical
                          reactions, the periodic table, and molecular
                          structures. at one is Biology: Explores the study of
                          living organisms, human anatomy, plant biology,
                          genetics, and ecology.
                        </p>
                      </div>
                      {/*/.timeline-content*/}
                    </div>
                    {/*/.timeline*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/.education*/}
        {/*education end */}
        {/*skills start */}
        <section id="skills" className="skills">
          <div className="skill-content">
            <div className="section-heading text-center">
              <h2>skills</h2>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="single-skill-content">
                    <div className="barWrapper">
                      <span className="progressText">HTML</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={10}
                            aria-valuemax={100}
                            style={{}}
                          ></div>
                        </div>
                        <h3>90%</h3>
                      </div>
                    </div>
                    {/* /.barWrapper */}
                    <div className="barWrapper">
                      <span className="progressText">CSS</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={85}
                            aria-valuemin={10}
                            aria-valuemax={100}
                            style={{}}
                          ></div>
                        </div>
                        <h3>85%</h3>
                      </div>
                    </div>
                    {/* /.barWrapper */}
                    <div className="barWrapper">
                      <span className="progressText">java script</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={97}
                            aria-valuemin={10}
                            aria-valuemax={100}
                            style={{}}
                          ></div>
                        </div>
                        <h3>97%</h3>
                      </div>
                    </div>
                    {/* /.barWrapper */}
                    <div className="barWrapper">
                      <span className="progressText">Reactjs</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={10}
                            aria-valuemax={100}
                            style={{}}
                          ></div>
                        </div>
                        <h3>90%</h3>
                      </div>
                    </div>
                    {/* /.barWrapper */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-skill-content">
                    <div className="barWrapper">
                      <span className="progressText">bootstrap</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={10}
                            aria-valuemax={100}
                            style={{}}
                          ></div>
                        </div>
                        <h3>90%</h3>
                      </div>
                    </div>
                    {/* /.barWrapper */}
                    <div className="barWrapper">
                      <span className="progressText">jQuery</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={85}
                            aria-valuemin={10}
                            aria-valuemax={100}
                            style={{}}
                          ></div>
                        </div>
                        <h3>85%</h3>
                      </div>
                    </div>
                    {/* /.barWrapper */}
                    <div className="barWrapper">
                      <span className="progressText">communication</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={97}
                            aria-valuemin={10}
                            aria-valuemax={100}
                            style={{}}
                          ></div>
                        </div>
                        <h3>97%</h3>
                      </div>
                    </div>
                    {/* /.barWrapper */}
                    <div className="barWrapper">
                      <span className="progressText"> Team-Work</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={10}
                            aria-valuemax={100}
                            style={{}}
                          ></div>
                        </div>
                        <h3>90%</h3>
                      </div>
                    </div>
                    {/* /.barWrapper */}
                  </div>
                </div>
              </div>
              {/* /.row */}
            </div>{" "}
            {/* /.container */}
          </div>
          {/* /.skill-content*/}
        </section>
        {/*/.skills*/}
        {/*skills end */}
        {/*experience start */}
        {/* <section id="experience" className="experience">
          <div className="section-heading text-center">
            <h2>experience</h2>
          </div>
          <div className="container">
            <div className="experience-content">
              <div className="main-timeline">
                <ul>
                  <li>
                    <div className="single-timeline-box fix">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="experience-time text-right">
                            <h2>2018 - Present</h2>
                            <h3>creative director</h3>
                          </div>
                        </div>
                    
                        <div className="col-md-offset-1 col-md-5">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">
                                <span>
                                  <i
                                    className="fa fa-circle"
                                    aria-hidden="true"
                                  />
                                </span>
                                hoplony tech limited
                              </h4>
                              <h5>newyork, USA</h5>
                              <p className="description">
                                Duis aute irure dolor in reprehenderit in vol
                                patate velit esse cillum dolore eu fugiat nulla
                                pari. Excepteur sint occana inna tecat cupidatat
                                non proident.
                              </p>
                            </div>
            
                          </div>

                        </div>

                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-timeline-box fix">
                      <div className="row">
                        <div className="col-md-offset-1 col-md-5 experience-time-responsive">
                          <div className="experience-time">
                            <h2>
                              <span>
                                <i
                                  className="fa fa-circle"
                                  aria-hidden="true"
                                />
                              </span>
                              2016 - 2018
                            </h2>
                            <h3>associate design director</h3>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="timeline">
                            <div className="timeline-content text-right">
                              <h4 className="title">hoplony tech limited</h4>
                              <h5>newyork, USA</h5>
                              <p className="description">
                                Duis aute irure dolor in reprehenderit in vol
                                patate velit esse cillum dolore eu fugiat nulla
                                pari. Excepteur sint occana inna tecat cupidatat
                                non proident.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-offset-1 col-md-5 experience-time-main">
                          <div className="experience-time">
                            <h2>
                              <span>
                                <i
                                  className="fa fa-circle"
                                  aria-hidden="true"
                                />
                              </span>
                              2016 - 2018
                            </h2>
                            <h3>associate design director</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-timeline-box fix">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="experience-time text-right">
                            <h2>2013 - 2016</h2>
                            <h3>senior UI/UX designer</h3>
                          </div>
                        </div>
                        <div className="col-md-offset-1 col-md-5">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">
                                <span>
                                  <i
                                    className="fa fa-circle"
                                    aria-hidden="true"
                                  />
                                </span>
                                hoplony tech limited
                              </h4>
                              <h5>newyork, USA</h5>
                              <p className="description">
                                Duis aute irure dolor in reprehenderit in vol
                                patate velit esse cillum dolore eu fugiat nulla
                                pari. Excepteur sint occana inna tecat cupidatat
                                non proident.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-timeline-box fix">
                      <div className="row">
                        <div className="col-md-offset-1 col-md-5 experience-time-responsive">
                          <div className="experience-time">
                            <h2>
                              <span>
                                <i
                                  className="fa fa-circle"
                                  aria-hidden="true"
                                />
                              </span>
                              2012 - 2013
                            </h2>
                            <h3>UI/UX designer</h3>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="timeline">
                            <div className="timeline-content text-right">
                              <h4 className="title">hoplony tech limited</h4>
                              <h5>newyork, USA</h5>
                              <p className="description">
                                Duis aute irure dolor in reprehenderit in vol
                                patate velit esse cillum dolore eu fugiat nulla
                                pari. Excepteur sint occana inna tecat cupidatat
                                non proident.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-offset-1 col-md-5 experience-time-main">
                          <div className="experience-time">
                            <h2>
                              <span>
                                <i
                                  className="fa fa-circle"
                                  aria-hidden="true"
                                />
                              </span>
                              2012 - 2013
                            </h2>
                            <h3>UI/UX designer</h3>
                          </div>
                        </div>
                     
                      </div>
                    </div>
                 
                  </li>
                  <li>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}
        {/*/.experience*/}
        {/*experience end */}
        {/*profiles start */}
        {/* <section id="profiles" className="profiles">
          <div className="profiles-details">
            <div className="section-heading text-center">
              <h2>profiles</h2>
            </div>
            <div className="container">
              <div className="profiles-content">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="single-profile">
                      <div className="profile-txt">
                        <a href>
                          <i className="flaticon-themeforest" />
                        </a>
                        <div className="profile-icon-name">themeforest</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href>
                            <i className="flaticon-themeforest" />
                          </a>
                          <div className="profile-icon-name">themeforest</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="single-profile">
                      <div className="profile-txt">
                        <a href>
                          <i className="flaticon-dribbble" />
                        </a>
                        <div className="profile-icon-name">dribbble</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href>
                            <i className="flaticon-dribbble" />
                          </a>
                          <div className="profile-icon-name">dribbble</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="single-profile">
                      <div className="profile-txt">
                        <a href>
                          <i className="flaticon-behance-logo" />
                        </a>
                        <div className="profile-icon-name">behance</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href>
                            <i className="flaticon-behance-logo" />
                          </a>
                          <div className="profile-icon-name">behance</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="single-profile profile-no-border">
                      <div className="profile-txt">
                        <a href>
                          <i className="flaticon-github-logo" />
                        </a>
                        <div className="profile-icon-name">github</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href>
                            <i className="flaticon-github-logo" />
                          </a>
                          <div className="profile-icon-name">github</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile-border" />
                <div className="row">
                  <div className="col-sm-3">
                    <div className="single-profile">
                      <div className="profile-txt">
                        <a href>
                          <i className="flaticon-flickr-website-logo-silhouette" />
                        </a>
                        <div className="profile-icon-name">flickR</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href>
                            <i className="flaticon-flickr-website-logo-silhouette" />
                          </a>
                          <div className="profile-icon-name">flickR</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="single-profile">
                      <div className="profile-txt">
                        <a href>
                          <i className="flaticon-smug" />
                        </a>
                        <div className="profile-icon-name">smungMung</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href>
                            <i className="flaticon-smug" />
                          </a>
                          <div className="profile-icon-name">smungMung</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="single-profile">
                      <div className="profile-txt">
                        <a href>
                          <i className="flaticon-squarespace-logo" />
                        </a>
                        <div className="profile-icon-name">squareSpace</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href>
                            <i className="flaticon-squarespace-logo" />
                          </a>
                          <div className="profile-icon-name">squareSpace</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="single-profile profile-no-border">
                      <div className="profile-txt">
                        <a href>
                          <i className="flaticon-bitbucket-logotype-camera-lens-in-perspective" />
                        </a>
                        <div className="profile-icon-name">bitBucket</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href>
                            <i className="flaticon-bitbucket-logotype-camera-lens-in-perspective" />
                          </a>
                          <div className="profile-icon-name">bitBucket</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/*/.profiles*/}
        {/*profiles end */}
        {/*portfolio start */}
        <section id="portfolio" className="portfolio">
          <div className="portfolio-details">
            <div className="section-heading text-center">
              <h2>portfolio</h2>
            </div>
            <div className="container">
              <div className="portfolio-content">
                <div className="isotope">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="item">
                        <img
                          src="assets/images/portfolio/p1.jpg"
                          alt="portfolio image"
                        />
                        <div className="isotope-overlay">
                          <a href="#">ui/ux design</a>
                        </div>
                        {/* /.isotope-overlay */}
                      </div>
                      {/* /.item */}
                      <div className="item">
                        <img
                          src="assets/images/portfolio/p2.jpg"
                          alt="portfolio image"
                        />
                        <div className="isotope-overlay">
                          <a href="#">ui/ux design</a>
                        </div>
                        {/* /.isotope-overlay */}
                      </div>
                      {/* /.item */}
                    </div>
                    {/* /.col */}
                    <div className="col-sm-4">
                      <div className="item">
                        <img
                          src="assets/images/portfolio/p3.jpg"
                          alt="portfolio image"
                        />
                        <div className="isotope-overlay">
                          <a href="#">web design</a>
                        </div>
                        {/* /.isotope-overlay */}
                      </div>
                      {/* /.item */}
                    </div>
                    {/* /.col */}
                    <div className="col-sm-4">
                      <div className="item">
                        <img
                          src="assets/images/portfolio/p4.jpg"
                          alt="portfolio image"
                        />
                        <div className="isotope-overlay">
                          <a href="#">web development</a>
                        </div>
                        {/* /.isotope-overlay */}
                      </div>
                      {/* /.item */}
                      <div className="item">
                        <img
                          src="assets/images/portfolio/p5.jpg"
                          alt="portfolio image"
                        />
                        <div className="isotope-overlay">
                          <a href="#">web development</a>
                        </div>
                        {/* /.isotope-overlay */}
                      </div>
                      {/* /.item */}
                    </div>
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                </div>
                {/*/.isotope*/}
              </div>
              {/*/.gallery-content*/}
            </div>
            {/*/.container*/}
          </div>
          {/*/.portfolio-details*/}
        </section>
        {/*/.portfolio*/}
        {/*portfolio end */}

        {/*contact start */}
        <section id="contact" className="contact">
          <div className="section-heading text-center">
            <h2>contact me</h2>
          </div>
          <div className="container">
            <div className="contact-content">
              <div className="row">
                <div className="col-md-offset-1 col-md-5 col-sm-6">
                  <div className="single-contact-box">
                    <div className="contact-form">
                      <form>
                        <div className="row">
                          <div className="col-sm-6 col-xs-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Name*"
                                name="name"
                              />
                            </div>
                            {/*/.form-group*/}
                          </div>
                          {/*/.col*/}
                          <div className="col-sm-6 col-xs-12">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email*"
                                name="email"
                              />
                            </div>
                            {/*/.form-group*/}
                          </div>
                          {/*/.col*/}
                        </div>
                        {/*/.row*/}
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="subject"
                                placeholder="Subject"
                                name="subject"
                              />
                            </div>
                            {/*/.form-group*/}
                          </div>
                          {/*/.col*/}
                        </div>
                        {/*/.row*/}
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                rows={8}
                                id="comment"
                                placeholder="Message"
                                defaultValue={""}
                              />
                            </div>
                            {/*/.form-group*/}
                          </div>
                          {/*/.col*/}
                        </div>
                        {/*/.row*/}
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="single-contact-btn">
                              <a className="contact-btn" href="#" role="button">
                                submit
                              </a>
                            </div>
                            {/*/.single-single-contact-btn*/}
                          </div>
                          {/*/.col*/}
                        </div>
                        {/*/.row*/}
                      </form>
                      {/*/form*/}
                    </div>
                    {/*/.contact-form*/}
                  </div>
                  {/*/.single-contact-box*/}
                </div>
                {/*/.col*/}
                <div className="col-md-offset-1 col-md-5 col-sm-6">
                  <div className="single-contact-box">
                    <div className="contact-adress">
                      <div className="contact-add-head">
                        <h3>kruparth kanzariya</h3>
                        <p>Web designer / developer</p>
                      </div>
                      <div className="contact-add-info">
                        <div className="single-contact-add-info">
                          <h3>phone</h3>
                          <p>+91 7874773789</p>
                        </div>
                        <div className="single-contact-add-info">
                          <h3>email</h3>
                          <p>kruparth1610@gmail.com</p>
                        </div>
                        
                      </div>
                    </div>
                    {/*/.contact-adress*/}
                    <div className="hm-foot-icon">
                      <ul>
                        <li>
                          <a href="https://github.com/kp-kanzariya">
                            <i className="fa fa-github" />
                          </a>
                        </li>
                        {/*/li*/}
                       
                        {/*/li*/}
                        <li>
                          <a href="https://x.com/kpkazanriya">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        {/*/li*/}
                        <li>
                          <a href="https://www.linkedin.com/in/kruparth-kanzariya-4b363924a/">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        {/*/li*/}
                        <li>
                          <a href="https://www.instagram.com/kru_parth_.16/">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        {/*/li*/}
                      </ul>
                      {/*/ul*/}
                    </div>
                    {/*/.hm-foot-icon*/}
                  </div>
                  {/*/.single-contact-box*/}
                </div>
                {/*/.col*/}
              </div>
              {/*/.row*/}
            </div>
            {/*/.contact-content*/}
          </div>
          {/*/.container*/}
        </section>
        {/*/.contact*/}

        {/*footer-copyright start*/}
        <footer id="footer-copyright" className="footer-copyright">
          <div className="container">
            <div className="hm-footer-copyright text-center">
              <p>
                © copyright KP Kanzariya. design and developed by{" "}
                <a href="#">Kruparth</a>
              </p>
              {/*/p*/}
            </div>
            {/*/.text-center*/}
          </div>
          {/*/.container*/}
          <div id="scroll-Top">
            <div className="return-to-top">
              <i className="fa fa-angle-up " id="scroll-top" />
            </div>
          </div>
          {/*/.scroll-Top*/}
        </footer>
      </div>
    </div>
  );
}

export default Home;
