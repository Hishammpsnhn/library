import React, { useEffect} from "react";
import { getProduct } from "../../action/ProductAction";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import styles from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import UserMenu from "../../components/UserMenu";

function Home() {

  const { books, isLoading } = useSelector((state) => state.products)

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
          <div className={`${styles.boxWidth}`}>
            <Header />
          </div>
        </div>
        <div className={` sticky top-0 z-10`}>
          <UserMenu />
        </div>
        <div className="bg-gradient-to-r from-black via-slate-800 to-black ">
          <Hero books={books} isLoading={isLoading} />
        </div>
        <div className={`${styles.boxWidth} ${styles.flexCenter} m-auto `}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
