import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Common/NavBar/NavBar";
import ContactUs from "./pages/ContactUs";
import FootBar from "./components/Common/FootBar/FootBar";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <FootBar />
      </div>
    </>
  );
}

export default App;
