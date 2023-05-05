import {React, useState} from "react";
import "./App.css";
import NavigationBar from "./myComponents/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./myComponents/Footer";
import Alert from "./myComponents/Alert";
import Wordcounter from "./pages/Wordcounter";
import Agecalculator from "./pages/Agecalculator";
import Lengthconverter from "./pages/Lengthconverter";
import Weightconverter from "./pages/Weightconverter";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
      <Router>
        <NavigationBar showAlert={showAlert} />
        <Alert alert={alert}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Wordcounter" element={<Wordcounter />} />
          <Route path="/Agecalculator" element={<Agecalculator />} />
          <Route path="/Lengthconverter" element={<Lengthconverter />} />
          <Route path="/Weightconverter" element={<Weightconverter />} />
          <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
          <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
