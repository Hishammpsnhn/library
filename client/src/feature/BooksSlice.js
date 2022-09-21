import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: true,
}
export const counterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      state.books = action.payload
    },
    isLoading :(state,action)=>{
      state.isLoading = action.payload
    }
  },
})



export const { addBooks,isLoading } = counterSlice.actions
export default counterSlice.reducer