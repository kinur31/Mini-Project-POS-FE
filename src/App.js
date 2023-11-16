import { Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/login/loginScreen";
import LoginCashier from "./pages/login/loginCashier";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";
import CekEmail from "./pages/forgotPassword/cekEmail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/login-cashier" element={<LoginCashier />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/cek-email" element={<CekEmail />} />
      </Routes>
    </>
  );
}

export default App;
