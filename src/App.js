import { Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/login/loginScreen";
import LoginAdmin from "./pages/login/loginAdmin";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";
import CekEmail from "./pages/forgotPassword/cekEmail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/cek-email" element={<CekEmail />} />
        <Route path="/dashboard-admin" element={<LoginAdmin />} />
      </Routes>
    </>
  );
}

export default App;
