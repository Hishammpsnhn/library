import React from "react";
import Details from "../../components/Details/Details";
import styles from "../../styles";

function DetailsPage() {
  
  return (
    <>
    <div className="bg-primary w-full overflow-hidden  ">
        <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        </div>
        <div className="bg-gradient-to-r from-black via-slate-800 to-black 
        px-8 sm:28 md:px-48 py-10 min-h-[78vh]">
          < Details/>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
