import React from 'react'
import OrderIems from '../../components/orderDetails/OrderIems'
import styles from '../../styles'

function OrderDetails() {
 
    return (
        <div  className={`${styles.flexCenter} ${styles.boxWidth} w-full mx-auto flex-col p-5 min-h-[78vh]  `}>
            < OrderIems />
        </div>
    )
}

export default OrderDetails