import { configureStore } from "@reduxjs/toolkit";
import MyProductReducer from '../newredux/myproductSlice';


export const mystore=configureStore({
    reducer:{
        product:MyProductReducer,
    },
});