import { Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/login/loginScreen";
import LoginAdmin from "./pages/login/loginAdmin";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";
import CekEmail from "./pages/forgotPassword/cekEmail";
import ResetPassword from "./pages/resetPassword/resetPassword";
import Auth from "./components/auth";
import DashboardAdmin from "./pages/dashboardAdmin/dahsboardAdmin";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.AuthReducer);

  return (
    <>
      <Auth>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
          <Route path="/cek-email" element={<CekEmail />} />
          <Route
            path="/admin"
            element={
              user?.roleId === "2" ? <DashboardAdmin /> : <LoginScreen />
            }
          />
        </Routes>
      </Auth>
    </>
  );
}

export default App;
