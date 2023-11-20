import { Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/login/loginScreen";
import LoginCashier from "./pages/login/loginCashier";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";
import CekEmail from "./pages/forgotPassword/cekEmail";
import ResetPassword from "./pages/resetPassword/resetPassword";
import Auth from "./components/auth";
import Menu from "./pages/menu";
import DashboardCashier from "./pages/dashboard/cashier";
// import Home from "./pages/home";

function App() {
  return (
    <>
      <Auth>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/login-cashier" element={<LoginCashier />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
          <Route path="/cek-email" element={<CekEmail />} />
        <Route path="/dashboard-cashier" element={<DashboardCashier />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/search" element={<Menu />} />
      </Routes>
      </Auth>
    </>
  );
}

export default App;
