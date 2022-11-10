import React, { useEffect, useState } from "react";
import { getProduct, sciBooks } from "../../action/ProductAction";
import HomeMenu from "../../components/MenuItems/HomeMenu";
import styles from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import UserMenu from "../../components/UserMenu";
import { useNavigate } from "react-router-dom";
import MyAccount from "../../components/MenuItems/MyAccount";
import MyOrders from "../../components/MenuItems/MyOrders";
import { toast, ToastContainer } from "react-toastify";

function Home() {
  const { books, isLoading } = useSelector((state) => state.products);

  const [sciFiBooks, setSciFiBooks] = useState([]);
  const [value, setValue] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    sciBooks().then((res) => {
      setSciFiBooks(res)
    })
  }, [])
  useEffect(() => {
    if (books.length === 0) {
      dispatch(getProduct).catch((err) => { 
        toast.error('something went wrong', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
    }
  }, [])


  return (
    <>
      <div className="bg-primary w-full ">
        <ToastContainer/>
        <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        </div>
        <div className={` sticky top-0 z-10`}>
          <UserMenu value={value} setValue={setValue} />
        </div>
        <div className="bg-gradient-to-r from-black via-slate-800 to-black  ">
          {value === 0 &&
            <HomeMenu
              books={books}
              isLoading={isLoading}
              sciFiBooks={sciFiBooks}
            />}
          {value === 1 && <MyAccount />}
          {value === 2 && <MyOrders />}
        </div>
      </div>
    </>
  );
}

export default Home;
