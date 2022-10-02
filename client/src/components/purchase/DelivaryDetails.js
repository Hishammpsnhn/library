import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { addAddress } from '../../action/auth'
import Button from '../Button'
const initialState = { address: '', city: '', pincode: '', phoneNo: '' }

function DelivaryDetails({ setStepper, setDelivaryDetails }) {
    const userIsLogin = useSelector((state) => state.user.user);
    const [data, setData] = useState(initialState)

    if (userIsLogin?.addresses?.length > 0) setStepper(1)


    const handleSubmit = () => {
        if (!data.address || !data.city || !data.phoneNo || !data.pincode) {
            alert('Please enter all feilds');
            return;
        }
        setStepper(1)
        addAddress(data).then((res) => {
            setDelivaryDetails(res)
        })
    }


    const handleMaxPin = (e, num) => {
        setData({ ...data, pincode: e.target.value })

        if (e.target.value.length >= num) {
            const max = e.target.value.slice(0, 6)
            setData({ ...data, pincode: max })
        }
    }
    const handleMaxPhone = (e, num) => {
        setData({ ...data, phoneNo: e.target.value })

        if (e.target.value.length >= num) {
            const max = e.target.value.slice(0, 10)
            setData({ ...data, phoneNo: max })
        }
    }

    return (
        <div className="w-full ">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 ">
                <div className="md:justify-between flex-row w-full">
                    <label
                        className="block text-gray-700 text-lg font-bold mb-2"
                        for="username"
                    >
                        Delivary Details
                    </label>
                    <div className="mb-4 ] ">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            for="username"
                        >
                            Address
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            onChange={(e) =>
                                setData({ ...data, address: e.target.value })
                            }
                            placeholder="address"
                        />
                    </div>
                    <div className="mb-4 ">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            for="username"
                        >
                            City
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            onChange={(e) =>
                                setData({ ...data, city: e.target.value })
                            }
                            placeholder="city"
                        />
                    </div>
                    <div className="mb-4  ">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            for="username"
                        >
                            Pincode
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            value={data.pincode}
                            onChange={(e) =>
                                handleMaxPin(e, 6)
                            }
                            placeholder="pincode"
                        />
                    </div>
                    <div className="mb-4 ">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            for="username"
                        >
                            Phone Number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            value={data.phoneNo}
                            onChange={(e) =>
                                handleMaxPhone(e, 10)
                            }
                            placeholder="phone number"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center flex-row w-full">
                    <div className="w-[30%]">
                        <Button action={handleSubmit} text="SAVE" />
                    </div>

                </div>
            </form>
        </div>
    )
}

export default DelivaryDetails