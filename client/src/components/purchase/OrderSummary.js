import React from 'react'
import Details from '../Details'

function OrderSummary() {
    return (
        <div className='h-fit' >
            <h2 className='text-white text-xl font-medium pt-5 '>Delivary to:</h2>
            <div className='text-white' >
                <p>address</p>
                <p>city</p>
                <p>pincode</p>
                <p>number</p>
            </div>
            <h2 className='text-white text-xl font-medium pt-5 '>Product Details</h2>
            <div className="w-full h-[100%] overflow-hidden" >
                <Details order='true' />
            </div>
            <h2 className='text-white text-xl font-medium pt-5 '>Price Details</h2>
            <div className="text-white mt-0  items-end flex flex-col " >
                <p>Price: $1000</p>
                <p>Delivary charge: $0</p>
                <p>Discount: 2%</p>
            </div>
            <hr className="mt-1 border-slate-500 " />
            <div className="text-white mt-0  items-end flex flex-col font-medium ">

                <p>Total: $980</p>
            </div>
        </div>
    )
}

export default OrderSummary