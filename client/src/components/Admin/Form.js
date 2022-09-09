import React, { useState } from "react";
import Button from "../Button";
import FileBase64 from 'react-file-base64'
import { addProductActions} from "../../action/ProductAction";


function Form({ setForm }) {
  const initialState = { bookname: "", author: "", description: "", catagory: "", price: '', launch: '', image: "" };
  const [addProduct, setAddProduct] = useState(initialState);


  const handleClose = () => {
    setForm((prev) => !prev);
  };

  const handleAddProduct = () => {
    console.log(addProduct)
    addProductActions(addProduct);
  }
  return (
    <div className="w-full ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 ">
        <div className="md:flex md:justify-between flex-row w-full">
          <div className="mb-4 md:w-[48%] ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Book Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              onChange={(e) =>
                setAddProduct({ ...addProduct, bookname: e.target.value })
              }
              placeholder="Book Name"
            />
          </div>
          <div className="mb-4 md:w-[48%]  ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Author
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Author"
              onChange={(e) =>
                setAddProduct({ ...addProduct, author: e.target.value })
              }
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Description"
            onChange={(e) =>
              setAddProduct({ ...addProduct, description: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            published Year
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="number"
            placeholder="published year"
            onChange={(e) =>
              setAddProduct({ ...addProduct, launch: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="price"
            onChange={(e) =>
              setAddProduct({ ...addProduct, price: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Discount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="number"
            placeholder="Discount in percentage"
            onChange={(e) =>
              setAddProduct({ ...addProduct, discount: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Catagory
          </label>
          <div className=" w-full inline-block relative ">
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) =>
                setAddProduct({ ...addProduct, catagory: e.target.value })
              }
            // value={addProduct.catagory}

            >
              <option value='' >Pick a choice!</option>
              <option>Sci-fi</option>
              <option>Comedy</option>
              <option>Romance</option>
              <option>Thriller</option>
              <option>none of above</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Upload Image
          </label>
          <FileBase64
            type='file'
            multiple={false}
            onDone={({ base64 }) => setAddProduct({ ...addProduct, image:base64 })
            }
          />
        </div>
        {/* <img className="w-[20%] md:w-[40%]" src={ alt="upload image" /> */}
        <div className="flex flex-row w-full">
          <div className="w-[50%]">
            <Button action={handleClose} text="CLOSE" />
          </div>
          <div className="w-[50%]  ">
            <Button text="ADD PRODUCT" action={handleAddProduct} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
