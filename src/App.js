import React from "react";
import Home from "./page/home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Uzbekistan from "./page/uzbekistan";
import Sport from "./page/sport";
import Jahon from "./page/jahon";
import Xabarlar from "./page/Xabarlar";
import Barchasi from "./page/Barchasi";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Xabarlar />} />
          <Route path="/barchasi" element={<Barchasi />} />
          <Route path="/uzbekistan" element={<Uzbekistan />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/jahon" element={<Jahon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
