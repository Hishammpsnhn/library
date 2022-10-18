import React from 'react'
import { useNavigate } from 'react-router-dom';

const data = [
    { item: "All Products" },
    { item: "Add Product" },
    { item: "Edit Products" },
    { item: "Ordered Products" },
    { item: "All Products" },
]

function ListHero({value ,setValue}) {
    const navigate = useNavigate();
    const handleClick = (index) => {
        if(index === 0){
          setValue(0)
        }
        else if(index === 1){
          setValue(1)
        }
        else if(index === 2){
          setValue(2)
        }
        else if(index === 3){
          setValue(3)
        }
    }
    return (
        <div className='w-full' >
            <ul>
                {data.map((items, i) => (
                    <li key={i}
                        className={` ${value ===i && 'bg-black'} p-3 hover:bg-black hover:underline  text-lg font-poppins font-thin border-b border-black `}
                        onClick={()=>handleClick(i)}
                    >{items.item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListHero