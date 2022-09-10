import React, { useEffect, useRef } from "react";
import { getProduct } from "../../action/ProductAction";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import styles from "../../styles";
import { useDispatch } from "react-redux";
import { getBooks, getBooksAsync } from '../../feature/counter/BooksSlice'


function Home() {
  
  const dispatch = useDispatch();
  const effectRan = useRef(false)

  useEffect(() => {
    if(effectRan.current === false){
      dispatch(getBooksAsync())
    }
    effectRan.current = true
  }, [])

  return (
    <>
      <div className="bg-primary w-full overflow-hidden  ">
        <div className={`${styles.flexCenter} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Header />
          </div>
        </div>
        <div className="bg-gradient-to-r from-black via-slate-800 to-black ">
          <Hero />
        </div>
        <div className={`${styles.boxWidth} ${styles.flexCenter} m-auto `}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
