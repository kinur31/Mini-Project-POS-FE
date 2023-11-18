import { Routes, Route } from "react-router-dom";
import DashboardAdmin from "./pages/dashboard/dashboardAdmin";
import ModalCreateCashier from "./components/modalCreateCashier/modalCreateCashier";
function App() {
  return (
    <>
      <Routes>
        <Route path="/user-management" element={<DashboardAdmin />} />
        <Route path="/test" element={<ModalCreateCashier />} />
      </Routes>
    </>
  );
}

export default App;
