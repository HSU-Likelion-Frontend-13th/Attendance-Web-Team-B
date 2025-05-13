import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
import SignUp from "./components/signup/SignUpForm";
import Attendance from "./components/attendance/Attendance"
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path = "/" element = { <LoginForm /> } />
        <Route path = "/login" element = { <LoginForm /> } />
        <Route path = "/signup" element = { <SignUp /> } />
        <Route path = "/attendance" element = { <Attendance /> } />
      </Routes>
    </Router>
  );
}

export default App;