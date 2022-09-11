import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { getOneProduct } from "../action/ProductAction";

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

  const handleDetails =async () => {
    navigate(`/details/${id}`)
  };

  const handlePurchase = () => {
    navigate('/purchase')
  };

  return (
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
      <Button action={handlePurchase} />
    </div>
  );
}

export default Card;
