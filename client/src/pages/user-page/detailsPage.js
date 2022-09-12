import React from "react";
import { useParams } from "react-router-dom";
import Details from "../../components/Details";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "../../styles";

function DetailsPage() {
  
  
  return (
    <>
    <div className="bg-primary w-full overflow-hidden  ">
        <div className={`${styles.flexCenter} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Header />
          </div>
        </div>
        <div className="bg-gradient-to-r from-black via-slate-800 to-black 
        px-8 sm:28 md:px-48 py-10 ">
          < Details/>
        </div>
        <div className={`${styles.boxWidth} ${styles.flexCenter} m-auto `}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
