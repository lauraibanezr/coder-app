import {createContext, useState} from 'react'
import ItemCount from '../components/ItemCount/ItemCount';

const cartContext = createContext();

function CartContextProvider(props){

    const[cart,setCart] = useState([])

    function addToCart(item,count){
        let newCart = [...cart];
        let newItem = {...item,count};
        //newCart.push(item,count);
        
        newCart.push(newItem);
        setCart(newCart);

        console.log('Agregado', item, count);
    }

    function getTotalItemCount(){
        let total = 0;
        cart.forEach(ItemCount => {
            total = total + ItemCount.count;
        });
        return total;
    }

    return (
        <>
            <cartContext.Provider value={{cart, setCart, addToCart, getTotalItemCount}}>
                {props.children}
            </cartContext.Provider>
        </>   
    )

}

export {cartContext, CartContextProvider};