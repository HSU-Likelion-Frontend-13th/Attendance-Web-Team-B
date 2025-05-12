import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
import Attendance from "./components/attendance/Attendance"
import SignUp from "./components/signup/SignUp"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path = "/attendance" element = { <Attendance /> } />
      </Routes>
    </Router>
  );
}

export default App;