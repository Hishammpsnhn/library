import {configureStore} from '@reduxjs/toolkit';
import bookReducer from '../feature/BooksSlice'
import userReducer from '../feature/UserSlice'

export const store = configureStore({
    reducer:{
        products:bookReducer,
        user:userReducer
    },
})