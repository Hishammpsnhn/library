import React from "react";

function Button({ action,text,style }) {

  return (
    <div className="flex justify-end">
      <button
        type="button"
        className={` ${style} text-re text-white cursor-pointer font-poppins text-[3vw]  sm:text-[20px]
      bg-gradient-to-r from-slate-800 to-slate-700 hover:opacity-70 
        w-full m-2 md:m-4 p-2 ` }
         onClick={action}
      >
        {text ? `${text}`:"RENT"}
      </button>
      
    </div>
  );
}

export default Button;
