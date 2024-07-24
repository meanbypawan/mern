import { configureStore } from "@reduxjs/toolkit";
import MasterSlice from "./MasterSlice";
import CounterSlice from "./CounterSlice";
import CategorySlice from "./CategorySlice";

const store = configureStore({
    reducer:{
        MasterData:MasterSlice,
        Counters: CounterSlice,
        CategoriesData: CategorySlice
    }
});
// MasterData : {message: "Hello Redux"}
// Counters: {counter:100,evenCounter:2,oddCounter:1}
// CategoriesData: {categoryList:[],isLoading: true,error:null}
export default store;