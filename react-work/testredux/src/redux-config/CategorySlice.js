import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk("CategorySlice/fetchCategory",async ()=>{
   let response = await axios.get("https://dummyjson.com/products/categories");
   return response.data;
});
const slice = createSlice({
    name:"CategorySlice",
    initialState:{
        categoryList: [],
        isLoading: true,
        error: null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCategory.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(fetchCategory.fulfilled,(state,action)=>{
            state.categoryList = action.payload;
            state.isLoading = false;
        }).addCase(fetchCategory.rejected,(state,action)=>{
            state.error = "Oops! something went wrong";
            state.isLoading = false;
        })
    }
});

export default slice.reducer;