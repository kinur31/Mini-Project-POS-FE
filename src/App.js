import { Routes, Route } from "react-router-dom";
import Menu from "./pages/menu";
import DashboardCashier from "./pages/dashboard/cashier";
// import Home from "./pages/home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<DashboardCashier />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/search" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
