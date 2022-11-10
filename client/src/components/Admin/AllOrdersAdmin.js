import React, { useEffect, useState } from 'react'
import { allOrders, returnProduct } from '../../action/orderItem'

function AllOrdersAdmin() {
    const [allorders, setAllOrders] = useState([])
    useEffect(() => {
        allOrders().then(res => setAllOrders(res))
    }, [])

    const handleReturn = (id) => {
        returnProduct(id).then((res) => {
            setAllOrders(res)
        })
    }
    console.log(allorders)
    return (
        <>
            {
                allorders?.map((item, i) => (
                    <div className='w-full capitalize flex flex-row justify-between bg-white text-black font-poppins mb-1 p-2'>
                        <div className=''>
                            <p><strong>Product ID :</strong> {item?.ProductId?._id}</p>
                            <p><strong>User ID :</strong>  {item?.user}</p>
                            <p> <strong>Date of Purchase :</strong> {item?.createdAt}</p>
                            <p> <strong>Return Last Date :</strong> {item?.returnLastDate} </p>
                            {item?.returnedAt && (
                            <p><strong>return Date :</strong>{item?.returnedAt}</p>
                            )}
                        </div>
                        <div className='flex flex-col justify-center'>
                            <button className='bg-blue-800 text-white opacity-90 hover:opacity-100 border-none rounded-md p-1.5 mb-1'>User Details</button>
                            <button className='bg-blue-800 text-white opacity-90 hover:opacity-100 border-none rounded-md p-1.5 mb-1'>Product Details</button>

                            {item?.isReturned ? (
                                <button className='bg-green-600 text-white opacity-90 hover:opacity-100 border-none rounded-md p-1.5'>Returned</button>
                            ) : (
                                <button
                                    onClick={() => handleReturn(item?._id)}
                                    className='bg-red-700 text-white opacity-90 hover:opacity-100 border-none rounded-md p-1.5'>Return</button>
                            )}

                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default AllOrdersAdmin