import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../action/ProductAction";
import styles from "../../styles";
import Button from "../Button";
import Footer from "../Footer";
import Form from "./Form";


function AdminHero() {
  const dispatch = useDispatch();
  const effectRan = useRef(false)
  
  const Books = useSelector((state) => state.products.books)
  
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState(null)
  const [form, setForm] = useState(false);

  useEffect(() => {
    if (effectRan.current === false) {
      dispatch(getProduct)
    }
    effectRan.current = true
  }, [])

  const handleAddForm = () => {
    setCurrentId(null)
    setIsEdit(false)
    setForm((prev) => !prev);
  };

  const handleEdit = (id) => {
    setIsEdit(true)
    setCurrentId(id)
    setForm((prev) => !prev);

  }

  return (
    <>
      <div className="">
        <div className="  bg-primary text-white flex flex-col justify-center">
          <h2 className=" text-[50px] p-2 ss:text-[70px] text-center font-medium font-poppins">
            Admin Page
          </h2>
          <div className={`flex flex-col  shrink ${styles.boxWidth} mx-auto`}>
            <div className={`flex justify-end w-full`}>
              <Button action={handleAddForm} text="Add Product" />
            </div>
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-center">
                      <thead className="border-b bg-gray-800">
                        <tr>
                          <th
                            scope="col"
                            className="text-sm font-medium text-white px-6 py-4"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-white px-6 py-4"
                          >
                            Image
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-white px-6 py-4"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-white px-6 py-4"
                          >
                            Author
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-white px-6 py-4"
                          >
                            Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          Books.map((item, i) => (
                            <tr className="bg-white border-b">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {i + 1}
                              </td>
                              <td className="text-sm items-center flex justify-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <img className='w-[6vw] h-[6vh]' src={item.image} alt="an image" />
                              </td>
                              <td className="text-sm capitalize text-gray-900 font-poppins font-light px-6 py-4 whitespace-nowrap">
                                {item.bookname}
                              </td>
                              <td className="text-sm text-gray-900 font-poppins capitalize font-light px-6 py-4 whitespace-nowrap">
                                {item.author}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <button
                                  type="button"
                                  className="bg-slate-700  hover:opacity-80 w-20 p-2 rounded-md text-white"
                                  onClick={() => handleEdit(item._id)}
                                >
                                  EDIT
                                </button>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${form ? "flex" : "hidden"}  `}>
        <div className="bg-white absolute top-[150px] left-0 right-0 ml-auto mr-auto w-[90%] sm:w-[60%]  ">
          <Form isEdit={isEdit} setForm={setForm} currentId={currentId} />
        </div>
      </div>
    </>
  );
}

export default AdminHero;
