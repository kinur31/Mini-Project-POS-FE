import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AddProductPage from "./pages/addProductPage/addProductPage";
import DashboardPage from "./pages/dashboard/dashboardPage";
import Sidebar from "./components/sidebar/sidebar";
import Sidebar1 from "./components/sidebar/sidebar1";
import BodyManageProduct from "./components/manageProduct/manageProduct";
import HeadManageProduct from "./components/manageProduct/headManage";






function App() {
   return (
    <>
      <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/add-product" element={<AddProductPage />}/>
        <Route path="/sidebar" element={<Sidebar />}/>
        <Route path="/sidebars" element={<Sidebar1 />}/>
        <Route path="/manage-product" element={<BodyManageProduct />}/>
        <Route path="/manage-head" element={<HeadManageProduct />}/>
      </Routes>
    </>
  );
}

export default App;
