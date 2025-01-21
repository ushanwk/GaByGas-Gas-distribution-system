import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import HomePage from "./pages/home/HomePage"
import LoginPage from "./pages/login/LoginPage/"
import RegisterPage from "./pages/register/RegisterPage"
=======
import HomePage from "./Pages/home/HomePage"
import Customer from "./Pages/customer/Customer"
>>>>>>> bdfc5c9 (Customer page front end)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
=======
        <Route path="/customer" element={<Customer />} />
>>>>>>> bdfc5c9 (Customer page front end)
      </Routes>
    </Router>
  )
}

export default App
