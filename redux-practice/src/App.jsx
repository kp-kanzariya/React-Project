import { useState } from "react";

import "./App.css";
import { useSelector } from "react-redux";
import Home from "./Home";

function App() {
  const y = useSelector((state) => state.xyz);

  return (
    <>
      <h1>Hi {y}</h1>
      <Home/>
    </>
  );
}

export default App;
