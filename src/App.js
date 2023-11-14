import { Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/login/loginScreen";
import LoginAdmin from "./pages/login/loginAdmin";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard-admin" element={<LoginAdmin />} />
      </Routes>
    </>
  );
}

export default App;
