import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx"
import LoginPage from "./pages/login/LoginPage.jsx"
import RegisterPage from "./pages/register/RegisterPage.jsx"
import Customer from "./Pages/customer/Customer.jsx";
import HeadOfficePage from "./Pages/head-office/HeadOfficePage.jsx";
import OutletPage from "./Pages/outlet/OutletPage.jsx";
import Register from "./Pages/register/RegisterPage.jsx/";
import BusinessRegister from './Pages/register/Business/BusinessRegister.jsx';
import CustomerRegister from './Pages/register/Customer/CustomerRegister.jsx';
import BusinessVerify from "./Pages/register/BusinessVerify/BusinessVerify.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/business-reg" element={<BusinessRegister />} />
        <Route path="/customer-reg" element={<CustomerRegister />} />
        <Route path="/customer" element={<Customer/>} />
        <Route path="/head" element={<HeadOfficePage/>} />
        <Route path="/outlet" element={<OutletPage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<BusinessVerify />} />
      </Routes>
    </Router>
  )
}

export default App