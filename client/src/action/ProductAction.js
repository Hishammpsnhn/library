import * as api from '../api'
import { addBooks, isLoading } from '../feature/BooksSlice';

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
    return new Promise(async (resolve, reject) => {
        const { data } = await api.getOneProduct(id)
        resolve(data)
    })
}

