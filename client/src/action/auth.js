import * as api from '../api'
import { User } from '../feature/UserSlice'

export const CheckLoginUser = () => async (dispatch) => {
    let { data } = await api.CheckLoginUser()
    dispatch(User(data))
}

export const loginUser = (userInfo) => async (dispatch) => {
    return new Promise(async (resolve, reject) => {
        try {
            await api.loginUser(userInfo)
            dispatch(CheckLoginUser())
            resolve("heloo")
        } catch (error) {
            reject(error)
        }
    })
}

export const registerUser = (userInfo) => async (dispatch) => {
   const {data} = await api.registerUser(userInfo)
    dispatch(CheckLoginUser())
  
}

export const logout = async () => {
    return new Promise(async (resolve, reject) => {
        let { data } = await api.logOutUser();
        resolve(data)
    })
}

//email check for send otp 
export const forgotPasswordEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        console.log(email)
        let { data } = await api.forgotPasswordEmail({ email })

        resolve(data)
    })
}

//email check for send otp 
export const forgotPasswordOtp = (otp) => {
    return new Promise(async (resolve, reject) => {
        let { data } = await api.forgotPasswordOtp({ otp })
        resolve(data)
    })
}

//add address for pusrchase
export const addAddres =(address)=> async (dispatch) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await api.addAddress(address)
        resolve(data)
        dispatch(User(data))
    })

}
export const addressDelete = (id) => (dispatch) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await api.addressDelete(id)
        resolve(data)
        dispatch(User(data))
    })
}




