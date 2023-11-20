import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import paymentSlice from "./reducers/paymentSlice";
import authReducer from "./reducers/authReducer";

export const store = configureStore({
  reducer: {
    AuthReducer: authReducer,
    cart: cartSlice,
    payment: paymentSlice,
  },
});

export default store;
