import React from "react"
import Button from '../Button/Button';
import "./card.css";

import {Link} from 'react-router-dom';

export default function Card(props){
    //let product = "Item A";

    return(
        
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="/#">
                <img src={props.ima} alt={props.detail} className="p-8 rounded-t-lg" />
            </a>
            <div className="px-5 pb-5">
                <a href="/#"> <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.detail}</h5></a>
                <div className="flex items-center mt-2.5 mb-5">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{props.price} </span>
                <Link to={`/elemento/${props.id}`}><Button></Button></Link>
                {/*
                <a href="/#" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add to cart
                </a>*/}
    </div>
  </div>
</div>



        /*<div className="card">
            <div className="card-img">
                <img src={props.ima} alt={props.detail}></img>
            </div>
            <div className="card-detail">
                <h2>{props.title}</h2>
                <p>{props.detail}</p>
                <h4>{props.price} €</h4>
            </div>
            <button>Ver detalles</button>

        </div>*/
    )
}
