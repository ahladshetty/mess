import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Vote from "./components/Vote";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Account from "./components/Account";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/vote" element={<Vote />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/account" element={<Account />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

// import React from 'react'
// import About from './components/About'
// import Login from './components/Login'
// // import Navbar from './components/Navbar'

// export default function App() {
//   return (
//     <div>
//       <h2>hola</h2>
//       <About/>
//       {/* <Navbar/> */}
//       <Login/>
//     </div>
//   )
// }