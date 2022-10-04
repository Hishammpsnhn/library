import * as api from '../api'
import { addBooks, editBook, isLoading } from '../feature/BooksSlice';

export const getProduct = async (dispatch) => {
    try {
        dispatch(isLoading(true))
        const { data } = await api.getProduct();
        dispatch(addBooks(data));
        dispatch(isLoading(false))
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
    console.log(id)
    return new Promise(async (resolve, reject) => {
        const { data } = await api.getOneProduct(id);
        console.log(data)
        resolve(data)
    })
}

export const editProduct =(id,product) =>async(dispatch)=>{
        const { data } = await api.editProduct(id,product)
        dispatch(editBook(data))
}