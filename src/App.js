import React from "react";
import "./index.css"
import Home from "./routes/Home"
import About from "./routes/About"
import Product from "./routes/Product"


import { Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/product" element={<Product />}/>
      <Route path="/about" element={<About />}/>
      
    </Routes>
    </>
  );
}

export default App;
