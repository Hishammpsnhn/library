import React, { useEffect, useState } from 'react'


function Table({ myOrder }) {
  return (

    <thead className="border-b bg-gray-800">
      <tr>
        <th
          scope="col"
          className="text-sm font-medium text-white px-6 py-4"
        >
          #
        </th>
        <th
          scope="col"
          className="text-sm font-medium text-white px-6 py-4"
        >
          Image
        </th>
        <th
          scope="col"
          className="text-sm font-medium text-white px-6 py-4"
        >
          Name
        </th>
        <th
          scope="col"
          className="text-sm font-medium text-white px-6 py-4"
        >
          Price
        </th>
        <th
          scope="col"
          className="text-sm font-medium text-white px-6 py-4"
        >
          status
        </th>
        {
          myOrder && (
            <th
              scope="col"
              className="text-sm font-medium text-white px-6 py-4"
            >
              Time Left
            </th>
          )
        }
        <th
          scope="col"
          className="text-sm font-medium text-white px-6 py-4"
        >
        </th>
      </tr>
    </thead>

  )
}

export default Table