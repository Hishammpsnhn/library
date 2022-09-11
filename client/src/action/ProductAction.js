import axios from 'axios';
import * as api from '../api'
import { addBooks } from '../feature/counter/BooksSlice';

export const getProduct = async (dispatch) => {
    try {
        const {data}  = await api.getProduct();
        console.log(data);
        dispatch(addBooks(data));
      } catch (err) {
        console.log(err)
      }
}

export const addProductActions = async (product) => {
    try {
        const { data } = await api.addProduct(product)
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}

export const getOneProduct = async (id) => {
    return new Promise(async(resolve,reject)=>{
        const { data } = await api.getOneProduct(id)     
        resolve(data)
    })
  }
