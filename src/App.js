import React from "react";
import Home from './pages/Home';
import Anasayfa from "./elements/Anasayfa/Anasayfa";
import About from "./elements/Anasayfa/About";
import Service from "./elements/Anasayfa/Service";
import Book from "./elements/Anasayfa/Book";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Anasayfa" element={<Anasayfa/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Book" element={<Book/>}/>
      </Routes>
    </BrowserRouter>

  );
}


