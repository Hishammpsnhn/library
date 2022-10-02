import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { getOneProduct } from "../action/ProductAction";
import Bounce from 'react-reveal/Bounce';

function Card(
  {
    id,
    author,
    bookname,
    countInStock,
    createdAt,
    description,
    image,
    price,

  }

) {
  const navigate = useNavigate();

  const handleDetails = async () => {
    navigate(`/details/${id}`)
  };

  const handlePurchase = () => {
    navigate(`/purchase/${id}`)
  };
  const handleOutofStock = () => {
    alert("out of stock")
  }

  return (
    <Bounce bottom >
      <div className="bg-slate-900  mx-auto max-w-sm rounded-xl overflow-hidden  ">

        <div className="cursor-pointer" onClick={handleDetails}>
          <img
            className="w-[300px] h-[250px]"
            src={image}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-poppins font-medium capitalize  text-white text-xl mb-2">{bookname}</div>
            <p className="text-dimWhite font-poppins  text-base capitalize ">
              {`Author : ${author}`}
            </p>
            <p className="text-dimWhite font-poppins  text-base capitalize ">
              {description}
            </p>
            <p className="text-dimWhite font-poppins  text-base  ">
              {`Price : ${price}/day`}
            </p>
          </div>
        </div>
        {
          countInStock <= 0 ?
            <Button action={handleOutofStock} text='out of stock' style=' text-red-700' />: <Button action={handlePurchase} />

        }
      </div>
    </Bounce>
  );
}

export default Card;
