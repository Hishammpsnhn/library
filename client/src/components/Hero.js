import React from "react";
import Card from "./Card";

function Hero() {
  return (
    <div className="w-full justify-between
     items-center p-4 md:gap-8 gap-4 first-line: grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
     lg:grid-cols-4 xl:grid-cols-6" >
      <Card />

    </div>
  );
}

export default Hero;
