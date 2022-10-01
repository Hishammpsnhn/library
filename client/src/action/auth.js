import * as api from '../api'
import { User } from '../feature/UserSlice'

export const CheckLoginUser = () => async (dispatch) => {
    return new Promise(async (resolve, reject) => {
        let { data } = await api.CheckLoginUser()
        dispatch(User(data));
        resolve(data)
    })

}
export const loginUser = (userInfo) => async (dispatch) => {
    return new Promise(async (resolve, reject) => {
        let { data } = await api.loginUser(userInfo)
        dispatch(User(data));
    })

}
export const registerUser = (userInfo) => async (dispatch) => {
    return new Promise(async (resolve, reject) => {
        let { data } = await api.registerUser(userInfo)
        dispatch(User(data));
    })
}


//email check for send otp 
export const forgotPasswordEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        console.log(email)
        let { data } = await api.forgotPasswordEmail({email})

        resolve(data)
    })
}
//email check for send otp 
export const forgotPasswordOtp = (otp) => {
    return new Promise(async (resolve, reject) => {
        let { data } = await api.forgotPasswordOtp({otp})
        resolve(data)
    })
}

export const addAddress = async (address) => {
    console.log(address)
    return new Promise(async(resolve,reject)=>{
        const { data } = await api.addAddress(address)     
        resolve(data)
    })

}




