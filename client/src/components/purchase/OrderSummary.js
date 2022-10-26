import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../action/ProductAction';
import { isLoading } from '../../feature/BooksSlice';
import Button from '../Button'
import CardSkeliton from '../skellitons/CardSkeliton';
import OrderedProduct from './OrderedProduct';

function OrderSummary({ setStepper, product, setProduct, setAddAddress, setAddResRadio,addresRadio }) {
    const userIsLogin = useSelector((state) => state.user.user);
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
    const total = product?.discount / 100 * product?.price;
    const handleRadioChange = (i) => {
        setAddResRadio(i)
    }
    const handleAddAdress = () => {
        setAddAddress(true)
        setStepper(0)
    }
    const handleSubmit = ()=>{
        if(addresRadio){
            setStepper(2)
        }else{
            alert("select a address")
        }
    }
    return (
        <div className='h-fit w-full' >
            <div className='flex flex-row justify-between'>
                <h2 className='text-white text-xl font-medium pt-5 '>Delivary to:</h2>
                <Button action={handleAddAdress} text='Add Address' style='p-1 text-[15px]' />
            </div>
            {userIsLogin.addresses?.map((item, i) => (
                <div className={`w-full flex  text-white mt-1 p-2 ${userIsLogin?.addresses.length - 1 == i && 'border-b-2'} border-t-2 border-gray-300`}>
                    <input className='mr-5' type="radio" id="html" name="fav_language"
                        value={i}
                        onClick={() => handleRadioChange(i)}
                    ></input>
                    <div>
                        <div className=' flex flex-row text-lg font-medium capitalize '>
                            <p>{userIsLogin?.name},</p>
                            <p>{item.pincode}</p>
                        </div>
                        <div className="flex flex-row text-sm font-thin capitalize ">
                            <p>{item.address},</p>
                            <p>{item.city},</p>
                            <p>{item.phoneNo}</p>
                        </div>
                    </div>
                </div>
            ))}
            <h2 className='text-white text-xl font-medium pt-5 '>Product Details</h2>
            <div className="w-full h-[100%] overflow-hidden" >
                {Loading ?
                    <div  >
                        <CardSkeliton />
                    </div>
                    : <OrderedProduct product={product} />}
            </div>

            <h2 className='text-white text-xl font-medium pt-5 '>Return Details</h2>
            <p className='text-red-700' >The Product must return with in 7 days</p>
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
            <Button text="Continue"
                action={handleSubmit}
                style='mt-5' />
        </div>
    )
}

export default OrderSummary