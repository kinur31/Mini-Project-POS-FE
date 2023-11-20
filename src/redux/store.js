import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducer/authReducer";
import cartSlice from "./reducers/cartSlice";
import paymentSlice from "./reducers/paymentSlice";

export const store = configureStore({
  reducer: {
    AuthReducer: AuthReducer,
    cart: cartSlice,
    payment: paymentSlice,
  },
});

export default store;
