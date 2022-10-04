import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myOrders } from '../action/orderItem'
import TableSkeliton from './skellitons/TableSkeliton'
import Table from './Table/Table'
import Thead from './Table/Thead'

function MyOrders() {
    const [orders, setOrders] = useState([])
    console.log(orders)
    const { isLoading } = useSelector((state) => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(myOrders()).then((res) => setOrders(res))
    }, [])

    if (isLoading) return (
        <div className='m-10'>
            <TableSkeliton />
            <TableSkeliton />
            <TableSkeliton />
            <TableSkeliton />
            <TableSkeliton />
            <TableSkeliton />
            <TableSkeliton />
            <TableSkeliton />
            <TableSkeliton />
        </div>
    )

    return (
        <div className="  py-4 sm:px-6 lg:px-8 overflow-y-scroll">
                <table className=" w-full m-auto text-center">
                    <Table />
                    {orders.map((item, i) => {
                        return (
                            <Thead
                                name={item.orderItems[0].name}
                                image={item.orderItems[0].image}
                                price={item.totalPrice}
                                index={i + 1}
                                status={item.status}
                            />
                        )
                    })}
                </table>
        </div>

    )
}

export default MyOrders