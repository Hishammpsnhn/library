import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../action/ProductAction";
import { getProduct } from "../api";
import styles from "../styles";
import Button from "./Button";
import Rating from "./Rating";

function Details({ setModal }) {
  const { id } = useParams();

  const [book, setBook] = useState('')

  useEffect(() => {
    getOneProduct(id).then((product) => {
      console.log(product)
      setBook(product);
    })
  },[id])

  const handleClose = () => {
    setModal((prev) => !prev)
  }

  return (
    <section className={`${styles.flexCenter} w-full `}>
      <div className="border   border-blue-300 justify-between w-full sm:flex-row p-2">
        <div className="md:flex  ">
          <img
            className=" h-[350px] pr-0 sm:pr-5 flex mx-auto"
            src={book.image}
            alt="imageUnavailable"
          />
          <div className="flex flex-col pl-2  sm:items-start">
            <h2 className="text-white text-[30px] font-medium font-poppins md:text-[50px]">{book.bookname}</h2>
            <p className={`${styles.paragraph} sm:text-start `}>
              {book.description}
            </p>
            <Rating rating={book.rating} />

          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
