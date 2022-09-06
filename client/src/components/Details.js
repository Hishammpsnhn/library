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
        <div className=" flex flex-row ">
          <img
            className=" h-[350px] pr-0 sm:pr-5 flex mx-auto"
            src="https://godofsmallthing.com/myfiles/2020/08/The-Man-who-Saw-Everything-Fiction-Book-1334x2048.jpg"
            alt="imageUnavailable"
          />
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-white text-[30px] md:text-[50px]">Book Name</h2>
            <p className={`${styles.paragraph} sm:text-start text-center`}>
              Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
              amet, consectetur adip Lorem ipsum dolor sit amet, consectetur
              adip
            </p>
            <Rating />
            <div className="flex flex-row w-full">
              <div className="w-[50%]">
                <Button action={handleClose} setModal={setModal} text="CLOSE"  />
              </div>
              <div className="w-[50%]  ">
                <Button text="SAVE" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
