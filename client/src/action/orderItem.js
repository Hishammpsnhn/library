import * as api from '../api'

export const purcheseItem = async(datas)=>{
    const {data} = await api.orderItem(datas);
    console.log(data)
}