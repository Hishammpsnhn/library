import React, { useEffect, useState } from "react";
import Details from "../Details";

function Modal({setModal}) {
  
  return (
    <div className="bg-slate-900 absolute top-[150px] left-0 right-0 ml-auto mr-auto w-[60%]
     " >
   <Details setModal={setModal} />
    </div>
    );
}

export default Modal;
