import React from "react";
import Button from "../Button";

function Form({ setForm }) {
  const handleClose = () => {
    setForm((prev) => !prev);
  };
  return (
    <div class="w-full ">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 ">
        <div className="md:flex md:justify-between flex-row w-full" >
          <div class="mb-4 md:w-[48%] ">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Book Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Book Name"
            />
          </div>
          <div class="mb-4 md:w-[48%]  ">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Author
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Author"
            />
          </div>
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Description
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Description"
          />
        </div>
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Catagory
        </label>
        <div class=" w-full inline-block relative ">
          <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      <div className="flex flex-row w-full">
        <div className="w-[50%]">
          <Button action={handleClose} text="CLOSE" />
        </div>
        <div className="w-[50%]  ">
          <Button text="ADD PRODUCT" />
        </div>
      </div>
      </form>

    </div>
  );
}

export default Form;
