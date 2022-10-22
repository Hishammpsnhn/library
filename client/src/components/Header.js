import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProduct, searching } from "../action/ProductAction";
import Librery from "../Assets/library-svgrepo-com (1).svg";
import styles from "../styles";
import { useCallback } from 'react';
import _debounce from 'lodash/debounce';

function Header() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch();

  const debounceFn = useCallback(_debounce(handleDebounceFn, 1000), []);

  function handleDebounceFn(inputValue) {
    dispatch(searching(inputValue))
  }
  const handleChange = (e) => {
    setSearch(e.target.value)
    debounceFn(e.target.value)
  }

  return (
    <div className="text-white border-b-[1px]  border-blue-300  shadow font-poppins flex p-4 items-center justify-between ">
      <div className="w-full flex items-center ">
        <div className="text-white ss:text-[40px]  text-[28px] mr-1  ss:mr-4 ">
          <h1 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600  to-blue-400" >Library</h1>{" "}
        </div>
        <img src={Librery} alt="library" className=" mt-2 w-[25px] ss:w-[40px] h-[45px]" />
      </div>
      <div
        className={`${styles.flexCenter} w-full h-[35px] p-1 justify-evenly  flex bg-primary border  border-blue-300 rounded-lg`}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          value={search}
          onChange={(e) => handleChange(e)}
          className="bg-primary border-gray-100 w-full outline-none text-[15px] "
          placeholder=" search here..."
        />
      </div>
    </div>
  );
}

export default Header;
