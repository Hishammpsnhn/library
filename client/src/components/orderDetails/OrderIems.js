import React, { useEffect, useState } from 'react'
import styles from '../../styles'
import Rating from '../Rating';

import { useParams } from 'react-router-dom'
import { getSingleOrder } from '../../action/orderItem'
import { review } from '../../action/ProductAction';
import { useSelector } from 'react-redux';

function OrderIems() {
  const userIsLogin = useSelector((state) => state.user.user)
  const [rating, setRating] = useState(null)
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [reviewText,setReviewText] = useState('');

  useEffect(() => {
    if (order) {
      review({ rating: rating, id: order?.ProductId._id }).then((res) => {
        getSingleOrder(id).then((order) => {
          setOrder(order)
        })
      })
    }
  }, [rating])

  useEffect(() => {
    getSingleOrder(id).then((order) => {
      setOrder(order)
    })
  }, [])
  const handleSubmit = () => {
    if (review) {
      review({  id: order?.ProductId._id,comment:`${userIsLogin.name} : ${reviewText}` }).then((res) => {
        console.log(res)
      })
    }
  }
  return (
    <section className={`${styles.flexCenter} ${styles.boxWidth} mx-auto flex-col p-5 min-h-[78vh]  `}>
      <div className="border border-blue-300 justify-between w-full sm:flex-row p-3 ">
        <div className="xs:flex justify-between">

          <div className="flex flex-col pl-2  sm:items-start">
            <div className="  leading-tight text-white text-[15px] font-medium capitalize font-poppins md:text-[25px]">
              {order?.ProductId.bookname}
            </div>
            <div className={`${styles.paragraph} sm:text-start capitalize italic `}>
              {order?.ProductId.description}
            </div>

            <p className="text-white font-poppins font-thin text-sm " >
              $ {order?.ProductId.price}
            </p>
          </div>
          <img
            className=" h-[80px]  pr-0  flex "
            src={order?.ProductId.image}
            alt="imageUnavailable"
          />
        </div>
        <div className='text-white' >
          <h2>Review</h2>
          <div className='flex flex-row text-center items-center justify-between'>
            <Rating editing={true} setRating={setRating} rating={rating} value={order?.ProductId.rating} />
            <p className='text-blue-800 cursor-pointer'>Write a review</p>
          </div>
        </div>
        <div>
          <input type='text' className='' placeholder='add a review' onChange={(e)=> setReviewText(e.target.value)} />
          <button className='bg-slate-400  text-black 'onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </section>
  )
}

export default OrderIems