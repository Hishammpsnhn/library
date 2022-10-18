import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function UserMenu({ value, setValue }) {
    const navigate = useNavigate();

    const handleOrder = () => {
        setValue(2)
    }
    const handleAccount = () => {
        setValue(1)
    }
    const handleHome = () => {
        setValue(0)
    }
    // const hanldeNotification = () => {
    //     setValue(1)
    // }
    const data = [
        {
            name: "Home",
            icon: <svg className="h-8 w-8 text-pink-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>,
            action: handleHome
        },
        // {
        //     name: "Notification",
        //     icon: <svg className="h-8 w-8 text-pink-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <circle cx="16" cy="8" r="3" /></svg>,
        //     action: hanldeNotification
        // },
        {
            name: "My Account",
            icon: <svg className="h-8 w-8 text-pink-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="7" r="4" />  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>,
            action: handleAccount
        },
        {
            name: "My orders",
            icon: <svg className="h-8 w-8 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />  <line x1="12" y1="22.08" x2="12" y2="12" /></svg>,
            action: handleOrder
        }
    ]

    return (
        <div className='overflow-hidden'>
            <div className='text-white flex flex-row justify-evenly p-2 bg-black  ' >
                {data.map((item, i) => (
                    <p key={i} className={`cursor-pointer flex flex-col items-center p-1 rounded-md text-center ${i === value && 'bg-slate-800'} `}
                        onClick={item.action}>
                        {item.icon}
                        {item.name}</p>
                ))}
            </div>
        </div>
    )
}

export default UserMenu