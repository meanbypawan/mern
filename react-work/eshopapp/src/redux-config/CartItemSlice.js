import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "CartItemSlice",
    initialState:{
        cartItemList: [],
        totalPrice:0
    },
    reducers:{
        setCartItemList: (state,action)=>{
          state.cartItemList = action.payload;
          console.log(state.cartItemList);
          state.cartItemList.map((obj)=>{
            obj.productId.qty = 1;
            state.totalPrice = state.totalPrice + obj.productId.price * 1;
          });
        },
        updateQuantity: (state,action)=>{
          let qty = action.payload.qty;
          let index = action.payload.index;
          let obj = state.cartItemList[index];
          obj.productId.qty = qty;
          state.cartItemList.splice(index,1);
          state.cartItemList.splice(index,0,obj);
          state.totalPrice = 0;
          state.cartItemList.map((item)=>{
            state.totalPrice = state.totalPrice + item.productId.price * item.productId.qty;
          });
        }
    }
});
export const {setCartItemList, updateQuantity} = slice.actions;
export default slice.reducer;