import React from 'react'
import Card from '../Card/Card'
import "./ItemList.css";

const ItemList = ({list}) => {
  return (
    <div className='containere'>
          {list.map(listado=>{
            return(
              <Card key={listado.id} ima={listado.image} title={listado.title} detail={listado.description} price={listado.price}  id={listado.id}/> 
            )
          })}
          </div >
  )
}

export default ItemList