import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myOrders } from '../action/orderItem'
import TableSkeliton from './skellitons/TableSkeliton'
import Table from './Table'

function MyOrders() {
    const [orders, setOrders] = useState([])
    const {isLoading } = useSelector((state) => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(myOrders()).then((res) => setOrders(res))
    }, [])

    if(isLoading)return(
        <div className='m-10'>
            <TableSkeliton/>
            <TableSkeliton/>
            <TableSkeliton/>
            <TableSkeliton/>
            <TableSkeliton/>
            <TableSkeliton/>
            <TableSkeliton/>
            <TableSkeliton/>
            <TableSkeliton/>
        </div>
    )

    return (
        <div>
            <Table orders={orders} />
        </div>

    )
}

export default MyOrders