import * as api from '../api'

export const addAddress = async (address) => {
    return new Promise(async(resolve,reject)=>{
        const { data } = await api.addAddress(address)     
        resolve(data)
    })

}