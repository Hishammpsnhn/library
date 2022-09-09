import React from 'react'
import Button from '../Button'

function DelivaryDetails({setStepper}) {
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
                            id="username"
                            type="text"
                            // onChange={(e) =>
                            //     setAddProduct({ ...addProduct, bookName: e.target.value })
                            // }
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
                            // onChange={(e) =>
                            //     setAddProduct({ ...addProduct, bookName: e.target.value })
                            // }
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
                            id="username"
                            type="text"
                            // onChange={(e) =>
                            //     setAddProduct({ ...addProduct, bookName: e.target.value })
                            // }
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
                            id="username"
                            type="text"
                            // onChange={(e) =>
                            //     setAddProduct({ ...addProduct, bookName: e.target.value })
                            // }
                            placeholder="phone number"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center flex-row w-full">
                    <div className="w-[30%]">
                        <Button action={()=> setStepper(1)} text="SAVE" />
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default DelivaryDetails