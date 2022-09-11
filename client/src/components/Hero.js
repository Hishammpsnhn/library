import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

function Hero() {
  const Books = useSelector((state) => state.products.books)


  return (
    <div className="w-full justify-between
     items-center p-4 md:gap-8 gap-4 first-line: grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
     lg:grid-cols-4 xl:grid-cols-6" >
      {Books.map((items, i) => (

        <Card key={items._id}
          id={items._id}
          author={items.author}
          bookname={items.bookname}
          countInStock={items.countInStock}
          createdAt={items.createdAt}
          description={items.description}
          image={items.image}
          price={items.price}
       
        />
      ))}

    </div>
  );
}

export default Hero;
