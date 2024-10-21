import React from 'react'
import IconCart from './IconCart'

const CartWidget = ({valor}) => {
  return (
    <>
    <div> <IconCart width={24} height={24} />  <span>{valor}</span>
    </div>
    </>
  )
}

export default CartWidget

