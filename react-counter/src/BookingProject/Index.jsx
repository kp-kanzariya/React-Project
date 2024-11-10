import ImgGrid from "./ImgGrid";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImgGrid1 from "./ImgGrid1";
import ImgGrid2 from "./ImgGrid2";

export default function Index() {

  return (
    <>
      <Router>
      <div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/imggrid" element={<ImgGrid/>} />
          <Route path="/imggrid/:id" element={<ImgGrid1/>} />
          <Route path="/imggrid/:id" element={<ImgGrid2/>} />
          {/* <Route path="/imggrid/:id" element={<ImgGrid2/>} /> */}
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
