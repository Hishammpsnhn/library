import React from "react";

function Button() {
  return (
    <div className="flex justify-end" >
      <button type="button" className="text-white 
      bg-gradient-to-r from-slate-800 to-slate-700 hover:opacity-70 
        w-full m-5 p-2
      ">BUY</button>;
    </div>
  );
}

export default Button;
