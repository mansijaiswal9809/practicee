// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    } 
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Mansi"
          about="about"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Text here to analyze" />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
