import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myOrders } from '../../action/orderItem'
import TableSkeliton from '../skellitons/TableSkeliton'
import Table from '../Table/Table'
import Thead from '../Table/Thead'

function MyOrders() {
    const { isLoading } = useSelector((state) => state.products)
    
    const [orders, setOrders] = useState([])
    
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

        </div>
    )

    return (
        <div className="  py-4 min-h-[68vh] sm:px-6 lg:px-8 overflow-x-scroll md:overflow-x-hidden">
            <table className=" w-full m-auto text-center">
                <Table myOrder={true} />
                {orders.map((item, i) => {
                    return (
                        <Thead
                            key={i}
                            returnLastDate={item.returnLastDate}
                            createdAt={item.createdAt}
                            name={item.orderItems.name}
                            image={item.orderItems.image}
                            price={item.totalPrice}
                            index={i + 1}
                            status={item.status}
                            myOrder={true}
                            id={item._id} o
                        />
                    )
                })}
            </table>
        </div>

    )
}

export default MyOrders