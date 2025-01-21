import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/home/HomePage"
import Customer from "./Pages/customer/Customer"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </Router>
  )
}

export default App
