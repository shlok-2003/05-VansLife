import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Layout from "./components/Layout";
import About from './pages/About'
import Home from "./pages/Home"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VansElement";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="host" element={<HostLayout />} >
            <Route index element={< Dashboard/>} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
