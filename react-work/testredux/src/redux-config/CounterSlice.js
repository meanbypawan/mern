import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "Counter",
    initialState:{
        counter: 100,
        evenCounter: 2,
        oddCounter: 1
    },
    reducers:{
        incrementCounter:(state,action)=>{
            state.counter = state.counter + action.payload.value;
        },
        incrementEvenCounter:(state,action)=>{
            state.evenCounter = state.evenCounter + 2;
        },
        incrementOddCounter: (state,action)=>{
            state.oddCounter = state.oddCounter + 2;
        }
    }
});
export const {incrementCounter,incrementEvenCounter, incrementOddCounter} = slice.actions; //{}
export default slice.reducer;