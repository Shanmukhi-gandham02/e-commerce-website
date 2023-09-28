import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { calculateTotals } from "./cartSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice,
    },
});

store.dispatch(calculateTotals());

export default store;