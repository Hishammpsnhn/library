import React, { useState } from "react";
import styles from "../../styles";
import Button from "../Button";
import Footer from "../Footer";
import Form from "./Form";
import Modal from "./Modal";

function AdminHero() {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState(false);
  const handleAddForm = () => {
    setForm((prev) => !prev);
  };
  return (
    <>
      <div className="">
        <div className="  bg-primary text-white flex flex-col justify-center">
          <h2 className=" text-[50px] p-2 ss:text-[70px] text-center font-medium font-poppins">
            Admin Page
          </h2>
          <div className="flex flex-col  ">
            <div className="flex justify-end w-full ">
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
                            First
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-white px-6 py-4"
                          >
                            Last
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-white px-6 py-4"
                          >
                            Handle
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
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            1
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Mark
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Mark
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Otto
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <button
                              type="button"
                              className="bg-slate-700  hover:opacity-80 w-20 p-2 rounded-md text-white"
                              onClick={() => setModal((prev) => !prev)}
                            >
                              EDIT
                            </button>
                          </td>
                        </tr>
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
      <div className={`${modal ? "flex" : "hidden"}  `}>
        <Modal setModal={setModal} />
      </div>
      <div className={`${form ? "flex" : "hidden"}  `}>
        <div className="bg-white absolute top-[150px] left-0 right-0 ml-auto mr-auto w-[90%] sm:w-[60%]  ">
          <Form setForm={setForm} />
        </div>
      </div>
    </>
  );
}

export default AdminHero;
