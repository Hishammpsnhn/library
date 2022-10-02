import React, { useEffect, useState } from 'react'
import { myOrders } from '../action/orderItem'

function Table({ myOrdercomponent }) {
  const [orders, setOrders] = useState([])
useEffect(() =>{
  if (myOrdercomponent) {
    myOrders().then((res) => setOrders(res))
    console.log(myOrdercomponent)
  }
},[])
  return (
    <div className="  py-4 sm:px-6 lg:px-8 overflow-y-scroll">
      <div className="">
        <table className=" w-full m-auto text-center">
          <thead className="border-b bg-gray-800">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                #
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                Image
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                Name
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                Price
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                status
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >

              </th>
            </tr>
          </thead>
          {orders.map((item,i) => (
            <tbody key={i}>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {i+1}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <img className='w-20 h-18' src={item.orderItems[0].image} />
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item.orderItems[0].name}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {item.totalPrice}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {item.status}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <button
                    type="button"
                    className="bg-slate-700  hover:opacity-80 w-20 p-2 rounded-md text-white"
                  //   onClick={() => setModal((prev) => !prev)}
                  >
                    EDIT
                  </button>
                </td>
              </tr>
            </tbody>
          ))}

        </table>
      </div>
    </div>
  )
}

export default Table