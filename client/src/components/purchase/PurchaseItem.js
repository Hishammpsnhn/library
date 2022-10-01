import React, { useState } from 'react'
import { Step, Stepper } from 'react-form-stepper';
import { useSelector } from 'react-redux';
import DelivaryDetails from './DelivaryDetails';
import OrderSummary from './OrderSummary';
import Payment from './Payment';

function PurchaseItem() {
  const [stepper, setStepper] = useState(0)
  const [product, setProduct] = useState(null);

  const [delivaryDetails, setDelivaryDetails] = useState(null)
  return (
    <>
      <section>
        <Stepper className='text-white' activeStep={stepper}>
          <Step label='DelivaryDetails' />
          <Step label="Order Summary" />
          <Step label="Payment" />
        </Stepper>
      </section>
      <div className='md:w-[60%]    flex flex-row p-5 m-auto ' >
        {stepper === 0 &&
          <DelivaryDetails setDelivaryDetails={setDelivaryDetails} setStepper={setStepper} />}
        {stepper === 1 && <OrderSummary setStepper={setStepper} product={product} setProduct={setProduct} />}
        {stepper === 2 && <Payment setStepper={setStepper} product={product} />}
      </div>
    </>
  )
}

export default PurchaseItem