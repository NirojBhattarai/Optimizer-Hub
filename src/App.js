import React from "react";
import "./App.css";
import NavigationBar from "./myComponents/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./myComponents/Footer";
import Wordcounter from "./pages/Wordcounter";
import Agecalculator from "./pages/Agecalculator";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Wordcounter" element={<Wordcounter />} />
          <Route path="/Agecalculator" element={ <Agecalculator/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
