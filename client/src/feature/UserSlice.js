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
      console.log(action.payload)
      state.user = action.payload
    }
  },
})

export const { User } = UserSlice.actions
export default UserSlice.reducer