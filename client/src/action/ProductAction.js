import * as api from '../api'

export const addProductActions = async(product)=>{
    try {
        const {data}  = await api.addProduct(product)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
export const getProduct = async ()=>{
    const {data} = await api.getProduct()
    console.log(data)
}