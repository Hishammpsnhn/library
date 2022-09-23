import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../action/auth";
import Button from "./Button";
import Input from "./Input";
import IntegrateButton from "./IntegrateButton";

const initialState = { username: "", password: "", email: "", phone: "" };

function Auth() {

  const [userData, setuserData] = useState(initialState);
  const [signUP, setSignUP] = useState(false);
  

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlechange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };

  //handlesubmit for Login or Register
  const handleSubmit = (e) => {
    e.preventDefault();
    if (signUP) {
      dispatch(registerUser(userData));
    } else {
      dispatch(loginUser(userData));
    }
  };

 const handleApiLogin= ()=>{
  window.open("http://localhost:5000/api/auth/google","_self")
  }
  
  return (
    <div className="bg-slate-800 h-[100vh] flex justify-center items-center ">
      <div className="  md:w-[40%]  shadow-md bg-white rounded-md  p-5 flex flex-col items-center ">
        <div className="w-full flex flex-col  ">
          <div className=" w-full px-8 pt-6 flex flex-col items-center ">
            <h2 className="text-[35px] font-poppins font-medium text-center p-2 ">
              {signUP ? "Sign Up" : "Login"}
            </h2>
            <form className="md:flex md:justify-between flex-col w-full">
              {signUP && <Input text="username" type="text" handlechange={handlechange} name="username" />}
              {signUP && <Input text="phone no" type="number" handlechange={handlechange} name="phone" />}
              <Input text="Email" type="email" handlechange={handlechange} name="email" />
              <Input text="password" type="password" handlechange={handlechange} name="password" />
              <p className="text-blue-700 text-right mb-2 cursor-pointer font-poppins hover:opacity-40 " 
              onClick={()=> navigate('/forgot-password')}
              >Forgot Password?</p>
              <Button
                text={`${signUP ? "Sign Up" : "Login"}`}
                action={handleSubmit}
              />
            </form>
            <div className="w-full flex flex-row justify-between text-gray-400 items-center ">
              <hr className="w-[44%] h-[2px] bg-gray-300" />
              <span>or</span>
              <hr className="w-[44%] h-[2px]  bg-gray-300" />
            </div>
            <IntegrateButton action={handleApiLogin} />
            <a>
              Don't have an account?
              <span
                className="text-blue-700 cursor-pointer hover:text-blue-900  "
                onClick={() => setSignUP((prev) => !prev)}
              >
                {" "}
                signup
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
