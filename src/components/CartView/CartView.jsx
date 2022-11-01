import React, { useContext } from 'react'

import { cartContext } from '../../context/cartContext'
import Button from '../Button/Button';

export default function CartView() {
  
    const divStyles = {
        margin: '15px 20px',
        flexWrap: 'wrap',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        };


  const {cart, removeItem} = useContext(cartContext);
  console.log(cart); 
  
  function handleCheckout(){
    
  }
  
    return (
    <div style={divStyles}>
        {cart.map(elemento => (
            <div>
                <h4>{elemento.title}</h4>
                <img src={elemento.image} alt={elemento.title} />
                <h4> {elemento.description}</h4>
                <h4> {elemento.price}</h4>
                <h4>{elemento.count}</h4>
                <h3>Precio total: {elemento.price * elemento.count}</h3>
                <button onClick={()=>removeItem(elemento.id)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Eliminar articulo</button>
            </div>
        ))}
        <Button onClick={handleCheckout}>Finalizar compra</Button>
    </div>
  )
}
