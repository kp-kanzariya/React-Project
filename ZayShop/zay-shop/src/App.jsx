import "../node_modules/bootstrap/dist/css/bootstrap.css";
import LoginSignup from "./Userlog";
import About from "./About";
import AdminAdd from "./AdminAdd";
import ProductForm from "./AdminEdits";
import AdminSide from "./AdminSide";
import Footer from "./Componets/Footer";
import Header from "./Componets/Header";
import HeroSection from "./Componets/HeroSection";
import Contact from "./Contact";
import ProductPage from "./ProductPage";
import Shop from "./Shop";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from "./AddCart";
import UserProfile from "./UserProfile";


function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/userprofile" element={<UserProfile/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/edit" element={<ProductForm/>} />
          <Route path="/add" element={<AdminAdd/>} />
          <Route path="/user" element={<LoginSignup/>} />
          <Route path="/product/:pId" element={<ProductPage/>} />
          <Route path="/admin" element={<AdminSide/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
