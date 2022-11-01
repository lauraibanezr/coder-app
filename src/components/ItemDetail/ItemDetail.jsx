import React from "react";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

import {Link} from 'react-router-dom';

import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';

function ItemDetail({ elemento }) {

    const divStyles = {
      margin: '15px 20px',
      flexWrap: 'wrap',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      };

    const [count,setCount] = useState(0);
    
    const {addToCart} = useContext (cartContext);

    function handleAddToCart(count){
      addToCart(elemento,count);
      setCount(count);
    }

    //if(Object.keys(elemento).length>0){
    if(elemento.title){
    return (
      <div>
      <div style={divStyles}>
          <div>
            <h1>{elemento.title}</h1>
            <img src={elemento.image} alt={elemento.title} />
            <h3> {elemento.description}</h3>
            <h3> {elemento.price}</h3>
          </div>
        </div> 
        {count === 0 
        ?  <ItemCount stock={elemento.stock}
        onAddToCard={handleAddToCart}/>
        : <Link to={"/cart"}><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ver el carrito</button></Link>}
        
      
      
        </div>
    
    );
  }

  return <h3>Cargando...</h3>
}

export default ItemDetail;
