import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";

export const store = configureStore({
    reducer: {
        product: productSlice,
        cart: cartSlice,
        category: categorySlice,
    }
})