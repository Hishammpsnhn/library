import React from "react";

function Input({ text, type, handlechange,name }) {
  
    return (
    <div className="mb-4  ">
      <label
        className="block text-gray-700 text-sm font-bold mb-2 capitalize "
        for="username"
      >
        {text}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type={type}
        name={name}
        placeholder={text}
        onChange={handlechange}
      />
    </div>
  );
}

export default Input;
