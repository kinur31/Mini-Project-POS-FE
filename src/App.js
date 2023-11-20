import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import DashboardPage from "./pages/dashboard/dashboardPage";
import Sidebar1 from "./components/sidebar/sidebar1";
import PageReport from "./pages/report";
import SalesReportTable from "./components/report/salesReportTable";

function App() {
   return (
    <>
      <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/sidebars" element={<Sidebar1 />}/>
        <Route path="/report" element={<PageReport/>}/>
        <Route path="/table-report" element={<SalesReportTable />}/>
      </Routes>
    </>
  );
}

export default App;
