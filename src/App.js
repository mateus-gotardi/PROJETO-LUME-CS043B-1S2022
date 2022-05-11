import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import P1 from "./screens/p1";
import P2 from "./screens/p2";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/p1' element={<P1 />} />
        <Route exact path='/p2' element={<P2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
