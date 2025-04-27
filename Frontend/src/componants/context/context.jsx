import { createContext, useState } from "react";


const ShopContext = createContext();


export function  ShopProvider ({children}){
    
    const cart = [];
    // var item = cart.length;
    function AddToCart(item){
        if(cart.includes(item) == true){
            // console.log(cart.length)
        }else{
            cart.unshift(item)
            console.log(cart)
        }
    }
    
    return (<ShopContext.Provider value={{ AddToCart,cart}}>{children}</ShopContext.Provider>);
}

export default ShopContext;