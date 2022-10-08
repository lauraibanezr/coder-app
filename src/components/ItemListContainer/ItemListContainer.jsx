import React from 'react'
import Card from '../Card/Card'
import "./ItemListContainer.css";
import {useState, useEffect} from "react";

import {getData} from '../../mockApi/mockAPI';

export function ItemListContainer(props) {

  const[list, setList]= useState([]);


  useEffect(()=>{
    getData().then( (data) => setList(data))
  })
  
 


  return (
    <div>
        <h1>{props.gretting}</h1>
        <div className='containere'>
          {list.map(listado=>{
            return(
              <Card key={listado.id} ima={listado.image} title={listado.title} detail={listado.description} price={listado.price}  id={listado.id}/> 
            )
          })}
          </div >
    </div>
  )
}

export default ItemListContainer