import axios from 'axios';

const API = 'http://localhost:5000'

//product 
export const getProduct = () => axios.get('/api/product')
export const addProduct = (product) => axios.post('/api/product',product)
export const editProduct = (id,product) => axios.post(`/api/product/${id}/edit`,product)
export const getOneProduct = (id) => axios.get(`/api/product/${id}/getbook`)

//authentication
export const CheckLoginUser = ()=> axios.get('/api/auth') 
export const registerUser = (data) => axios.post('/api/auth/register',data)
export const loginUser = (data) => axios.post('/api/auth/login',data)
export const forgotPasswordEmail= (data)=> axios.post('/api/auth/forgot-password/email',data)
export const forgotPasswordOtp= (otp)=> axios.post('/api/auth/forgot-password/otp',otp)

//user address
export const addAddress = (address) => axios.post('/api/product',address)