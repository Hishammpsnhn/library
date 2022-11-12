import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addressDelete, logout } from '../../action/auth'
import { User } from '../../feature/UserSlice';
import Button from '../Button';
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin2Line } from 'react-icons/ri';
import { toast, ToastContainer } from 'react-toastify';
function MyAccount() {
    const userIsLogin = useSelector((state) => state.user.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [address, setAddress] = useState([])

    useEffect(() => {
        setAddress(userIsLogin?.addresses)
    }, [userIsLogin])

    const handleLogout = () => {
        logout().then((res) => {
            navigate('/auth')
            localStorage.clear()
            dispatch(User(null))

        });
    }
    const handleLogin = () => {
        navigate('/auth')
    }
    const handleDelete = (id) => {
        const ids = toast.loading("Please wait...")
        dispatch(addressDelete(id)).then((res) => {
            setAddress(address.filter((item) => item._id !== id))
            toast.update(ids, { render: "Address deleted", type: "success", isLoading: false });
        })

    }

    return (
        <div className=' w-full text-white font-poppins p-2 min-h-[68vh]'>
            <div className='flex flex-col items-center justify-center m-auto'>
                {userIsLogin && (
                    <>
                        <div className='flex flex-col items-center justify-center' >
                            <img className='w-20 h-15 rounded-sm' src={userIsLogin?.pic} alt="Image" />
                            <p className='text-lg font-medium' >{userIsLogin?.name}</p>
                            <p>{userIsLogin?.email}</p>
                        </div>
                        <div className='w-[80%]'>
                            <h5 className='text-lg font-medium'>Address :</h5>
                            {
                                address.map((item,i) => (
                                    <div key={i} className=' w-full p-2 flex justify-between  border-solid border-2 border-gray-400'>
                                        <div>
                                            <div className=' flex flex-row justify-between text-lg font-medium capitalize '>
                                                <p>{userIsLogin?.name},</p>                                                <p>{item.pincode}</p>
                                            </div>
                                            <div className="flex flex-row text-sm font-thin capitalize ">
                                                <p>{item.address},</p>
                                                <p>{item.city},</p>
                                                <p>{item.phoneNo}</p>
                                            </div>
                                        </div>
                                        <div className='text-red-700  flex  items-center text-xl hover:text-red-900 cursor-pointer '>
                                            <RiDeleteBin2Line onClick={() => handleDelete(item._id)} />
                                            <ToastContainer
                                            theme="dark"/>
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