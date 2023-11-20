import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    paymentAmount: "",
    paymentChange: 0,
  },
  reducers: {
    setPaymentAmount: (state, action) => {
      state.paymentAmount = action.payload;
    },
    setPaymentChange: (state, action) => {
      state.paymentChange = action.payload;
    },
    resetTransaction: (state) => {
      state.paymentAmount = 0;
      state.paymentChange = 0;
    },
  },
});

export const { setPaymentAmount, setPaymentChange, resetTransaction } =
  transactionSlice.actions;

export default transactionSlice.reducer;
