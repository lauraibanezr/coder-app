import React from "react";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ elemento }) {

    const divStyles = {
      margin: '15px 20px',
      flexWrap: 'wrap',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      };

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
      <ItemCount stock={elemento.stock}/>
      </div>
  
  );
}

export default ItemDetail;
