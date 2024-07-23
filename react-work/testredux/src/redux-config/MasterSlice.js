import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "Master",
    initialState:{
        message: "Hello Redux"
    }
});

export default slice.reducer;