import React from 'react';

import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';

import {Link} from 'react-router-dom'

import { FaShoppingCart } from "react-icons/fa";

export default function CartWidget() {
  
  const {getTotalItemCount, cart} = useContext(cartContext);
  console.log(cart);
  
  return (
    <div>
        <Link to={"/cart"}><FaShoppingCart color='green'/>
        <span>{
          getTotalItemCount() > 0 && getTotalItemCount()
          }</span>
          </Link>
    </div>
  )
}
