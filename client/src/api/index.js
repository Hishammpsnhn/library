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
export const logOutUser = () => axios.get('/api/auth/logout')
export const forgotPasswordEmail= (data)=> axios.post('/api/auth/forgot-password/email',data)
export const forgotPasswordOtp= (otp)=> axios.post('/api/auth/forgot-password/otp',otp)
//user address
export const addAddress = (address) => axios.post('/api/auth/user-address',address)

//orders Api
export const allOrders = () => axios.get('/api/orders')
export const addOrderItem = (data)=> axios.post(`/api/orders`,data)
export const myOrders = ()=> axios.get(`/api/orders/myorders`);
export const getSingleOrder = (id) => axios.get(`/api/orders/${id}/getoneorder`);
export const returnProduct = (id) => axios.get(`/api/orders/${id}/return`)

//myorders-review
export const review = (rating) => axios.post('/api/product/review',rating)
//search
export const search = (search) => axios.get(`/api/product/search?search=${search}`,search)