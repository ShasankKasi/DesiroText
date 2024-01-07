import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';

export default function App() {
  const [mode, setMode] = useState("light");
  const[alert,setAlert]=useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode is on","success")

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is on ","success")
    }
  };
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000);
  }
  return (
    <div>
      <Navbar title="DesiroText" mode={mode} aboutText="About Us" toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">

          <Textform heading="Enter the text below to modify" mode={mode} showAlert={showAlert}/>

      </div>
    </div>
  );
}
