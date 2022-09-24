import React from 'react'
import Card from '../Card/Card'

export function ItemListContainer(props) {
  return (
    <div>
        <h1>{props.gretting}</h1>
        <Card ima="https://www.zeeman.com/media/catalog/product/2/0/2003870451420_Front.jpg?quality=90&fit=bounds&height=340&width=270&canvas=270:340" title="Jersey" detail="Jersey fina de puntos" price="22"/> 
        <Card ima="https://www.zeeman.com/media/catalog/product/2/0/2003820408559_Front.jpg?quality=90&fit=bounds&height=340&width=270&canvas=270:340" title="Vestido" detail="Vestido de rayas" price="25"/> 
    </div>
  )
}

export default ItemListContainer