import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../action/ProductAction";
import { getProduct } from "../api";
import { isLoading } from "../feature/BooksSlice";
import styles from "../styles";
import Button from "./Button";
import Rating from "./Rating";
import Review from "./Review";

function Details({ setModal }) {
  const Loading = useSelector((state) => state.products.isLoading)
  const dispatch = useDispatch();
  
  const { id } = useParams();
  const [book, setBook] = useState('')

  useEffect(() => {
    dispatch(isLoading(true))
    getOneProduct(id).then((product) => {
      setBook(product);
      dispatch(isLoading(false))
    })
  },[id])

  const handleClose = () => {
    setModal((prev) => !prev)
  }

  if(Loading){
    return(
      <div className="text-white">
        Loading...
      </div>
    )
  }
  return (
    <section className={`${styles.flexCenter} ${styles.boxWidth} mx-auto flex-col`}>
      <div className="border   border-blue-300 justify-between w-full sm:flex-row p-2">
        <div className="sm:flex  ">
          <img
            className=" h-[350px]  pr-0 sm:pr-5 flex mx-auto sm:mx-0"
            src={book.image}
            alt="imageUnavailable"
          />
          <div className="flex flex-col pl-2  sm:items-start">
            <h2 className="text-white text-[30px] font-medium capitalize font-poppins md:text-[50px]">{book.bookname}</h2>
            <p className={`${styles.paragraph} sm:text-start capitalize italic `}>
              {book.description}
            </p>
            <Rating rating={book.rating} />
            <p className="text-white font-poppins font-thin text-2xl " >{`$ ${book.price}`}</p>
          </div>
        </div>
      <Review/>
      </div>
    </section>
  );
}

export default Details;
