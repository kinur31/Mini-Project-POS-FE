import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import paymentSlice from "./reducers/paymentSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    payment: paymentSlice,
  },
});

export default store;
