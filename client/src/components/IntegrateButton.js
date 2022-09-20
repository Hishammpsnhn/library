import React from "react";
import Button from "./Button";
import google from "../Assets/google colour logo.svg";
function IntegrateButton({action}) {
  return (
    <div className="w-full  " >
      <div className="m-2 md:m-4" >
        <button
          type="button"
          className={`text-white font-poppins text-[3vw] sm:text-[20px]
      bg-gradient-to-r from-slate-800 to-slate-700 hover:opacity-70 
        w-full flex  items-center  p-2 justify-center  `}
        onClick={action}
        >
          <img className="w-5 mr-5 " src={google} alt="google" />
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default IntegrateButton;
