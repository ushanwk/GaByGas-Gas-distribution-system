import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import HomePage from "./Pages/Home/HomePage"
import LoginPage from "./Pages/login/LoginPage";
=======
import HomePage from "./pages/home/HomePage"
import LoginPage from "./pages/login/LoginPage"
import RegisterPage from "./pages/register/RegisterPage"
>>>>>>> a442e07545aa50df48f09f7e3fe4ebd3859cf26c

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
<<<<<<< HEAD
=======
        <Route path="/register" element={<RegisterPage />} />
>>>>>>> a442e07545aa50df48f09f7e3fe4ebd3859cf26c
      </Routes>
    </Router>
  )
}

export default App
