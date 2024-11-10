import { useState } from "react";
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

 {/* {usersCart && usersCart.map((v) => (
          <div key={v.userId}>
            <h2>{v.userName}</h2>
            <h3>{v.userEmail}</h3>
            <h3>{v.cart.map((a) => (<li>{a.img }</li>))}</h3>
          </div>
        ))} */}

export const products = [
  {
    id: 101,
    img: "images/product-1.png",
    prodName: "Product 1",
    price: 29.99
  },
  {
    id: 102,
    img: "images/product-2.png",
    prodName: "Product 1",
    price: 29.99
  },
  {
    id: 103,
    img: "images/product-3.png",
    prodName: "Product 1",
    price: 29.99
  },
  {
    id: 104,
    img: "images/product-1.png",
    prodName: "Product 1",
    price: 29.99
  },
  {
    id: 105,
    img: "images/product-2.png",
    prodName: "Product 1",
    price: 29.99
  },
  {
    id: 106,
    img: "images/product-3.png",
    prodName: "Product 1",
    price: 29.99
  },
  {
    id: 107,
    img: "images/product-1.png",
    prodName: "Product 1",
    price: 29.99
  },
  {
    id: 108,
    img: "images/product-2.png",
    prodName: "Product 1",
    price: 29.99
  }
]
export const usersCart = [
  {
    userId: 1,
    userName: "John Doe",
    userEmail: "johndoe@example.com",
    cart: [
      {
        id: 101,
        img: "/images/product-1.png",
        prodName: "Product 1",
        price: 29.99,
        quantity: 2
      },
      {
        id: 102,
        img: "/images/product-2.png",
        prodName: "Product 2",
        price: 15.49,
        quantity: 1
      }
    ]
  },
  {
    userId: 2,
    userName: "Jane Smith",
    userEmail: "janesmith@example.com",
    cart: [
      {
        id: 103,
        img: "/images/product-3.png",
        prodName: "Product 3",
        price: 45.00,
        quantity: 1
      }
    ]
  },
  {
    userId: 3,
    userName: "Alice Johnson",
    userEmail: "alicejohnson@example.com",
    cart: []
  }
];

function App() {
console.log(usersCart)
  return (
    <>
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
