import React from "react";
import styles from "../styles";
import Button from "./Button";
import Rating from "./Rating";

function Details({setModal}) {

  const handleClose =()=>{
    setModal((prev) => !prev)
  }

  return (
    <section className={`${styles.flexCenter} w-full `}>
      <div className="border   border-blue-300 justify-between w-full sm:flex-row p-2">
        <div className="md:flex  ">
          <img
            className=" h-[350px] pr-0 sm:pr-5 flex mx-auto"
            src="https://godofsmallthing.com/myfiles/2020/08/The-Man-who-Saw-Everything-Fiction-Book-1334x2048.jpg"
            alt="imageUnavailable"
          />
          <div className="flex flex-col pl-2  sm:items-start">
            <h2 className="text-white text-[30px] font-medium font-poppins md:text-[50px]">Book Name</h2>
            <p className={`${styles.paragraph} sm:text-start `}>
              Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
              amet, consectetur adip Lorem ipsum dolor sit amet, consectetur
              adip
            </p>
            <Rating />
    
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
