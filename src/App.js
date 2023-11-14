import { Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/login/loginScreen";
import LoginCashier from "./pages/login/loginCashier";
import ForgotPassword from "./pages/forgotPassword.jsx/forgotPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/login-cashier" element={<LoginCashier />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
