import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter as Router
import Home from "./Components/Screens/Home";
import Login from "./Components/Screens/Login";
import Signup from "./Components/Screens/Signup";
import Reports from "./Components/Screens/Reports";
import Dashboard from "./Components/Screens/Dashboard";
import "./App.css";

function App() {
  return (
    <Router> {/* Wrap your Routes with BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/report" element={<Reports />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
