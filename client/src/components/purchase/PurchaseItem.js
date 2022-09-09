import React, { useState } from 'react'
import { Step, Stepper } from 'react-form-stepper';
import DelivaryDetails from './DelivaryDetails';
import OrderSummary from './OrderSummary';
import Payment from './Payment';

function PurchaseItem() {
  const [stepper, setStepper] = useState(1)
  return (
    <>
    <section>
      <Stepper className='text-white' activeStep={stepper}>
        <Step label='DelivaryDetails'/>
        <Step label="Order Summary" />
        <Step label="Payment" />
      </Stepper>
    </section>
    <div className='md:w-[60%]    flex flex-row p-5 m-auto ' >
     {stepper === 0 && <DelivaryDetails/> }  
     {stepper === 1 && <OrderSummary/> }  
     {stepper === 2 && <Payment/> }  
    </div>
      </>
  )
}

export default PurchaseItem