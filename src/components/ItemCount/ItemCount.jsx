import React from 'react'
import { useState } from 'react'
//import Button from '../Button/Button';

//const ItemCount = ({stock,onAddToCard}) => {
function ItemCount({stock,onAddToCard}){
    
    const countStyle = {
        marginRight: '10px',
     };

    const [count,setCount] = useState(1);

    function handleSubstract(){
        if(count>1) setCount(count-1);
        console.log(count);
        console.log(setCount);
    }

    function handleAdd(){
        if(count<stock) setCount(count+1);
        if(count === stock) console.log(count);
    }


  return (
    <div>
        <h2>Realiza la compra</h2>
        <div>
            <button onClick={handleSubstract} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                - <span className="sr-only">Icon description</span>
            </button>
            <strong style={countStyle}>{count}</strong>
             <button onClick={handleAdd} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                + <span className="sr-only">Icon description</span>
            </button> 
           {/* <Button text={'+'} onClick={handleAdd}> </Button>*/}
        </div>
        <button onClick={()=>{onAddToCard(count)}} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Añadir al carrito</button>    
    </div>
  )
}

export default ItemCount