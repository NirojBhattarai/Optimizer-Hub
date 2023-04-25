import React from "react";
import "./App.css";
import NavigationBar from "./myComponents/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./myComponents/Footer";
import Wordcounter from "./pages/Wordcounter";
import Agecalculator from "./pages/Agecalculator";
import Lengthconverter from "./pages/Lengthconverter";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Wordcounter" element={<Wordcounter />} />
          <Route path="/Agecalculator" element={<Agecalculator />} />
          <Route path="/Lengthconverter" element={<Lengthconverter/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
