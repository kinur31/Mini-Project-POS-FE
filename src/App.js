import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import DashboardPage from "./pages/dashboard/dashboardPage";
import Sidebar1 from "./components/sidebar/sidebar1";
import PageReport from "./pages/report";
import SalesReportTable from "./components/report/salesReportTable";
// import BodyManageProduct from "./components/manageProduct/manageProduct";
import HeadManageProduct from "./components/manageProduct/headManage";
import Products from "./pages/manageProductPage/manageProducts";
import Category from "./pages/manageCategoryPage/manageCategory";
import ModalCategory from "./components/modal/modalCategory";
import ModalProduct from "./components/modalEditProduct/editProduct";
import Menu from "./pages/menu";
import ProductList from "./components/productList/bodyProductList";









function App() {
   return (
    <>
      <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/sidebars" element={<Sidebar1 />}/>
        <Route path="/report" element={<PageReport/>}/>
        <Route path="/table-report" element={<SalesReportTable />}/>
        <Route path="/manage-product" element={<Products />}/>
        <Route path="/manage-head" element={<HeadManageProduct />}/>
        <Route path="/category" element={<Category />}/>
        <Route path="/modal-category" element={<ModalCategory />}/>
        <Route path="/edit-product" element={<ModalProduct />}/>
        <Route path="/product-list" element={<Menu />}/>
        {/* <Route path="/product-list" element={<ProductList />}/> */}
      </Routes>
    </>
  );
}

export default App;
