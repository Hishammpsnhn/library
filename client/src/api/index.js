import axios from 'axios';
//const API ="https://library-stock.herokuapp.com"
const API ="http://localhost:5000"
//product 
export const getProduct = () => axios.get(`${API}/api/product`)
export const addProduct = (product) => axios.post(`${API}/api/product`,product)
export const editProduct = (id,product) => axios.post(`${API}/api/product/${id}/edit`,product)
export const getOneProduct = (id) => axios.get(`${API}/api/product/${id}/getbook`)

//authentication
export const CheckLoginUser = ()=> axios.get(`${API}/api/auth`) 
export const registerUser = (data) => axios.post(`${API}/api/auth/register`,data)
export const loginUser = (data) => axios.post(`${API}/api/auth/login`,data)
export const logOutUser = () => axios.get(`${API}/api/auth/logout`)
export const forgotPasswordEmail= (data)=> axios.post(`${API}/api/auth/forgot-password/email`,data)
export const forgotPasswordOtp= (otp)=> axios.post(`${API}/api/auth/forgot-password/otp`,otp)
//user address
export const addAddress = (address) => axios.post(`${API}/api/auth/user-address`,address)
export const addressDelete = (id) => axios.get(`${API}/api/auth/${id}/addressdelete`)
//orders Api
export const allOrders = () => axios.get(`${API}/api/orders`)
export const addOrderItem = (data)=> axios.post(`${API}/api/orders`,data)
export const myOrders = ()=> axios.get(`${API}/api/orders/myorders`);
export const getSingleOrder = (id) => axios.get(`${API}/api/orders/${id}/getoneorder`);
export const returnProduct = (id) => axios.get(`${API}/api/orders/${id}/return`)

//myorders-review
export const review = (rating) => axios.post(`${API}/api/product/review`,rating)
//search && catagory sort
export const search = (search) => axios.get(`${API}/api/product/search?search=${search}`,search)
export const sciBooks = ()=>axios.get(`${API}/api/product/scibooks`)