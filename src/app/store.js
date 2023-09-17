import { configureStore } from '@reduxjs/toolkit';
import sliderReducers from '../features/slideSlicer/sliderSlice';
import productReducers from '../features/slideSlicer/productSlice'
import cartReducer from '../features/slideSlicer/cartSlice'
import authReducers from "../features/slideSlicer/authSlice"

export const store = configureStore({
  reducer: { 
    slider: sliderReducers,
    products:productReducers,
    cart:cartReducer,
    user:authReducers,
  },
});