import React from "react";
import {useState, useEffect} from "react";

function Button(props){
    const [colorBtn, setColorBtn] = useState({
        backgroundColor: "green",
        });
    /*
        console.log('%c Render del componente','color:red');
    useEffect( ()=>{
            console.log('Montaje del componente');
        },  []
    );
*/
    function hancleClick(){
        console.log("ok");
        props.onClick();
        setColorBtn({ backgroundColor: "blue"});
    };


    return ( 
        <button style={colorBtn} onClick={hancleClick}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {props.text}
        </button>
    )
}

export default Button;