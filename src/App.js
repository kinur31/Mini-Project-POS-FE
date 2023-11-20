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
import DashboardAdmin from "./pages/dashboard/dashboardAdmin";
import Profile from "./components/profile/profile";
import CashierProfile from "./pages/dashboard/cashier/profile";

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
        <Route path="/cashier-dashboard" element={<DashboardCashier />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/search" element={<Menu />} />
          <Route path="/user-management" element={<DashboardAdmin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cashier-profile" element={<CashierProfile />} />
        </Routes>
      </Auth>
    </>
  );
}

export default App;
