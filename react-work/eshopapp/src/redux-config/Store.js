import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";

const store = configureStore({
    reducer:{
        Categories: CategorySlice
    }
});

export default store;