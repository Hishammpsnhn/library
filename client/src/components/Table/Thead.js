import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getSingleOrder } from '../../action/orderItem';



function Thead({ setValue, index, image, name, price, status, id, handleEdit, myOrder, createdAt, returnLastDate }) {
    const navigate = useNavigate();

    //Time left for return
    let currentDate = new Date();
    let cDay = currentDate.getDate()
    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    const returnDate = addDays(createdAt, 7);
    const dayLeft = returnDate.getDate() - cDay;
    if(dayLeft <= 0){
        dayLeft = 0
    }

    const handleMore = (id) => {
        navigate(`/myorder/details/${id}`)
    }

    return (
        <>
            <tbody>
                <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <img className='w-20 h-18' src={image} />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                        {name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {price}
                    </td>
                    <td className={`text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap
                    ${status == 'Out of stock' && 'text-red-600'}
                    `}>
                        {status}
                    </td>
                    {
                        myOrder && (
                            <td className="text-sm text-red-700  font-medium px-6 py-4 whitespace-nowrap">
                                {`${dayLeft} days left`}
                            </td>
                        )
                    }
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {myOrder ? (
                            <button
                                type="button"
                                className="bg-slate-700  hover:opacity-80 w-20 p-2 rounded-md text-white"
                                onClick={() => handleMore(id)}
                            >
                                More
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="bg-slate-700  hover:opacity-80 w-20 p-2 rounded-md text-white"
                                onClick={() => handleEdit(id)}
                            >
                                EDIT
                            </button>
                        )}
                    </td>
                </tr>
            </tbody>
        </>
    )
}

export default Thead