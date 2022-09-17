import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  user: null,
}
export const UserSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    User: (state, action) => {
      console.log(state.user)
      console.log(action.payload)
      state.user = action.payload
    }
  },
})

export const getBooksAsync = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/product')

    dispatch(User(response.data));
  } catch (err) {
    console.log(err)
  }
};

export const { User } = UserSlice.actions
export default UserSlice.reducer