import React from "react";

function ItemDetail({ elemento }) {

    const divStyles = {
        margin: '15px 20px',
        flexWrap: 'wrap',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'spaceAround',
      };

  return (
    
    <div style={divStyles}>
        <div>
          <h1>{elemento.title}</h1>
          <img src={elemento.image} alt={elemento.title} />
          <h3> {elemento.description}</h3>
          <h3> {elemento.price}</h3>
        </div>
        </div>

  
  );
}

export default ItemDetail;
