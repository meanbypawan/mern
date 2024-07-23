import { configureStore } from "@reduxjs/toolkit";
import MasterSlice from "./MasterSlice";
import CounterSlice from "./CounterSlice";

const store = configureStore({
    reducer:{
        MasterData:MasterSlice,
        Counters: CounterSlice
    }
});
// MasterData : {message: "Hello Redux"}
// Counters: {counter:100,evenCounter:2,oddCounter:1}
export default store;