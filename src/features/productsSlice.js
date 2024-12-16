import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/config";
import { useEffect } from "react";

const initialState = { loading: false, products: [], error: "" };

const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
  return api.get("products");
});

const productsSlice = createSlice({
  initialState,
  name: "products",
  extraReducers: ({ addCase }) => {
    addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    addCase(fetchProducts.fulfilled, (state, action) => {
      (state.loading = false),
        (state.products = action.payload),
        (state.error = "");
    });
    addCase(fetchProducts.rejected, (state, action) => {
      (state.loading = false),
        (state.products = []),
        (state.error = action.error.message);
    });
  },
});

export default productsSlice.reducer;
export { fetchProducts };
