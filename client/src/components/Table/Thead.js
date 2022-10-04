import React from 'react'
import { getOneProduct } from '../../action/ProductAction';

function Thead({ setValue, index, image, name, price, status, id, handleEdit}) {


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
                    <td className={`text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap
                    ${status == 'Out of stock' && 'text-red-600'}
                    `}>
                        {status}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                            type="button"
                            className="bg-slate-700  hover:opacity-80 w-20 p-2 rounded-md text-white"
                            onClick={() => handleEdit(id)}
                        >
                            EDIT
                        </button>
                    </td>
                </tr>
            </tbody>
        </>
    )
}

export default Thead