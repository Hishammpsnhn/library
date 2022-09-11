import axios from 'axios';

const API = 'http://localhost:5000'

export const getProduct = () => axios.get('/api/product')
export const addProduct = (product) => axios.post('/api/product',product)
export const getOneProduct = (id) => axios.get(`/api/product/${id}/getbook`)