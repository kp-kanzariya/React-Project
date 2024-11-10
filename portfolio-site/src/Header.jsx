import React from "react";

function Header() {
  return (
    <>
      <header className="top-area">
        <div className="header-area">
          {/* Start Navigation */}
          <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
            <div className="container">
              {/* Start Header Navigation */}
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navbar-menu"
                >
                  <i className="fa fa-bars" />
                </button>
                <a className="navbar-brand" href="index.html">
                  kp kanzariya
                </a>
              </div>
              {/*/.navbar-header*/}
              {/* End Header Navigation */}
              {/* Collect the nav links, forms, and other content for toggling */}
              <div
                className="collapse navbar-collapse menu-ui-design"
                id="navbar-menu"
              >
                <ul
                  className="nav navbar-nav navbar-right"
                  data-in="fadeInDown"
                  data-out="fadeOutUp"
                >
                  <li className=" smooth-menu active" />
                  <li className=" smooth-menu">
                    <a href="#education">education</a>
                  </li>
                  <li className="smooth-menu">
                    <a href="#skills">skills</a>
                  </li>
                  <li className="smooth-menu">
                    <a href="#experience">experience</a>
                  </li>
                  
                  <li className="smooth-menu">
                    <a href="#portfolio">portfolio</a>
                  </li>
          
                  <li className="smooth-menu">
                    <a href="#contact">contact</a>
                  </li>
                </ul>
                {/*/.nav */}
              </div>
              {/* /.navbar-collapse */}
            </div>
            {/*/.container*/}
          </nav>
          {/*/nav*/}
          {/* End Navigation */}
        </div>
        {/*/.header-area*/}
        <div className="clearfix" />
      </header>
      {/* /.top-area*/}
    </>
  );
}

export default Header;
