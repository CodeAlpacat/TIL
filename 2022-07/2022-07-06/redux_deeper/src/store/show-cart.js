import { createSlice } from '@reduxjs/toolkit'


const initialShowState = { showCart: true }

const showCartSlice = createSlice({
  name: "showCart",
  initialState: initialShowState,
  reducers: {
    showCartHandler(state) {
      state.showCart = !state.showCart
    }
  }
})

export const showCartActions = showCartSlice.actions
export default showCartSlice



