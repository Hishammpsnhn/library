import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../action/ProductAction';
import { isLoading } from '../../feature/BooksSlice';
import Button from '../Button'
import CardSkeliton from '../CardSkeliton';
import OrderedProduct from './OrderedProduct';

function OrderSummary({ setStepper,product,setProduct }) {
    const userIsLogin = useSelector((state) => state.user.user?.addresses[0]);

    const Loading = useSelector((state) => state.products.isLoading)

    const effectRan = useRef(false);
    const { id } = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(isLoading(true))
        if (effectRan.current === false) {
            getOneProduct(id).then((res) => {
                setProduct(res)
                dispatch(isLoading(false))
            })
        }
        effectRan.current = true

    }, [])
    const total = product?.discount / 100 * product?.price
    return (
        <div className='h-fit w-full' >
            <h2 className='text-white text-xl font-medium pt-5 '>Delivary to:</h2>
            <div className='text-white' >
                <p>{userIsLogin.addresses}</p>
                <p>{userIsLogin.city}</p>
                <p>{userIsLogin.pincode}</p>
                <p>{userIsLogin.phoneNo}</p>
            </div>
            <h2 className='text-white text-xl font-medium pt-5 '>Product Details</h2>
            <div className="w-full h-[100%] overflow-hidden" >
                {Loading ?
                <div  >
                    <CardSkeliton /> 
                </div> 
                : <OrderedProduct product={product} />}
            </div>
            <h2 className='text-white text-xl font-medium pt-5 '>Price Details</h2>
            <div className="text-white mt-0   flex flex-col " >
                <div className='justify-between flex flex-row' >
                    <p>Price</p>
                    <span className=' text-end'>₹{product?.price}</span>
                </div>
                <div className='justify-between flex flex-row' >
                    <p>Delivary charge</p>
                    <span className=' text-end'>₹0</span>
                </div>
                <div className='justify-between flex flex-row' >
                    <p>Discount</p>
                    <span className=' text-end'>{product?.discount}%</span>
                </div>
            </div>
            <hr className="mt-1 border-slate-500 " />
            <div className="text-white mt-0  items-end flex flex-col font-medium ">

                <p>{` Total ₹ ${product?.price - total}`}</p>
            </div>
            <Button text="Continue" action={() => setStepper(2)} style='mt-5' />
        </div>
    )
}

export default OrderSummary