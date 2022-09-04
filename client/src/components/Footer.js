import React from 'react'
import facebook from '../Assets/facebook.svg'
import instagram from '../Assets/instagram.svg'

import linkedln from '../Assets/linkedin.svg'
function Footer() {
  return (
    <section className={` flex w-full  items-center px-6 sm:px-16 flex-col justify-between`} >
       <div className='w-full border-t-[1px]  border-blue-300 md:flex flex-row justify-between'>
        <p className='text-white p-2 text-center' >The Copyright Act, 1957 (the ‘Act’) came into effect from January 1958.</p>
        <div className=' flex flex-row items-center justify-center' >
        <img className="pr-5 w-10 h-10" src={facebook} alt="icon"/>
        <img src={instagram} alt="icon" className="pr-5 w-10 h-10 "/>
        <img src={linkedln} alt="icon" className="pr-5 w-10 h-10" />
        </div>
        </div>
        <p className='text-dimWhite p-1' >Developed by Hisham</p>
    </section>
    )
}

export default Footer