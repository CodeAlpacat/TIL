import { createSlice } from "@reduxjs/toolkit";

const initialProductState = { product: {title: '', price: 0, description: ''}}

const productSlice = createSlice({
  name: 'product',
  initialState: initialProductState,
  reducers: {
    
  }
})