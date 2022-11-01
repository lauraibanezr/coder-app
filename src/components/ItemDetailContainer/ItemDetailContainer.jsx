import React, { useState, useEffect } from "react";
//import { getSingleData } from "../../mockApi/mockAPI";
import { getSingleData } from "../../services/firebase";
import ItemDetail from "../ItemDetail/ItemDetail";

import { useParams } from "react-router-dom";

function ItemDetailContainer(props){

    const [elemento, setElemento] = useState([]);

    const [feedbackMsg, setFeedbackMsg] = useState(null);

    const { itemID } = useParams();

   // console.log(useParams());

    
    useEffect(() => {
        getSingleData(itemID)
        .then((data) => {
            setElemento(data);
        })
        .catch((error) => {
            setFeedbackMsg(error.message);
        });
      }, [itemID]);



    return (<div>{feedbackMsg !== null ? (
        <h4>Error: {feedbackMsg}</h4>) : (<ItemDetail elemento={elemento} />)}</div>);
}

export default ItemDetailContainer; 