import React, { useState } from "react";
import styles from "../../styles";
import Button from "../Button";
import Footer from "../Footer";
import Table from "../Table";
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
                <Table/>
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
