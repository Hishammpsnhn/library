import React, { useEffect, useState } from "react";
import { getProduct } from "../../action/ProductAction";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import styles from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import UserMenu from "../../components/UserMenu";
import Table from "../../components/Table/Table";
import { useNavigate } from "react-router-dom";
import { CheckLoginUser, logout } from "../../action/auth";
import { User } from "../../feature/UserSlice";
import MyAccount from "../../components/MyAccount";
import MyOrders from "../../components/MyOrders";

function Home() {
  const { books, isLoading } = useSelector((state) => state.products)
  const [value, setValue] = useState(0)
  const navigate = useNavigate();
const dispatch = useDispatch();

  

  useEffect(() => {
    if (books.length === 0) {
      dispatch(getProduct)
    }
  }, [])


  return (
    <>
      <div className="bg-primary w-full ">
        <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        </div>
        <div className={` sticky top-0 z-10`}>
          <UserMenu value={value} setValue={setValue} />
        </div>
        <div className="bg-gradient-to-r from-black via-slate-800 to-black  ">
          {value === 0 && <Hero books={books} isLoading={isLoading} />}
          {value === 1 && <MyAccount/>}
          {value === 2 && <MyOrders/>}


        </div>
        
      </div>
    </>
  );
}

export default Home;
