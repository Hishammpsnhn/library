import React from "react";
import styles from "../styles";
import Rating from "./Rating";

function Details() {
  return (
    <section className={`${styles.flexCenter} w-full px-8 sm:28 md:px-48 py-10`}>
      <div className="border  border-blue-300 justify-between w-full  flex flex-col sm:flex-row p-2">
        <img
          className="w-[250px] h-[350px] pr-0 sm:pr-5 flex mx-auto"
          src="https://godofsmallthing.com/myfiles/2020/08/The-Man-who-Saw-Everything-Fiction-Book-1334x2048.jpg"
          alt="imageUnavailable"
        />
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-white text-[30px] md:text-[50px]">Book Name</h2>
          <p className={`${styles.paragraph} sm:text-start text-center`}>
            Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
            amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
          </p>
          <Rating/>
        </div>
      </div>
      
    </section>
  );
}

export default Details;
