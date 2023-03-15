import { createSlice } from "@reduxjs/toolkit";


const MyProductSlice=createSlice({
    name:'Product',
    initialState:[],
    reducers:{
        addMyProducts(state,action){
            state.push(action.payload);
        },
        removeMyProducts(state,action){
            state.push(action.payload);
        },
    },
});


export const {addMyProducts,removeMyProducts}=MyProductSlice.actions;
export default MyProductSlice.reducer;
