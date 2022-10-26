import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../action/auth'
import { User } from '../feature/UserSlice';
import Button from './Button';
import { useNavigate } from 'react-router-dom'
function MyAccount() {
    const userIsLogin = useSelector((state) => state.user.user)
    console.log(userIsLogin)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('called loggout')
        logout().then((res) => {
            console.log(res)
            localStorage.clear()
            dispatch(User(null))
            navigate('/auth')

        });
    }
    const handleLogin = () => {
        navigate('/auth')
    }


    return (
        <div className=' w-full text-white font-poppins p-2 min-h-[68vh]'>
            <div className='flex flex-col items-center justify-center m-auto'>
                {userIsLogin && (
                    <>
                        <div className='flex flex-col items-center justify-center' >
                            <img className='w-20 h-15 rounded-sm' src={userIsLogin?.pic} alt="not given" />
                            <p className='text-lg font-medium' >{userIsLogin?.name}</p>
                            <p>{userIsLogin?.email}</p>
                        </div>
                        <div className='w-[80%]'>
                            {
                                userIsLogin.addresses?.map((item) => (
                                    <div className=' w-full p-2  border-solid border-2 border-gray-400'>
                                        <div className=' flex flex-row text-lg font-medium capitalize '>
                                            <p>{userIsLogin?.name},</p>
                                            <p>{item.pincode}</p>
                                        </div>
                                        <div className="flex flex-row text-sm font-thin capitalize ">
                                            <p>{item.address},</p>
                                            <p>{item.city},</p>
                                            <p>{item.phoneNo}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        {/* <Button  text="Add New Address" /> */}
                        </div>
                    </>
                )}
                <div className='p-5 w-[60%] pb-0 m-auto  '>
                    <Button action={userIsLogin ? handleLogout : handleLogin} text={userIsLogin ? 'Logout' : 'Login'} style={userIsLogin && 'text-red-700'} />
                </div>
            </div>
        </div>
    )
}

export default MyAccount