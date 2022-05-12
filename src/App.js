import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import P1 from "./screens/p1";
import P2 from "./screens/p2";
import P3 from "./screens/p3";
import P4 from "./screens/p4";
import P5 from "./screens/p5";
import P6 from "./screens/p6";
import Header from "./components/header";
import { SearchContext } from "./providers/search";


function App() {
  const search=React.useContext(SearchContext)
  console.log(search)
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/p1' element={<P1 />} />
        <Route exact path='/p2' element={<P2 />} />
        <Route exact path='/p3' element={<P3 />} />
        <Route exact path='/p4' element={<P4 />} />
        <Route exact path='/p5' element={<P5 />} />
        <Route exact path='/p6' element={<P6 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
