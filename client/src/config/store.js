import {configureStore} from '@reduxjs/toolkit';
import bookReducer from '../feature/counter/BooksSlice'

export const store = configureStore({
    reducer:{
        products:bookReducer,
    },
})