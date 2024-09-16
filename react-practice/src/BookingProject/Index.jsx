import ImgGrid from "./ImgGrid";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Index() {

  return (
    <>
      <Router>
      <div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/imggrid" element={<ImgGrid/>} />
          <Route path="/" element={<Header/>} />
        </Routes>
      </div>
    </Router>
      {/* <Header/> */}
      
      <div className="container-fluid bg-light">
        {/* <ImgGrid /> */}
       
      </div>
    </>
  );
}
