import { Routes, Route } from "react-router-dom";
import ResetPassword from "./pages/resetPassword/resetPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
