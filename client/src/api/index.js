import axios from 'axios';

const API = 'http://localhost:5000'

export const getProduct = () => axios.get('/api/product')
export const addProduct = (product) => axios.post('/api/product',product)
export const getOneProduct = (id) => axios.get(`/api/product/${id}/getbook`)


//user address
export const addAddress = (address) => axios.post('/api/product',address)

export const loginUser = (data) => axios.post('/api/auth/login',data)
export const registerUser = (data) => axios.post('/api/auth/register',data)
