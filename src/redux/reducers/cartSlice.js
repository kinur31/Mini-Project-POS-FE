import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setPaymentAmount, setPaymentChange } from "./paymentSlice";
// import { useToast } from "@chakra-ui/react";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingItem) {
        existingItem.qty += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingItem) {
        existingItem.qty -= 1;

        if (existingItem.qty === 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
    checkoutStart: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    checkoutSuccess: (state, action) => {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
    checkoutFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload; // You can pass an error message or object
    },
  },
});

// Async action to handle checkout
export const checkoutAsync = () => async (dispatch, getState) => {
  dispatch(checkoutStart());

  try {
    const cartItems = getState().cart.items;
    console.log(cartItems);
    const paymentAmount = getState().payment.paymentAmount;
    console.log(paymentAmount);
    const paymentChange = getState().payment.paymentChange;
    console.log(paymentChange);

    // Simulate an API request to complete the checkout
    // const response = await axios.post('http://localhost:8000/transaction', {
    const response = await axios.post(
      "http://localhost:8080/transaction/checkout",
      {
        cartItems,
        paymentAmount,
        paymentChange,
      }
    );

    // Check the response for success
    // if (response.data.success) 
      // Dispatch the success action
      dispatch(checkoutSuccess());

      // Update paymentAmount and paymentChange
      dispatch(setPaymentAmount(""));
      // dispatch(setPaymentChange(response.data.paymentChange));
      dispatch(setPaymentChange(0));
      
      
  } catch (error) {
    console.error("Error during checkout:", error.message);
    alert("Transaction failed");
    // Dispatch the failure action with the error message
    dispatch(
      checkoutFailure("An error occurred during checkout. Please try again.")
    );
  }
};

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  checkoutStart,
  checkoutSuccess,
  checkoutFailure,
} = cartSlice.actions;

export default cartSlice.reducer;
