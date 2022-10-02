import * as api from '../api'

export const purcheseItem = async(datas)=>{
    const {data} = await api.addOrderItem(datas);
    console.log(data)
}
export const myOrders = async()=>{
    return new Promise(async (resolve, reject) => {
        let { data } = await api.myOrders()
        console.log(data)
        resolve(data)
    })
}
