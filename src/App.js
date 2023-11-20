import { Routes, Route } from "react-router-dom";
import DashboardAdmin from "./pages/dashboard/dashboardAdmin";
import Auth from "./components/auth";

function App() {
  return (
    <>
      <Auth>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/login-cashier" element={<LoginCashier />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
          <Route path="/cek-email" element={<CekEmail />} />
          <Route path="/user-management" element={<DashboardAdmin />} />
        </Routes>
      </Auth>
    </>
  );
}

export default App;
