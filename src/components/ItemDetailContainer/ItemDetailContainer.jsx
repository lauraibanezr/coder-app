import React, { useState, useEffect } from "react";
import { getSingleData } from "../../mockApi/mockAPI";
import ItemDetail from "../ItemDetail/ItemDetail";

import { useParams } from "react-router-dom";

function ItemDetailContainer(props){

    const [elemento, setElemento] = useState([]);

    const { itemID } = useParams();

   // console.log(useParams());

    
    useEffect(() => {
        getSingleData(itemID).then((data) => {
            setElemento(data);
        });
      }, [itemID]);



    return (<div><ItemDetail elemento={elemento} /></div>);
}

export default ItemDetailContainer; 