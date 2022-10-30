import React, { useEffect, useState } from "react";
import Button from "../Button";
import FileBase64 from 'react-file-base64'
import { addProductActions, editProduct } from "../../action/ProductAction";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form({ currentId, setCurrentId, setValue }) {

  const Book = useSelector((state) => (currentId ? state.products.books.find((res) => res._id === currentId) : null));

  const dispatch = useDispatch();

  useEffect(() => {
    if (Book) setAddProduct(Book)
  }, [Book])


  const initialState = { bookname: "", author: "", description: "", catagory: "", price: '', launch: '', image: "", discount: '' };
  const [addProduct, setAddProduct] = useState(initialState);


  const handleClose = () => {
    setAddProduct(initialState)
    setCurrentId(null)
    setValue(0)
  };

  const handleAddProduct = () => {
    toast('Added', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    addProductActions(addProduct);
  }
  const handleEditProduct = () => {
    toast('edited', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    dispatch(editProduct(currentId, addProduct)).then((res) => {
      setAddProduct(initialState)
      setValue(0)
      setCurrentId(null)
    })
  }

  return (
    <div className="w-full ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 ">
        <h2 className="text-center text-black font-semibold  text-2xl pb-5 "  >{`${currentId ? 'Edit Page' : 'Add page '}`}</h2>
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
              value={addProduct.bookname}
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
              value={addProduct.author}
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
            value={addProduct.description}
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
            value={addProduct.launch}
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
            value={addProduct.price}
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
            value={addProduct.discount}
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
              value={addProduct.catagory}

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
            onDone={({ base64 }) => setAddProduct({ ...addProduct, image: base64 })
            }
          />
        </div>
        {/* <img className="w-[20%] md:w-[40%]" src={ alt="upload image" /> */}
        <div className="flex flex-row w-full">
          <div className="w-[50%]">
            <Button action={handleClose} text="CLOSE" />
          </div>
          <div className="w-[50%]  ">
            <Button text={`${currentId ? "EDIT PRODUCT" : "ADD PRODUCT"}`} action={currentId ? handleEditProduct : handleAddProduct} />
            <ToastContainer />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
