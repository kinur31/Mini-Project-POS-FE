import { Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/login/loginScreen";
import LoginCashier from "./pages/login/loginCashier";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/login-cashier" element={<LoginCashier />} />
      </Routes>
    </>
  );
}

export default App;
