import React from 'react';
import { useNavigate } from 'react-router-dom'

function OrderSummary() {
    const navigate = useNavigate()
  return (
    <>
    <div>Order Summary Confirm</div>
    <button onClick={()=>navigate(-1)}>Back</button>
    </>
  )
}

export default OrderSummary