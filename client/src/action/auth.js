import * as api from '../api'
import {User} from '../feature/UserSlice'

export const CheckLoginUser = () => async (dispatch) => {
    return new Promise(async (resolve, reject) => {
        let { data } = await api.CheckLoginUser()
        console.log(data)
         dispatch(User(data));
         resolve(data)
    })

}
export const loginUser = (userInfo) => async (dispatch) => {
    return new Promise(async (resolve, reject) => {
        let { data } = await api.loginUser(userInfo)
        console.log(data)
        dispatch(User(data));
        // resolve(data)
    })

}
export const registerUser =(userInfo)=> async (dispatch) => {
    return new Promise(async (resolve, reject) => {
        let { data } = await api.registerUser(userInfo)
        dispatch(User(data));
        // resolve(data)
    })

}