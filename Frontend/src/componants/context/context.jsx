import { createContext, useState } from "react";
import all_product from "../../Assets/all_product";


const ShopContext = createContext();

function getDefaultCart(){
        let cart = {}
        for (let index = 0; index < all_product.length+1; index++) {
            cart[index] = 0;
        }
        return cart
    }
    

export function  ShopProvider ({children}){
    const [cartItems,setCartItem] = useState(getDefaultCart());

    function addToCart (itemId){
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))

    }
    function removeFromCart (itemId){
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }



    return (
    <ShopContext.Provider value={{cartItems,addToCart,removeFromCart}}>
        {children}
    </ShopContext.Provider>
    );
}

export default ShopContext;