import React from "react";

function Button({ action,setModal,text,style }) {

  return (
    <div className="flex justify-end">
      <button
        type="button"
        className={`text-white 
      bg-gradient-to-r from-slate-800 to-slate-700 hover:opacity-70 
        w-full m-5 p-2 ${style}` }
         onClick={action}
      >
        {text ? `${text}`:"BUY"}
      </button>
      
    </div>
  );
}

export default Button;
