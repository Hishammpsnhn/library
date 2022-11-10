import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: true,
}

let allbooks = []
export const counterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      allbooks = action.payload
      state.books = action.payload
    },
    editBook: (state, action) => {
      state.books = allbooks.map((post) => post._id === action.payload._id ? action.payload : post)
    },
    isLoading: (state, action) => {
      state.isLoading = action.payload
    }
  },
})



export const { addBooks, editBook, isLoading } = counterSlice.actions
export default counterSlice.reducer