import { createSlice } from '@reduxjs/toolkit'

const cartSlice=createSlice({
name:'cart',
initialState:{value:5},
reducers:{
    ADD:(state,action)=>{
      state.value+=1
    },
    SUB:(state,action)=>{
        state.value-=1
    }
}


})
export const{ADD,SUB}=cartSlice.actions;
export default cartSlice.reducer;