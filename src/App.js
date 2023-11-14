import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AddProductPage from "./pages/addProductPage/addProductPage";
import DashboardPage from "./pages/dashboard/dashboardPage";



function App() {
   return (
    <>
      <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/add-product" element={<AddProductPage />}/>
      </Routes>
    </>
  );
}

export default App;
