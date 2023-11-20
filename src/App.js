import { Routes, Route } from "react-router-dom";
import DashboardAdmin from "./pages/dashboard/dashboardAdmin";
import Auth from "./components/auth";

function App() {
  return (
    <>
      <Auth>
        <Routes>
          <Route path="/user-management" element={<DashboardAdmin />} />
        </Routes>
      </Auth>
    </>
  );
}

export default App;
