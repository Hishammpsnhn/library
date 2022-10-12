import * as api from '../api'
import { isLoading } from '../feature/BooksSlice';

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
       let {data} = await api.getSingleOrder(id)
       resolve(data)
    })
}

