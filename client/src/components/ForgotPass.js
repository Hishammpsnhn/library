import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { forgotPasswordEmail, forgotPasswordOtp } from '../action/auth';
import Button from './Button'
import Input from './Input'

function ForgotPass() {

  const [verify, setVerify] = useState(true);
  const [text, setText] = useState('')

  const handleSubmit = () => {
    if (verify) {
      forgotPasswordOtp(text).then((res) => {
        console.log(res)
      })
    } else {
      forgotPasswordEmail(text).then((res) => {
        console.log(res)
      })
    }
  }

  return (
    <div className="bg-slate-800 h-[100vh] flex justify-center items-center ">
      <div className="  md:w-[40%]  shadow-md bg-white rounded-md  p-5 flex flex-col items-center ">
        <div className="w-full flex flex-col  ">
          <div className=" w-full px-8 pt-6 flex flex-col items-center ">
            <h2 className="text-[35px] font-poppins font-medium text-center p-2 ">
              Verification
            </h2>
            <p>{verify ? " You will get an OTP via mail" : "We Will send you  a One Time Password on your email"}</p>
            <form className="md:flex md:justify-between flex-col mt-4 w-full">
              <Input text={verify ? "Enter OTP" : "Registered Email"} type={verify ? "password" : "email"}
                name={verify ? "email" : "otp"} handlechange={(e) => setText(e.target.value)} />
              {verify && <p className="text-blue-700 text-sm text-right mb-2 cursor-pointer font-poppins hover:underline "  >Resend otp</p>}

              <Button
                text={`${verify ? "SUBMIT" : "GET OTP"}`}
                action={handleSubmit}
              />
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPass