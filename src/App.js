import { Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/login/loginScreen";
import LoginCashier from "./pages/login/loginCashier";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";
import CekEmail from "./pages/forgotPassword/cekEmail";
import ResetPassword from "./pages/resetPassword/resetPassword";
import Auth from "./components/auth";
import Menu from "./components/menu";
import DashboardCashier from "./pages/dashboard/cashier";
// import Home from "./pages/home";
import DashboardAdmin from "./pages/dashboard/dashboardAdmin";
import Profile from "./components/profile/profile";
import CashierProfile from "./pages/dashboard/cashier/profile";
import LoginAdmin from "./pages/login/loginAdmin";
import CekEmail1 from "./pages/forgotPassword/cekEmailAdmin";
import CekEmail2 from "./pages/forgotPassword/cekEmailCashier";
import ForgotPassword2 from "./pages/forgotPassword/forgotPassword2";
import ForgotPassword1 from "./pages/forgotPassword/forgotPassword1";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/home";
import DashboardPage from "./pages/dashboard/dashboardPage";
import Sidebar1 from "./components/sidebar/sidebar1";
// import BodyManageProduct from "./components/manageProduct/manageProduct";
import HeadManageProduct from "./components/manageProduct/headManage";
import Products from "./pages/manageProductPage/manageProducts";
import Category from "./pages/manageCategoryPage/manageCategory";
import ModalCategory from "./components/modal/modalCategory";
import ModalProduct from "./components/modalEditProduct/editProduct";
import ProductList from "./components/productList/bodyProductList";

function App() {
  const { user, isLogin } = useSelector((state) => state.AuthReducer);

  return (
    <>
      <Auth>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/login-cashier" element={<LoginCashier />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
          <Route path="/cek-email" element={<CekEmail />} />
          <Route
            path="/cashier/dashboard"
            element={
              user && user.role_id === 2 ? (
                <DashboardCashier />
              ) : (
                <LoginScreen />
              )
            }
          />
          <Route path="/cashier/menu"  element={
              user && user.role_id === 2 ? (
                <Menu />
              ) : (
                <LoginScreen />
              )
            } />
          <Route path="/menu/search" element={<Menu />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/login-cashier" element={<LoginCashier />} />
          <Route path="/forgot-password1" element={<ForgotPassword1 />} />
          <Route path="/forgot-password2" element={<ForgotPassword2 />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
          <Route path="/cek-email1" element={<CekEmail1 />} />
          <Route path="/cek-email2" element={<CekEmail2 />} />
          <Route path="/admin/user-management"  element={
              user && user.role_id === 1 ? (
                <DashboardAdmin />
              ) : (
                <LoginScreen />
              )
            } />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cashier/profile"  element={
              user && user.role_id === 2 ? (
                <CashierProfile />
              ) : (
                <LoginScreen />
              )
            } />
        </Routes>
      </Auth>
      <Routes>
      <Route path="/admin/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/sidebars" element={<Sidebar1 />}/>
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
