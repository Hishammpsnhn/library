import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
function Card() {
  const navigate = useNavigate();
  
  const handleDetails = () => {
    navigate('/purchase')
  };

  return (
    <div class="bg-slate-900  mx-auto max-w-sm rounded-xl overflow-hidden  ">
     <div >
      <img
        className="w-full h-[250px]"
        src="https://godofsmallthing.com/myfiles/2020/08/The-Man-who-Saw-Everything-Fiction-Book-1334x2048.jpg"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      </div>
      <Button action={handleDetails} />
    </div>
  );
}

export default Card;
