import React from "react";
import Login from "./Component/Login/Login";
import Dashboard from "./Component/Dashboard/Dashboard";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = ()=> {
  
  return (
    <div className="">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
