import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
import SignUp from "./components/signup/SignUpForm";
import Attendance from "./pages/Attendance";
import AttendanceResult from "./pages/AttendanceResult"
function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = { <LoginForm /> } />
        <Route path = "/login" element = { <LoginForm /> } />
        <Route path = "/signup" element = { <SignUp /> } />
        <Route path = "/attendance" element = { <Attendance /> } />
        <Route path = "/result" element = { <AttendanceResult /> } />
      </Routes>
    </Router>
  );
}

export default App;