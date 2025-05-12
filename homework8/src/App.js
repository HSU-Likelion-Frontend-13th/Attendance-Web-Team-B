import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
import Attendance from "./components/attendance/Attendance"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path = "/login" element = { <LoginForm /> } />
        <Route path = "/attendance" element = { <Attendance /> } />
      </Routes>
    </Router>
  );
}

export default App;