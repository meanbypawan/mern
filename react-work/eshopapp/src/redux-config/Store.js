import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import UserSlice from "./UserSlice";

const store = configureStore({
    reducer:{
        Categories: CategorySlice,
        User: UserSlice
    }
});

export default store;