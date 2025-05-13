import React from "react";
import Header from "./components/header/Header";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AttendancePage from "./pages/AttendancePage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path = "/" element = { <LoginPage /> } />
        <Route path = "/login" element = { <LoginPage /> } />
        <Route path = "/signup" element = { <SignUpPage /> } />
        <Route path = "/attendance" element = { <AttendancePage /> } />
      </Routes>
    </Router>
  );
}

export default App;