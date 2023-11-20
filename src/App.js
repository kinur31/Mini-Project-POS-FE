import { Routes, Route } from "react-router-dom";
import DashboardAdmin from "./pages/dashboard/dashboardAdmin";
import Profile from "./components/profile/profile";
import Auth from "./components/auth";

function App() {
  return (
    <>
      <Auth>
        <Routes>
          <Route path="/user-management" element={<DashboardAdmin />} />
          <Route path="/test" element={<Profile />} />
        </Routes>
      </Auth>
    </>
  );
}

export default App;
