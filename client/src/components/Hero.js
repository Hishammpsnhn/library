import React from "react";
import Card from "./Card";
import CardSkeliton from "./skellitons/CardSkeliton";

function Hero({books,isLoading}) {


  if (isLoading) {
    return (
      <div className="w-full justify-between 
      items-center p-4 md:gap-8 gap-4 first-line: grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
      lg:grid-cols-4 xl:grid-cols-6">
        <CardSkeliton />
        <CardSkeliton />
        <CardSkeliton />
        <CardSkeliton />
        <CardSkeliton />
        <CardSkeliton />
        <CardSkeliton />
        <CardSkeliton />
        <CardSkeliton />
        <CardSkeliton />
      </div>
    )
  }
  return (
    <div className="w-full justify-between 
     items-center p-4 md:gap-8 gap-4 first-line: grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
     lg:grid-cols-4 xl:grid-cols-6" >
      {books.map((items, i) => (


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
