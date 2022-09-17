import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  books: [],
}
export const counterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      state.books = action.payload
    }
  },
})

export const getBooksAsync = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/product')

    dispatch(addBooks(response.data));
  } catch (err) {
    console.log(err)
  }
};

export const { addBooks } = counterSlice.actions
export default counterSlice.reducer