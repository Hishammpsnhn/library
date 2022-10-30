import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { purcheseItem } from '../../action/orderItem';
import Button from '../Button'

function Payment({ product, addresRadio }) {

  const shippingAddress = useSelector((state) => state.user.user?.addresses[addresRadio]);
  const total = product?.discount / 100 * product?.price
  const [radio, setRadio] = useState("cod")
  const { id } = useParams();
  const navigate = useNavigate()
  const handleSubmit = () => {
    //do something else
    if (radio === 'cod') {
      const ids = toast.loading("Please wait...")
      purcheseItem({
        orderItems: {
          product: id,
          name: product.bookname,
          image: product.image,
          price: product.price,
          qty: 1,
        },
        shippingAddress,
        paymentMethod: 'COD',
        itemsPrice: product?.price,
        shippingPrice: 0,
        totalPrice: product?.price - total
      }).then(() => {
        toast.update(ids, { render: "Order Placed", type: "success", isLoading: false })
          navigate('/')   
      })
    } else {
      toast.info('comming soon!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <div className='w-full'>

      <h2 className="mb-4 font-bold text-gray-900 text-center dark:text-white ">Payment Method</h2>
      <ul className="w-48 text-sm font-medium  m-auto text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input id="list-radio-license" type="radio" value="cod" name="list-radio"

              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              onChange={(e) => setRadio(e.target.value)}
            />

            <label for="list-radio-license" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">COD (cash on delivary)</label>
          </div>
        </li>
        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input id="list-radio-id" type="radio"
              onChange={(e) => setRadio(e.target.value)}
              value="online" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label for="list-radio-id" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Online Payment</label>
          </div>
        </li>
      </ul>
      <div className=' m-auto w-[60%] pt-5'>
        <Button action={handleSubmit} text='NEXT' />
        <ToastContainer autoClose={5000} />
      </div>
    </div>
  )
}

export default Payment