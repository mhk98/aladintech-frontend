import logger from "redux-logger";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";
import productsSlice from "../features/products/productsSlice";
import { productApi } from "../features/api/apiSlice";

const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: cartSlice,
    filter: filterSlice,
    // products: productsSlice
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
});

export default store;
