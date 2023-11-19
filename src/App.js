import { Routes, Route } from "react-router-dom";
import DashboardAdmin from "./pages/dashboard/dashboardAdmin";
import Profile from "./components/profile/profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/user-management" element={<DashboardAdmin />} />
        <Route path="/test" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
