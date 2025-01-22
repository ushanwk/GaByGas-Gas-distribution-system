<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/home/HomePage"
=======
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import HomePage from "./pages/home/HomePage/"
import LoginPage from "./pages/login/LoginPage/"
import RegisterPage from "./pages/register/RegisterPage"
import Customer from "./Pages/customer/Customer";
import HeadOfficePage from "./Pages/head-office/HeadOfficePage";
import OutletPage from "./Pages/outlet/OutletPage";
>>>>>>> fa041b8e3583ddd46a48ab31916e58685a064646

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/customer" element={<Customer/>} />
        <Route path="/head" element={<HeadOfficePage/>} />
        <Route path="/outlet" element={<OutletPage/>} />
      </Routes>
    </Router>
  )
}

export default App