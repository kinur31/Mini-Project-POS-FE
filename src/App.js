import { Routes, Route } from "react-router-dom";
import DashboardAdmin from "./pages/dashboard/dashboardAdmin";
function App() {
  return (
    <>
      <Routes>
        <Route path="/user-management" element={<DashboardAdmin />} />
      </Routes>
    </>
  );
}

export default App;
