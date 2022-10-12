import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleOrder } from '../../action/orderItem'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import OrderIems from '../../components/orderDetails/OrderIems'

function OrderDetails() {
 
    return (
        <div className='bg-black' >
            <Header />
            < OrderIems />
            <Footer />
        </div>
    )
}

export default OrderDetails