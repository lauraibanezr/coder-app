import React from 'react';

import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';

import { FaShoppingCart } from "react-icons/fa";

export default function CartWidget() {
  
  const {getTotalItemCount, cart} = useContext(cartContext);
  console.log(cart);
  
  return (
    <div>
        <FaShoppingCart color='green'/>
        <span>{getTotalItemCount()}</span>
    </div>
  )
}
