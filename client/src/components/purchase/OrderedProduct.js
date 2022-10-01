import React from 'react'
import Rating from '../Rating'

function OrderedProduct({product}) {
    
    return (
        <div className=' w-full flex flex-row text-white border border-blue-300 '>
            <div className='w-[200px] ' >
                <img src={product?.image} alt={product?.bookname} />
            </div>
            <div className='w-full pl-2 capitalize '>
                <p className='font-poppins text-lg font-medium ' >{product?.bookname}</p>
                <p>{product?.author}</p>
                <Rating rating={product?.rating} />
            </div>
        </div>
    )
}

export default OrderedProduct