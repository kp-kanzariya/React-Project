import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
// import LazyComp from "./LazyComp";

const LazyLoad = () => {
  const Lazy = React.lazy(() => import("./LazyComp"));
  return (
    <div>
      <BrowserRouter>
        <div class="container">
          <ul class="nav justify-content-center mt-3 border rounded p-2 ">
            <Link to="/LazyComp">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fas fa-star icon"></i>
                  <span>Icons</span>
                  <div class="underline"></div>
                </a>
              </li>
            </Link>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-water icon"></i>
                <span>Amazing pools</span>
                <div class="underline"></div>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link active">
                <i class="fas fa-tractor icon"></i>
                <span>Farms</span>
                <div class="underline"></div>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-image icon"></i>
                <span>Amazing views</span>
                <div class="underline"></div>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-home icon"></i>
                <span>A-frames</span>
                <div class="underline"></div>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-tree icon"></i>
                <span>Countryside</span>
                <div class="underline"></div>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-tree-house icon"></i>
                <span>Treehouses</span>
                <div class="underline"></div>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-bed icon"></i>
                <span>Rooms</span>
                <div class="underline"></div>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-space-shuttle icon"></i>
                <span>OMG!</span>
                <div class="underline"></div>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-landmark icon"></i>
                <span>Historical homes</span>
                <div class="underline"></div>
              </a>
            </li>
          </ul>
        </div>

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* Lazy load the About page on demand */}

          <Route
            path="/LazyComp"
            element={
              <Suspense fallback={<div style={{margin:"200px"}}>Loading...</div>}>
                <Lazy />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <LazyComp/> */}
    </div>
  );
};

export default LazyLoad;
