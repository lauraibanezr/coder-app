import React from 'react';
import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import {getData} from '../../mockApi/mockAPI';
import ItemList from '../ItemList/ItemList';

export function ItemListContainer(props) {

  const[list, setList]= useState([]);

  const{categoriaId} = useParams()
  console.log(categoriaId)

  useEffect(()=>{
    getData().then( (data) => {
      if(categoriaId){
        setList(data.filter((item)=>item.category.toLowerCase() === categoriaId))
      }else{
      setList(data)
      }
    })
  },[categoriaId])
  
 


  return (
    <div>
      <h1>{props.gretting}</h1>
      <ItemList list={list}/>
    </div>
  )
}

export default ItemListContainer