import React, { useEffect, useState } from "react";
import styles from "../../styles";
import Button from "../Button";
import Footer from "../Footer";
import Table from "../Table/Table";
import Form from "./Form";
import ListHero from "./Herocomponents/ListHero";
import Modal from "./Modal";
import Header from '../Header'
import Allproducts from "./Herocomponents/Allproducts";
import { getProduct } from "../../action/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import Thead from "../Table/Thead";
import AllOrdersAdmin from "./AllOrdersAdmin";

function AdminHero() {
  const { books, isLoading } = useSelector((state) => state.products)

  const [modal, setModal] = useState(false);
  const [value, setValue] = useState(0);
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct)
  }, [])

  const handleEdit = (id) => {
    setCurrentId(id);
    setValue(2)
  }

  return (
    <>
      <div className="overflow-hidden">
        <div className=" bg-primary text-white flex flex-col justify-center">
          
          {/* <h2 className=" text-[50px] p-2 ss:text-[70px] text-center font-medium font-poppins">
            Admin Page
          </h2>
          <div className="flex justify-end w-full ">
            <Button action={handleAddForm} text="Add Product" />
          </div> */}
          <div className=" grid grid-cols-8 gap-1">
            <div className=" min-h-[85vh] bg-slate-900 col-start-1 col-span-2">
              <ListHero value={value} setValue={setValue} />
            </div>
            <div className=" col-end-9 col-span-6">

              {value === 0 && (
                isLoading ? <h3>loading..</h3> : (
                  <table className=" w-full m-auto text-center">
                    <Table />
                    {books.map((item, i) => {
                      return (
                        <Thead
                          setValue={setValue}
                          id={item._id}
                          name={item.bookname}
                          image={item.image}
                          price={item.price}
                          index={i + 1}
                          status={item.countInStock <= 0 ? "Out of stock" : "Avalilable"}
                          handleEdit={handleEdit}
                        />
                      )
                    })}
                  </table>
                )
              )}
              {value === 1 && <Form />}
              {
                value === 2 &&(
                  currentId ? (<Form currentId={currentId} setCurrentId={setCurrentId} setValue={setValue} />) : (
                    <div>select a product to edit</div>)
                )
              }
              {
                value === 3 && <AllOrdersAdmin/>
              }
            </div>
          </div>
          
        </div>
      </div>
      <div className={`${modal ? "flex" : "hidden"}  `}>
        <Modal setModal={setModal} />
      </div>

    </>
  );
}

export default AdminHero;
