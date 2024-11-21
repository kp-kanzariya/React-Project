import { useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from './authSlice';
// import Login from './Login';
// import CartItem from './CartItem';
// import ProductList from './ProductList';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Serviceses from "./Serviceses";
import Blog from "./Blog";
import Contact from "./Contact";
import Cart from "./Cart";
import UserProfile from "./UserProfile";
import UserLog from "./UserLog";

function App() {
  // console.log(usersCart)
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.auth.user);
  // const handleLogout = () => {
  //   dispatch(logout());
  //   alert('Logged out successfully!');
  // };
  return (
    <>
      {/* {user ? (
        <>
          <header>
            <h1>Welcome, {user.email}</h1>
            <button onClick={handleLogout}>Logout</button>
          </header>
          <ProductList />
          <CartItem />
        </>
      ) : (
         <Login />
      )} */}
    
      <BrowserRouter>
       
        
        <Header />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Serviceses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart/:cid" element={<Cart />} />
          <Route path="/log" element={<UserLog />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/userprofile" element={<UserProfile />} /> */}

          {/* <Route path="/admin" element={<AdminSide />} />
            <Route path="/edit/:id" element={<ProductForm />} />
            <Route path="/add" element={<AdminAdd />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
