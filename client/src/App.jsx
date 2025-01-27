import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Vote from "./components/Vote";
import Menu from "./components/Menu";
import Signup from "./components/Signup";
import Account from "./components/Account";
import StaffLogin from "./components/StaffLogin";

import EditMenu from "./components/EditMenu";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/stafflogin" element={<StaffLogin />} />

          <Route exact path="/home" element={<ProtectedRoute requiredRole='student'><Home /></ProtectedRoute>} />
          <Route exact path="/menu" element={<ProtectedRoute requiredRole='student'><Menu /></ProtectedRoute>} />
          <Route exact path="/vote" element={<ProtectedRoute requiredRole='student'><Vote /></ProtectedRoute>} />

          <Route exact path="/editmenu" element={<ProtectedRoute requiredRole='staff'><EditMenu /></ProtectedRoute>} />

          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/about" element={<Account />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
