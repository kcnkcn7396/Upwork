import React from "react";
import logo from './logo.svg';
import LoginIn from "./LoginIn";
import Timer from "./Timmer";
import Signup from "./Signup";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import './App.css';

function App() {
 
  return (
    <div className = "App"> 
      <Router>
        <Routes>
        <Route path="/login" Component={LoginIn}/>
        <Route path="/Register" Component={Signup}/>
        <Route path="/ok" Component={Timer}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;