import React from "react";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ elemento }) {

    const divStyles = {
      margin: '15px 20px',
      flexWrap: 'wrap',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      };

    const [count,setCount] = useState(0);

    function handleAddToCart(count){
      console.log('Agregado', count);
      setCount(count);
    }

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
      : <a href="/cart">Ver el carrito</a>}
      
     
     
      </div>
  
  );
}

export default ItemDetail;
