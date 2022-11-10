import React, { useEffect, useState } from 'react'
import styles from '../../styles'
import Rating from '../Rating';

import { useLocation, useParams } from 'react-router-dom'
import { getSingleOrder } from '../../action/orderItem'
import { review } from '../../action/ProductAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import TableSkeliton from '../skellitons/TableSkeliton';

function OrderIems() {

  const userIsLogin = useSelector((state) => state.user.user)
  const { isLoading } = useSelector((state) => state.products)
  const [rating, setRating] = useState(null)
  const [order, setOrder] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const [res, setRes] = useState(null);
  const [input, setInput] = useState(false);

  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getSingleOrder(id)).then((order) => {
      setOrder(order)
      order.ProductId.reviews.forEach((element) => {
        if (element.user == userIsLogin?._id) {
          setRes(element)
        }
      });
    })
  }, [])

  useEffect(() => {
    if (order) {
      review({ rating: rating, id: order?.ProductId._id }).then((res) => {
        setRes(res)
      })
    }
  }, [rating])


  const handleSubmit = () => {
    if (review) {
      review({ id: order?.ProductId._id, comment: `${userIsLogin.name} : ${reviewText}` }).then((res) => {
        toast('review added', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setRes(res)

      })
    }
  }

  if (isLoading) return (
    <div className='w-full'>
      < TableSkeliton />
    </div>
  )

  return (
   
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
            <Rating editing={true} setRating={setRating} rating={rating} value={res?.rating} />
            <p
              className='text-blue-800 cursor-pointer'
              onClick={() => setInput(prev => !prev)}
            >Write a review</p>
          </div>
        </div>
        <div>
          {
            input && (
              <>
                <input
                  type='text'
                  defaultValue={res?.comment?.split(":")[1]}
                  placeholder='add a review'
                  onChange={(e) => setReviewText(e.target.value)} />
                <button className='bg-slate-400  text-black ' onClick={handleSubmit}>Submit</button>
              </>
            )
          }
          <ToastContainer />
        </div>

      </div>
   
  )
}

export default OrderIems