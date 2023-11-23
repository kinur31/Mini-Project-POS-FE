import { Routes, Route } from "react-router-dom";
import DashboardAdmin from "./pages/dashboard/dashboardAdmin";
import Auth from "./components/auth";
import LoginScreen from "./pages/login/loginScreen";
import LoginAdmin from "./pages/login/loginAdmin";
import LoginCashier from "./pages/login/loginCashier";
import ResetPassword from "./pages/resetPassword/resetPassword";
import CekEmail1 from "./pages/forgotPassword/cekEmailAdmin";
import CekEmail2 from "./pages/forgotPassword/cekEmailCashier";
import ForgotPassword2 from "./pages/forgotPassword/forgotPassword2";
import ForgotPassword1 from "./pages/forgotPassword/forgotPassword1";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.AuthReducer);
  return (
    <>
      <Auth>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/login-cashier" element={<LoginCashier />} />
          <Route path="/forgot-password1" element={<ForgotPassword1 />} />
          <Route path="/forgot-password2" element={<ForgotPassword2 />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
          <Route path="/cek-email1" element={<CekEmail1 />} />
          <Route path="/cek-email2" element={<CekEmail2 />} />
          <Route path="/user-management" element={<DashboardAdmin />} />
          <Route
            path="/admin"
            element={user?.roleId === 1 ? <DashboardAdmin /> : <LoginScreen />}
          />
        </Routes>
      </Auth>
    </>
  );
}

export default App;
