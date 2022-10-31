import * as api from '../api'
import { isLoading } from '../feature/BooksSlice';

//get all orders 
export const allOrders = async () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await api.allOrders();
        resolve(data)
    })
}


export const purcheseItem = async (datas) => {
    const { data } = await api.addOrderItem(datas);
    console.log(data)
}
export const myOrders = () => (dispatch) => {
    return new Promise(async (resolve, reject) => {
        dispatch(isLoading(true))
        let { data } = await api.myOrders()
        console.log(data)
        resolve(data)
        dispatch(isLoading(false))
    })
}

export const getSingleOrder = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let { data } = await api.getSingleOrder(id)
            if (data) {
                console.log("good")
                resolve(data)
            }
        } catch (error) {
            reject(error)

        }
    })
}
export const returnProduct = async (id) => {
    return new Promise(async (resolve, reject) => {
        let { data } = await api.returnProduct(id)
        resolve(data)
    })
}

