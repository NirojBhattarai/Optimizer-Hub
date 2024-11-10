import { React } from "react";
import "./App.css";
import NavigationBar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wordcounter from "./pages/Wordcounter";
import Agecalculator from "./pages/Agecalculator";
import Lengthconverter from "./pages/Lengthconverter";
import Weightconverter from "./pages/Weightconverter";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Wordcounter" element={<Wordcounter />} />
          <Route path="/Agecalculator" element={<Agecalculator />} />
          <Route path="/Lengthconverter" element={<Lengthconverter />} />
          <Route path="/Weightconverter" element={<Weightconverter />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
