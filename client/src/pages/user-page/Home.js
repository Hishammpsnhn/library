import React, { useEffect, useState } from "react";
import { getProduct } from "../../action/ProductAction";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import styles from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import UserMenu from "../../components/UserMenu";
import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";
import { CheckLoginUser, logout } from "../../action/auth";
import { User } from "../../feature/UserSlice";

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
  const handleLogout = () => {
    logout()
    localStorage.clear()
    dispatch(User(null))
  }

  return (
    <>
      <div className="bg-primary w-full ">
        <div className={`${styles.flexCenter} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Header />
          </div>
        </div>
        <div className={` sticky top-0 z-10`}>
          <UserMenu value={value} setValue={setValue} />
        </div>
        <div className="bg-gradient-to-r from-black via-slate-800 to-black ">
          {value === 0 && <Hero books={books} isLoading={isLoading} />}
          {value === 1 && <div>Notifications</div>}
          {value === 2 && <div><button onClick={handleLogout}>Logout</button></div>}
          {value === 3 && <Table myOrdercomponent={true} />}


        </div>
        <div className={`${styles.boxWidth} ${styles.flexCenter} m-auto `}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
