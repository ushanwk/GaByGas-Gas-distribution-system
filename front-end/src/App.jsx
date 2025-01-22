<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import HomePage from "./pages/home/HomePage/"
import LoginPage from "./pages/login/LoginPage/"
import RegisterPage from "./pages/register/RegisterPage"
import Customer from "./Pages/customer/Customer";
import HeadOfficePage from "./Pages/head-office/HeadOfficePage";
import OutletPage from "./Pages/outlet/OutletPage";
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage"
import LoginPage from "./Pages/login/LoginPage";
import Register from "./Pages/register/RegisterPage";
>>>>>>> origin/dev-sathin

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
<<<<<<< HEAD
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/customer" element={<Customer/>} />
        <Route path="/head" element={<HeadOfficePage/>} />
        <Route path="/outlet" element={<OutletPage/>} />
=======
        <Route path="/register" element={<Register />} />
>>>>>>> origin/dev-sathin
      </Routes>
    </Router>
  )
}

export default App